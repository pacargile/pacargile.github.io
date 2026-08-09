# Phillip Cargile — public website

A static, dependency-free academic research site that also communicates technical depth to scientific-industry audiences. The redesign emphasizes Phillip's stellar-astrophysics research program, named surveys and software projects, radiative-transfer work, measurable impact, publications, leadership, and direct access to the approved CV and research statement.

The industry résumé is intentionally not linked from the homepage until its content is reviewed and approved. Once frozen, it can be restored as a primary download alongside the CV.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

The site is compatible with GitHub Pages and ordinary static hosting. Before deploying, rebuild the PDFs from `../materials/` and copy them into `downloads/`.
