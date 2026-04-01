<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import BarHorizontal from '$lib/BarHorizontal.svelte';
	import {
		computePosition,
		autoPlacement,
		offset,
	} from '@floating-ui/dom';

	let locData = [];
	let barData = [];
	let commits = [];
	let clickedCommits = [];

	let hoveredIndex = -1;
	$: hoveredCommit = commits[hoveredIndex] ?? hoveredCommit ?? {};

	let tooltipPosition = {x: 0, y: 0};
	let commitTooltip;

	// SVG dimensions
	let width = 900;
	let height = 400;
	let margin = { top: 20, right: 20, bottom: 40, left: 60 };

	let usableArea = {
		top: margin.top,
		right: width - margin.right,
		bottom: height - margin.bottom,
		left: margin.left
	};
	usableArea.width = usableArea.right - usableArea.left;
	usableArea.height = usableArea.bottom - usableArea.top;

	// Scales
	$: minDate = d3.min(commits, d => d.datetime);
	$: maxDate = d3.max(commits, d => d.datetime);
	$: maxDatePlusOne = maxDate ? d3.timeDay.offset(maxDate, 1) : new Date();

	$: xScale = d3.scaleTime()
		.domain([minDate ?? new Date(), maxDatePlusOne])
		.range([usableArea.left, usableArea.right])
		.nice();

	$: yScale = d3.scaleLinear()
		.domain([0, 24])
		.range([usableArea.bottom, usableArea.top]);

	$: rScale = d3.scaleSqrt()
		.domain(d3.extent(commits, d => d.totalLines) || [0, 1])
		.range([5, 30]);

	// Axes
	let xAxis, yAxis, yAxisGridlines;

	$: {
		if (xAxis && yAxis && yAxisGridlines && commits.length > 0) {
			d3.select(xAxis).call(d3.axisBottom(xScale));
			d3.select(yAxis).call(
				d3.axisLeft(yScale).tickFormat(d => String(d % 24).padStart(2, "0") + ":00")
			);
			d3.select(yAxisGridlines).call(
				d3.axisLeft(yScale)
					.tickFormat("")
					.tickSize(-usableArea.width)
			);
		}
	}

	// Filtered bar data
	$: {
		if (locData.length > 0) {
			let selectedLines = clickedCommits.length > 0
				? clickedCommits.flatMap(c => c.lines)
				: locData;

			let lineCounts = d3.rollup(selectedLines, v => v.length, d => d.type);

			let allLanguages = Array.from(new Set(locData.map(d => d.type)));

			barData = allLanguages
				.map(lang => ({ label: lang, value: lineCounts.get(lang) || 0 }))
				.sort((a, b) => b.value - a.value);
		}
	}

	$: barTitle = clickedCommits.length > 0
		? `Language Breakdown (${clickedCommits.length} selected commit${clickedCommits.length > 1 ? 's' : ''})`
		: "Website Language Breakdown";

	async function dotInteraction(index, evt) {
		let hoveredDot = evt.target;
		if (evt.type === "mouseenter") {
			hoveredIndex = index;
			tooltipPosition = await computePosition(hoveredDot, commitTooltip, {
				strategy: "fixed",
				middleware: [
					offset(5),
					autoPlacement()
				],
			});
		}
		else if (evt.type === "mouseleave") {
			hoveredIndex = -1;
		}
		else if (evt.type === "click") {
			let commit = commits[index];
			if (!clickedCommits.includes(commit)) {
				clickedCommits = [...clickedCommits, commit];
			}
			else {
				clickedCommits = clickedCommits.filter(c => c !== commit);
			}
		}
	}

	onMount(async () => {
		locData = await d3.csv(`${base}/loc.csv`, row => ({
			...row,
			line: Number(row.line),
			depth: Number(row.depth),
			length: Number(row.length),
			date: new Date(row.date + "T00:00" + row.timezone),
			datetime: new Date(row.datetime)
		}));

		commits = d3.groups(locData, d => d.commit).map(([commit, lines]) => {
			let first = lines[0];
			let {author, date, time, timezone, datetime} = first;
			let ret = {
				id: commit,
				url: "https://github.com/vis-society/lab-7/commit/" + commit,
				author, date, time, timezone, datetime,
				hourFrac: datetime.getHours() + datetime.getMinutes() / 60,
				totalLines: lines.length,
				lines: lines
			};
			return ret;
		});

		commits = d3.sort(commits, d => -d.totalLines);
	});
</script>

<svelte:head>
	<title>Meta - Beckett Devoe</title>
</svelte:head>

<h1>Codebase Meta-Analysis</h1>
<p>
	Stats about the code powering this portfolio — lines of code per language, file counts, and more.
	Generated from the live source using <a href="https://github.com/nicolo-ribaudo/elocuent" target="_blank">elocuent</a>.
</p>

{#if commits.length > 0}
<h2>Commits by Time of Day</h2>
<svg viewBox="0 0 {width} {height}">
	<g class="gridlines" transform="translate({usableArea.left}, 0)" bind:this={yAxisGridlines} />
	<g transform="translate(0, {usableArea.bottom})" bind:this={xAxis} />
	<g transform="translate({usableArea.left}, 0)" bind:this={yAxis} />
	<g class="dots">
		{#each commits as commit, index}
			<circle
				cx={ xScale(commit.datetime) }
				cy={ yScale(commit.hourFrac) }
				r={ rScale(commit.totalLines) }
				fill="steelblue"
				fill-opacity="0.6"
				class:selected={ clickedCommits.includes(commit) }
				on:mouseenter={evt => dotInteraction(index, evt)}
				on:mouseleave={evt => dotInteraction(index, evt)}
				on:click={evt => dotInteraction(index, evt)}
			/>
		{/each}
	</g>
</svg>

<dl class="info tooltip" hidden={hoveredIndex === -1} bind:this={commitTooltip} style="top: {tooltipPosition.y}px; left: {tooltipPosition.x}px">
	<dt>Commit</dt>
	<dd><a href="{ hoveredCommit.url }" target="_blank">{ hoveredCommit.id }</a></dd>

	<dt>Date</dt>
	<dd>{ hoveredCommit.datetime?.toLocaleString("en", {dateStyle: "full"}) }</dd>

	<dt>Time</dt>
	<dd>{ hoveredCommit.time }</dd>

	<dt>Author</dt>
	<dd>{ hoveredCommit.author }</dd>

	<dt>Lines edited</dt>
	<dd>{ hoveredCommit.totalLines }</dd>
</dl>
{:else}
	<p><em>Loading commit data...</em></p>
{/if}

{#if barData.length > 0}
	<BarHorizontal data={barData} title={barTitle} />
{:else}
	<p><em>Loading codebase stats...</em></p>
{/if}

<style>
	svg {
		max-width: 100%;
		height: auto;
		overflow: visible;
	}

	circle {
		cursor: pointer;
		transition: 200ms;
		&:hover {
			fill: darkgreen;
		}
	}

	.selected {
		fill: var(--color-accent, orangered);
	}

	.gridlines {
		stroke-opacity: .2;
	}

	dl.info {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.25em 0.75em;
		margin: 0;
		transition-duration: 500ms;
		transition-property: opacity, visibility;

		&[hidden]:not(:hover, :focus-within) {
			opacity: 0;
			visibility: hidden;
		}
	}

	dl.info dt {
		font-weight: bold;
		color: #666;
		text-transform: uppercase;
		font-size: 0.8em;
	}

	dl.info dd {
		margin: 0;
	}

	.tooltip {
		position: fixed;
		background-color: oklch(100% 0% 0 / 85%);
		box-shadow: 0 2px 12px rgba(0,0,0,0.15);
		border-radius: 8px;
		backdrop-filter: blur(8px);
		padding: 0.75em 1em;
		z-index: 10;
		pointer-events: none;
		color: black;
	}

	h2 {
		margin-top: 1.5em;
	}
</style>
