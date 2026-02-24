# Lab 1: Introduction to the Web Platform

## Overview
This lab covers creating a personal portfolio website from scratch and publishing it on the Web using GitHub Pages.

## Lab 1 Rubric - Requirements Checklist

### Repository + Publishing
- [x] A GitHub repository exists for the project (e.g. portfolio) ✅ **DONE** - Repository `portfoliobld` exists
- [ ] The repository is published to GitHub and the site loads at `https://YOUR_USERNAME.github.io/YOUR_REPO/` ⚠️ **TODO** - Need to enable GitHub Pages
- [ ] Changes you made appear on the live site (i.e., you committed and pushed) ⚠️ **TODO** - Need to commit and push all changes

### Required Site Structure
Your repository must include the following pages:
- [x] `index.html` (home) in the repository root ✅ **DONE**
- [x] `projects/index.html` ✅ **DONE**
- [x] `contact/index.html` ✅ **DONE**
- [x] A resume page (e.g. `resume/index.html` or `cv/index.html`) ✅ **DONE** - `resume/index.html` exists

Each page must have:
- [x] A meaningful `<title>` in the `<head>` ✅ **DONE** - All pages have titles
- [x] A top-level `<h1>` that matches the page content (Name/Home, Projects, Contact, Resume) ✅ **DONE** - All pages have proper h1 tags

### Navigation + Relative URLs
- [x] Every page includes a navigation menu ✅ **DONE**
- [x] The navigation includes links to all pages, including the current page ✅ **DONE**
- [x] Navigation works correctly from every page ✅ **DONE** - Relative URLs are correct
- [x] The navigation includes a link to your GitHub profile that opens in a new tab ✅ **DONE** - GitHub link with `target="_blank"`

### Home Page Content + Image
The home page includes:
- [x] Your name ✅ **DONE** - "Beckett Devoe"
- [x] A short bio/description ✅ **DONE** - MIT 6-4 student bio
- [x] An image with alt text ✅ **DONE** - Image tag with alt text (✅ **FIXED** - Now references `beckett.jpg`)

### CSS File + Linking
- [x] A `style.css` file exists in the repository root ✅ **DONE**
- [x] Every page links to the stylesheet ✅ **DONE** - All pages have `<link>` tags

### Contact Form
- [x] The Contact page includes a working contact form ✅ **DONE**
- [x] The form has `mailto:` + GET set correctly ✅ **DONE** - `action="mailto:bld@mit.edu" method="GET"`
- [x] The form includes fields for email, subject, and message, plus a Send button ✅ **DONE**
- [x] Submitting the form opens a new email draft (or generates a mailto URL) ✅ **DONE** - Form configured correctly

### Resume Page: Semantic Structure
Resume content is organized with semantic HTML:
- [x] Uses at least 2 `<section>` elements (e.g., Education, Experience, Skills) ✅ **DONE** - Has Education, Experience, Skills, Resume PDF sections
- [x] Uses headings/lists appropriately (not everything is plain paragraphs) ✅ **DONE** - Proper structure with h2, h3, ul, li
- [x] Uses `<time>` for at least 2 dates (where applicable) ✅ **DONE** - Has 2 time elements for dates

## What's Left To Do

### Immediate Tasks:
1. ✅ **Fix image filename**: ✅ **FIXED** - Updated to use `beckett.jpg`
2. ⚠️ **Add resume PDF**: Place your resume PDF at `assets/resume.pdf` (currently the link exists but file is missing)
3. ⚠️ **Commit and push**: Commit all your changes and push to GitHub
4. ⚠️ **Enable GitHub Pages**: 
   - Go to your GitHub repository settings
   - Navigate to Pages section
   - Select "main" branch
   - Enable HTTPS
   - Your site will be at `https://beckettld.github.io/portfoliobld/`
5. ⚠️ **Test everything**: Verify all pages work correctly on the live site

## Step-by-Step Instructions

### Step 1: Setup
- Create a new repository with GitHub Desktop called `portfolio` (or your preferred name)
- Publish it to GitHub
- Open it in Visual Studio Code

### Step 2: Create a basic HTML page
- Create `index.html` in the root
- Type `!` and hit Tab to expand Emmet snippet
- Change the page title to "YOUR_NAME: Personal site and portfolio"
- Add an `<h1>` with your name
- Add a `<p>` with a short description
- Save and test with Live Server
- Commit and push to GitHub

### Step 3: Publish your site on GitHub Pages
- Open repository on GitHub
- Go to Settings → Pages
- Select "main" as the branch and click Save
- Check "Enforce HTTPS"
- Wait a few seconds, then visit your site at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Step 4: Add a photo
- Create an `images` folder in the root
- Save a photo in the `images` folder
- Add an `<img>` element with:
  - `src` attribute pointing to your image
  - `alt` attribute with a description

### Step 5: Add a CSS stylesheet
- Create `style.css` in the root
- Add basic CSS:
  ```css
  body {
    font: 100%/1.5 system-ui;
  }
  ```
- Link the stylesheet to your HTML via `<link>` in the `<head>`

### Step 6: Add more pages and a navigation menu
- Create `projects/index.html` and `contact/index.html`
- Set their title and add an `<h1>` with the page title in each
- Add a navigation menu (`<nav>`) with links (`<a>`) to every page
- Use relative URLs for links
- Link your stylesheet to the new pages
- Add a link to your GitHub profile with `target="_blank"`

### Step 7: Basic contact form
Create a `<form>` element in `contact/index.html`:
- `action="mailto:YOUR_EMAIL_ADDRESS"`
- `method="GET"`
- Fields:
  - Email: `<input type="email" name="email">` wrapped in `<label>`
  - Subject: `<input name="subject">` wrapped in `<label>`
  - Message: `<textarea name="body">` wrapped in `<label>`
- Submit button: `<button>Send</button>`

**Note:** For privacy, you can use your GitHub noreply email from https://github.com/settings/emails

### Step 8: Adding a CV/resume page
- Create `resume/index.html` or `cv/index.html`
- Link to it from the navigation menu
- Structure with semantic HTML:
  - Use `<section>` for different sections (Education, Experience, Skills, etc.)
  - Use `<article>` for independent units of content
  - Use `<time>` for dates (at least 2)
  - Use headings, paragraphs, and lists appropriately
  - Optionally use `<header>` for section headers
  - Optionally use `<img>` for logos/icons

## HTML Elements Reference

### Semantic Elements
- `<section>` - Units of content (like table of contents items)
- `<article>` - Independent, self-contained units
- `<header>` - Section or article headers
- `<nav>` - Navigation menu
- `<time>` - Dates and times

### Form Elements
- `<form>` - Form container
- `<input>` - Single-line text fields
- `<textarea>` - Multi-line text fields
- `<label>` - Field labels
- `<button>` - Submit button

## Important Notes

- **Relative URLs**: Use relative URLs for internal links so they work regardless of domain
- **index.html**: Special filename that serves as default when visiting a directory
- **Testing**: Always test locally with Live Server before committing and pushing
- **Semantic HTML**: HTML describes content, not presentation. Use CSS for styling.

## Resources

### Tools
- HTML Validator: Catch HTML mistakes early
- CodePen: Quickly experiment with HTML, CSS, JS
- Live Server: VS Code extension for local development

### Cheatsheets
- HTML Cheatsheet by MDN
- HTML Cheatsheet by Code Academy

### Tutorials
- Getting started with the Web
- MDN: Structuring the web with HTML
- Codeacademy: Learn HTML

## Check-off
You need to come to TA Office Hours to get checked off for this lab, OR submit your work asynchronously by filling out the form.

**Note:** If you submit asynchronously and have an incorrect or incomplete part, you will not receive any credit (no partial credit). You may not resubmit nor ask for a synchronous check off for the same lab.

---

# Lab 2: Styling with CSS

## Overview
Lab 2 focuses on learning CSS fundamentals to style and improve the visual design of the portfolio website created in Lab 1. This lab covers CSS selectors, units, layout techniques (Flexbox and Grid), typography, colors, and responsive design.

## Learning Objectives
- Understand core CSS concepts (selectors, properties, values)
- Learn to use CSS selectors to target specific elements
- Understand the difference between absolute and relative units
- Customize design aspects: fonts, colors, and layout
- Handle CSS specificity and conflicting declarations
- Implement responsive layouts using Flexbox and CSS Grid

## Lab 2 Rubric - Requirements Checklist

### Body Layout
- [ ] Content width adjusts properly to smaller viewport sizes
- [ ] Content remains centered
- [ ] Content does not touch the edges of the viewport

### Navigation Bar Styling
- [ ] Current page is highlighted with:
  - A distinct color
  - A thicker underline or border
- [ ] Hover effects on other sections:
  - Color changes on hover
  - Underline or border thickness changes on hover

### Contact Form
- [ ] Grid-based layout implemented:
  - Email, subject, and message fields in one column
  - Corresponding input boxes aligned in another column
  - Proper spacing between form controls
- [ ] Send button functions correctly and generates a URL to send an email

### Projects Page
- [ ] Contains dummy content for population
- [ ] Adjusts dynamically to viewport size
- [ ] Images do not become excessively wide
- [ ] Grid-based layout for project display
- [ ] Projects are aligned horizontally
- [ ] Different heading levels (h1 vs h2) have distinguishable sizes

### Resume (Free-Form)
- [ ] Applied some CSS styling to the resume

## Step-by-Step Instructions

### Step 1: Prevent Content from Getting Too Wide
**Goal:** Make content readable by limiting width and centering it.

1. Apply `max-width` to `<body>` using relative units (em, rem, or ch)
   - Recommended: `max-width: 100ch` (scales with font size)
2. Center the content using `margin-inline: auto`
3. Add padding to prevent content from touching viewport edges
   - Alternative: Use `margin-inline: max(1em, (100% - 100ch) / 2)`

**Key Concepts:**
- `max-width` vs `width`: Allows content to adapt to smaller screens
- Relative units (em, rem, ch): Scale with font size for better accessibility
- `margin-inline`: Shorthand for left and right margins

### Step 2: Styling the Navigation Bar

#### Step 2.1: Getting `<ul>` and `<li>` Out of the Way
- Apply `display: contents` to `<ul>` and `<li>` elements within `<nav>`
- This removes default list styling (bullets, spacing)

#### Step 2.2: Using Flexbox to Lay Out Navigation
1. Wrap the current page menu item in an `<a>` tag with `class="current"`
2. Apply `display: flex` to `<nav>` to enable Flexbox
3. Apply `flex: 1` to each `<a>` element to make them equal width

**Key Concepts:**
- Flexbox: One-dimensional layout system
- `flex: 1`: Distributes remaining space equally among flex items

#### Step 2.3: Adding Style
1. Remove underlines: `text-decoration: none`
2. Inherit text color: `color: inherit`
3. Center text: `text-align: center`
4. Add padding: `padding: 0.5em`
5. Add spacing: `margin-bottom` on `<nav>`
6. Add bottom border: `border-bottom: 1px solid oklch(80% 3% 200)`
7. Style current page link:
   - Thick bottom border: `border-bottom-width: 0.4em`
   - Reduce `padding-bottom` to counter border height

#### Step 2.4: Accent Color and Hover Styles
1. Define accent color as CSS custom property:
   ```css
   :root {
     --color-accent: oklch(65% 50% 0);
   }
   ```
2. Apply to `<html>` or `<body>`: `accent-color: var(--color-accent)`
3. Style hovered links (`a:hover`):
   - Same border as current page but with accent color
   - Optional: Add light background: `background-color: oklch(from var(--color-accent) 95% 5% h)`

**Key Concepts:**
- CSS Custom Properties (variables): Reusable values defined with `--`
- `var()`: Function to use custom properties
- `oklch()`: Modern color space for better color manipulation

### Step 3: Contact Form Layout

#### Step 3.1: Integrate Typography
- Apply `font: inherit` to form controls (`<input>`, `<textarea>`, `<button>`)
- This makes them use the same font as the rest of the page

#### Step 3.2: Top-Down Layout (Optional/Removed in Step 3.3)
- `display: block` on form controls and labels
- `width: 100%` on form controls
- `box-sizing: border-box` on form controls
- `margin-block` on labels for spacing

#### Step 3.3: Grid Layout
1. Remove CSS from Step 3.2
2. Apply `display: grid` to `<form>`
3. Define columns: `grid-template-columns: auto 1fr`
   - `auto`: Column width matches content
   - `1fr`: Remaining space
4. Make labels span full width: `grid-column: 1 / -1`
5. Use subgrid on labels:
   - `display: grid` on `<label>`
   - `grid-template-columns: subgrid`
   - This aligns label text and input fields
6. Apply same to submit button
7. Add spacing: `gap: 1em`

**Key Concepts:**
- CSS Grid: Two-dimensional layout system
- Subgrid: Allows nested grids to align with parent grid
- `grid-column: 1 / -1`: Spans from first to last column
- Automatic grid placement: Browser automatically places children

### Step 4: Style Your Projects Page

#### Step 4.1: Add Dummy Content
Use Emmet abbreviation:
```
.projects>article*12>h2>lorem4^img[src="https://vis-society.github.io/labs/2/images/empty.svg"]+p>lorem
```
This creates 12 articles with headings, images, and paragraphs.

#### Step 4.2: Stop Images from Getting Too Wide
- Apply `max-width: 100%` to all images
- Prevents images from exceeding container width

#### Step 4.3: Applying a Responsive Grid
1. Apply `display: grid` to `.projects`
2. Use responsive columns: `grid-template-columns: repeat(auto-fill, minmax(15em, 1fr))`
   - `auto-fill`: Creates as many columns as fit
   - `minmax(15em, 1fr)`: Minimum 15em, maximum remaining space
3. Add spacing: `gap: 1em`

**Key Concepts:**
- Responsive grid: Adapts to viewport size automatically
- `repeat()`: Function to repeat grid tracks
- `auto-fill`: Fills available space with columns

#### Step 4.4: Horizontal Alignment with Subgrid
1. Apply subgrid to `<article>` elements:
   - `display: grid`
   - `grid-template-rows: subgrid`
   - `grid-row: span 3`
2. Set `margin: 0` on `<h2>` to reduce spacing

#### Step 4.5: Finishing Touches
1. Make `<h1>` significantly larger (e.g., `font-size: 400%`)
2. Style all headings:
   - `line-height: 1.1` (tighter leading than body text)
   - `text-wrap: balance` (prevents uneven lines)

**Key Concepts:**
- Typographic hierarchy: Different sizes create visual hierarchy
- `text-wrap: balance`: Distributes text evenly across lines

### Step 5: Style Your CV
- Experiment freely with CSS to style the resume page
- Apply what you've learned about layout, typography, and colors

## Key CSS Concepts Covered

### Selectors
- Element selectors (`nav`, `body`)
- Class selectors (`.projects`, `.current`)
- Pseudo-class selectors (`:hover`, `:root`)
- Descendant selectors

### Units
- **Relative units**: `em`, `rem`, `ch`, `%`, `fr`
- **Absolute units**: `px` (use sparingly)
- **Functions**: `max()`, `min()`, `var()`, `repeat()`, `minmax()`

### Layout Methods
- **Flexbox**: One-dimensional layouts (navigation bar)
- **CSS Grid**: Two-dimensional layouts (forms, project grids)
- **Subgrid**: Align nested content with parent grid

### Properties
- **Box Model**: `padding`, `margin`, `border`, `box-sizing`
- **Typography**: `font`, `font-size`, `line-height`, `text-align`, `text-decoration`
- **Colors**: `color`, `background-color`, `border-color`, `oklch()`
- **Layout**: `display`, `grid-template-columns`, `grid-template-rows`, `gap`
- **Spacing**: `margin-inline`, `margin-block`, `padding`

### CSS Custom Properties
- Define: `:root { --variable-name: value; }`
- Use: `var(--variable-name)`
- Allows for theme consistency and easy updates

## CSS Resources

### Interactive Learning
- **CSS Box Model Playground**: Understand padding, margin, border
- **Flexbox Froggy**: Learn Flexbox through a game
- **Grid Garden**: Learn CSS Grid through a game

### Documentation
- MDN: Learn to style HTML using CSS
- MDN: Basic concepts of flexbox
- MDN: Basic concepts of grid layout
- MDN: Subgrid
- CSS Tricks: A Complete Guide to Flexbox
- CSS Tricks: A Complete Guide to Grid

### Tutorials
- Khan Academy: Intro to HTML/CSS
- Code Academy: Learn CSS
- CSS in 20 Minutes (video)
- 4-hour HTML & CSS crash course (video)

## Important Notes

- **Work in the same repository**: Continue working on your Lab 1 repository
- **Commit frequently**: Save your progress regularly
- **Test with browser dev tools**: Use responsive design mode to test different viewport sizes
- **Use relative units**: Prefer `em`, `rem`, `ch` over `px` for better scalability
- **CSS specificity**: When styles conflict, more specific selectors win
- **Inheritance**: Many CSS properties inherit from parent elements
- **Box model**: Understand how `padding`, `border`, and `margin` affect element size

## Check-off
Asynchronous lab checkoff is available. Submit your work by filling out the form. TAs will review and post your grade. If you don't pass, you can fix issues and resubmit or get help in office hours until the deadline.

---

# Lab 3: Svelte (Templating & Control Flow)

**Course:** Vis & Society 2026 — Theme: Housing Affordability

In this lab, we will learn:

- What is Svelte and why is it useful?
- How does Svelte handle pages and navigation?
- How can we use Svelte control flows and templates to format data?
- How can we create and reuse Svelte components?

## Table of contents

- Check-off
- Lab 3 Rubric
- Prerequisites
- Slides
- Step 1: Getting started with a template repository
- Step 2: Porting your previous website to Svelte
- Step 3: Publishing our new website to GitHub Pages
- Step 4: Control Flow Using Templates
- Step 5: Creating a Svelte Component
- Step 6: Practice — "What I'm Reading" Component
- Appendix: Creating a Svelte Project from Scratch
- Svelte and SvelteKit Resources

## Check-off

Asynchronous lab checkoff is no longer one-and-done. To receive a lab checkoff, please submit your work asynchronously by filling out [this form](https://forms.example.com). TAs will review your lab and post your grade. If you do not pass, you will be able to fix any issues and resubmit or receive help in an office hour until the deadline.

## Lab 3 Rubric

To successfully complete this lab check-off, ensure your work meets all of the following requirements:

- Same functionality from Labs 1–2, just ported to SvelteKit.
- Successfully deployed to GitHub Pages.
- Correct file directory (pages are named correctly and placed in the correct folders).
- Home page includes a subset of projects.
- A "What I'm Reading" section appears on the homepage.
- At least 3 different reading items are rendered dynamically in a consistent layout.
- Each reading item includes:
  - a title
  - an author
  - an image
- The DOM shows repeated structural elements (indicating a loop, not manual copy-paste).

## Prerequisites

- You should have completed all the steps in **Lab 0** (Node.js and npm installed). You will not need the local server from Lab 0, as SvelteKit will provide its own.
- This lab assumes you have already completed **Lab 1** and **Lab 2** as we will use the same website as a starting point.

## Slides: What to Expect When You're Svelting

Unlike the previous labs, this lab will not involve dramatic changes to the end-user experience of our website. In terms of user-facing changes, we will only be adding a section of the 3 selected projects to the home page, displaying a count of projects, and creating a "What I'm Reading" section on the homepage. However, we will be completely re-architecting its internals to make it much easier to make changes and evolve it over time.

---

## Step 1: Getting started with a template repository

For this lab, we have provided a template repository for you to start from, where we have created a Svelte project with the basic layout of your portfolio website. In this step, you'll create your own repository from this template. (Instructions for creating a Svelte project from scratch are in the Appendix.)

### Step 1.1: Creating your own repository from a template

1. Visit the template repository and select **Use this template → Create a new repository** in the top right corner.
2. Choose a name and visibility, and click **Create repository**.
3. Clone this repository to your computer (e.g. in GitHub Desktop: **File → Clone repository...** or from the command line: `git clone https://github.com/[your username]/[your repository name].git`).

### Step 1.2: Installing dependencies and viewing the site locally

1. Open your new project in VS Code (e.g. **Repository → Open in Visual Studio Code** in GitHub Desktop).
2. In the VS Code terminal, run:
   ```bash
   npm install
   ```
   This installs all dependencies from `package.json`. Be patient—it can take a while.
3. Then run:
   ```bash
   npm run dev -- --open
   ```
   This starts a local server on port 5173 and opens http://localhost:5173/ in your browser.

**Notes:**

- Vite (used by SvelteKit) implements **hot reloading**: the page will automatically reload when you save a file. You may need to hard refresh (Ctrl+Shift+R or Command+Shift+R on Mac) to see styling changes due to browser caching.
- You might see `NotFound [Error]: Not found: /style.css`. The site will still deploy; the error will disappear in Step 2 when you add `style.css`.
- **Use Svelte 4 only.** The latest Svelte 5 is not compatible with this lab. Follow terminal commands exactly. You can check your version with `npm list svelte`.

---

## Step 2: Porting your previous website to Svelte

### Step 2.0: Moving your assets

Copy your `images/` folder and `style.css` into `static/` (via File Explorer or VS Code).

### Step 2.1: Porting your pages to routes

**Routing** is the process of determining what content to display based on the URL. SvelteKit uses a `routes` directory with `+page.svelte` files for each page. These are components whose special name tells SvelteKit they are pages.

1. Open the `routes` directory. The template replicates your Lab 2 directory structure, but with `+page.svelte` instead of `index.html`.
2. If you prefer different page names/URLs (e.g. `cv` instead of `resume`), rename the corresponding folder now.
3. A Svelte page has three parts in order:
   - A `<script>` element for JavaScript logic and data.
   - HTML to display content.
   - A `<style>` element for CSS that applies only to that page.
4. Replace the homepage content (e.g. the default "Welcome to SvelteKit..." text) with the contents of your old site's `<body>` from the root `index.html`. **Do not** include the `<body>` tags themselves.
5. If you get an error like *`<tag_name> is a void element and cannot have children*`, remove the closing `</tag_name>`; in Svelte, void elements don't have closing tags.
6. For the other pages, copy the content from your old site (again, only what was inside `<body>`) into:
   - `projects/index.html` → `routes/projects/+page.svelte`
   - `resume/index.html` → `routes/resume/+page.svelte`
   - `contact/index.html` → `routes/contact/+page.svelte`
7. Use `<svelte:head>` to add elements to the document `<head>` (placed after `<script>` and at the top of the HTML). Other global `<head>` content is in `src/app.html` (e.g. link to `style.css`, default title). Do not remove the `%...%` placeholders in `app.html`.

The nav will not work yet; fix it in Step 2.2. You can still open http://localhost:5173/projects, http://localhost:5173/contact, etc. manually to verify pages.

### Step 2.2: Adjusting navigation bar URLs

- Remove `index.html` from links, and any `../` or trailing slashes.
- Use `.` or `./` for the homepage link (not an empty `href`).
- Assign `class="current"` to the link for the current page.

Example:

```html
<nav>
  <a class="current" href=".">Home</a>
  <a href="projects">Projects</a>
  <a href="contact">Contact</a>
  <a href="resume">Resume</a>
  <a href="https://github.com/nicolatl" target="_blank">GitHub</a>
</nav>
```

The first time you click through the nav you might see 404s; this can happen once and is addressed in a later lab.

---

## Step 3: Publishing our new website to GitHub Pages

We do not commit build artifacts (e.g. `.svelte-kit`); it's in `.gitignore`. GitHub will build the site when deploying. Use **GitHub Actions** to run the build and deploy.

**Note:** GitHub Actions is not available on MIT GitHub Enterprise; use a personal GitHub account.

1. Commit and push your changes.
2. On github.com: **Repo settings → Pages → Source: GitHub Actions**.
3. Follow the [SvelteKit guide for deploying to GitHub Pages](https://kit.svelte.dev/docs/adapter-static#github-pages). Add/update:
   - `.github/workflows/deploy.yml` (create `.github` and `workflows` if needed)
   - `svelte.config.js` (replace the existing config)
4. Commit and push these changes.

Your site will be at `YOUR_USERNAME.github.io/REPO_NAME`. Check the **Actions** tab on your repo to see deployment status.

---

## Step 4: Control Flow Using Templates

Storing project data in a separate JSON file and using templates avoids repeating HTML and makes it easy to show the same data in multiple places (e.g. homepage and projects page).

### Step 4.1: JSON Objects and Arrays — Storing our Projects

- **JSON**: key–value pairs; objects use `{}`, arrays use `[]`.
- Each project can be an object with e.g. `title`, `image`, `description`.
- Create `src/lib` and add `projects.json` there.
- Use an array of project objects. Example:

```json
[
  {
    "title": "My First Project",
    "image": "/images/project1.png",
    "description": "This project explores..."
  },
  {
    "title": "My Second Project",
    "image": "/images/project2.png",
    "description": "In this project, I..."
  }
]
```

Use double quotes for property names and string values.

### Step 4.2: Importing our project data into our Projects page

In `src/routes/projects/+page.svelte`, add at the top:

```html
<script>
  import projects from "$lib/projects.json";
</script>
```

Temporarily add `<pre>{ JSON.stringify(projects, null, "\t") }</pre>` to confirm the data loads, then remove it.

### Step 4.3: Control flow with `{#each}`

Keep one `<article>` as a template inside `<div class="projects">`. Wrap it in an `{#each}` block:

```html
<div class="projects">
  {#each projects as p}
    <article>
      <h2>Lorem ipsum dolor sit.</h2>
      <img src="..." alt="" />
      <p>Lorem ipsum...</p>
    </article>
  {/each}
</div>
```

You should see one block per project.

### Step 4.4: Using variables to populate the template

Replace the placeholder content with expressions: `{p.title}`, `{p.image}`, `{p.description}`. For the image use `src={p.image}` (no quotes around the expression). Edit `projects.json` and confirm the page updates.

### Step 4.5: Counting projects

Add a project count in the heading, e.g. `{ projects.length }`, so it updates automatically when the data changes.

---

## Step 5: Creating a Svelte Component

Components encapsulate a piece of UI and can be reused. We'll make a `<Project>` component and use it on both the Projects page and the home page (first 3 projects).

### Step 5.1: Creating a `<Project>` component

1. Copy the `<article>` (and its contents) from the Projects page into a new file `src/lib/Project.svelte`.
2. At the top add:
   ```html
   <script>
     export let data = {};
   </script>
   ```
   `export let data` defines a prop; other files pass data in via `data={...}`.
3. In the template, replace `p` with `data` (e.g. `{data.title}`, `{data.image}`, `{data.description}`).

### Step 5.2: Using the `<Project>` component on the Projects page

In `routes/projects/+page.svelte`:

- Import: `import Project from "$lib/Project.svelte";`
- Replace each `<article>...</article>` with: `<Project data={p} />`

### Step 5.3: Using the `<Project>` component on the home page

- Copy the same `<script>` (imports for `projects` and `Project`) to the home page.
- Add a section (e.g. "Latest projects") and use:
  ```html
  {#each projects.slice(0, 3) as p}
    <Project data={p} />
  {/each}
  ```
- Wrap in e.g. `<div class="projects">` or `<div class="projects highlights">` for styling.

To show specific projects instead of the first three, use an array like `[projects[0], projects[3], projects[7]]` (arrays are 0-indexed).

### Step 5.4: Moving Project-specific CSS to the Project component

Move any CSS that only applies to the project `<article>` (e.g. `article { ... }`, `img { ... }`) from `style.css` into a `<style>` block at the bottom of `Project.svelte`. Svelte will scope this CSS to the component.

---

## Step 6: Practice — "What I'm Reading" Component

Apply the same ideas with less guidance: data in JSON, `{#each}`, and a reusable component.

### Step 6.1: Create a new data file

- Create a JSON file in `src/lib/` (e.g. `reading.json`).
- Use an array of objects. Each item should have at least:
  - **title**
  - **author**
  - **image**
- You can add more fields (link, year, description, etc.).

### Step 6.2: Create a new component

- Create a component in `src/lib/` (e.g. `ReadingItem.svelte`).
- It should accept a prop (like `Project.svelte`), render title, author, and image, and have its own `<style>` block. Adapt the Project pattern; don’t copy it blindly.

### Step 6.3: Display your reading list on the homepage

In `routes/+page.svelte`:

- Import the new JSON file and the `ReadingItem` component.
- Add a section (e.g. "What I'm Reading") and use an `{#each}` block to render all items.
- Wrap the list in a container (e.g. `<div class="reading">`).

You should have: a second JSON file, a second reusable component, and a new templated section on the homepage. Editing `reading.json` should update the homepage.

### Step 6.4: Apply styling (optional but recommended)

Use layout (e.g. `display: flex`) and typography to create a clear hierarchy (e.g. image on the left, title/author/description on the right, distinct styles for title vs author). A [flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) can help.

---

## Appendix: Creating a Svelte Project from Scratch

### A.1: Creating a new blank Svelte/SvelteKit project

From the parent of your project folder:

```bash
npm create svelte@4 my-portfolio
```

Use **Skeleton project**, **No** for the options, and leave the last question unselected. This creates a folder (e.g. `my-portfolio`).

### A.2: Creating a new repository

In GitHub Desktop: **File → Add Local Repository…**, select the new folder. Create a repository when prompted, then **Publish repository** to GitHub.

### A.3: Installing dependencies

In the project folder in VS Code:

```bash
npm install && npm install -D svelte@4 && npm install -D @sveltejs/adapter-static@2
```

If `&&` doesn’t work, run each command separately. Then:

```bash
npm run dev -- --open
```

This uses Svelte 4 and the static adapter for GitHub Pages.

---

## Svelte and SvelteKit Resources

- [Svelte](https://svelte.dev/)
- [SvelteKit](https://kit.svelte.dev/)

### JS resources

- MDN: [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- MDN: [JavaScript First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)
- [JS Garden](https://bonsaiden.github.io/JavaScript-Garden/) (quirks and gotchas)
- [Learn JS Data](https://observablehq.com/@observablehq/learn-javascript) (Observable notebooks)

### Videos

- JavaScript in 12 Minutes
- JS 1-Hour tutorial
- A series of interactive JavaScript Tutorials
- Udemy course

### Books

- *Eloquent JavaScript* by Marijn Haverbeke (free online)
- *JavaScript: The Good Parts* by Douglas Crockford
- *Learning JavaScript Design Patterns* by Addy Osmani
