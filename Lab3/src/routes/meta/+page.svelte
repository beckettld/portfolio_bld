<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import BarHorizontal from '$lib/BarHorizontal.svelte';

	let locData = [];
	let barData = [];

	onMount(async () => {
		locData = await d3.csv(`${base}/loc.csv`, row => ({
			...row,
			line: Number(row.line),
			length: Number(row.length),
			depth: Number(row.depth)
		}));

		barData = d3.rollups(locData, v => v.length, d => d.type)
			.map(([type, count]) => ({ label: type, value: count }))
			.sort((a, b) => b.value - a.value);
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

{#if barData.length > 0}
	<BarHorizontal data={barData} />
{:else}
	<p><em>Loading codebase stats…</em></p>
{/if}
