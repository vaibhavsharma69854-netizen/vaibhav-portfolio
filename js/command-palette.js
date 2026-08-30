/**
 * command-palette.js
 * Quick navigation and command launcher (Cmd/Ctrl + K)
 */

export function initCommandPalette() {
  const paletteOverlay = document.getElementById("command-palette");
  const triggerBtn = document.getElementById("cmd-trigger-btn");
  const searchInput = document.getElementById("cmd-search-input");
  const resultsList = document.getElementById("cmd-results-list");

  if (!paletteOverlay || !searchInput || !resultsList) return;

  const commands = [
    { label: "Navigate: Home", action: () => scrollToSection("hero"), category: "Navigation" },
    { label: "Navigate: About Me & Philosophy", action: () => scrollToSection("about"), category: "Navigation" },
    { label: "Navigate: Technical Skills Matrix", action: () => scrollToSection("skills"), category: "Navigation" },
    { label: "Navigate: Spotlight - Currently Building", action: () => scrollToSection("currently-building"), category: "Navigation" },
    { label: "Navigate: Featured Projects", action: () => scrollToSection("projects"), category: "Navigation" },
    { label: "Navigate: Certifications & Learning", action: () => scrollToSection("certificates"), category: "Navigation" },
    { label: "Navigate: Engineering Journey Timeline", action: () => scrollToSection("journey"), category: "Navigation" },
    { label: "Navigate: GitHub & Open Source", action: () => scrollToSection("github"), category: "Navigation" },
    { label: "Navigate: Resume Section", action: () => scrollToSection("resume"), category: "Navigation" },
    { label: "Navigate: Contact & Collaboration", action: () => scrollToSection("contact"), category: "Navigation" },
    { label: "Case Study: Vision-Based Autonomous UGV", action: () => window.openProjectCaseStudy("ugv-nav"), category: "Case Studies" },
    { label: "Case Study: EcoSort Rover", action: () => window.openProjectCaseStudy("ecosort-rover"), category: "Case Studies" },
    { label: "Case Study: Image to Pencil Sketch Filter", action: () => window.openProjectCaseStudy("image-to-pencil-sketch"), category: "Case Studies" },
    { label: "Action: Copy Email Address to Clipboard", action: () => window.copyEmailToClipboard(), category: "Actions" },
    { label: "Action: Download Engineering Resume", action: () => window.triggerResumeDownload(), category: "Actions" }
  ];

  let filtered = [...commands];
  let selectedIndex = 0;

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  function openPalette() {
    paletteOverlay.classList.add("open");
    searchInput.value = "";
    filtered = [...commands];
    selectedIndex = 0;
    renderResults();
    setTimeout(() => searchInput.focus(), 50);
  }

  function closePalette() {
    paletteOverlay.classList.remove("open");
  }

  function renderResults() {
    resultsList.innerHTML = "";
    if (filtered.length === 0) {
      resultsList.innerHTML = `<li style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.875rem;">No commands found.</li>`;
      return;
    }

    filtered.forEach((cmd, idx) => {
      const li = document.createElement("li");
      li.className = `cmd-result-item ${idx === selectedIndex ? "selected" : ""}`;
      li.innerHTML = `
        <span style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-family: var(--font-mono); font-size: 0.6875rem; padding: 0.15rem 0.4rem; background: rgba(255,255,255,0.06); border-radius: 4px; color: var(--accent-cyan);">${cmd.category}</span>
          ${cmd.label}
        </span>
        <span style="font-family: var(--font-mono); font-size: 0.6875rem; color: var(--text-muted);">↵</span>
      `;
      li.addEventListener("click", () => {
        cmd.action();
        closePalette();
      });
      resultsList.appendChild(li);
    });
  }

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    filtered = commands.filter((c) => c.label.toLowerCase().includes(query) || c.category.toLowerCase().includes(query));
    selectedIndex = 0;
    renderResults();
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % filtered.length;
      renderResults();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + filtered.length) % filtered.length;
      renderResults();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
        closePalette();
      }
    } else if (e.key === "Escape") {
      closePalette();
    }
  });

  if (triggerBtn) {
    triggerBtn.addEventListener("click", openPalette);
  }

  paletteOverlay.addEventListener("click", (e) => {
    if (e.target === paletteOverlay) {
      closePalette();
    }
  });

  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      if (paletteOverlay.classList.contains("open")) {
        closePalette();
      } else {
        openPalette();
      }
    }
  });
}
