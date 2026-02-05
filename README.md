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
