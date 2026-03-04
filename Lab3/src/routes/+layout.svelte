<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";

  let pages = [
    { url: "/", title: "Home" },
    { url: "/projects", title: "Projects" },
    { url: "/contact", title: "Contact" },
    { url: "/resume", title: "Resume" },
    { url: "https://github.com/beckettld", title: "GitHub" },
  ];

  let localStorage = globalThis.localStorage ?? {};
  let colorScheme = localStorage.colorScheme ?? "light dark";
  let root = globalThis.document?.documentElement;

  $: root?.style.setProperty("color-scheme", colorScheme);
  $: localStorage.colorScheme = colorScheme;
</script>

<label class="color-scheme-switch">
  Theme:
  <select bind:value={colorScheme}>
    <option value="light dark">Automatic</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
</label>

<nav>
  {#each pages as p}
    <a
      href={p.url.startsWith("http") ? p.url : base + p.url}
      class:current={p.url === "/"
        ? $page.url.pathname === base + "/" || $page.url.pathname === base
        : $page.url.pathname.startsWith(base + p.url)}
      target={p.url.startsWith("http") ? "_blank" : null}
    >
      {p.title}
    </a>
  {/each}
</nav>

<slot />

<style>
  nav {
    --border-color: oklch(50% 10% 200 / 40%);
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 60px;
    padding: 20px 0;
    border-bottom: 2px solid var(--border-color);
  }

  nav a {
    flex: 1;
    color: inherit;
    text-decoration: none;
    text-align: center;
    font-weight: 500;
    font-size: 15px;
    padding: 0.5em;
    transition: all 0.2s ease;
  }

  nav a.current {
    border-bottom: 0.4em solid var(--border-color);
    padding-bottom: calc(0.5em - 0.4em);
    color: var(--color-accent);
  }

  nav a:hover {
    color: var(--color-accent);
    border-bottom: 0.4em solid var(--color-accent);
    padding-bottom: calc(0.5em - 0.4em);
    background-color: color-mix(in oklch, var(--color-accent), canvas 85%);
  }

  nav a.current:hover {
    border-bottom-color: var(--color-accent);
  }

  .color-scheme-switch {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: inline-flex;
    gap: 4px;
    align-items: center;
    font-size: 80%;
  }

  .color-scheme-switch select {
    font-family: inherit;
    font-size: inherit;
  }
</style>
