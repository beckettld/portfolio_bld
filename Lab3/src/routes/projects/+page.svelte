<script>
	import { base } from '$app/paths';
	import projects from '$lib/projects.json';
	import Project from '$lib/Project.svelte';
</script>

<svelte:head>
	<title>Projects - Beckett Devoe</title>
</svelte:head>

<nav>
	<a href="{base}/">Home</a>
	<a class="current" href="{base}/projects">Projects</a>
	<a href="{base}/contact">Contact</a>
	<a href="{base}/resume">Resume</a>
	<a href="https://github.com/beckettld" target="_blank">GitHub</a>
</nav>

<h1>Projects ({projects.length})</h1>

<div class="projects">
	{#each projects as p}
		<Project data={p} />
	{/each}
</div>
