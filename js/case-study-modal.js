/**
 * case-study-modal.js
 * Interactive engineering case study viewer modal for projects
 */

import { projectsData } from "./data/projects-data.js";

export function initCaseStudyModal() {
  const modalOverlay = document.getElementById("case-study-modal");
  if (!modalOverlay) return;

  const modalContainer = modalOverlay.querySelector(".modal-container");
  const closeBtn = modalOverlay.querySelector(".modal-close-btn");
  const modalBody = modalOverlay.querySelector(".modal-body");
  const modalTitle = modalOverlay.querySelector(".modal-project-title");
  const modalSubtitle = modalOverlay.querySelector(".modal-project-subtitle");

  // Close handlers
  function closeModal() {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });

  // Global trigger function
  window.openProjectCaseStudy = function(projectId) {
    const project = projectsData.find((p) => p.id === projectId);
    if (!project || !project.caseStudy) return;

    modalTitle.textContent = project.title;
    modalSubtitle.textContent = project.subtitle;

    const cs = project.caseStudy;

    modalBody.innerHTML = `
      <div class="case-section">
        <h4 class="case-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          Executive Overview
        </h4>
        <p class="case-text">${cs.overview}</p>
      </div>

      <div class="case-section">
        <h4 class="case-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          The Problem Statement
        </h4>
        <p class="case-text">${cs.problem.statement}</p>
        <ul class="challenges-list">
          ${cs.problem.points.map((pt) => `<li class="challenge-item"><strong>Constraint:</strong> ${pt}</li>`).join("")}
        </ul>
      </div>

      <div class="case-section">
        <h4 class="case-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          Idea &amp; Approach
        </h4>
        <p class="case-text">${cs.idea.concept}</p>
        <p class="case-text" style="margin-top: 0.5rem;">${cs.idea.approach}</p>
      </div>

      <div class="case-section">
        <h4 class="case-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          System Architecture &amp; Dataflow
        </h4>
        <pre class="case-architecture-block"><code>${cs.architecture.trim()}</code></pre>
      </div>

      <div class="case-section">
        <h4 class="case-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
          Technology Stack &amp; Hardware BOM
        </h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 0.75rem;">
          <div class="challenge-item">
            <strong style="color: var(--accent-cyan);">Software &amp; Libraries:</strong>
            <p class="case-text" style="font-size: 0.875rem;">${cs.techStack.software.join(" • ")}</p>
          </div>
          <div class="challenge-item">
            <strong style="color: var(--accent-cyan);">Hardware Modules:</strong>
            <p class="case-text" style="font-size: 0.875rem;">${cs.techStack.hardware.join(" • ")}</p>
          </div>
        </div>
      </div>

      <div class="case-section">
        <h4 class="case-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          Development Phases
        </h4>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.75rem;">
          ${cs.developmentSteps.map((s) => `
            <div class="challenge-item">
              <strong style="color: var(--text-primary);">${s.step}</strong>
              <p class="case-text" style="font-size: 0.875rem;">${s.detail}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="case-section">
        <h4 class="case-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          Engineering Challenges &amp; Solutions
        </h4>
        <ul class="challenges-list">
          ${cs.challenges.map((c) => `
            <li class="challenge-item">
              <strong>Challenge: ${c.issue}</strong>
              <p class="case-text" style="font-size: 0.9375rem; color: #93c5fd; margin-top: 0.25rem;"><strong>Resolution:</strong> ${c.resolution}</p>
            </li>
          `).join("")}
        </ul>
      </div>

      <div class="case-section">
        <h4 class="case-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Results &amp; Verification
        </h4>
        <ul class="results-list">
          ${cs.results.map((r) => `<li class="result-item"><strong style="color: var(--accent-emerald);">✓ Verified:</strong> <span class="case-text" style="font-size: 0.9375rem;">${r}</span></li>`).join("")}
        </ul>
      </div>

      <div class="case-section">
        <h4 class="case-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
          What I Learned
        </h4>
        <ul class="challenges-list">
          ${cs.learnings.map((l) => `<li class="challenge-item"><p class="case-text" style="font-size: 0.9375rem;">💡 ${l}</p></li>`).join("")}
        </ul>
      </div>

      <div class="case-section">
        <h4 class="case-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          Future Improvements &amp; Scaling
        </h4>
        <ul class="challenges-list">
          ${cs.futureRoadmap.map((f) => `<li class="challenge-item"><p class="case-text" style="font-size: 0.9375rem;">🚀 ${f}</p></li>`).join("")}
        </ul>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          View on GitHub
        </a>
        <button class="btn btn-primary btn-sm" onclick="document.getElementById('case-study-modal').classList.remove('open'); document.body.style.overflow='';">
          Close Case Study
        </button>
      </div>
    `;

    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  };
}
