<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Resume - Beckett Devoe</title>
</svelte:head>

<nav>
	<a href="{base}/">Home</a>
	<a href="{base}/projects">Projects</a>
	<a href="{base}/contact">Contact</a>
	<a class="current" href="{base}/resume">Resume</a>
	<a href="https://github.com/beckettld" target="_blank">GitHub</a>
</nav>

<h1>Resume</h1>

<iframe
	src="{base}/assets/resume.pdf"
	width="100%"
	height="800px"
	style="border: none; margin-top: 30px;"
	title="Beckett Devoe Resume"
>
	<p>
		Your browser does not support PDFs.
		<a href="{base}/assets/resume.pdf" target="_blank">Download the resume PDF</a> instead.
	</p>
</iframe>
