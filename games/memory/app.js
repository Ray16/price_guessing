const EMOJIS = ['🐱', '🐶', '🦊', '🐼', '🦁', '🐸', '🦋', '🌸'];
const TOTAL_PAIRS = EMOJIS.length;

let flipped = [];
let matchedCount = 0;
let moves = 0;
let flipCount = 0;
let locked = false;
let startTime = null;
let timerInterval = null;

const grid = document.getElementById('memory-grid');
const matchedEl = document.getElementById('matched-count');
const moveEl = document.getElementById('move-count');
const flipEl = document.getElementById('flip-count');
const timeEl = document.getElementById('elapsed-time');

// Build card deck
const cards = GameEngine.utils.shuffle([...EMOJIS, ...EMOJIS]);

function buildGrid() {
  grid.innerHTML = '';
  cards.forEach((emoji, idx) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.dataset.emoji = emoji;
    card.dataset.idx = idx;
    card.innerHTML = `
      <div class="card-face card-back"><span class="card-back-icon">❓</span></div>
      <div class="card-face card-front">${emoji}</div>
    `;
    card.addEventListener('click', () => flipCard(card));
    grid.appendChild(card);
  });
}

function startTimer() {
  if (timerInterval) return;
  startTime = Date.now();
  timerInterval = setInterval(() => {
    timeEl.textContent = Math.round((Date.now() - startTime) / 1000);
  }, 500);
}

function flipCard(card) {
  if (locked) return;
  if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

  if (!startTime) startTimer();

  card.classList.add('flipped');
  flipped.push(card);
  flipCount++;
  flipEl.textContent = flipCount;

  if (flipped.length === 2) {
    moves++;
    moveEl.textContent = moves;
    locked = true;
    checkMatch();
  }
}

function checkMatch() {
  const [a, b] = flipped;
  if (a.dataset.emoji === b.dataset.emoji) {
    // Match!
    setTimeout(() => {
      a.classList.add('matched');
      b.classList.add('matched');
      flipped = [];
      locked = false;
      matchedCount++;
      matchedEl.textContent = matchedCount;
      if (matchedCount === TOTAL_PAIRS) {
        setTimeout(showWin, 400);
      }
    }, 400);
  } else {
    setTimeout(() => {
      a.classList.remove('flipped');
      b.classList.remove('flipped');
      flipped = [];
      locked = false;
    }, 900);
  }
}

function showWin() {
  clearInterval(timerInterval);
  const elapsed = Math.round((Date.now() - startTime) / 1000);
  // Score: base 1000, minus 5 per flip, minus 2 per second
  const score = Math.max(0, 1000 - flipCount * 5 - elapsed * 2);
  document.getElementById('final-time').textContent = elapsed;
  document.getElementById('final-moves').textContent = flipCount;
  document.getElementById('final-score').textContent = score;
  GameEngine.screens.show('#summary-screen');
}

buildGrid();
