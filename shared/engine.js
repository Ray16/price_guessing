// Shared Game Engine
const GameEngine = (() => {
  // ── Utilities ──
  const utils = {
    shuffle(arr) {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    // Deterministic shuffle using Mulberry32 PRNG — same seed = same order
    seededShuffle(arr, seed) {
      let s = seed >>> 0;
      function rand() {
        s = (s + 0x6D2B79F5) >>> 0;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      }
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    // Returns today's date as YYYYMMDD integer — changes every day at midnight
    getDaySeed() {
      const d = new Date();
      return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
    },
    formatNum(val, decimals = 0) {
      return val.toLocaleString('zh-CN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    },
    pctOff(guess, actual) {
      return Math.abs(guess - actual) / actual * 100;
    }
  };

  // ── Screens ──
  const screens = {
    show(id) {
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      document.querySelector(id).classList.add('active');
    }
  };

  // ── Scoring ──
  // thresholds: array of [maxPctOff, points, emoji, message, grade]
  const DEFAULT_THRESHOLDS = [
    [5,   100, '🎯', '太准了！',   'excellent'],
    [15,  75,  '🔥', '非常接近！', 'excellent'],
    [30,  50,  '👍', '还不错！',   'good'],
    [50,  25,  '😅', '有点偏了…',  'good'],
    [Infinity, 0, '💸', '差太远了！', 'off'],
  ];
  const scoring = {
    fromPct(pctOff, thresholds = DEFAULT_THRESHOLDS) {
      for (const [max, pts, emoji, msg, grade] of thresholds) {
        if (pctOff <= max) return { pts, emoji, msg, grade };
      }
    },
    fromBool(correct, streak = 0) {
      if (correct) {
        const bonus = Math.min(streak, 4) * 10;
        const pts = 100 + bonus;
        return { pts, emoji: streak >= 3 ? '🔥' : '✅', msg: streak >= 3 ? `连对${streak+1}个！(+${bonus}连击)` : '答对了！', grade: 'excellent' };
      }
      return { pts: 0, emoji: '❌', msg: '答错了！', grade: 'off' };
    }
  };

  // ── NumberRunner ──
  // For games where user types a number guess
  const NumberRunner = {
    _q: [], _idx: 0, _score: 0, _accs: [], _cfg: {},
    init(questions, config) {
      this._q = utils.shuffle(questions);
      this._idx = 0; this._score = 0; this._accs = [];
      this._cfg = {
        symbol: '¥',
        decimals: 0,
        thresholds: DEFAULT_THRESHOLDS,
        label: '你觉得多少钱？',
        diffLabel: '差距',
        summaryTitle: '',
        ...config
      };
      this._bind();
      this._load();
    },
    _bind() {
      const $ = id => document.querySelector(id);
      $('#btn-guess').onclick = () => this._submit();
      $('#price-input').onkeydown = e => { if (e.key === 'Enter') this._submit(); };
      $('#btn-next').onclick = () => this._next();
      document.querySelectorAll('.btn-home').forEach(b => {
        if (b.tagName === 'BUTTON') {
          b.onclick = () => { window.location.href = '../../index.html'; };
        }
      });
    },
    _load() {
      const q = this._q[this._idx];
      const $ = id => document.querySelector(id);
      if ($('#item-image') && q.image) { $('#item-image').src = q.image; $('#item-image').alt = q.name; }
      if ($('#item-name')) $('#item-name').textContent = q.name;
      if ($('#currency-symbol')) $('#currency-symbol').textContent = this._cfg.symbol;
      if ($('#guess-label')) $('#guess-label').textContent = this._cfg.label;
      $('#progress-text').textContent = `${this._idx + 1} / ${this._q.length}`;
      $('#price-input').value = '';
      $('#guess-section').style.display = '';
      $('#result-section').classList.add('hidden');
      setTimeout(() => { try { $('#price-input').focus(); } catch(e) {} }, 50);
    },
    _fmt(v) {
      return this._cfg.symbol + utils.formatNum(v, this._cfg.decimals);
    },
    _submit() {
      const input = document.querySelector('#price-input');
      const guess = parseFloat(input.value);
      if (isNaN(guess) || guess < 0) {
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 400);
        return;
      }
      const actual = this._q[this._idx].price;
      const pct = utils.pctOff(guess, actual);
      const { pts, emoji, msg, grade } = scoring.fromPct(pct, this._cfg.thresholds);
      const acc = Math.max(0, 100 - pct);
      this._score += pts; this._accs.push(acc);
      document.querySelector('#score').textContent = this._score;
      const $ = id => document.querySelector(id);
      $('#guess-section').style.display = 'none';
      $('#result-emoji').textContent = emoji;
      $('#user-guess').textContent = this._fmt(guess);
      $('#actual-price').textContent = this._fmt(actual);
      if ($('#price-diff')) $('#price-diff').textContent = this._fmt(Math.abs(guess - actual));
      $('#result-message').textContent = `${msg} (+${pts} 分)`;
      $('#result-card').className = `result-card ${grade}`;
      const isLast = this._idx >= this._q.length - 1;
      $('#btn-next').textContent = isLast ? '查看结果' : '下一个 →';
      $('#result-section').classList.remove('hidden');
    },
    _next() {
      this._idx++;
      if (this._idx >= this._q.length) this._summary();
      else this._load();
    },
    _summary() {
      const avg = this._accs.reduce((a, b) => a + b, 0) / this._accs.length;
      const $ = id => document.querySelector(id);
      $('#final-score').textContent = this._score;
      $('#items-played').textContent = this._q.length;
      $('#avg-accuracy').textContent = Math.round(avg) + '%';
      if ($('#summary-theme') && this._cfg.summaryTitle) $('#summary-theme').textContent = this._cfg.summaryTitle;
      if (typeof Player !== 'undefined' && typeof window.GAME_ID !== 'undefined') {
        Player.saveScore(window.GAME_ID, this._score);
      }
      screens.show('#summary-screen');
    }
  };

  // ── ChoiceRunner ──
  // For multiple-choice games
  const ChoiceRunner = {
    _q: [], _idx: 0, _score: 0, _correct: 0, _streak: 0, _cfg: {},
    init(questions, config) {
      this._q = utils.shuffle(questions);
      this._idx = 0; this._score = 0; this._correct = 0; this._streak = 0;
      this._cfg = { summaryTitle: '', renderPrompt: null, renderChoice: null, onResult: null, ...config };
      this._bind();
      this._load();
    },
    _bind() {
      document.querySelector('#btn-next').onclick = () => this._next();
      document.querySelectorAll('.btn-home').forEach(b => {
        if (b.tagName === 'BUTTON') {
          b.onclick = () => { window.location.href = '../../index.html'; };
        }
      });
    },
    _load() {
      const q = this._q[this._idx];
      // Shuffle choices so correct answer isn't always in the same position
      const correctChoice = q.choices[q.correctIdx];
      const shuffledChoices = utils.shuffle([...q.choices]);
      const displayQ = { ...q, choices: shuffledChoices, correctIdx: shuffledChoices.indexOf(correctChoice) };

      document.querySelector('#progress-text').textContent = `${this._idx + 1} / ${this._q.length}`;
      // Render prompt
      const promptArea = document.querySelector('#prompt-area');
      if (this._cfg.renderPrompt) {
        promptArea.innerHTML = this._cfg.renderPrompt(displayQ);
      } else {
        promptArea.innerHTML = `<div class="prompt-box"><div class="prompt-text">${displayQ.prompt}</div></div>`;
      }
      // Render choices
      const container = document.querySelector('#choices-container');
      const numCols = displayQ.choices.length === 2 ? 'choices-2' : 'choices-4';
      container.innerHTML = `<div class="choices ${numCols}">${
        displayQ.choices.map((c, i) => `<button class="choice-btn${this._cfg.swatchBtn ? ' swatch-btn' : ''}" data-idx="${i}">${
          this._cfg.renderChoice ? this._cfg.renderChoice(c) : c.label
        }</button>`).join('')
      }</div>`;
      container.querySelectorAll('.choice-btn').forEach(btn => {
        btn.onclick = () => this._pick(parseInt(btn.dataset.idx), displayQ);
      });
      document.querySelector('#result-section').classList.add('hidden');
    },
    _pick(idx, q) {
      const correct = idx === q.correctIdx;
      const { pts, emoji, msg, grade } = scoring.fromBool(correct, correct ? this._streak : 0);
      if (correct) { this._streak++; this._correct++; } else { this._streak = 0; }
      this._score += pts;
      document.querySelector('#score').textContent = this._score;
      // Highlight buttons
      document.querySelectorAll('.choice-btn').forEach((btn, i) => {
        btn.classList.add('locked');
        if (i === q.correctIdx) btn.classList.add('correct');
        else if (i === idx && !correct) btn.classList.add('wrong');
      });
      const $ = id => document.querySelector(id);
      $('#result-emoji').textContent = emoji;
      $('#result-message').textContent = `${msg} (+${pts} 分)`;
      $('#result-card').className = `result-card ${grade}`;
      if (this._cfg.onResult) this._cfg.onResult(q, correct, idx);
      const isLast = this._idx >= this._q.length - 1;
      $('#btn-next').textContent = isLast ? '查看结果' : '下一个 →';
      $('#result-section').classList.remove('hidden');
    },
    _next() {
      this._idx++;
      if (this._idx >= this._q.length) this._summary();
      else this._load();
    },
    _summary() {
      const $ = id => document.querySelector(id);
      $('#final-score').textContent = this._score;
      $('#items-played').textContent = this._q.length;
      $('#avg-accuracy').textContent = Math.round(this._correct / this._q.length * 100) + '%';
      if ($('#summary-theme') && this._cfg.summaryTitle) $('#summary-theme').textContent = this._cfg.summaryTitle;
      if (typeof Player !== 'undefined' && typeof window.GAME_ID !== 'undefined') {
        Player.saveScore(window.GAME_ID, this._score);
      }
      screens.show('#summary-screen');
    }
  };

  return { utils, screens, scoring, NumberRunner, ChoiceRunner };
})();
