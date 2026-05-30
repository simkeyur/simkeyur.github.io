# simkeyur.github.io

Personal portfolio and résumé site for **Keyur Patel**, Senior Software Engineer (Agentic AI).

🔗 **Live:** https://simkeyur.github.io

## About

A lightweight, single-page static site — no frameworks, no build step. It presents an
About/bio, an experience timeline, recent projects, education, skills, and awards, plus a
downloadable résumé.

Theme: a warm "resume paper" aesthetic — cream background with a subtle paper grain,
serif typography (Playfair Display + Lora), and an ochre accent.

## Tech stack

- Plain HTML5, CSS3, and vanilla JavaScript
- [Google Fonts](https://fonts.google.com/) — Playfair Display (headings) + Lora (body)
- Hosted on **GitHub Pages**

## Project structure

| Path | Purpose |
|------|---------|
| `index.html` | All page content and markup |
| `styles.css` | Theme + layout (palette centralized in `:root`) |
| `script.js` | Mobile menu toggle + scroll fade-in animations |
| `images/` | Profile photo and company/school logos |
| `keyur_resume_2026.pdf` | Downloadable résumé |
| `.github/workflows/static.yml` | GitHub Pages deploy workflow |

## Local preview

No build tooling is required. Open `index.html` directly, or serve the folder:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Theming

All colors live in the `:root` block at the top of `styles.css`. Adjust the CSS custom
properties (e.g. `--paper`, `--accent`, `--ink`) to retheme the whole site in one place.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow, which publishes the repository
root to GitHub Pages.

## License

[MIT](LICENSE)
