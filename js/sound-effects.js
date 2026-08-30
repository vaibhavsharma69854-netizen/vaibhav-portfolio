/**
 * sound-effects.js
 * Subtle sci-fi interface audio engine using Web Audio API (Zero external audio assets)
 */

let audioCtx = null;
let soundEnabled = false;

export function initSoundEffects() {
  const toggleBtn = document.getElementById("sound-toggle");
  if (!toggleBtn) return;

  // Restore user preference
  const savedPref = localStorage.getItem("vs_portfolio_sound");
  if (savedPref === "true") {
    soundEnabled = true;
    updateSoundUI(toggleBtn, true);
  }

  toggleBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem("vs_portfolio_sound", soundEnabled.toString());
    updateSoundUI(toggleBtn, soundEnabled);
    if (soundEnabled) {
      ensureAudioContext();
      playSciFiBlip(880, 0.05, "sine");
    }
  });

  // Attach subtle click sounds to buttons and links
  document.addEventListener("click", (e) => {
    if (!soundEnabled) return;
    const target = e.target.closest("button, .btn, .nav-link, .tab-btn, .repo-card, .cert-card");
    if (target) {
      playSciFiBlip(520, 0.03, "triangle");
    }
  });
}

function updateSoundUI(btn, enabled) {
  if (enabled) {
    btn.classList.add("sound-on");
    btn.setAttribute("title", "Mute Interface Audio");
    btn.setAttribute("aria-label", "Mute Interface Audio");
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
  } else {
    btn.classList.remove("sound-on");
    btn.setAttribute("title", "Enable Interface Audio");
    btn.setAttribute("aria-label", "Enable Interface Audio");
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
  }
}

function ensureAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

export function playSciFiBlip(frequency = 600, duration = 0.04, type = "sine") {
  if (!soundEnabled) return;
  try {
    ensureAudioContext();
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(frequency * 1.5, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    // Ignore audio context autoplay limitations
  }
}
