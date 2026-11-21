# Professional Java Portfolio — Aye Myat Thwe

A polished, responsive portfolio built with Java Spring Boot and Thymeleaf.

## Features

- Professional dark visual design
- Light and dark theme toggle
- Responsive mobile navigation
- Animated hero section
- Scroll reveal animations
- Active navigation highlighting
- Project showcase mockups
- Skills bento grid
- Education and certification timeline
- Downloadable CV
- Contact links
- Mobile, tablet, and desktop support

## Technologies

- Java 17
- Spring Boot
- Thymeleaf
- HTML5
- CSS3
- JavaScript

## Open and run in IntelliJ IDEA

1. Extract the ZIP file.
2. Open IntelliJ IDEA.
3. Select **Open**.
4. Select the extracted `aye-myat-thwe-portfolio-professional` folder.
5. Wait for Maven to finish downloading dependencies.
6. Open:
   `src/main/java/com/ayemyatthwe/portfolio/PortfolioApplication.java`
7. Click the green Run button beside `main`.
8. Open `http://localhost:8080` in your browser.

## Files to edit

- Portfolio content:
  `src/main/resources/templates/index.html`
- Main visual design:
  `src/main/resources/static/css/style.css`
- Animations and theme:
  `src/main/resources/static/js/script.js`
- Java controller:
  `src/main/java/com/ayemyatthwe/portfolio/PortfolioController.java`

## Important customization

Replace each “Repository coming soon” link in `index.html` with the real GitHub repository URL.

Example:

```html
<a class="text-link" href="https://github.com/your-name/project-name"
   target="_blank" rel="noreferrer">
    View repository <span>↗</span>
</a>
```
