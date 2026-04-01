<script>
	import * as d3 from 'd3';

	export let data = [];
	export let title = "";

	let width = 500;
	let height = 250;
	let margin = { top: 30, right: 120, bottom: 50, left: 70 };

	$: innerWidth  = width  - margin.left - margin.right;
	$: innerHeight = height - margin.top  - margin.bottom;

	// For horizontal bar chart: x = quantitative (linear), y = categorical (band)
	$: xScale = d3.scaleLinear()
		.domain([0, d3.max(data, d => d.value) || 1])
		.range([0, innerWidth]);

	$: yScale = d3.scaleBand()
		.domain(data.map(d => d.label))
		.range([0, innerHeight])
		.padding(0.25);

	$: colorScale = d3.scaleOrdinal(d3.schemeTableau10)
		.domain(data.map(d => d.label));

	$: maxBar = d3.greatest(data, d => d.value);

	$: maxTicks = Math.min(d3.max(data, d => d.value) || 10, 10);

	let xAxisEl, yAxisEl;

	$: if (xAxisEl && yAxisEl && data.length > 0) {
		d3.select(xAxisEl).call(
			d3.axisBottom(xScale)
				.ticks(maxTicks)
				.tickFormat(d => Number.isInteger(d) ? d : '')
		);
		d3.select(yAxisEl).call(d3.axisLeft(yScale));
	}
</script>

<div class="chart-container">
	<svg viewBox="0 0 {width} {height}">
		<!-- Chart title -->
		<text
			x={margin.left + innerWidth / 2}
			y={margin.top / 2 + 4}
			text-anchor="middle"
			class="chart-title"
		>{title || "Lines of Code by Language"}</text>

		<!-- X axis (bottom) -->
		<g
			transform="translate({margin.left}, {margin.top + innerHeight})"
			bind:this={xAxisEl}
		/>

		<!-- Y axis (left) -->
		<g
			transform="translate({margin.left}, {margin.top})"
			bind:this={yAxisEl}
		/>

		<!-- Bars and annotation -->
		<g transform="translate({margin.left}, {margin.top})">
			{#each data as d}
				<rect
					x={0}
					y={yScale(d.label)}
					width={xScale(d.value)}
					height={yScale.bandwidth()}
					fill={colorScale(d.label)}
				/>
			{/each}

			<!-- Annotation: language with most lines -->
			{#if maxBar}
				<!-- Highlight outline -->
				<rect
					x={0}
					y={yScale(maxBar.label)}
					width={xScale(maxBar.value)}
					height={yScale.bandwidth()}
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				/>
				<!-- Annotation text -->
				<text
					x={xScale(maxBar.value) + 8}
					y={yScale(maxBar.label) + yScale.bandwidth() / 2}
					dominant-baseline="middle"
					text-anchor="start"
					class="annotation"
				>Most lines</text>
			{/if}

			<!-- X-axis label -->
			<text
				x={innerWidth / 2}
				y={innerHeight + margin.bottom - 10}
				text-anchor="middle"
				class="axis-label"
			>Lines of Code</text>

			<!-- Y-axis label -->
			<text
				x={-(innerHeight / 2)}
				y={-margin.left + 15}
				text-anchor="middle"
				transform="rotate(-90)"
				class="axis-label"
			>Language</text>
		</g>
	</svg>
</div>

<style>
	svg {
		max-width: 100%;
		height: auto;
		overflow: visible;
	}

	.chart-container {
		margin-bottom: 1.5rem;
	}

	.chart-title {
		font-size: 0.85em;
		font-weight: bold;
		fill: currentColor;
	}

	.axis-label {
		font-size: 0.65em;
		fill: currentColor;
	}

	.annotation {
		font-size: 0.6em;
		fill: currentColor;
		font-style: italic;
	}
</style>
