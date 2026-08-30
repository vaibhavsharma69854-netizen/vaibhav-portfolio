/**
 * app.js
 * Main application orchestrator for Vaibhav Sharma's portfolio
 */

import { projectsData, categories } from "./data/projects-data.js";
import { certificatesData, certCategories } from "./data/certificates-data.js";
import { journeyData } from "./data/journey-data.js";
import { initCanvasMesh } from "./canvas-mesh.js";
import { initSoundEffects } from "./sound-effects.js";
import { initCaseStudyModal } from "./case-study-modal.js";
import { initCommandPalette } from "./command-palette.js";
import { initGithubFeed } from "./github-feed.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Core Subsystems
  initCanvasMesh();
  initSoundEffects();
  initCaseStudyModal();
  initCommandPalette();
  initGithubFeed();

  // Initialize UI Sections
  initNavbarScrollSpy();
  initMobileMenu();
  renderProjects("all");
  initProjectFilterTabs();
  renderCertificates("all");
  initCertificateFilterTabs();
  renderJourneyTimeline();
  initContactForm();
  initLiveClock();
  initGlobalActions();
});

/* ==========================================================================
   Header & Scrollspy
   ========================================================================== */
function initNavbarScrollSpy() {
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    // Header shadow on scroll
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Scrollspy active highlight
    let currentId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}

function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}

/* ==========================================================================
   Projects Section Rendering & Filters
   ========================================================================== */
function initProjectFilterTabs() {
  const container = document.getElementById("project-filters");
  if (!container) return;

  container.innerHTML = categories.map((cat, idx) => `
    <button class="tab-btn ${idx === 0 ? "active" : ""}" data-category="${cat.id}">
      ${cat.label}
    </button>
  `).join("");

  const buttons = container.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const catId = btn.getAttribute("data-category");
      renderProjects(catId);
    });
  });
}

function renderProjects(filter = "all") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filtered = filter === "all" ? projectsData : projectsData.filter((p) => p.category === filter);

  grid.innerHTML = filtered.map((p) => `
    <div class="project-card">
      <div class="project-thumb-box">
        <img src="${p.image}" alt="${p.title}" class="project-thumb" loading="lazy" />
        <span class="project-status-badge">
          <span class="status-indicator">
            <span class="status-dot ${p.statusType}"></span>
            ${p.status}
          </span>
        </span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-tech-tags">
          ${p.technologies.slice(0, 5).map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          ${p.technologies.length > 5 ? `<span class="tech-tag">+${p.technologies.length - 5}</span>` : ""}
        </div>
        <div class="project-card-actions">
          <button class="btn btn-primary btn-sm" onclick="window.openProjectCaseStudy('${p.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            View Case Study
          </button>
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="View source on GitHub" aria-label="View on GitHub">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   Certificates Section Rendering & Filters
   ========================================================================== */
function initCertificateFilterTabs() {
  const container = document.getElementById("cert-filters");
  if (!container) return;

  container.innerHTML = certCategories.map((cat, idx) => `
    <button class="tab-btn ${idx === 0 ? "active" : ""}" data-category="${cat.id}">
      ${cat.label}
    </button>
  `).join("");

  const buttons = container.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const catId = btn.getAttribute("data-category");
      renderCertificates(catId);
    });
  });
}

function renderCertificates(filter = "all") {
  const grid = document.getElementById("certs-grid");
  if (!grid) return;

  const filtered = filter === "all" ? certificatesData : certificatesData.filter((c) => c.category === filter);

  grid.innerHTML = filtered.map((c) => `
    <div class="cert-card">
      <div class="cert-img-box">
        <img src="${c.image}" alt="${c.title}" class="cert-img" loading="lazy" />
      </div>
      <span class="cert-issuer">${c.issuer}</span>
      <h4 class="cert-title">${c.title}</h4>
      <span class="cert-date">Issued / Active: ${c.date}</span>
      <p class="case-text" style="font-size: 0.8125rem; margin-bottom: 1.25rem; flex-grow: 1;">${c.description}</p>
      <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.75rem; border-top: 1px solid var(--border-subtle);">
        <span style="font-family: var(--font-mono); font-size: 0.6875rem; color: var(--accent-cyan);">${c.credentialId}</span>
        <a href="${c.verificationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
          Verify
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   Journey Timeline Rendering
   ========================================================================== */
function renderJourneyTimeline() {
  const wrapper = document.getElementById("timeline-list");
  if (!wrapper) return;

  wrapper.innerHTML = journeyData.map((item) => `
    <div class="timeline-item">
      <div class="timeline-node"></div>
      <div class="timeline-card">
        <div class="timeline-date-row">
          <span class="timeline-year">${item.year}</span>
          <span class="timeline-badge">${item.badge}</span>
        </div>
        <h4 class="timeline-title">${item.title}</h4>
        <p class="timeline-summary">${item.summary}</p>
        <ul style="list-style: none; margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.35rem;">
          ${item.details.map((d) => `
            <li style="font-size: 0.8125rem; color: #94a3b8; display: flex; align-items: flex-start; gap: 0.5rem;">
              <span style="color: var(--accent-cyan);">›</span>
              <span>${d}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   Contact Form & Feedback
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const statusMsg = document.getElementById("form-status");

  if (!form || !statusMsg) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#user-name").value.trim();
    const email = form.querySelector("#user-email").value.trim();
    const message = form.querySelector("#user-message").value.trim();

    if (!name || !email || !message) {
      statusMsg.className = "form-status-msg error";
      statusMsg.textContent = "Error: Please fill in all required fields.";
      return;
    }

    // Client-side simulation ready for Formspree / EmailJS / Backend hook
    statusMsg.className = "form-status-msg success";
    statusMsg.textContent = "✓ Transmission received! Thank you, Vaibhav will respond promptly.";
    form.reset();

    // Fallback to mailto link if user wants to open default client
    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:vaibhav.sharma@example.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    console.log("Form submitted. Ready mailto link:", mailtoLink);
  });
}

/* ==========================================================================
   Global Helpers: Copy Email & Resume
   ========================================================================== */
function initGlobalActions() {
  window.copyEmailToClipboard = function() {
    const email = "vaibhav.sharma@example.com";
    navigator.clipboard.writeText(email).then(() => {
      showToastNotification("✓ Email copied to clipboard: " + email);
    }).catch(() => {
      showToastNotification("Email: " + email);
    });
  };

  window.triggerResumeDownload = function() {
    showToastNotification("📄 Initiating Resume download...");
    // Mock anchor click or preview modal
    const link = document.createElement("a");
    link.href = "assets/images/resume-preview.svg";
    link.download = "Vaibhav_Sharma_Resume.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
}

function showToastNotification(message) {
  let toast = document.getElementById("ui-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "ui-toast";
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: #0f172a;
      border: 1px solid var(--accent-cyan);
      color: #f8fafc;
      padding: 0.85rem 1.5rem;
      border-radius: var(--radius-sm);
      font-family: var(--font-mono);
      font-size: 0.8125rem;
      box-shadow: var(--shadow-lg), var(--glow-cyan-sm);
      z-index: 9999;
      transition: opacity 0.3s ease, transform 0.3s ease;
      opacity: 0;
      transform: translateY(10px);
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
  }, 3500);
}

/* ==========================================================================
   Live IST Clock Ticker in Footer
   ========================================================================== */
function initLiveClock() {
  const clockEl = document.getElementById("live-ist-clock");
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const options = {
      timeZone: "Asia/Kolkata",
      hour12: false,
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    clockEl.textContent = now.toLocaleString("en-US", options) + " IST";
  }

  update();
  setInterval(update, 1000);
}
