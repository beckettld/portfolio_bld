<script>
  import { base } from "$app/paths";
  import Scrolly from "svelte-scrolly";
  import projects from "$lib/projects.json";

  let scrollyProgress = 0;
  function imageSrc(project) {
    if (!project?.image) return "";
    return project.image.startsWith("http") ? project.image : (base ? base + "/" + project.image : project.image);
  }
  let sorted_projects = [...projects].sort((a, b) => a.year - b.year);
  let progressPerProject = 100 / sorted_projects.length;

  $: activeProjectIdx = Math.min(
    sorted_projects.length - 1,
    Math.floor(scrollyProgress / progressPerProject)
  );
</script>

<div class="scrolly-wrapper">
  <Scrolly bind:progress={scrollyProgress}>
    {#each sorted_projects as project}
      <section class="step">
        <div class="step-content">
          <h3>{project.title}</h3>
          <p>{project.story}</p>
        </div>
      </section>
    {/each}
    <svelte:fragment slot="viz">
      <div class="project-detail">
        <h3>{sorted_projects[activeProjectIdx]?.year}</h3>
        <img
          src={imageSrc(sorted_projects[activeProjectIdx])}
          alt={sorted_projects[activeProjectIdx]?.title}
        />
      </div>
    </svelte:fragment>
  </Scrolly>
</div>

<style>
  .scrolly-wrapper {
    width: min(1000px, 90vw);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .step {
    min-height: 80vh;
    padding: 2rem;
    background: none;
    border: none;
    margin-bottom: 0;
  }

  .step-content {
    border-left: 4px solid var(--color-accent);
    padding: 1.5rem 2rem;
  }

  .step-content h3 {
    margin: 0 0 0.75rem 0;
    font-size: 1.25rem;
  }

  .step-content p {
    margin: 0;
    line-height: 1.6;
  }

  .project-detail {
    padding: 2rem;
    width: 100%;
  }

  .project-detail h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    color: var(--color-accent);
  }

  .project-detail img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
</style>
