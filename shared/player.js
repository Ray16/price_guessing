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

  // Current player stored locally (device preference)
  const LOCAL_KEY = 'pg_current_player';

  function dbUrl(path) {
    return `${FIREBASE_CONFIG.databaseURL}/${path}.json`;
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

      // Read current score first, only update if higher
      try {
        const res = await fetch(dbUrl(path));
        const current = await res.json();
        if (current !== null && current >= score) return;
        await fetch(dbUrl(path), {
          method: 'PUT',
          body: JSON.stringify(score),
        });
        // Update total
        await this._updateTotal(player, week);
      } catch (e) {
        console.warn('Firebase save failed, falling back to localStorage', e);
        _localSave(player, gameId, score);
      }
    },

    async _updateTotal(player, week) {
      try {
        const res = await fetch(dbUrl(`rankings/${week}/${player}/games`));
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
        const data = await res.json();
        return {
          weekKey: week,
          Ray:  { total: data?.Ray?.total  || 0, games: data?.Ray?.games  || {} },
          Hebe: { total: data?.Hebe?.total || 0, games: data?.Hebe?.games || {} },
        };
      } catch (e) {
        return { weekKey: week, Ray: { total: 0, games: {} }, Hebe: { total: 0, games: {} } };
      }
    },
  };

  // localStorage fallback
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
