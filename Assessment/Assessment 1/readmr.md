# Assessment Project README

This document provides a **detailed explanation of the HTML and CSS tags/elements** used in `Assessment.html` and `assessment.css`. It is intended to help you understand the structure and function of each part of the code.

---

## HTML Tags/ELEMENTS in `Assessment.html`

### 1. `<!DOCTYPE html>`
- **Purpose:** Declares the document type and version of HTML (HTML5).

### 2. `<html lang="en">`
- **Purpose:** Root element of the HTML document, specifies language as English.

### 3. `<head>`
- **Purpose:** Contains metadata, links to stylesheets, and other resources.
  - `<meta charset="UTF-8">`  
    Sets character encoding to UTF-8.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`  
    Ensures responsive design on all devices.
  - `<title>`  
    Specifies the title of the web page.
  - `<link rel="stylesheet" href="./assessment.css">`  
    Links to the external CSS file.
  - `<script>`  
    Loads Font Awesome icons for use in the page.

### 4. `<body>`
- **Purpose:** Contains all visible content of the page.

### 5. `<div class="container">`
- **Purpose:** Main wrapper for all content.

---

#### **Intro Section**
- `<div class="intro">`  
  Container for the intro section.
  - `<div class="introbg"></div>`  
    Background layer (styled with CSS for image and blur effect).
  - `<div class="introtext">`  
    Text container for introduction.
    - `<h3>`  
      Section heading.
    - `<p>`  
      Paragraphs for descriptive text.

---

#### **Sidebar**
- `<aside class="sidebar">`  
  Sidebar containing logo, navigation, social media links, and footer.
  - `<div class="logo">`  
    Logo area.
    - `<a href="./Assessment.html">`  
      Link to homepage.
      - `<h2>`  
        Logo text.
  - `<nav>`  
    Navigation menu.
    - `<ul>`  
      List of navigation links.
      - `<li>`  
        Individual navigation item.
        - `<a href="#section">`  
          Anchor link to a section.
  - `<div class="sm">`  
    Social media icon links.
    - `<a href="..."><i class="..."></i></a>`  
      External links, each with an icon (`<i>`) from Font Awesome.
  - `<footer>`  
    Copyright and design credit.

---

#### **About Section**
- `<section id="about" class="about">`  
  Section about the company.
  - `<div class="aitem">`  
    Item within about section.
    - `<i>`  
      Icon element.
    - `<h3>`  
      Subheading.
    - `<p>`  
      Paragraphs of information.

---

#### **Work Section**
- `<section id="work" class="work">`  
  Section showcasing work.
  - `<h2>`  
    Section heading.
  - `<div class="img">`  
    Container for images.
    - `<img src="..." alt="...">`  
      Individual work images.

---

#### **Clients Section**
- `<section id="clients" class="clients">`  
  Section showcasing clients.
  - `<h2>`  
    Section heading.
  - `<p>`  
    Descriptive text.
  - `<div class="clogos">`  
    Container for client logos.
    - `<img src="..." alt="...">`  
      Individual client logos.

---

#### **Contact Section**
- `<section id="contact" class="contact">`  
  Contact section.
  - `<div class="continfo">`  
    Contact information.
    - `<h3>`  
      Subheading.
    - `<p>`  
      Additional information.
  - `<form class="contform">`  
    Contact form.
    - `<input type="text" placeholder="Your Name" required>`  
      Text input for name.
    - `<input type="email" placeholder="Your Email" required>`  
      Email input.
    - `<textarea placeholder="Message"></textarea>`  
      Message text area.
    - `<button type="submit">SEND</button>`  
      Submit button.

---

## CSS Selectors and Properties in `assessment.css`

### General Structure

- **Class Selectors:** `.container`, `.intro`, `.introbg`, `.introtext`, etc.
- **ID Selectors:** Not used in CSS, but sections in HTML use IDs for navigation.
- **Element Selectors:** Used for elements like `img`, `h2`, `ul`, etc.

---

### Key Sections

#### **Intro Section**
- `.intro`  
  Positions, sizes, colors, and aligns the intro area using flexbox.
- `.introbg`  
  Applies a background image with blur effect.
- `.introtext`  
  Styles the text container with background overlay and rounded corners.

#### **Sidebar**
- `.sidebar`  
  Styles the sidebar, positions it fixed, and lays out content vertically.
- `.sidebar .logo`  
  Styles the logo area.
- `.sidebar nav ul` and descendants  
  Removes list styles, spaces navigation items, and styles links.
- `.sidebar .sm a`  
  Styles social media icon links.

#### **About Section**
- `.about`  
  Arranges about section items with flexbox and spacing.
- `.aitem i`  
  Colors and spaces icons.

#### **Work Section**
- `.work`  
  Adds padding, borders, and margin for layout.
- `.img`  
  Makes image row scrollable with flexbox and gap.
- `.img img`  
  Styles images (size and rounded corners).

#### **Clients Section**
- `.clients`  
  Sets padding and margin.
- `.clogos`  
  Lays out client logos in a flexible, wrapping row.
- `.clogos img`  
  Styles client logos (size, border, background).

#### **Contact Section**
- `.contact`  
  Arranges contact info and form side by side.
- `.continfo`  
  Styles the info box.
- `.contform`  
  Arranges form fields in a column.
- `.contform input, textarea`  
  Styles input fields and textarea.
- `.contform button`  
  Styles the submit button.

#### **Media Queries**
- `@media(max-width: 700px)`  
  Changes padding for `.container`, `.intro`, `.introbg`, `.introtext` for mobile responsiveness.

---

## How Tags and CSS Work Together

- **HTML tags** provide the structure and semantic meaning of the content.
- **CSS classes/selectors** style and position these elements, making the page visually appealing and responsive.
- **Navigation links** use anchor tags and section IDs to enable smooth scrolling.
- **Sidebar and main content** are separated visually via layout and positioning.
- **Icons** are added using `<i>` tags and Font Awesome.
- **Forms** are styled for usability and appearance.

---

## Summary Table

| HTML Tag/Class/ID     | Purpose/Function                                      |
|-----------------------|------------------------------------------------------|
| `div.container`       | Main wrapper for all page content                    |
| `div.intro`           | Intro section with background and text               |
| `aside.sidebar`       | Fixed sidebar for navigation and links               |
| `section.about`       | About section with two items                         |
| `section.work`        | Showcases work images                                |
| `section.clients`     | Displays client logos                                |
| `section.contact`     | Contact info and form                                |
| `.introbg`            | Background image with blur                           |
| `.introtext`          | Overlay box for intro text                           |
| `.sidebar .logo`      | Logo area in sidebar                                 |
| `.sidebar nav ul li`  | Navigation menu items                                |
| `.sidebar .sm a`      | Social media icon links                              |
| `.aitem i`            | Icons in about section                               |
| `.img img`            | Work images styling                                  |
| `.clogos img`         | Client logo images styling                           |
| `.continfo`           | Contact info box                                     |
| `.contform`           | Contact form styling                                 |
| `@media`              | Responsive design for mobile devices                 |

---

## Additional Notes

- **Font Awesome** is used for icons via external CDN.
- **Responsive design** is achieved through media queries.
- **Flexbox** is widely used for layout in sidebar, about, work, clients, and contact sections.
- **Semantic tags** like `<aside>`, `<section>`, `<nav>`, `<footer>`, and `<form>` improve accessibility and clarity.

---

> For further customization, edit the HTML structure or CSS classes as needed for your project requirements.
