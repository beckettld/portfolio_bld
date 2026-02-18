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
