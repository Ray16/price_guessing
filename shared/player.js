// Player & Weekly Ranking System
const Player = (() => {
  const KEY = 'pgData_v2';

  function getWeekKey() {
    const now = new Date();
    const d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    const day = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - day);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return `${d.getUTCFullYear()}-W${week}`;
  }

  const emptyPlayer = () => ({ total: 0, games: {} });

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      const data = raw ? JSON.parse(raw) : null;
      const week = getWeekKey();
      if (!data || data.weekKey !== week) {
        return { weekKey: week, current: data?.current || null, Ray: emptyPlayer(), Hebe: emptyPlayer() };
      }
      return data;
    } catch(e) {
      return { weekKey: getWeekKey(), current: null, Ray: emptyPlayer(), Hebe: emptyPlayer() };
    }
  }

  function save(d) { localStorage.setItem(KEY, JSON.stringify(d)); }

  return {
    getCurrent() { return load().current; },
    setCurrent(name) { const d = load(); d.current = name; save(d); },
    saveScore(gameId, score) {
      const d = load();
      const p = d.current;
      if (!p || !d[p]) return;
      const prev = d[p].games[gameId] || 0;
      // Only update if new score is higher for that game this week
      d[p].games[gameId] = Math.max(prev, score);
      // Recompute total
      d[p].total = Object.values(d[p].games).reduce((a, b) => a + b, 0);
      save(d);
    },
    getRankings() {
      const d = load();
      return { Ray: d.Ray, Hebe: d.Hebe, weekKey: d.weekKey };
    }
  };
})();
