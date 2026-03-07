# A4: Persuasive or Deceptive Visualization?

**Vis & Society 2026 · Theme: Housing Affordability**

**Due:** Wednesday 3/4, 11:59 pm ET  
Request Slack days → | Submit on Canvas →

---

## Table of contents

- [Your Tasks](#your-tasks)
- [Submission Details](#submission-details)
- [Grading](#grading)
- [Datasets](#datasets)
- [Resources](#resources)

---

## Introduction

It is tempting to think of data and visualization as a neutral actor, with a single "correct" set of design choices that "truthfully" report the data. However, outside of egregious errors (e.g., when dates are sorted incorrectly or the y-axis is not scaled uniformly), we see that "ground truth" in data is much more contextual and situated. Design choices we make give visualization a rhetorical power that influences what a reader concludes and remembers about the data, and blurs the line between persuasion and deception. For instance, contrast Simon Scarr's *Iraq's Bloody Toll* with a more conventional representation of the same data, and consider why Scarr's visualization won an award while another visualization that made similar design choices—*Gun deaths in Florida* by Christine Chan—was widely considered to be misleading.

---

## Your Tasks

1. **Select one dataset** from the list provided below. These datasets are intentionally chosen to cover politically charged topics, as ethical analysis and visualization is especially critical in such situations.

2. **Spend time exploring and familiarizing yourself with the dataset** (e.g., through exploratory visual analysis similar to A2). Once you feel like you've developed an understanding of the data, **devise a proposition about it**: a statement that asserts a judgement or opinion about the trends you might have uncovered. An example of a proposition might be *"Gun deaths spiked after Florida enacted its 'Stand Your Ground' law."*

   When devising your proposition, please keep in mind our goal of fostering a respectful and inclusive environment. In particular, while you are welcome to formulate controversial propositions, **propositions that demean or dehumanize people** (e.g., based on their race, gender expression, sexual orientation, disability, or other aspects of their identity) **are not acceptable**. If you are unsure whether your proposition is suitable or not, please contact the course staff.

3. **Design two visualizations** to persuade a reader about each side of the proposition (i.e., one visualization should persuade the reader that the proposition is **true** while the other should persuade the reader that the proposition is **not true**).

   We encourage you to use whatever design choices you find produces the most persuasive visualization for each side of your proposition. You are welcome to not only use techniques we would usually consider to be **earnest** (e.g., expressive encodings, transparently communicating data transformations, citing sources, etc.) but also those we might sometimes consider to be **deceptive** (e.g., violating conventions, skewed or slanted titles and labels, truncated scales and axes, filtering outliers, etc.). In doing so, you are likely to discover that there is not always a clear distinction between the two categories.

   **Note**, however, that this goal of persuasion also means that, if you use any deception techniques, they should **not be immediately obvious** (including to the course staff!) as they might otherwise backfire and dissuade your reader.

   As with prior assignments, you are free to use any visualization tools, and should carefully consider data transformation, visual encoding, textual content (i.e., titles, axes, labels), and annotations. Moreover, in this assignment, we construe "visualization" broadly (i.e., a single visualization can include several concatenated or inset charts such as a dashboard).

4. **Bullet point your design decisions and rationale.** For each visualization, enumerate **3–5 design decisions** you think are central to making the visualization persuasive (note, a "design" decision can also refer to decisions you made about data transformation or textual content). For each decision:

   - **Score**, on a diverging scale from **-2 to 2**, how deceptive or earnest your decision is (where -2 is fully deceptive, 0 is neutral, and 2 is fully earnest). Only use a score of 0 if you are really unable to decide one way or another. You may use 0.5 steps as needed.
   - **Write a couple of sentences** documenting your decision, with corresponding rationale/justification. How does this decision help make your visualization persuasive? What worked well, and what didn't? What other alternatives did you consider, and why did you settle on this one?

5. **Final reflection.** After documenting these decisions, write a **1–2 paragraph final reflection** on your overall design process across both visualizations. What was straightforward or difficult? What surprised you? How do you now define "ethical analysis and visualization"? What bounds (if any) can you draw to distinguish "acceptable" persuasive choices vs. "misleading" ones (and if none, why not)?

---

## Submission Details

Your final submission should take the form of an **HTML web page** that states your proposition, includes both visualizations and their corresponding design decisions and rationale, as well as your final reflection write up. To help you put this page together, we're providing a basic HTML template for you to fill in. You will need to edit the HTML page to add your captions and correctly link your images (for simplicity, we recommend exporting image files to the same local directory as your HTML file).

**Please deploy your HTML report to a publicly accessible URL.** We recommend [GitHub Pages](https://pages.github.com/) (as described in Lab 1, Part 2) but you are welcome to use any platform of your choice. If you are participating in the labs, your A4 submission can be part of your portfolio (e.g., a subdirectory). Once deployed, please double check that your web page is appearing and rendering correctly at the publicly-accessible URL (e.g. that there are no broken images or links).

Finally, **submit this URL on Canvas** by the due date: **Wednesday 3/4, 11:59 pm ET**. You may use up to 3 slack days to extend this deadline (provided you fill out the request form before the deadline).

---

## Grading

The assignment score is out of a maximum of **30 points**: 12 points for each visualization, and 6 points for your write-up. Submissions that squarely meet the requirements (i.e., the "Satisfactory" column in the rubric below) will receive a score of 24/30 (80%). We will use the following rubric to grade your assignment. **Note:** unlike past assignments, there are a plurality of pathways to a full score because we anticipate a diversity in how you choose to apply earnest and deceptive techniques. As a result, the staff will rely heavily on your write-up for grading this assignment (in particular, to identify which techniques you used and whether you consider them an earnest or deceptive application). **Note also:** there are up to **+3 bonus points (10%)** available for especially creative or original designs, or submissions that go above-and-beyond in some capacity.

| Component | Excellent | Satisfactory | Needs Improvement |
|-----------|-----------|--------------|-------------------|
| **Takeaway Message** (10% per visualization) | The visualization persuasively argues for its stance (for/against the proposition), and facilitates effortless reading even when deceptive techniques are used. | The visualization is largely persuasive, with a reasonably clear takeaway message. But some issues hinder comprehension. Deceptive design techniques cannot be detected at first glance, but are identifiable on a second look. | It is unclear what position the visualization is taking with regards to the proposition. The takeaway is obfuscated and/or the reader is overwhelmed. Any deceptive design choices can be immediately identified. |
| **Marks, Encodings, and Visual Design** (15% per visualization) | All visual encoding choices are perceptually effective. Visual design choices go well-beyond defaults: they are highly tailored to the takeaway message and feature strong resonance with the data domain. | Visual encodings are largely perceptually effective, but occasional aspects require effort to decode in ways that detract from the takeaway message. Good customization that goes beyond default designs, but some choices seem arbitrary rather than well-grounded to the data domain or takeaway message. | Visual design is distracting or makes the visualization unnecessarily or unintentionally difficult to read. Visual encodings are often perceptually ineffective, and/or visual design choices largely follow default options. |
| **Titles, Labels, and Annotations** (15% per visualization) | Titles, labels, and annotations persuasively describe, contextualize or frame the depicted data. Any slants that may be considered deceptive are imperceptible to the reader. | Necessary titles and labels are present, but annotations could be better used to persuasively narrate the visualization's stance. Any deceptively slanted content is more easily detectable by readers. | Several titles or labels are missing, or do not provide human-understandable information. Annotations are rarely used. Strong, charged, or colorful language makes it easy to detect deceptive content. |
| **Data Transformations** (5% per visualization) | Advanced transformations (e.g., groupings, binnings, calculated fields, etc.) extend or manipulate the dataset in interesting and/or unexpected ways. | The raw dataset was mostly used directly, with perhaps some simple transforms (e.g., sorting, filtering) to facilitate communicating the visualization's message. | — |
| **Design Rationale and Reflection** (20%) | Well crafted write-up provides reasoned justification for all design choices with a thoughtful reflection on their ethical implications. | Most design decisions are described, but rationale or ethical reflections could be explained at a greater level of detail. | Missing or incomplete. Several design choices are left unexplained, and/or ethical reflection is relatively shallow. |
| **Creativity and Originality** (+10%) | You exceeded the parameters of the assignment, with creative, original or a particularly engaging designs. | You met all the parameters of the assignment. | — |

---

## Datasets

Please select **one dataset** from the options below. You must use the same dataset for both visualizations, but you are free to transform the data differently for each design.

- **Human Development Indicators, 1960–2020.** The World Bank has tracked global human development by indicators such as economy, education, environment, gender equality, health, and science and technology since 1960. The [linked repository](https://github.com/nicholasrq/human-development-indicators) contains indicators that have been cleaned and formatted to simplify visual analysis and visualization design. However, you're also welcome to browse and use the [original data by indicator](https://datacatalog.worldbank.org/search/dataset/0030872) or [by country](https://datacatalog.worldbank.org/search/dataset/0030872). Click on a category to download the CSV file on the right-hand sidebar.

- **Climate Change Indicators.** Similar to the previous dataset, the International Monetary Fund (IMF) tracks a number of metrics related to climate change including greenhouse gas emissions, strategies for mitigating or adapting to the impacts of climate change, transitioning to a low-carbon economy, climate finance, and the impact on weather. The data is structured as "crosstabs" (also known as "wide" data) where every time period (e.g., quarter or year) is given its own column. To facilitate visualization and visual analysis, you might wish to [pivot the data into a "long" format](https://www.imf.org/en/Data/Climate-Change-Indicators).

- **Civilian Complaints Against New York City Police Officers.** This is a dataset compiled by [ProPublica](https://www.propublica.org/), an independent, nonprofit investigative journalism newsroom. It contains more than 12,000 civilian complaints filed against the NYPD, with demographic information about the complainant and officer, the category of the alleged misconduct, and the result of the complaint.

- **Abortion Data by U.S. State from the Guttmacher Institute.** The [Guttmacher Institute](https://www.guttmacher.org/) is a research and policy organization committed to advancing sexual and reproductive health and rights. They maintain a variety of global data related to global reproductive rights. This data set contains data about abortion rates, abortion providers, and abortion seekers, aggregated to the state level.

---

## Resources

The following research papers help enumerate the ways different choices in data transformation, visual design, and textual content can impact the persuasiveness of visualizations and readers' perceived trust in them:

- **Visualization Rhetoric: Framing Effects in Narrative Visualization**, by Jessica Hullman and Nick Diakopolous. IEEE InfoVis 2011.
- **The Work that Visualization Conventions Do**, by Helen Kennedy et al. *Information, Communication & Society*.
- **Frames and Slants in Titles of Visualizations on Controversial Topics**, by Ha-Kyung Kong et al. ACM CHI 2018.
- **From Invisible to Visible: Impacts of Metadata in Communicative Data Visualization**, by Alyxander Burns et al. IEEE TVCG 2022.
- **Affective Learning Objectives for Communicative Visualizations**, by Elsie Lee-Robbins and Eytan Adar. IEEE TVCG 2023.
- **Affective Visualization Design: Leveraging the Emotional Impact of Data**, by Xingyu Lan, Yanqiu Wu, and Nan Cao. IEEE TVCG 2024.
