window.GAME_ID = 'reaction';
const ROUNDS = 10;
let times = [];
let round = 0;
let state = 'idle'; // idle | waiting | set | go | result
let startTime = 0;
let timeout = null;
let bestTime = Infinity;

const arena = document.getElementById('reaction-arena');
const text = document.getElementById('reaction-text');
const sub = document.getElementById('reaction-sub');
const progressEl = document.getElementById('progress-text');
const bestEl = document.getElementById('best-time');

function updateProgress() {
  progressEl.textContent = `第 ${round + 1} / ${ROUNDS} 轮`;
}

function setState(s) {
  state = s;
  arena.className = 'reaction-arena ' + s;
}

function startRound() {
  setState('set');
  text.textContent = '准备…';
  sub.textContent = '看到绿色立即点击！';
  // Random delay 1000-4000ms
  const delay = 1000 + Math.random() * 3000;
  timeout = setTimeout(() => {
    setState('go');
    text.textContent = '现在！';
    sub.textContent = '';
    startTime = performance.now();
  }, delay);
}

function handleClick() {
  if (state === 'idle') {
    round = 0;
    times = [];
    updateProgress();
    startRound();
    return;
  }

  if (state === 'set') {
    // Clicked too early
    clearTimeout(timeout);
    setState('too-early');
    text.textContent = '太早了！';
    sub.textContent = '点击继续…';
    state = 'penalty';
    return;
  }

  if (state === 'penalty') {
    startRound();
    return;
  }

  if (state === 'go') {
    const elapsed = Math.round(performance.now() - startTime);
    times.push(elapsed);
    if (elapsed < bestTime) {
      bestTime = elapsed;
      bestEl.textContent = elapsed + ' ms';
    }
    setState('waiting');
    text.textContent = elapsed + ' ms';
    sub.textContent = getReactionLabel(elapsed);
    state = 'result';
    return;
  }

  if (state === 'result') {
    round++;
    if (round >= ROUNDS) {
      showSummary();
    } else {
      updateProgress();
      startRound();
    }
    return;
  }

  if (state === 'waiting') {
    // first click to start
    updateProgress();
    startRound();
  }
}

function getReactionLabel(ms) {
  if (ms < 200) return '超人类反应！';
  if (ms < 250) return '极快！';
  if (ms < 300) return '很快！';
  if (ms < 400) return '正常水平';
  return '有点慢，继续练习';
}

function getRating(avg) {
  if (avg < 200) return '超人类';
  if (avg < 250) return '极快';
  if (avg < 300) return '很快';
  if (avg < 400) return '正常';
  return '较慢';
}

function showSummary() {
  const valid = times.filter(t => t > 0);
  const avg = Math.round(valid.reduce((a, b) => a + b, 0) / valid.length);
  const best = Math.min(...valid);

  document.getElementById('avg-ms').textContent = avg;
  document.getElementById('best-ms').textContent = best;
  document.getElementById('rating-val').textContent = getRating(avg);
  document.getElementById('all-times').innerHTML =
    '各轮成绩：' + times.map((t, i) => `第${i+1}轮: ${t}ms`).join('  ·  ');

  // Score: higher is better; use 10000 - avg as score (clamp to 0)
  const score = Math.max(0, 10000 - avg * 10);
  if (typeof Player !== 'undefined' && typeof window.GAME_ID !== 'undefined') {
    Player.saveScore(window.GAME_ID, score);
  }

  GameEngine.screens.show('#summary-screen');
}

arena.addEventListener('click', handleClick);
