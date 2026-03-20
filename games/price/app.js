// Price Guesser - Main App Logic
window.GAME_ID = 'price';

const $ = (sel) => document.querySelector(sel);
const show = (id) => {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
};

// ── State ──
let currentTheme = null;
let currentIndex = 0;
let score = 0;
let accuracies = [];

// ── Helpers ──
function formatPrice(value, currency) {
  if (currency === '¥') return `¥${Math.round(value).toLocaleString()}`;
  return `${currency}${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Render Themes ──
function renderThemes() {
  const grid = $('#theme-grid');
  grid.innerHTML = THEMES.map(theme => `
    <div class="theme-card" data-theme="${theme.id}">
      <img class="theme-card-image" src="${theme.cover}" alt="${theme.name}" loading="lazy">
      <div class="theme-card-body">
        <div class="theme-card-emoji">${theme.emoji}</div>
        <div class="theme-card-title">${theme.name}</div>
        <div class="theme-card-desc">${theme.description}</div>
        <div class="theme-card-count">${theme.items.length} items</div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.theme-card').forEach(card => {
    card.addEventListener('click', () => {
      const theme = THEMES.find(t => t.id === card.dataset.theme);
      startGame(theme);
    });
  });
}

// ── Game ──
function padTo10(items) {
  if (items.length >= 10) return items.slice(0, 10);
  const result = [...items];
  const shuffled = shuffle([...items]);
  let si = 0;
  while (result.length < 10) {
    result.push(shuffled[si % shuffled.length]);
    si++;
  }
  return result;
}

function startGame(theme) {
  const paddedItems = padTo10(shuffle(theme.items));
  currentTheme = { ...theme, items: paddedItems };
  currentIndex = 0;
  score = 0;
  accuracies = [];
  $('#score').textContent = '0';
  show('#game-screen');
  loadItem();
}

function loadItem() {
  const item = currentTheme.items[currentIndex];
  $('#item-image').src = item.image;
  $('#item-image').alt = item.name;
  $('#item-name').textContent = item.name;
  $('#currency-symbol').textContent = currentTheme.currency;
  $('#progress-text').textContent = `${currentIndex + 1} / ${currentTheme.items.length}`;
  $('#price-input').value = '';
  $('#guess-section').style.display = '';
  $('#result-section').classList.add('hidden');
  $('#price-input').focus();
}

function submitGuess() {
  const input = $('#price-input');
  const guess = parseFloat(input.value);
  if (isNaN(guess) || guess < 0) {
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 400);
    return;
  }

  const item = currentTheme.items[currentIndex];
  const actual = item.price;
  const diff = Math.abs(guess - actual);
  const pctOff = (diff / actual) * 100;
  const accuracy = Math.max(0, 100 - pctOff);

  let points = 0;
  let emoji, message, grade;
  if (pctOff <= 5) {
    points = 100; emoji = '🎯'; message = '太准了！'; grade = 'excellent';
  } else if (pctOff <= 15) {
    points = 75; emoji = '🔥'; message = '非常接近！'; grade = 'excellent';
  } else if (pctOff <= 30) {
    points = 50; emoji = '👍'; message = '还不错！'; grade = 'good';
  } else if (pctOff <= 50) {
    points = 25; emoji = '😅'; message = '有点偏了...'; grade = 'good';
  } else {
    points = 0; emoji = '💸'; message = '差太远了！'; grade = 'off';
  }

  score += points;
  accuracies.push(accuracy);
  $('#score').textContent = score;

  $('#guess-section').style.display = 'none';
  $('#result-emoji').textContent = emoji;
  $('#user-guess').textContent = formatPrice(guess, currentTheme.currency);
  $('#actual-price').textContent = formatPrice(actual, currentTheme.currency);
  $('#price-diff').textContent = formatPrice(diff, currentTheme.currency);
  $('#result-message').textContent = `${message} (+${points} 分)`;

  const card = $('#result-card');
  card.className = `result-card ${grade}`;

  const isLast = currentIndex >= currentTheme.items.length - 1;
  $('#btn-next').textContent = isLast ? '查看结果' : '下一个 →';

  $('#result-section').classList.remove('hidden');
}

function nextItem() {
  currentIndex++;
  if (currentIndex >= currentTheme.items.length) {
    showSummary();
  } else {
    loadItem();
  }
}

function showSummary() {
  const avgAcc = accuracies.reduce((a, b) => a + b, 0) / accuracies.length;
  $('#final-score').textContent = score;
  $('#items-played').textContent = currentTheme.items.length;
  $('#avg-accuracy').textContent = `${Math.round(avgAcc)}%`;
  $('#summary-theme').textContent = `${currentTheme.emoji} ${currentTheme.name}`;
  if (typeof Player !== 'undefined' && typeof window.GAME_ID !== 'undefined') {
    Player.saveScore(window.GAME_ID, score);
  }
  show('#summary-screen');
}

function goHome() {
  window.location.href = '../../index.html';
}

// ── Events ──
$('#btn-guess').addEventListener('click', submitGuess);
$('#price-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') submitGuess();
});
$('#btn-next').addEventListener('click', nextItem);
$('#btn-home').addEventListener('click', () => show('#home-screen'));
$('#btn-home-2').addEventListener('click', () => show('#home-screen'));
$('#btn-home-3').addEventListener('click', () => show('#home-screen'));
$('#btn-replay').addEventListener('click', () => {
  const theme = THEMES.find(t => t.id === currentTheme.id);
  startGame(theme);
});

// ── Init ──
renderThemes();
