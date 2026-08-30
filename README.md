# 🚀 Vaibhav Sharma — Personal Technology Brand Portfolio

A modern, futuristic, minimal, and premium personal portfolio website and digital lab for **Vaibhav Sharma**, a B.Tech Computer Science Engineering student and aspiring AI/ML & Robotics Engineer.

Designed with an aesthetic inspired by modern AI/robotics startups, SpaceX/Tesla engineering interfaces, and Apple-grade presentation: deep charcoal/black base, subtle cyan/blue accents, glassmorphism, responsive typography, and high-performance interactive components.

---

## ⚡ Key Highlights & Architecture

- **Futuristic & Minimal Aesthetic**: Cyberpunk-clean dark UI with custom CSS variables, subtle glowing borders, and uncluttered typography.
- **Interactive Neural Constellation Background**: High-performance HTML5 Canvas rendering particle nodes that smoothly respond to mouse movement and pause when tab is inactive.
- **Deep-Dive Engineering Case Studies**: Interactive case study engine with system architecture ASCII diagrams, hardware BOM, challenge-solution breakdowns, and future roadmaps for:
  1. *Vision-Based Autonomous Navigation for UGV*
  2. *EcoSort Rover*
  3. *Image to Pencil Sketch*
  4. *Auto-Aiming Smart Trash Can*
  5. *Smart Door Alarm*
- **Spotlight "Currently Building"**: Real-time progress radar timeline highlighting the autonomous UGV build.
- **Interactive Command Palette (`Ctrl+K` / `Cmd+K`)**: Keyboard launcher for lightning-fast section navigation, case study inspection, and quick actions.
- **Subtle Sci-Fi Interface Audio (Web Audio API)**: Optional, tasteful micro-interaction sound effects synthesized natively in the browser without external audio files.
- **GitHub Heatmap & Repository Explorer**: Simulated commit activity visualization with direct repository cards.
- **Verified Credentials Gallery**: Filterable certificate matrix with verified links and custom badge graphics.
- **Zero-Dependency & Self-Contained**: 100% vanilla HTML5, CSS3, and modern modular ES6+ JavaScript. No node modules or build steps required.

---

## 📁 Directory Structure

```
vaibhav-portfolio/
├── index.html                   # Semantic HTML5 markup, SEO tags, microdata, and modals
├── css/
│   ├── design-system.css        # Theme tokens, typography, glassmorphism, buttons, status dots
│   └── main.css                 # Layouts, responsive grid, animations, component styling
├── js/
│   ├── app.js                   # Application orchestrator, scrollspy, filter handlers, live clock
│   ├── canvas-mesh.js           # Particle & neural constellation background canvas
│   ├── case-study-modal.js      # Engineering case study viewer modal
│   ├── command-palette.js       # Cmd/Ctrl+K interactive quick launcher
│   ├── sound-effects.js         # Web Audio API harmonic sound engine
│   ├── github-feed.js           # GitHub activity grid and repository cards
│   └── data/
│       ├── projects-data.js     # Full data & case study content for all 5 projects
│       ├── certificates-data.js # Certificate items, categories, and credentials
│       └── journey-data.js      # Milestone timeline entries
├── assets/
│   └── images/                  # High-tech SVG schematics, avatar, certificate badges & resume preview
└── README.md                    # Documentation & deployment guide
```

---

## 🛠️ How to Run Locally

You can preview the portfolio in any modern browser:

### Option 1: Python Local Server (Recommended)
Open your terminal inside the `vaibhav-portfolio` directory:
```bash
python -m http.server 8080
```
Then visit [`http://localhost:8080`](http://localhost:8080) in your browser.

### Option 2: Direct File Opening
Double click or drag `index.html` into Chrome, Edge, Firefox, or Safari.

---

## 🎨 How to Customize

All data is separated into clean JavaScript modules inside `js/data/`:

1. **Update Projects or Case Studies**:
   Edit `js/data/projects-data.js` to modify descriptions, add new projects, or tweak the problem/solution breakdown.
2. **Update Certifications**:
   Edit `js/data/certificates-data.js` with your certificate names, verification URLs, and credential IDs.
3. **Update Profile Avatar**:
   Replace `assets/images/avatar.svg` with your actual profile photograph (e.g. `assets/images/profile.jpg`) and update the `src` attribute in `index.html` line ~190.
4. **Update Resume**:
   Place your PDF resume at `assets/documents/vaibhav-sharma-resume.pdf` and update the download link in `js/app.js`.

---

## 🚀 One-Click Free Deployment

### GitHub Pages:
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```
2. In your GitHub repository, navigate to **Settings &rarr; Pages &rarr; Source &rarr; Deploy from branch `main`**.

### Vercel / Netlify:
- Drag and drop the `vaibhav-portfolio` folder directly into [Netlify Drop](https://app.netlify.com/drop) or import the GitHub repo into [Vercel](https://vercel.com).
