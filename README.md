# GrammarLeaf

English Grammar website for junior students - plain HTML, CSS, and JavaScript. No build step, no dependencies, no npm.

## How to open

Just open `index.html` in any browser. Done.

> Note: Because the pages fetch JSON files, you may need a local server if the browser blocks file:// fetches.
> Run one with: `npx serve .` or use the Live Server extension in VS Code.

## Deploy

Drop the entire folder on **Vercel**, **Netlify**, or **GitHub Pages** - it works as a static site with zero configuration.

## File structure

```
grammarleaf/
├── index.html              ← Homepage
├── pages/
│   ├── tenses.html         ← All 12 tenses tree
│   ├── tense-detail.html   ← Individual tense (reads ?id= from URL)
│   ├── verbs.html          ← Verb search + browse
│   └── quiz.html           ← Coming soon placeholder
├── css/
│   ├── style.css           ← Global styles, variables, components
│   ├── tenses.css          ← Tenses-specific styles
│   └── verbs.css           ← Verbs-specific styles
├── js/
│   └── nav.js              ← Active nav link highlight
└── data/
    ├── tenses.json         ← All 12 tenses data
    └── verbs.json          ← 35 verbs with all 5 forms
```

## Adding content

**New verb:** Add an entry to `data/verbs.json` following the existing structure.

**New tense:** Add an entry to `data/tenses.json` with the correct `group` value (`present`, `past`, or `future`).

No code changes needed - all pages are data-driven.

## Color palette

| Token     | Hex                            |
| --------- | ------------------------------ |
| `--c-950` | `#051F20` - Background         |
| `--c-900` | `#0B2B26` - Card background    |
| `--c-800` | `#163832` - Borders, subtle bg |
| `--c-700` | `#235347` - Muted borders      |
| `--c-400` | `#8EB69B` - Accent, icons      |
| `--c-100` | `#D4EED7` - Primary text       |
