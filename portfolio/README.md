<div align="center">

# ⚡ Vishal Kumar — Developer Portfolio

### BCA Student · MERN Stack Developer · Cybersecurity Learner

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![License](https://img.shields.io/badge/License-MIT-f5a623?style=flat-square)](LICENSE)

**A premium, production-ready personal portfolio with a dark cyberpunk-editorial design.**  
Electric amber accents · Glassmorphism cards · Smooth animations · Fully responsive

[📬 Contact](mailto:vishal.kumar.1304200504@gmail.com) · [🐙 GitHub](https://github.com/vishalcoder0912)

</div>

---

## 📸 Preview

```
┌─────────────────────────────────────────────────────────┐
│  [VK]           About  Skills  Projects  Contact  Resume │
├─────────────────────────────────────────────────────────┤
│                                    ┌─────────────────┐  │
│  • Available for opportunities     │ portfolio.ts    │  │
│                                    │                 │  │
│  Vishal                            │ const dev = {   │  │
│  Kumar                             │   name: "VK",   │  │
│                                    │   role: "Dev",  │  │
│  BCA Student & Developer           │   open: true    │  │
│  / & Cybersecurity Learner         │ }               │  │
│                                    └─────────────────┘  │
│  [Download Resume]  [Contact Me]                        │
│                                                         │
│  GitHub  LinkedIn  Twitter  Email                       │
└─────────────────────────────────────────────────────────┘
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎬 **Loading Screen** | Animated intro with branded progress bar |
| 🧭 **Smart Navbar** | Sticky with scroll progress indicator + active section highlight |
| 🌓 **Dark / Light Mode** | Theme toggle persisted to `localStorage` |
| 📱 **Hamburger Menu** | Smooth mobile navigation |
| 🖥️ **Animated Hero** | Live terminal card + floating stat widgets |
| 👤 **About Section** | Bio, strength cards, and tech stack badges |
| 📊 **Skills Section** | Tabbed categories with animated progress bars |
| 🗂️ **Projects Grid** | Filterable cards (All / Featured) with hover effects |
| 📅 **Experience Timeline** | Vertical timeline with achievement bullets |
| 🎓 **Education Cards** | Degrees and certifications |
| 📬 **Contact Form** | With email integration hook (EmailJS / Formspree) |
| 🦶 **Footer** | Quick nav, social links, back-to-top |
| 🔍 **SEO Ready** | Meta tags, og tags, structured title in `index.html` |

---

## 🛠️ Tech Stack

```
Frontend     →  React 18 (functional components) + Vite 5
Animations   →  Framer Motion 11
Scroll UX    →  react-intersection-observer
Styling      →  Pure CSS with custom design system (CSS variables)
Typography   →  Syne (display) · JetBrains Mono (code) · DM Sans (body)
Email        →  @emailjs/browser (plug-and-play)
```

---

## 📁 Project Structure

```
vishal-portfolio/
│
├── public/
│   ├── favicon.svg              # Custom [VK] branded favicon
│   └── Vishal_Resume.pdf        # ← Drop your resume here
│
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx       # Sticky nav, theme toggle, hamburger
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx         # Animated terminal + floating stats
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.jsx        # Bio, strength cards, tech badges
│   │   │   └── About.css
│   │   ├── Skills/
│   │   │   ├── Skills.jsx       # Tabbed skill categories + progress bars
│   │   │   └── Skills.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx     # Filterable project card grid
│   │   │   └── Projects.css
│   │   ├── Experience/
│   │   │   ├── Experience.jsx   # Vertical timeline layout
│   │   │   └── Experience.css
│   │   ├── Education/
│   │   │   ├── Education.jsx    # Degree + certification cards
│   │   │   └── Education.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx      # Form with email integration
│   │   │   └── Contact.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx       # Quick nav + socials + copyright
│   │   │   └── Footer.css
│   │   └── UI/
│   │       ├── Loader.jsx       # Animated loading screen
│   │       └── Loader.css
│   │
│   ├── data/
│   │   └── portfolio.js         # ⭐ ALL YOUR CONTENT LIVES HERE
│   │
│   ├── hooks/
│   │   └── useScrollProgress.js # Scroll %, active section, theme hooks
│   │
│   ├── styles/
│   │   └── globals.css          # Design system: CSS variables + base styles
│   │
│   ├── App.jsx                  # Root component + loader logic
│   └── main.jsx                 # React entry point
│
├── index.html                   # SEO meta tags live here
├── vite.config.js
├── package.json
└── README.md
```

---

## ⚡ Quick Start

### Prerequisites

Make sure you have **Node.js 18+** and **npm** installed.

```bash
node --version   # should be 18+
npm --version    # should be 9+
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/vishalcoder0912/portfolio-website.git
cd portfolio-website

# 2. Install all dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:3000** in your browser. 🎉

### Build for Production

```bash
# Create optimised production build
npm run build

# Preview the production build locally
npm run preview
```

The build output goes to the `dist/` folder — ready to deploy anywhere.

---

## 🎨 Customisation Guide

### Step 1 — Update Your Content

All portfolio content lives in **one single file**:

```
src/data/portfolio.js
```

Open it and update each export:

```js
// Your personal info
export const personalInfo = {
  name: "Vishal Kumar",
  title: "BCA Student & Developer",
  email: "your@email.com",
  // ...
};

// Your projects from GitHub
export const projects = [
  {
    title: "My Project",
    description: "What it does...",
    tags: ["React", "Node.js"],
    github: "https://github.com/vishalcoder0912/my-project",
    // ...
  },
];

// Skills, experience, education — all in the same file
```

### Step 2 — Add Your Resume

Place your PDF in the `public/` folder:

```
public/Vishal_Resume.pdf
```

The "Download Resume" button in the Hero is already wired to this path.

### Step 3 — Connect the Contact Form

Open `src/components/Contact/Contact.jsx` and find the `handleSubmit` function.

**Option A — EmailJS (recommended, free tier available)**

```bash
npm install @emailjs/browser
```

```js
import emailjs from '@emailjs/browser';

// Inside handleSubmit:
await emailjs.send(
  'YOUR_SERVICE_ID',    // from emailjs.com dashboard
  'YOUR_TEMPLATE_ID',
  form,
  'YOUR_PUBLIC_KEY'
);
```

Sign up free at [emailjs.com](https://www.emailjs.com) → create a service → create a template → copy your keys.

**Option B — Formspree (zero config)**

```js
// Inside handleSubmit:
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

Sign up at [formspree.io](https://formspree.io) → create a form → copy the endpoint ID.

### Step 4 — Change the Accent Color (Optional)

Edit one CSS variable in `src/styles/globals.css` and the entire theme updates:

```css
:root {
  --accent: #f5a623;   /* ← Swap this for any color */
}
```

Some ideas:
| Color | Hex |
|---|---|
| Electric Amber (default) | `#f5a623` |
| Cyan | `#06b6d4` |
| Purple | `#8b5cf6` |
| Emerald | `#22c55e` |
| Rose | `#f43f5e` |

---

## 🌐 Deployment

### Vercel *(Recommended — free, auto-deploys)*

```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com) for **automatic deploys on every push**.

### Netlify

```bash
npm run build
# Drag & drop the dist/ folder at app.netlify.com/drop
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:

```json
"deploy": "gh-pages -d dist"
```

Then:

```bash
npm run build && npm run deploy
```

> **Note:** Add `base: '/your-repo-name/'` to `vite.config.js` if deploying to a GitHub Pages subpath.

---

## 📦 Dependencies

### Runtime

| Package | Version | Purpose |
|---|---|---|
| `react` | ^18.2.0 | UI framework |
| `react-dom` | ^18.2.0 | DOM rendering |
| `framer-motion` | ^11.0.0 | Page & component animations |
| `react-intersection-observer` | ^9.5.3 | Scroll-triggered section reveals |
| `@emailjs/browser` | ^4.3.2 | Contact form email sending |

### Dev

| Package | Version | Purpose |
|---|---|---|
| `vite` | ^5.0.0 | Lightning-fast build tool |
| `@vitejs/plugin-react` | ^4.2.0 | React + Fast Refresh support |

---

## 🔍 SEO Checklist

Before going live, make sure these are updated in `index.html`:

- [x] `<title>` — set to your name
- [x] `<meta name="description">` — a one-line summary of who you are
- [x] `og:title` and `og:description` — for social link previews
- [ ] `og:image` — add a 1200×630 screenshot for link previews on LinkedIn/Twitter
- [ ] Register at [Google Search Console](https://search.google.com/search-console)
- [ ] Optional: [Google Analytics](https://analytics.google.com) or privacy-friendly [Plausible](https://plausible.io)

---

## 🐛 Troubleshooting

**`npm install` fails**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Port 3000 already in use**  
Change the port in `vite.config.js`:
```js
server: { port: 3001 }
```

**Fonts not loading**  
Google Fonts loads via CDN — make sure you have an internet connection during development.

**Contact form not sending**  
- Replace placeholder IDs in `Contact.jsx` with real values from your EmailJS dashboard
- Open the browser console (F12) to see any error messages

---

## 🗺️ Future Ideas

- [ ] Blog section with MDX support
- [ ] GitHub contribution graph widget
- [ ] Cybersecurity CTF writeups section
- [ ] Project detail modal / expanded view
- [ ] Animated cursor trail

---

## 📄 License

This project is open source under the [MIT License](LICENSE).  
Free to use, fork, and modify — a ⭐ on the repo is always appreciated!

---

<div align="center">

**Built with 💛 by Vishal Kumar**

[GitHub](https://github.com/vishalcoder0912) · [LinkedIn](https://linkedin.com/in/vishal-kumar) · [Email](mailto:vishal.kumar.1304200504@gmail.com)

*"Wanna be jack of all trades"* — @VishalXTech

</div>
