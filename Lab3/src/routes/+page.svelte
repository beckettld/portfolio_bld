<script>
  import { base } from "$app/paths";
  import projects from "$lib/projects.json";
  import Project from "$lib/Project.svelte";
  import readings from "$lib/reading.json";
  import ReadingItem from "$lib/ReadingItem.svelte";
</script>

<svelte:head>
  <title>Beckett Devoe: Personal site and portfolio</title>
</svelte:head>

<nav>
  <a class="current" href="{base}/">Home</a>
  <a href="{base}/projects">Projects</a>
  <a href="{base}/contact">Contact</a>
  <a href="{base}/resume">Resume</a>
  <a href="https://github.com/beckettld" target="_blank">GitHub</a>
</nav>

<h1>Beckett Lung Devoe</h1>

<div class="profile-container">
  <img src="{base}/assets/images/beckett.jpg" alt="Portrait of Beckett Devoe" />
  <p>
    I am a MIT 6-4 student (AI and decision making) that's graduating in 2026. I
    am interested in doing startups and coding. I also like to go fishing on my
    boat, and being outside.
  </p>
</div>

<h2>Vis &amp; Society 2026</h2>
<p>
  <a href="{base}/A2/report.html">A2: Exploratory Visual Analysis</a> — Transit and
  housing affordability (HTML report with captioned visualizations).
</p>

<h2>Latest Projects ({projects.length} total)</h2>
<div class="projects highlights">
  {#each projects.slice(0, 3) as p}
    <Project data={p} />
  {/each}
</div>

<h2>What I'm Reading</h2>
<div class="reading">
  {#each readings as item}
    <ReadingItem data={item} />
  {/each}
</div>
