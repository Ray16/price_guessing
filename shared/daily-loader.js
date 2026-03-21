/**
 * daily-loader.js
 * Optionally fetches today's AI-generated questions from /api/daily-questions.
 * Falls back to the static DATA array if the API is unavailable or slow.
 *
 * Usage (in game app.js):
 *   DailyLoader.load('quote', DATA, { timeoutMs: 5000 }).then(questions => {
 *     GameEngine.ChoiceRunner.init(questions, config);
 *   });
 */

const DailyLoader = (() => {
  const CACHE_KEY_PREFIX = 'daily_q_';
  const TODAY = (() => {
    const d = new Date();
    return `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`;
  })();

  function getCached(game) {
    try {
      const raw = localStorage.getItem(CACHE_KEY_PREFIX + game + '_' + TODAY);
      if (raw) return JSON.parse(raw);
    } catch(e) {}
    return null;
  }

  function setCached(game, questions) {
    try {
      localStorage.setItem(CACHE_KEY_PREFIX + game + '_' + TODAY, JSON.stringify(questions));
    } catch(e) {}
  }

  function showLoadingScreen() {
    const el = document.getElementById('daily-loading');
    if (el) el.style.display = 'flex';
  }

  function hideLoadingScreen() {
    const el = document.getElementById('daily-loading');
    if (el) el.style.display = 'none';
  }

  /**
   * @param {string} game      — "quote" or "music"
   * @param {Array}  fallback  — static DATA array to fall back to
   * @param {Object} opts      — { timeoutMs: number }
   * @returns {Promise<Array>} — 10 questions for today
   */
  async function load(game, fallback, { timeoutMs = 5000 } = {}) {
    // 1. Check localStorage cache for today
    const cached = getCached(game);
    if (cached && cached.length >= 10) {
      console.log(`[DailyLoader] Using cached ${game} questions for ${TODAY}`);
      return cached;
    }

    // 2. Try to fetch from API
    showLoadingScreen();
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      const res = await fetch(`/api/daily-questions?game=${game}&date=${TODAY}`, {
        signal: controller.signal,
      });
      clearTimeout(timer);

      if (res.ok) {
        const { questions } = await res.json();
        if (questions && questions.length >= 5) {
          setCached(game, questions);
          hideLoadingScreen();
          console.log(`[DailyLoader] Fetched fresh ${game} questions from API`);
          return questions;
        }
      }
    } catch(e) {
      console.warn('[DailyLoader] API unavailable, using static data:', e.message);
    }

    // 3. Fall back to static data with daily seed
    hideLoadingScreen();
    const seed = parseInt(TODAY, 10);
    return GameEngine.utils.seededShuffle(fallback, seed).slice(0, 10);
  }

  return { load };
})();
