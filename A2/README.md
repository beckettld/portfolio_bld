# Vis & Society 2026

**Theme: Housing Affordability**

## Assignments

- A1: Data, Visualization, and Housing
- **A2: Exploratory Visual Analysis**
- A3: Visualization Critique & Redesign
- A4: Persuasive/Deceptive Visualization

---

# Assignment 2: Exploratory Visual Analysis

In this assignment, you will begin to work with public and proprietary datasets related to MAPC's research themes and subthemes. You will choose one subtheme (i.e., one dataset) to conduct an exploratory analysis using visualization, with a focus on understanding the shape and structure of the data, investigating initial questions, and developing preliminary insights and hypotheses.

**Due:** Wednesday 2/18, 11:59 pm ET  
Request Slack days →  
Submit on Canvas →

---

## Table of contents

- Your Tasks
- Final Deliverable: HTML Report
- Grading
- Resources
  - Example EDA Reports
  - Visualization Tools
  - Data Wrangling Tools
  - Graphical Tools
  - Programming Tools

---

## Your Tasks

1. To gain access to the client's datasets, you must first sign the **Data Agreement Form** linked on Canvas. Once you've signed and completed the form, you will see a link to the dataset on the final confirmation page of said form. Please do not share this link with anyone else (including your peers in this class, as they must sign the form themselves).

2. Browse the five subthemes and choose one that you'd be interested in investigating in this assignment. Each subtheme has one dataset listed for this assignment and several background readings. Read through at least one of these readings to familiarize yourself with some of the issues at stake for housing affordability (you may have already read some of these articles for the previous assignment!). *Note: you will not be obliged to stick with your choice of subtheme for future assignments.* *Note: Please refer to this directory tree to clarify which datasets you should have access to for A2.*

3. Prior to beginning any visual analysis, and based on your background reading, **write down at least three overall questions** you would like to investigate for your chosen subtheme. For each question, briefly jot down your **motivation** for posing the question. For instance, was there something in the background readings that prompted you to ask this question? Or did you think of this question based on your experiences or stories you've heard from your friends and family? Etc. **Cite these sources of evidence for your motivation.**

4. Next, perform an **exploratory analysis** of the dataset using any visualization and data transformation tools of your choice (we offer some recommendations below). You should work through **two different phases** of exploration:

   - **In the first phase**, you should seek to gain an **overview of the shape & structure of the dataset**. What variables does the dataset contain? How are they distributed? Are there any notable data quality issues? Are there any surprising relationships among the variables? Make sure to also perform "gut checks" for patterns you expect to see!

   - **In the second phase**, you should **investigate each of your overall questions**. For each question, start by creating a visualization that might provide a useful answer. Subsequently, refine the visualization (e.g., by adding additional variables, changing sorting or axis scales, transforming your data by filtering or subsetting it, etc.) to develop better perspectives, explore unexpected observations, or sanity check your assumptions.

5. While conducting your analysis and creating your visualizations, you might find yourself needing to clean, transform, or subsample your data. If that is the case, make sure to **document these steps in your report.**

6. As you conduct this analysis, new questions are likely to arise. You should **follow-up on these questions with additional visual analysis** until you feel like you have a sufficient understanding of and insight in the initial question you posed, and are ready to proceed to the next one.

7. Repeat this process for each of your three or more questions, but feel free to revise your questions or branch off to explore new questions as warranted.

---

## Final Deliverable: HTML Report

Your final submission should take the form of an **HTML report** that consists of captioned visualizations detailing your most important insights. Your "insights" can include important surprises or issues (such as data quality problems affecting your analysis) as well as responses to your analyzed questions.

These are rich and complex datasets that we will be returning to over the course of this semester. As a result, we are not expecting your submission to be an exhaustive report, but rather an initial exploration of areas of interest that could inform your final project pitch. To help you gauge the scope of this assignment, we have collated three example reports below covering a different set of data from earlier iterations of this course.

- Each visualization you provide should be a **screenshot exported from the visualization tool of your choice**, accompanied with a **descriptive title and caption (2-4 sentences long)** that unpacks the insight(s) learned from that visualization. Here, it is important that you provide sufficient detail for each caption, such that someone not familiar with the domain or the datasets could read through your report and pick-up the insights you are sharing. You are free, but not required, to add annotations or highlights to draw attention to specific features of the visualized data (you may add these highlights within the visualization tool itself, or add annotations externally on top of the exported image).

- The end of your report should include a **brief summary of main lessons learned.**

- To help you put together the report, we provide you with a **basic HTML template** for you to fill-in. You will need to edit the HTML page to add your captions and correctly link your images (for simplicity, we recommend exporting image files to the same local directory as your HTML file).

- Please **deploy your HTML report to a publicly accessible URL.** We recommend GitHub Pages (as described in Lab 1, Part 2), but you are welcome to use any platform of your choice. If you are participating in the labs, your A2 submission can be part of your portfolio (e.g., a subdirectory). Once deployed, please double check that your web page is appearing and rendering correctly at the publicly-accessible URL (e.g., that there are no broken images or links) and that your report can be viewed as you have intended.

- Finally, **submit the URL to your report on Canvas** by the due date: **Wednesday 2/18, 11:59 pm ET.** You may use up to 3 slack days to extend this deadline (provided you fill out the request form before the deadline).

---

## Grading

The assignment score is out of a maximum of **20 points**. Submissions that squarely meet the requirements (i.e., the "Satisfactory" column in the rubric below) will receive a score of 16/20 (80%). We will determine scores by judging the breadth and depth of your analysis, whether visualizations meet the expressiveness and effectiveness principles, and how well-written and synthesized your accompanying written insights are. We will use the following rubric to grade your assignment.

| Component | Excellent | Satisfactory | Needs Improvement |
|-----------|-----------|--------------|-------------------|
| **Data Overview & Quality** (12.5%) | A thorough overview of the data was achieved, with extensive profiling of fields and records to assess data quality. | Simple checks were conducted on only a handful of fields or records. | Little or no evidence that data quality was assessed. |
| **Breadth of Exploration & Cited Motivation** (20%) | Interesting overall questions target substantially different portions/aspects of the data. Rich motivation is well-grounded in multiple pieces of evidence that cite background readings, lived experiences, etc. | A nice set of overall questions are posed, but there is some overlap. Most questions are well-motivated, but there is an occasional gap in cited evidence. | Fewer than 3 overall questions were posed of the data, or there is significant conceptual overlap between them. Only shallow motivation is described, with little evidence cited. |
| **Depth of Exploration** (35%) | A sufficient number of follow-up questions were asked to yield rich insights that provide a robust understanding of the overall questions. | Some follow-up questions were asked and the seeds of insightful analysis planted, but further work could have pushed the analysis more deeply. | Few, if any, follow-up questions were asked after answering the overall questions. Only shallow analysis was conducted with any follow-up questions. |
| **Data Transformation** (12.5%) | More advanced transformation were used to extend the dataset in interesting or useful ways. | Simple transforms (e.g., sorting, filtering) were primarily used. | The raw dataset was used directly, with little to no additional transformation. |
| **Visual Expressiveness & Variation** (7.5%) | No visualizations violate the expressiveness criteria, and a rich diversity of marks and visual encodings have been explored. | No visualizations violate the expressiveness criteria, but a greater variety of design choices (especially marks and encoding channels) might have helped spur further analysis. | Several visualizations violate the expressiveness criteria (e.g., feature heavy overplotting, encodings that imply incorrect readings, etc.). |
| **Captions** (12.5%) | Captions richly describe the visualizations and contextualize the insight within the overall analysis. | Captions do a good job describing the visualizations, but could better connect prior or subsequent steps of the analysis. | Captions are missing, overly brief, or shallow in their analysis of visualizations. |
| **Creativity & Originality** (+5%) | You exceeded the parameters of the assignment, with original insights or particularly engaging visualizations. | You met all the parameters of the assignment. | — |

---

## Resources

### Example EDA Reports

To help you gauge the scope of this assignment, we have collated the following example reports—two of which were sourced from prior offerings of this class. *Note: these examples targeted earlier versions of this assignment with a slightly different set of instructions. Moreover, even the two exemplary reports are not perfect — they contain some mistakes or missed opportunities. Nevertheless, we consider them exemplary because they demonstrate how to engage in systematic and rigorous exploratory data analysis and, thus, earned a full 100% grade.*

- **Exemplary:**
  - U.S. Daily Weather Measurements in 2017
  - Chicago Crimes and Socioeconomic Factors
- **Needs improvement:** Motion Pictures Data. As this report is far from perfect, we have annotated and graded this example in more depth to help you calibrate for what we're looking for.

### Visualization Tools

You are free to use any visualization tools for this assignment. However, if you are not already familiar with visualization software, we strongly encourage you to use **Tableau**, as it provides a graphical interface focused on the task of visual data exploration, and has a friendlier learning curve than some of the other tools listed here. You will (with rare exceptions) be able to complete an initial data exploration more quickly and comprehensively than with a programming-based tool.

- **Tableau Desktop.** Available for both Windows and MacOS; license key has been shared on Canvas.
  - On Wednesday, Feb 11, we used lecture time for a hands-on tutorial with Tableau: lecture recording.
  - Here are Tableau walkthroughs for creating the visualizations from Wednesday's lecture.
  - Tableau also has extensive documentation with plenty of video tutorials to help you along.
  - To easily export images from Tableau, use the Worksheet > Export > Image… menu item.
- **Data Transforms in Vega-Lite.** A tutorial on the various built-in data transformation operators available in Vega-Lite.
- **R**, using the ggplot2 library or with R's built-in plotting functions.
- **Jupyter Notebooks (Python)**, using libraries such as Altair, Matplotlib, or Plotly.

### Data Wrangling Tools

The questions you pose may require reformatting, transformation or cleaning the data prior to visualization. Here are tools you can use for data preparation. We recommend first trying to import and process your data in the same tool you intend to use for visualization. If that fails, pick the most appropriate option among the tools below.

#### Graphical Tools

- **Tableau Prep** - Tableau provides basic facilities for data import, transformation & blending. Tableau prep is a more sophisticated data preparation tool.
- **Trifacta Wrangler** - Interactive tool for data transformation & visual profiling.
- **OpenRefine** - A free, open source tool for working with messy data.

#### Programming Tools

- **Arquero** — a JavaScript-based data transformation library. See the Introducing Arquero Observable notebook to get started.
- **JavaScript data utilities** and/or the **Datalib JS** library
- **Pandas** - Data table and manipulation utilites for Python.
- **dplyr** - A library for data manipulation in R.
- Or, the programming language and tools of your choice…

---

*This site uses Just the Docs, a documentation theme for Jekyll.*  
*Search Vis & Society 2026 | Canvas | Slack Day Form | Feedback Form*
