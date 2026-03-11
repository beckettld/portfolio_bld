<script>
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import projects from "$lib/projects.json";
  import Project from "$lib/Project.svelte";
  import readings from "$lib/reading.json";
  import ReadingItem from "$lib/ReadingItem.svelte";

  let githubData = null;
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      const response = await fetch("https://api.github.com/users/beckettld");
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      githubData = await response.json();
    } catch (err) {
      error = err;
    }
    loading = false;
  });
</script>

<svelte:head>
  <title>Beckett Devoe: Personal site and portfolio</title>
</svelte:head>

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
<p>
  <a href="{base}/A3/report.html">A3: Visualization Critique &amp; Redesign</a> — COVID-19 spiral chart critique and grid redesign (sketches, final viz, writeup).
</p>
<p>
  <a href="{base}/A4/report.html">A4: Persuasive or Deceptive Visualization?</a> — NYPD complaint accountability analysis with contrasting persuasive and earnest visualizations.
</p>

{#if loading}
  <p>Loading...</p>
{:else if error}
  <p>Something went wrong: {error.message}</p>
{:else}
  <section class="github-stats">
    <h2>My GitHub Stats</h2>
    <dl>
      <dt>Followers</dt>
      <dd>{githubData.followers}</dd>
      <dt>Following</dt>
      <dd>{githubData.following}</dd>
      <dt>Public Repositories</dt>
      <dd>{githubData.public_repos}</dd>
      <dt>Public Gists</dt>
      <dd>{githubData.public_gists}</dd>
    </dl>
  </section>
{/if}

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

<style>
  .github-stats {
    margin: 2rem 0;
  }
  .github-stats dl {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem 1rem;
  }
  .github-stats dt {
    grid-row: 1;
    font-weight: 600;
    color: var(--color-accent);
  }
  .github-stats dd {
    grid-row: 2;
    margin: 0;
  }
</style>
