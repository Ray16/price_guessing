// Player & Weekly Ranking System — Firebase Realtime Database
// Requires shared/firebase-config.js to be loaded first

const Player = (() => {
  function getWeekKey() {
    const now = new Date();
    const d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    const day = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - day);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return `${d.getUTCFullYear()}-W${week}`;
  }

  const LOCAL_KEY = 'pg_current_player';

  function dbUrl(path) {
    return `${FIREBASE_CONFIG.databaseURL}/${path}.json`;
  }

  // ── Firebase connectivity check (call once on page load to verify setup) ──
  async function checkFirebase() {
    try {
      const res = await fetch(dbUrl('_ping'), {
        method: 'PUT',
        body: JSON.stringify(Date.now()),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error('[Firebase] Write failed:', res.status, text);
        if (res.status === 401 || res.status === 403) {
          console.error('[Firebase] Permission denied — check your database rules at https://console.firebase.google.com');
        }
      } else {
        console.log('[Firebase] Connected OK');
      }
    } catch (e) {
      console.error('[Firebase] Network error:', e.message);
    }
  }

  return {
    getCurrent() {
      return localStorage.getItem(LOCAL_KEY);
    },

    setCurrent(name) {
      localStorage.setItem(LOCAL_KEY, name);
    },

    async saveScore(gameId, score) {
      const player = this.getCurrent();
      if (!player) return;
      const week = getWeekKey();
      const path = `rankings/${week}/${player}/games/${gameId}`;

      try {
        const res = await fetch(dbUrl(path));
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const current = await res.json();
        if (current !== null && current >= score) return;
        const writeRes = await fetch(dbUrl(path), {
          method: 'PUT',
          body: JSON.stringify(score),
        });
        if (!writeRes.ok) throw new Error(`Write failed: HTTP ${writeRes.status}`);
        console.log(`[Firebase] Saved ${gameId} score: ${score} for ${player}`);
        await this._updateTotal(player, week);
      } catch (e) {
        console.warn('[Firebase] Save failed, using localStorage fallback:', e.message);
        _localSave(player, gameId, score);
      }
    },

    async _updateTotal(player, week) {
      try {
        const res = await fetch(dbUrl(`rankings/${week}/${player}/games`));
        if (!res.ok) return;
        const games = await res.json();
        if (!games) return;
        const total = Object.values(games).reduce((a, b) => a + b, 0);
        await fetch(dbUrl(`rankings/${week}/${player}/total`), {
          method: 'PUT',
          body: JSON.stringify(total),
        });
      } catch (e) { /* silent */ }
    },

    async getRankings() {
      const week = getWeekKey();
      try {
        const res = await fetch(dbUrl(`rankings/${week}`));
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        return {
          weekKey: week,
          Ray:  { total: data?.Ray?.total  || 0, games: data?.Ray?.games  || {} },
          Hebe: { total: data?.Hebe?.total || 0, games: data?.Hebe?.games || {} },
        };
      } catch (e) {
        console.warn('[Firebase] getRankings failed:', e.message);
        return { weekKey: week, Ray: { total: 0, games: {} }, Hebe: { total: 0, games: {} } };
      }
    },

    checkFirebase,
  };

  function _localSave(player, gameId, score) {
    const key = 'pg_local_scores';
    const week = getWeekKey();
    let data = {};
    try { data = JSON.parse(localStorage.getItem(key) || '{}'); } catch(e) {}
    if (data.week !== week) data = { week, Ray: {}, Hebe: {} };
    if (!data[player]) data[player] = {};
    data[player][gameId] = Math.max(data[player][gameId] || 0, score);
    localStorage.setItem(key, JSON.stringify(data));
  }
})();

// Run connectivity check on load (results visible in browser DevTools console)
Player.checkFirebase();
