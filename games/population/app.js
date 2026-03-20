window.GAME_ID = 'population';

function formatChinese(n) {
  if (n >= 1e8) return (n / 1e8).toFixed(2) + ' 亿';
  if (n >= 1e4) return Math.round(n / 1e4) + ' 万';
  return n.toLocaleString('zh-CN');
}

// Patch data: extract flag emoji from name field before init
DATA.forEach(d => {
  const match = d.name.match(/^(\S+)\s+(.+)$/);
  if (match) { d._flag = match[1]; d._label = match[2]; }
  else { d._flag = ''; d._label = d.name; }
});

// Patch _load BEFORE calling init so it's used from the start
GameEngine.NumberRunner._load = function() {
  const q = this._q[this._idx];
  const $ = id => document.querySelector(id);
  if ($('#guess-label')) $('#guess-label').textContent = this._cfg.label;
  $('#progress-text').textContent = `${this._idx + 1} / ${this._q.length}`;
  $('#price-input').value = '';
  $('#guess-section').style.display = '';
  $('#result-section').classList.add('hidden');

  const flagEl = document.getElementById('item-flag');
  const nameEl = document.getElementById('item-name');
  if (flagEl) flagEl.textContent = q._flag || '';
  if (nameEl) nameEl.textContent = q._label || q.name;

  setTimeout(() => { try { $('#price-input').focus(); } catch(e) {} }, 50);
};

GameEngine.NumberRunner._fmt = function(v) {
  return formatChinese(Math.round(v));
};

GameEngine.NumberRunner.init(DATA, {
  symbol: '',
  decimals: 0,
  label: '这个国家有多少人口？',
  thresholds: [
    [10, 100, '🎯', '太准了！',   'excellent'],
    [25, 75,  '🔥', '非常接近！', 'excellent'],
    [50, 50,  '👍', '还不错！',   'good'],
    [75, 25,  '😅', '有点偏了…',  'good'],
    [Infinity, 0, '😵', '差太远了！', 'off'],
  ],
  summaryTitle: '🌍 猜人口',
});
