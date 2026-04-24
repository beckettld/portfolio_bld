<script>
	import * as d3 from 'd3';

	export let data = [];

	let width = 500;
	let height = 300;
	let margin = { top: 40, right: 160, bottom: 70, left: 55 };

	$: innerWidth  = width  - margin.left - margin.right;
	$: innerHeight = height - margin.top  - margin.bottom;

	$: xScale = d3.scaleBand()
		.domain(data.map(d => d.label))
		.range([0, innerWidth])
		.padding(0.25);

	$: yScale = d3.scaleLinear()
		.domain([0, d3.max(data, d => d.value) || 1])
		.range([innerHeight, 0]);

	$: colorScale = d3.scaleOrdinal()
		.domain(data.map(d => d.label))
		.range(d3.quantize(d3.interpolateBlues, data.length));

	$: maxBar = d3.greatest(data, d => d.value);

	$: description = `A bar chart showing project counts by year. ${data.map(d => `${d.label}: ${d.value} projects`).join(', ')}.`;

	let selectedIndex = -1;
	let liveText = "";
	let showChart = true;

	function toggleBar(index, event) {
		if (!event.key || event.key === "Enter" || event.key === " ") {
			if (event.key === " ") event.preventDefault();
			selectedIndex = index;
			const d = data[index];
			liveText = `${d.label}: ${d.value} projects selected.`;
		}
	}

	function toggleView() {
		showChart = !showChart;
		liveText = showChart ? "Bar chart view shown." : "Table view shown.";
	}

	let xAxisEl, yAxisEl;

	$: if (xAxisEl && yAxisEl && data.length > 0) {
		d3.select(xAxisEl).call(d3.axisBottom(xScale));
		d3.select(yAxisEl).call(
			d3.axisLeft(yScale)
				.tickFormat(d => Number.isInteger(d) ? d : '')
				.tickValues(d3.range(0, (d3.max(data, d => d.value) || 0) + 1))
		);
	}
</script>

<button
	on:click={toggleView}
	aria-pressed={!showChart}
	aria-label="Toggle between bar chart and table view"
	class="toggle-button">
	{showChart ? 'Show Table' : 'Show Chart'}
</button>

{#if showChart}
<div class="chart-container">
	<svg viewBox="0 0 {width} {height}" role="img" aria-labelledby="bar-title bar-desc">
		<title id="bar-title">Projects by Year</title>
		<desc id="bar-desc">{description}</desc>

		<!-- Chart title -->
		<text
			x={margin.left + innerWidth / 2}
			y={margin.top / 2}
			text-anchor="middle"
			class="chart-title"
		>Projects per Year</text>

		<!-- X axis -->
		<g
			transform="translate({margin.left}, {margin.top + innerHeight})"
			bind:this={xAxisEl}
		/>

		<!-- Y axis -->
		<g
			transform="translate({margin.left}, {margin.top})"
			bind:this={yAxisEl}
		/>

		<!-- Bars -->
		<g transform="translate({margin.left}, {margin.top})">
			{#each data as d, index}
				<rect
					x={xScale(d.label)}
					y={yScale(d.value)}
					width={xScale.bandwidth()}
					height={innerHeight - yScale(d.value)}
					fill={colorScale(d.label)}
					stroke="black"
					opacity={selectedIndex === -1 || selectedIndex === index ? 1 : 0.45}
					tabindex="0"
					role="button"
					aria-label="{d.label}: {d.value} projects"
					on:click={e => toggleBar(index, e)}
					on:keydown={e => toggleBar(index, e)}
				/>
			{/each}

			<!-- Annotation: year with most projects -->
			{#if maxBar}
				<!-- Highlight outline -->
				<rect
					x={xScale(maxBar.label)}
					y={yScale(maxBar.value)}
					width={xScale.bandwidth()}
					height={innerHeight - yScale(maxBar.value)}
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				/>
				<!-- Leader line -->
				<line
					x1={xScale(maxBar.label) + xScale.bandwidth()}
					y1={yScale(maxBar.value) + (innerHeight - yScale(maxBar.value)) / 2}
					x2={xScale(maxBar.label) + xScale.bandwidth() + 30}
					y2={yScale(maxBar.value) + (innerHeight - yScale(maxBar.value)) / 2}
					stroke="currentColor"
					stroke-width="1"
				/>
				<!-- Annotation text -->
				<text
					x={xScale(maxBar.label) + xScale.bandwidth() + 35}
					y={yScale(maxBar.value) + (innerHeight - yScale(maxBar.value)) / 2}
					dominant-baseline="middle"
					class="annotation"
				>Year with most projects</text>
			{/if}

			<!-- X-axis label -->
			<text
				x={innerWidth / 2}
				y={innerHeight + margin.bottom - 10}
				text-anchor="middle"
				class="axis-label"
			>Year</text>

			<!-- Y-axis label -->
			<text
				x={-(innerHeight / 2)}
				y={-margin.left + 15}
				text-anchor="middle"
				transform="rotate(-90)"
				class="axis-label"
			>Number of Projects</text>
		</g>
	</svg>

	<!-- Legend -->
	<ul class="legend">
		{#each data as d}
			<li style="--color: {colorScale(d.label)}">
				<span class="swatch"></span>
				{d.label} <em>({d.value})</em>
			</li>
		{/each}
	</ul>
</div>

{:else}

<table aria-label="Table showing project counts by year" class="data-table">
	<caption>Projects by Year</caption>
	<thead>
		<tr>
			<th id="year-header" scope="col">Year</th>
			<th id="projects-header" scope="col">Projects</th>
		</tr>
	</thead>
	<tbody>
		{#each data as d, i}
			<tr>
				<th id="row-{i}" scope="row">{d.label}</th>
				<td aria-labelledby="row-{i} projects-header">{d.value}</td>
			</tr>
		{/each}
	</tbody>
</table>

{/if}

<p aria-live="polite" class="sr-only">{liveText}</p>

<style>
	svg {
		max-width: 100%;
		height: auto;
		overflow: visible;
	}

	.chart-container {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.chart-title {
		font-size: 1em;
		font-weight: bold;
		fill: currentColor;
	}

	.axis-label {
		font-size: 0.75em;
		fill: currentColor;
	}

	.annotation {
		font-size: 0.7em;
		fill: currentColor;
		font-style: italic;
	}

	.legend {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		flex: 0 0 auto;
		align-self: center;
	}

	.legend li {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.85em;
		white-space: nowrap;
	}

	.swatch {
		display: inline-block;
		width: 12px;
		height: 12px;
		border-radius: 2px;
		background-color: var(--color);
		flex-shrink: 0;
	}

	rect {
		transition: 300ms;
		outline: none;
		stroke: black;
		stroke-width: 1;
	}

	svg:hover rect:not(:hover), .chart-container:focus-within rect:not(:focus-visible) { opacity: 50%; }

	rect:focus-visible {
		stroke: white;
		stroke-width: 2px;
		stroke-dasharray: 4;
	}

	.sr-only {
		position: absolute;
		left: -9999px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

	.toggle-button {
		margin-bottom: 1rem;
		padding: 0.5em 1em;
		cursor: pointer;
	}

	.data-table {
		margin-top: 1rem;
		margin-bottom: 1rem;
		border-collapse: collapse;
		width: 100%;
		max-width: 30em;
	}

	.data-table caption {
		font-weight: bold;
		margin-bottom: 0.5em;
		text-align: left;
	}

	.data-table th,
	.data-table td {
		border: 1px solid currentColor;
		padding: 0.5em;
		text-align: left;
		color: inherit;
	}

	.data-table th {
		background-color: color-mix(in srgb, currentColor 15%, transparent);
	}
</style>
