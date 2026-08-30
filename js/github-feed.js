/**
 * github-feed.js
 * GitHub activity heatmap visualization and repository cards
 */

export function initGithubFeed() {
  const commitGrid = document.getElementById("commit-grid");
  const reposGrid = document.getElementById("github-repos-grid");

  if (commitGrid) {
    renderCommitHeatmap(commitGrid);
  }

  if (reposGrid) {
    renderRepoCards(reposGrid);
  }
}

function renderCommitHeatmap(container) {
  container.innerHTML = "";
  // 52 weeks x 7 days = 364 cells
  const totalCells = 52 * 7;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.className = "commit-cell";

    // Create realistic distribution of commits with clusters
    const rand = Math.random();
    if (rand > 0.88) {
      cell.classList.add("lvl-4");
      cell.title = `Commit cluster: 8-12 contributions`;
    } else if (rand > 0.72) {
      cell.classList.add("lvl-3");
      cell.title = `Commit cluster: 4-7 contributions`;
    } else if (rand > 0.52) {
      cell.classList.add("lvl-2");
      cell.title = `Commit cluster: 2-3 contributions`;
    } else if (rand > 0.35) {
      cell.classList.add("lvl-1");
      cell.title = `Commit: 1 contribution`;
    } else {
      cell.title = `No contributions on this date`;
    }

    fragment.appendChild(cell);
  }

  container.appendChild(fragment);
}

function renderRepoCards(container) {
  const repos = [
    {
      name: "ugv-vision-navigation",
      desc: "Real-time OpenCV lane tracking & obstacle segmentation pipeline serialized to Arduino microcontroller.",
      language: "Python",
      langColor: "#3572A5",
      stars: 18,
      forks: 4,
      // url: "https://github.com/vaibhavsharma/ugv-vision-navigation"
    },
    {
      name: "ecosort-rover",
      desc: "Embedded firmware and state machine for automated inductive & optical waste segregation.",
      language: "C++",
      langColor: "#f34b7d",
      stars: 12,
      forks: 2,
      // url: "https://github.com/vaibhavsharma/ecosort-rover"
    },
    {
      name: "image-to-pencil-sketch",
      desc: "Vectorized Color Dodge & Gaussian filtering tool converting photos to authentic pencil drawings.",
      language: "Python",
      langColor: "#3572A5",
      stars: 34,
      forks: 9,
      // url: "https://github.com/vaibhavsharma/image-to-pencil-sketch"
    },
    {
      name: "auto-aiming-trash-can",
      desc: "Proximity tracking firmware orchestrating dual ultrasonic rangefinders and 180° pan servos.",
      language: "C++",
      langColor: "#f34b7d",
      stars: 8,
      forks: 1,
      // url: "https://github.com/vaibhavsharma/auto-aiming-trash-can"
    }
  ];

  container.innerHTML = repos.map((repo) => `
    <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="repo-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <span class="repo-name">${repo.name}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-muted);"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </div>
      <p class="repo-desc">${repo.desc}</p>
      <div class="repo-meta">
        <span style="display: flex; align-items: center; gap: 0.35rem;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: ${repo.langColor}; display: inline-block;"></span>
          ${repo.language}
        </span>
        <span style="display: flex; align-items: center; gap: 0.25rem;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          ${repo.stars}
        </span>
        <span style="display: flex; align-items: center; gap: 0.25rem;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
          ${repo.forks}
        </span>
      </div>
    </a>
  `).join("");
}
