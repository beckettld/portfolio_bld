<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import projects from '$lib/projects.json';
	import Project from '$lib/Project.svelte';
	import ProjectNarrative from '$lib/ProjectNarrative.svelte';
	import Bar from '$lib/Bar.svelte';

	let years = projects.map((proj) => proj.year);
	let range = Math.max(...years) - Math.min(...years);

	// Step 1: Data wrangling exercise with predefined data
	let rawData = [];
	let wrangled = [];
	let wrangledPercent = [];

	onMount(async () => {
		rawData = await d3.json(`${base}/lab6_example.json`);

		wrangled = d3.rollups(
			rawData,
			v => d3.sum(v, d => d.lines),
			d => d.language
		);

		const total = d3.sum(rawData, d => d.lines);
		wrangledPercent = d3.rollups(
			rawData,
			v => +(d3.sum(v, d => d.lines) / total * 100).toFixed(1),
			d => d.language
		);
	});

	// Step 3: Real project data — projects per year
	$: barData = d3.rollups(projects, v => v.length, d => d.year)
		.map(([year, count]) => ({ label: String(year), value: count }))
		.sort((a, b) => a.label.localeCompare(b.label));
</script>

<svelte:head>
	<title>Projects - Beckett Devoe</title>
</svelte:head>

<h1>{projects.length} Projects over {range} Years</h1>

<!-- Step 2/3: Bar chart of projects per year -->
<Bar data={barData} />

<p>Scroll down to see a timeline of my projects and how they've contributed to my professional and personal life.</p>

<ProjectNarrative />

<p class="outro">Thanks for scrolling through my project story! Feel free to explore all of the projects at your leisure below.</p>

<div class="projects">
	{#each projects as p}
		<Project data={p} />
	{/each}
</div>

<!-- Step 1: Data wrangling results (exercise) -->
<section class="wrangling-exercise">
	<h2>Step 1 — Data Wrangling Exercise</h2>
	<div class="wrangling-results">
		<div>
			<h3>Lines per language (totals)</h3>
			<pre>{JSON.stringify(wrangled, null, 2)}</pre>
		</div>
		<div>
			<h3>Lines per language (% of total)</h3>
			<pre>{JSON.stringify(wrangledPercent, null, 2)}</pre>
		</div>
	</div>
</section>

<style>
	.outro {
		margin-top: 2rem;
		margin-bottom: 3rem;
	}

	.wrangling-exercise {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid oklch(70% 5% 200 / 30%);
	}

	.wrangling-results {
		display: flex;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.wrangling-results > div {
		flex: 1;
		min-width: 200px;
	}

	pre {
		background: oklch(95% 2% 200 / 40%);
		padding: 1rem;
		border-radius: 6px;
		font-size: 0.85em;
		overflow-x: auto;
	}
</style>
