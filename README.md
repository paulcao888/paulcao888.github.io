# Paul Cao — Personal AI Portfolio

A personal website about practical AI experiments and language-learning tools.

**Website:** https://paulcao888.github.io/

## Featured work

- [FluentPal / AI Polyglot Learning](https://github.com/paulcao888/AI-Polyglot-Learning) — a voice-conversation practice prototype built with React, TypeScript, and Gemini.
- [WordUp](https://github.com/paulcao888/wordup) — an editorial vocabulary-learning web app with spaced repetition.
- [FluentPal product concept](https://github.com/paulcao888/everyone-speak-English) — a companion landing-page exploration.

The public-project exploration section credits the original projects. Portfolio previews are illustrative interface studies, not screenshots or claims of measured results.

## Edit the site

| File | What to change |
| --- | --- |
| `index.html` | Introduction, project descriptions, links, and about section |
| `styles.css` | Colors, typography, spacing, and mobile layout |
| `script.js` | Project filters and footer year |
| `assets/favicon.svg` | Browser icon |

There is no build step, package install, backend, API key, or analytics. The site uses Google Fonts with local system-font fallbacks. All content and project links remain available without JavaScript; JavaScript adds the project filters.

## Preview locally

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/.

## Publish updates

GitHub Pages publishes the root of the `main` branch. The empty `.nojekyll` file keeps this as a plain static site.

1. Edit the files.
2. Preview at desktop and mobile widths; check project links and filters.
3. Commit and push to `main`.
4. Wait for the GitHub Pages deployment to finish, then check the live page.

Settings: **Repository → Settings → Pages → Deploy from a branch → main → /(root)**.

For a future project, duplicate an `<article class="project">` in `index.html`, set its category to `learning` or `concept`, update its links and descriptions, then update the all-work count and initial project-count text.
