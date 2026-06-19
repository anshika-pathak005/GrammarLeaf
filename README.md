# GrammarLeaf

A simple and student-friendly English Grammar learning website built with **HTML, CSS, and JavaScript**.

GrammarLeaf is designed to help students understand and revise grammar concepts through clear explanations, sentence structures, helping verbs, uses, and examples. The content is organized in a simple and visual way to make learning easier and faster.

---

## Features

- Complete coverage of all 12 English Tenses
- Recognition / Identification points for quick revision
- Helping Verbs and Uses of each tense
- Sentence Structures:
  - Positive
  - Negative
  - Yes/No Interrogative
  - WH Interrogative
- Multiple examples for every tense
- Previous / Next tense navigation
- Verb Forms Dictionary (V1, V2, V3, V4, V5)
- Fast verb search
- Responsive design for mobile and desktop
- Data-driven content using JSON

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- JSON
- Lucide Icons

No frameworks, build tools, or external dependencies are required.

---

## Project Structure

```text
grammarleaf/
│
├── index.html
├── README.md
│
├── css/
│   ├── home.css
│   ├── style.css
│   ├── tense-detail.css
│   ├── tenses.css
│   └── verbs.css
│
├── data/
│   ├── tenses.json
│   └── verbs.json
│
├── js/
│   ├── home.js
│   ├── nav.js
│   ├── tense-detail.js
│   ├── tenses.js
│   └── verbs.js
│
└── pages/
    ├── quiz.html
    ├── tense-detail.html
    ├── tenses.html
    └── verbs.html
```

---

## Running Locally

### Option 1: Open Directly

Open `index.html` in your browser.

### Option 2: Run a Local Server (Recommended)

Since some pages load JSON data using `fetch()`, certain browsers may block requests when opened through the `file://` protocol.

Run a local server:

```bash
npx serve .
```

Or use the **Live Server** extension in VS Code.

---

## Managing Content

### Adding a New Verb

Edit:

```text
data/verbs.json
```

Example:

```json
{
  "base": "write",
  "past": "wrote",
  "pastParticiple": "written",
  "presentParticiple": "writing",
  "thirdPerson": "writes"
}
```

No code changes are required.

---

### Updating Tense Content

Edit:

```text
data/tenses.json
```

Each tense contains:

- Identification points
- Helping verbs
- Uses
- Sentence structures
- Examples

The detail pages are generated automatically from the JSON data.

---

## Deployment

GrammarLeaf is a fully static website and can be deployed directly on:

- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

No additional configuration is required.

---

## Future Scope

GrammarLeaf aims to become a complete English Grammar revision platform for students.

Planned additions include:

- Practice Quizzes
- Direct & Indirect Speech
- Active & Passive Voice
- Modals
- Articles
- Prepositions
- Conjunctions
- Subject-Verb Agreement
- Conditional Sentences
- Question Tags
- Grammar Notes and Quick Revision Tricks
- Search across all grammar topics
- Progress Tracking
- Dark / Light Theme

---

## Purpose

GrammarLeaf is built for students who find traditional grammar books difficult, overwhelming, or hard to follow. The goal is to explain grammar concepts in a simple, structured, and revision-friendly way using clear explanations, easy-to-understand sentence patterns, and practical examples, so that learning grammar feels less confusing and more approachable.

---

## License

This project is intended for educational and learning purposes.
