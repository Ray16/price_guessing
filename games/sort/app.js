const TOTAL = 25;
let next = 1;
let errors = 0;
let startTime = null;
let timerInterval = null;
let started = false;

const arena = document.getElementById('sort-arena');
const nextEl = document.getElementById('next-num');
const timerEl = document.getElementById('timer');
const errorMsg = document.getElementById('error-msg');

function placeNumbers() {
  arena.innerHTML = '';
  const nums = Array.from({ length: TOTAL }, (_, i) => i + 1);
  const shuffled = GameEngine.utils.shuffle(nums);
  const W = arena.clientWidth || 500;
  const H = arena.clientHeight || 400;
  const padding = 28;
  const size = 48;

  // Place with simple collision avoidance
  const placed = [];
  shuffled.forEach(num => {
    let x, y, tries = 0, ok = false;
    while (!ok && tries < 200) {
      x = padding + Math.random() * (W - size - padding * 2);
      y = padding + Math.random() * (H - size - padding * 2);
      ok = placed.every(p => Math.hypot(p.x - x, p.y - y) >= size + 6);
      tries++;
    }
    placed.push({ x, y });

    const el = document.createElement('div');
    el.className = 'sort-num' + (num === 1 ? ' next' : '');
    el.textContent = num;
    el.style.left = Math.round(x) + 'px';
    el.style.top = Math.round(y) + 'px';
    el.dataset.num = num;
    el.addEventListener('click', () => handleClick(num, el));
    arena.appendChild(el);
  });
}

function startTimer() {
  startTime = performance.now();
  timerInterval = setInterval(() => {
    const elapsed = (performance.now() - startTime) / 1000;
    timerEl.textContent = elapsed.toFixed(1);
  }, 100);
}

function handleClick(num, el) {
  if (!started) {
    started = true;
    startTimer();
  }

  if (num === next) {
    el.classList.add('tapped');
    el.classList.remove('next');
    errorMsg.textContent = '';
    next++;
    nextEl.textContent = next <= TOTAL ? next : '—';

    // Highlight next number
    if (next <= TOTAL) {
      const nextEl2 = arena.querySelector(`.sort-num[data-num="${next}"]`);
      if (nextEl2) nextEl2.classList.add('next');
    }

    if (next > TOTAL) {
      clearInterval(timerInterval);
      const elapsed = (performance.now() - startTime) / 1000;
      setTimeout(() => showSummary(elapsed), 300);
    }
  } else {
    errors++;
    el.classList.add('wrong-tap');
    errorMsg.textContent = `应该点 ${next}！`;
    setTimeout(() => {
      el.classList.remove('wrong-tap');
    }, 400);
  }
}

function showSummary(elapsed) {
  const score = Math.max(0, Math.round(5000 - elapsed * 50 - errors * 100));
  document.getElementById('final-time').textContent = elapsed.toFixed(2);
  document.getElementById('final-errors').textContent = errors;
  document.getElementById('final-score').textContent = score;
  GameEngine.screens.show('#summary-screen');
}

placeNumbers();
