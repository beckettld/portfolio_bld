# Lab 4: Svelte II (Layouts & Reactivity)

**Course:** Vis & Society 2026 — Theme: Housing Affordability

This README lays out every requirement for **100% Lab 4 check-off**. Complete every item in the rubric and follow the implementation details below.

---

## Check-off & submission

- **Asynchronous check-off:** Submit via the course form. TAs review and post your grade.
- **Not one-and-done:** If you don’t pass, you can fix issues and resubmit or get help in office hours until the deadline.

---

## Lab 4 rubric — requirements for full credit

These are the **graded criteria**. Every one must be satisfied.

| # | Requirement | Status |
|---|-------------|--------|
| 1 | **Nav bar is implemented in a layout component** | ☐ |
| 2 | **Nav bar highlights the current page** | ☐ |
| 3 | **Github link in the nav bar opens in a new tab** | ☐ |
| 4 | **Nav bar does not throw 404 errors on first load** | ☐ |
| 5 | **Clicking on the theme switcher changes the color scheme of the site** | ☐ |
| 6 | **Theme switcher preferences are preserved on page refresh and tab close/reopen** | ☐ |

---

## Step 1: Layout and navigation (requirements 1–4)

### 1.1 Layout component

- **File:** `src/routes/+layout.svelte`
- **Content:** Include `<slot />` so page content renders inside the layout. Nav bar and theme switcher go **above** `<slot />`.

### 1.2 Nav bar in the layout

- **Single source of truth:** The `<nav>` lives only in `+layout.svelte`. Remove the nav bar from every other page (About, Projects, Resume, Contact).
- **Links:** Define a `pages` array and build the nav with `{#each}`.

### 1.3 No 404s on first load (requirement 4)

- **Use absolute URLs with base path.**
- **In `+layout.svelte` script:**
  - `import { base } from "$app/paths";`
  - Define:
    ```js
    let pages = [
      { url: "/", title: "About" },
      { url: "/projects", title: "Projects" },
      { url: "/resume", title: "Resume" },
      { url: "/contact", title: "Contact" },
      { url: "https://github.com/YOUR_USERNAME", title: "Github" },
    ];
    ```
- **href rule:**  
  - Internal links: `href={base + p.url}`  
  - External links (e.g. GitHub): **do not** prepend `base`. Use a conditional so that `href` is `p.url` when `p.url.startsWith("http")`, otherwise `base + p.url`.  
  Example: `href={p.url.startsWith("http") ? p.url : base + p.url}`  
  This prevents the GitHub link from becoming `YourUsername.github.io/your-repo/https://github.com/...` on deploy.

### 1.4 Github opens in new tab (requirement 3)

- **On the `<a>` tag:**  
  `target={p.url.startsWith("http") ? "_blank" : null}`  
  So only external (http/https) links open in a new tab.

### 1.5 Current page highlighting (requirement 2)

- **Import:** `import { page } from "$app/stores";`
- **Current link:** Use the `class:current` directive so the active nav link has the `current` class.
- **Logic:**
  - **Home (`/`):** Use exact match: `$page.url.pathname === (base + "/")`.  
    (Using `startsWith("/")` would make “About” always active.)
  - **Other pages:** Use `$page.url.pathname.startsWith(base + p.url)` so subroutes (e.g. `/projects/foo`) still highlight the right nav item.

Example:

```svelte
class:current={
  p.url === "/"
    ? $page.url.pathname === (base + "/")
    : $page.url.pathname.startsWith(base + p.url)
}
```

### 1.6 Nav bar CSS in the layout

- Move **all CSS that only applies to the nav bar** from global `styles.css` into a `<style>` block at the bottom of `+layout.svelte`.

---

## Step 2: Dark mode / theme switcher (requirements 5–6)

### 2.1 color-scheme and dark-mode look

- In the layout’s `<style>`, use `color-scheme` (e.g. on `:root` or where you set the theme) so the site supports light/dark.  
  For a **theme switcher**, you will set `color-scheme` on `<html>` from JavaScript (see below).
- **Border color:** Use a CSS variable that works in both modes, e.g. semi-transparent:  
  `--border-color: oklch(50% 10% 200 / 40%);`  
  Use `var(--border-color)` for nav border and `.current` border so it’s not harsh in dark mode.

### 2.2 Theme switcher UI

- **Location:** In `+layout.svelte`, above the nav (e.g. top-right via CSS).
- **Control:** A `<label class="color-scheme-switch">` containing:
  - Label text, e.g. “Theme:”
  - A `<select>` with:
    - `<option value="light dark">Automatic</option>`
    - `<option value="light">Light</option>`
    - `<option value="dark">Dark</option>`

### 2.3 Position of the switcher

- **CSS:** `position: absolute` on `.color-scheme-switch`; set `top` and `right` (e.g. `1rem`).
- **Layout:** `display: inline-flex`, `gap` (e.g. `4px`), and optionally `font-size: 80%` so it doesn’t dominate. Ensure `select` (and other form controls) inherit `font-family` if you have a global rule.

### 2.4 Bind theme to a variable (requirement 5 — switcher changes the site)

- **Script:**  
  `let colorScheme = "light dark";`
- **Select:**  
  `<select bind:value={colorScheme}>`  
  so the variable stays in sync with the dropdown.

### 2.5 Apply theme to `<html>`

- **Script:**  
  `let root = globalThis.document?.documentElement;`  
  (Optional chaining so it doesn’t run in Node.)
- **Reactive application of theme:**  
  `$: root?.style.setProperty("color-scheme", colorScheme);`  
  So whenever `colorScheme` changes, the site’s color scheme updates. This satisfies “clicking on the theme switcher changes the color scheme.”

### 2.6 Read theme from localStorage (requirement 6 — persist on refresh/close)

- **Browser-only:** `localStorage` is not defined in Node. Use:  
  `let localStorage = globalThis.localStorage ?? {};`  
  (before any use of `localStorage`).
- **On load:**  
  If `localStorage.colorScheme` exists, set `colorScheme = localStorage.colorScheme` (e.g. after declaring `colorScheme`).

### 2.7 Save theme to localStorage (requirement 6 — persist)

- **Reactive save:**  
  `$: localStorage.colorScheme = colorScheme;`  
  So every time the user changes the theme, it’s stored. After refresh or closing/reopening the tab, the saved value is applied in 2.6.

**Verification:** DevTools → Application → Storage → Local Storage (or Console: `localStorage`) should show `colorScheme` updating when you change the dropdown.

---

## Quick verification checklist

Before submitting, confirm:

1. **Layout:** Only one `<nav>` in the whole app, and it’s in `src/routes/+layout.svelte`.
2. **Links:** Internal links use `base + p.url`; external (http/https) use `p.url` only and `target="_blank"`.
3. **Current page:** The correct nav item has the `current` class on every route (including home and subroutes).
4. **No 404s:** Click through all nav links on a cold load (and after deploy) — no 404s.
5. **Theme:** Changing the dropdown changes the page theme immediately.
6. **Persistence:** Set theme to Light or Dark, refresh (or close and reopen tab); same theme is applied.
7. **Deploy:** After deploying to GitHub Pages, the GitHub link goes to your profile, not a 404.

---

## File and code summary

| Item | Location / detail |
|------|-------------------|
| Layout + nav + theme | `src/routes/+layout.svelte` |
| Base path | `import { base } from "$app/paths"` |
| Current route | `import { page } from "$app/stores"` → `$page.url.pathname` |
| External link href | `p.url.startsWith("http") ? p.url : base + p.url` |
| External link new tab | `target={p.url.startsWith("http") ? "_blank" : null}` |
| Current class | `class:current={ p.url === "/" ? $page.url.pathname === (base + "/") : $page.url.pathname.startsWith(base + p.url) }` |
| Theme variable | `let colorScheme = "light dark"` |
| Theme bind | `<select bind:value={colorScheme}>` |
| Apply to document | `let root = globalThis.document?.documentElement` and `$: root?.style.setProperty("color-scheme", colorScheme)` |
| localStorage (SSR-safe) | `let localStorage = globalThis.localStorage ?? {}` |
| Load theme | `if (localStorage.colorScheme) colorScheme = localStorage.colorScheme` |
| Save theme | `$: localStorage.colorScheme = colorScheme` |

---

## Optional steps (not required for 100%)

- **Step 1.7:** Import global CSS from the layout.
- **Step 2.1 (optional):** Fix hover background in dark mode with `color-mix(in oklch, var(--color-accent), canvas 85%)`.
- **Step 2.8:** Prevent FOUC (e.g. set `color-scheme` in `app.html` from a small inline script using localStorage).
- **Step 3:** Better contact form with `on:submit`, URL concatenation, etc.

Once all six rubric items are met and the verification checklist passes, you’re set for full credit on Lab 4.
