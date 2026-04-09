# Lab 8: D3 III (Advanced Interaction Techniques)

**Vis & Society 2026** · Programming Labs

In this lab, we will learn:

- How to add brushing as a mode of interactivity on D3 visualizations
- How SVG lines work, and how to use `d3.line` to generate SVG lines
- How to build custom interaction behavior

## Table of contents

- [Check-off](#check-off)
- [Lab 8 Rubric](#lab-8-rubric)
- [Slides (or lack thereof)](#slides-or-lack-thereof)
- [Step 1: Brushing](#step-1-brushing)
  - [Step 1.1: Setting up the brush](#step-11-setting-up-the-brush)
  - [Step 1.2: Getting our tooltips back](#step-12-getting-our-tooltips-back)
  - [Step 1.3: Styling the selection rectangle (optional)](#step-13-styling-the-selection-rectangle-optional)
  - [Step 1.4: Making the brush actually select dots](#step-14-making-the-brush-actually-select-dots)
  - [Step 1.5: Showing count of selected commits](#step-15-showing-count-of-selected-commits)
- [Step 2: Commit Line Chart](#step-2-commit-line-chart)
  - [Step 2.1: Data Wrangling: Lines edited by date](#step-21-data-wrangling-lines-edited-by-date)
  - [Step 2.2: Creating a LineChart component](#step-22-creating-a-linechart-component)
  - [Step 2.3: d3.line and `<path>` svg elements](#step-23-d3line-and-path-svg-elements)
  - [Step 2.4: Axes, labels, and title](#step-24-axes-labels-and-title)
- [Step 3: Day of Week Highlighting](#step-3-day-of-week-highlighting)
  - [Step 3.1: Building interaction regions](#step-31-building-interaction-regions)
  - [Step 3.2: Reactive hoveredDay](#step-32-reactive-hoverday)
  - [Step 3.3: Building highlight bands](#step-33-building-highlight-bands)
  - [Step 3.4: Adding annotations](#step-34-adding-annotations)

## Check-off

To receive a lab checkoff, please submit your work asynchronously by filling out **this form** (see course site). TAs will review your lab and post your grade. If you do not pass, you will be able to fix any issues and resubmit or receive help in an office hour until the deadline.

## Lab 8 Rubric

To successfully complete this lab check-off, ensure your work meets all of the following requirements:

### General

- Same functionality from Labs 4–7.
- Successfully deployed to GitHub Pages.
- When executing the Svelte development server locally, there are no warnings.

### Scatterplot

- Brushing is implemented, and selects all commits within its bounds.
- Tooltips are still visible.
- The brushing region cannot extend past the axes.
- The bar chart gets filtered based on both brushed and clicked commits.

### Line Chart

- The line chart shows edited lines of code over time, with points and interpolations between the points.
- The line chart has a title, axes, and axis labels.
- On hover, the title changes, and all days of the week that correspond to the hover are highlighted, with appropriate text annotations.
- When the mouse leaves the line chart, the highlight gets reset.

## Slides (or lack thereof)

Just like the previous lab, there are no slides for this lab! Since the topic was covered in the first D3 lecture it can be helpful for you to review the material from it.

---

## Step 1: Brushing

In Step 4.1 of Lab 7, we enabled clicking various commits and thus selecting them, allowing us to adapt other components (such as Bar) to the selection. As discussed in the *A Tour through the Interaction Zoo* lecture, brushing can be an effective interaction technique for selecting multiple data points in a visualization.

Once points are selected, we can further explore the dataset by displaying more data.

### Step 1.1: Setting up the brush

Exactly because brushing is so fundamental to interactive charts, D3 provides a module called **d3-brush** to facilitate just that.

To use it, we need a reference to our `<svg>` element, so we use `bind:this`. More specifically, create a variable `svg` in your `<script>` and use `bind:this={svg}` in the top `<svg>` component (the one where we have also defined the `viewBox`).

We then create the brush through a reactive component like this:

```js
$: d3.select(svg).call(d3.brush());
```

Try it! You should already be able to drag a rectangle around the chart, even though it doesn’t do anything yet.

### Step 1.2: Getting our tooltips back

Did you notice that now that we can brush, our tooltips disappeared and that we can’t select any data points? What happened?!

If you inspect the chart, you will find the culprit: to make the brush work, D3 adds a rectangle overlay over the entire chart that catches all mouse events. Because of this, our circles never get hovered, and thus our tooltips never show and no selection can take place.

Since SVG elements are painted in source order, to fix this we need the overlay to come **before** the dots in the DOM tree. D3 provides a `selection.raise()` method that moves one or more elements to the end of their parent, maintaining their relative order.

Therefore, to move the overlay to be before the dots, we will “raise” the dots and everything that comes after the overlay.

First, let’s convert the single-line reactive statement to a reactive block:

```js
$: {
	d3.select(svg).call(d3.brush());
}
```

Then, inside the reactive block, let’s change the extent of the brush to prevent the brush from extending over the axes:

```js
d3.select(svg).call(d3.brush())
	.extent([[usableArea.left, usableArea.top], [usableArea.right, usableArea.bottom]]);
```

After the brush is created, we raise the dots and everything after the overlay:

```js
d3.select(svg).selectAll(".dots, .overlay ~ *").raise();
```

That’s a funny looking selector, isn’t it? The `~` is the CSS subsequent sibling combinator and it selects elements that come after the selector that precedes it (and share the same parent).

Try it: you should now see that the tooltips are back, the brush still works, and it’s limited to an area within the axes!

### Step 1.3: Styling the selection rectangle (optional)

The overlay is not the only element added by `d3.brush()`. For example, there is a `<rect class="selection">` element that is used to depict the brush selection. This means you can use CSS to style it!

Just make sure to use the Svelte-specific `:global()` pseudo-class around `.selection` otherwise Svelte will drop the whole rule, as it thinks it’s unused CSS.

Example:

```css
@keyframes marching-ants {
	to {
		stroke-dashoffset: -8; /* 5 + 3 */
	}
}

svg :global(.selection) {
	fill-opacity: 10%;
	stroke: black;
	stroke-opacity: 70%;
	stroke-dasharray: 5 3;
	animation: marching-ants 2s linear infinite;
}
```

### Step 1.4: Making the brush actually select dots

So far we can draw a nicely animated selection box, but it neither does anything, nor does it look like it does anything.

The first step is to actually figure out what the user has selected, both in terms of visual shapes (dots) so we can style them as selected, as well as in terms of data (commits) so we can allow the user to use brushing instead of clicking on every single commit to select them.

`d3.brush()` returns a brush object, which actually fires events when the brush is moved. We can use `.on()` to listen to these events and do something when they happen.

Let’s start by simply logging them to the console. Define a function called `brushed()` that takes an event object as an argument and logs it to the console:

```js
function brushed(evt) {
	console.log(evt);
}
```

Then use `.on()` to call this function when the brush is moved:

```js
d3.select(svg).call(d3.brush()
	.extent([[usableArea.left, usableArea.top], [usableArea.right, usableArea.bottom]])
	.on("start brush end", brushed));
```

This line can replace your existing `d3.select(svg).call(d3.brush())` code.

Open your browser console and try brushing again. You should see a flurry of events logged. You may notice that the `selection` property of the event object is an array of two points. These points represent the top-left and bottom-right corners of the brush rectangle. This array is the key to understanding what the user has selected.

Let’s create a new reactive variable that stores this selection array (`brushSelection`). Inside `brushed()`, set `brushSelection` to `evt.selection`:

```js
$: brushSelection = null;

function brushed(evt) {
	brushSelection = evt.selection;
}
```

Now, piggyback off the `clickedCommits` array and make commit selection possible through both clicking and brushing.

```js
function isCommitBrushed(commit) {
	if (!brushSelection) {
		return false;
	}
	// TODO return true if commit is within brushSelection
	// and false if not
}
```

The core idea for the logic is to use your existing `xScale` and `yScale` scales to map the commit data to X and Y coordinates, and then check if these coordinates are within the brush selection bounds.

Another way to do it is to use the D3 scale `.invert()` to map the selection bounds to data, and then compare data values, which can be faster if you have a lot of data, since you only need to convert the bounds once.

Use:

```js
$: brushedCommits = brushSelection ? commits.filter(isCommitBrushed) : [];
```

Merge click and brush selection so every commit is present just once:

```js
$: selectedCommits = Array.from(new Set([...clickedCommits, ...brushedCommits]));
```

Replace `clickedCommits` with `selectedCommits` where you want to consider both brushed and selected circles:

```svelte
<script>
	// ...
	$: selectedLines = (selectedCommits.length > 0 ? selectedCommits : commits).flatMap(d => d.lines);
</script>

<circle
	class:selected={selectedCommits.includes(commit)}
	<!-- ... -->
/>
```

Don’t forget to change your bar chart title based on `selectedCommits`, as opposed to `clickedCommits`!

### Step 1.5: Showing count of selected commits

Add the length of `selectedCommits` to your dynamically titled bar chart, for example:

`Lines of Code: ${selectedCommits.length} Selected Commits`

---

## Step 2: Commit Line Chart

We will be building a line chart which effectively projects our commit scatter plot onto the x axis, and accumulates all edits to our repository for each day.

Preview of steps:

1. Wrangle the output of the elocuent script into a data structure with a count of lines edited for each day.
2. Draw this data as a line over time.
3. Add axes, labels, and a title.
4. Highlight days of the week by hovering over the chart.
5. Add annotations.

### Step 2.1: Data Wrangling: Lines edited by date

Wrangle data in `routes/meta/+page.svelte`, and pass the wrangled data into a `LineChart` component.

Begin with:

```js
let linesByDate = [];
```

Set up a reactive block `$: { }` and:

- Get the count of edits for each date in `locData` — you may want to use `d3.rollups()`, and `d3.timeDay.floor()` to group the edits by the date on which they happened.
- Afterward, map to objects: `.map(([date, count]) => ({ date, count }))` so you can use `rolled.date` and `rolled.count`.
- Get an array of all days covered by the data — `d3.extent()` on your rolled data for min/max date; `d3.timeDays(minDate, d3.timeDay.offset(maxDate, 1))` returns every date between min and max, inclusive.
- Build `linesByDate` by filling all undefined dates with 0 counts — e.g. `allDays.map(date => ({ date, count: ... }))`, using `.find()` and optional chaining `?` / nullish coalescing `??` as needed.

If you add `console.log(linesByDate)`, you should see an array of objects with `date` and `count`.

### Step 2.2: Creating a LineChart component

Create `LineChart.svelte`, `import * as d3 from 'd3';`, and `export let data = [];`.

Import `LineChart` into the meta page and add `<LineChart data={linesByDate} />` at the bottom of the meta page HTML.

### Step 2.3: d3.line and `<path>` svg elements

Define an SVG `viewBox` with width `1000` and height `300`, and appropriate overflow styling (as in Lab 6 / Lab 7).

You need an X scale for dates and a Y scale for count of edited lines:

- **X:** time scale mapping `d3.extent` of dates to `[usableArea.left, usableArea.right]`.
- **Y:** linear scale from `0` and `d3.max` of data to `[usableArea.bottom, usableArea.top]`. `scale.nice()` can give nicer tick marks.

In SVG, a line is defined with a `<path>` element with a `d` attribute. We generate it with `d3.line()`:

```js
$: line = d3.line()
	.x(d => xScale(d.date))
	.y(d => yScale(d.count));
```

```svelte
<path
	d={line(data)}
	fill="none"
	stroke="steelblue"
	stroke-width="2"
/>
```

Optional: `.curve(d3.curveBumpX)` (or `d3.curveStep`, etc.).

Add circles at each data point:

```svelte
{#each data as d}
	<circle
		cx={xScale(d.date)}
		cy={yScale(d.count)}
		r="3"
		fill="steelblue"
	/>
{/each}
```

If your line rarely drops to 0, double-check filling missing dates with 0 from `locData`.

### Step 2.4: Axes, labels, and title

Add an `<h3>` before the `<svg>` (e.g. “Lines Edited by Day”).

As in Lab 7 Step 1.5: margin, `usableArea`, `xAxis`, `yAxis`, `bind:this` on `<g>` elements, and `d3.select()` to apply axis functions. For the line chart you don’t need special tick formatting on the time axis unless you want it.

Axis labels example:

```svelte
<!-- x-axis label -->
<text
	x={usableArea.left + (usableArea.right - usableArea.left) / 2}
	y={height - 5}
	text-anchor="middle"
	class="axis-label">
	Date
</text>

<!-- y-axis label -->
<text
	x={-(usableArea.top + (usableArea.bottom - usableArea.top) / 2)}
	y={10}
	text-anchor="middle"
	transform="rotate(-90)"
	class="axis-label">
	Number of Lines Edited
</text>
```

Style `.axis-label` (e.g. `font-size: 0.8em`, `fill: currentColor` for dark mode).

---

## Step 3: Day of Week Highlighting

Plan:

1. Define a variable for the hovered day of the week.
2. Define invisible interaction regions that know which day of the week they cover.
3. Draw regions on the `<svg>` and update hovered day on interaction.
4. Draw visible highlight regions that react to `hoveredDay`.
5. Add annotations.

### Step 3.1: Building interaction regions

```js
let hoveredDay = null; // e.g. "Monday"
```

Build regions reactively:

```js
$: dayRegions = (() => {
	if (data.length === 0) return [];
	return data.map((d, i, arr) => {
		const prev = arr[i - 1];
		const next = arr[i + 1];
		const left = prev ? new Date((d.date.getTime() + prev.date.getTime()) / 2) : d.date;
		const right = next ? new Date((d.date.getTime() + next.date.getTime()) / 2) : d.date;

		return {
			date: d.date,
			weekday: d.date.toLocaleString("en", { weekday: "long" }),
			x: xScale(left),
			width: xScale(right) - xScale(left),
		};
	});
})();
```

### Step 3.2: Reactive hoveredDay

```svelte
{#each dayRegions as region}
	<rect
		x={region.x}
		y={usableArea.top}
		width={region.width}
		height={usableArea.bottom - usableArea.top}
		fill="transparent"
		on:mouseenter={() => hoveredDay = region.weekday}
	/>
{/each}
```

Reset when leaving the SVG:

```svelte
<svg
	...
	on:mouseleave={() => hoveredDay = null}
>
```

(Svelte may show accessibility warnings; Lab 10 addresses them.)

### Step 3.3: Building highlight bands

Add rectangles with the same geometry as the interaction regions, shown only when `region.weekday === hoveredDay`, with fill such as `fill="var(--color-accent)"` and `opacity="0.2"`.

### Step 3.4: Adding annotations

Change the `<h3>` title to reflect the highlighted day, e.g. “Lines Edited on Monday”.

Before each circle in the `{#each data as d}` loop:

```svelte
{@const isHighlighted = d.date.toLocaleString("en", { weekday: "long" }) === hoveredDay}
```

Adjust circle `r` and `fill` when `isHighlighted`.

Annotation text above highlighted points:

```svelte
{#if isHighlighted}
	<text
		x={xScale(d.date)}
		y={usableArea.top + 15}
		text-anchor="middle"
		font-size="12"
		fill="var(--color-accent)"
	>
		{Math.round(d.count)}
	</text>
{/if}
```

You now have a line chart of repo editing habits with on-hover interactivity.
