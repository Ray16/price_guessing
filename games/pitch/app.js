let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playTone(freq, duration = 0.7) {
  const ctx = getAudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = 'sine';
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.3, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + duration);
}

const FREQS = [220, 247, 262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784, 880];
const ROUNDS = 10;

function generateQuestions(n) {
  return Array.from({ length: n }, () => {
    const shuffled = GameEngine.utils.shuffle([...FREQS]);
    const freqA = shuffled[0];
    const freqB = shuffled[1];
    const correctLabel = freqA > freqB ? 'A' : 'B';
    const correctIdx = correctLabel === 'A' ? 0 : 1;
    return { freqA, freqB, correctIdx, choices: [{ label: '🔼 A 更高' }, { label: '🔼 B 更高' }] };
  });
}

const questions = generateQuestions(ROUNDS);
let idx = 0;
let score = 0;
let correct = 0;
let streak = 0;
let answered = false;

const progressEl = document.getElementById('progress-text');
const scoreEl = document.getElementById('score');
const choicesEl = document.getElementById('choices-container');
const resultSection = document.getElementById('result-section');
const resultCard = document.getElementById('result-card');
const resultEmoji = document.getElementById('result-emoji');
const resultMsg = document.getElementById('result-message');
const btnNext = document.getElementById('btn-next');
const btnA = document.getElementById('btn-play-a');
const btnB = document.getElementById('btn-play-b');

function loadQuestion() {
  answered = false;
  const q = questions[idx];
  progressEl.textContent = `${idx + 1} / ${ROUNDS}`;
  resultSection.classList.add('hidden');

  // Reset play buttons
  btnA.textContent = '▶';
  btnB.textContent = '▶';

  // Build choice buttons
  choicesEl.innerHTML = `<div class="choices choices-2">
    <button class="choice-btn" data-choice="0">🔼 A 更高</button>
    <button class="choice-btn" data-choice="1">🔼 B 更高</button>
  </div>`;

  choicesEl.querySelectorAll('.choice-btn').forEach(btn => {
    btn.onclick = () => answer(parseInt(btn.dataset.choice));
  });
}

function answer(choiceIdx) {
  if (answered) return;
  answered = true;

  const q = questions[idx];
  const isCorrect = choiceIdx === q.correctIdx;

  if (isCorrect) {
    streak++;
    correct++;
    const bonus = Math.min(streak - 1, 4) * 10;
    const pts = 100 + bonus;
    score += pts;
    scoreEl.textContent = score;
    resultEmoji.textContent = streak >= 3 ? '🔥' : '✅';
    resultMsg.textContent = streak >= 3 ? `连对${streak}个！(+${pts} 分)` : `答对了！(+${pts} 分)`;
    resultCard.className = 'result-card excellent';
  } else {
    streak = 0;
    resultEmoji.textContent = '❌';
    resultMsg.textContent = `答错了！正确答案是 ${q.correctIdx === 0 ? 'A' : 'B'} 更高`;
    resultCard.className = 'result-card off';
  }

  // Highlight choice buttons
  choicesEl.querySelectorAll('.choice-btn').forEach((btn, i) => {
    btn.classList.add('locked');
    if (i === q.correctIdx) btn.classList.add('correct');
    else if (i === choiceIdx && !isCorrect) btn.classList.add('wrong');
  });

  btnNext.textContent = idx >= ROUNDS - 1 ? '查看结果' : '下一个 →';
  resultSection.classList.remove('hidden');
}

btnNext.onclick = () => {
  idx++;
  if (idx >= ROUNDS) showSummary();
  else loadQuestion();
};

btnA.onclick = () => {
  const q = questions[idx];
  playTone(q.freqA);
  btnA.textContent = '🔊';
  setTimeout(() => { btnA.textContent = '▶'; }, 800);
};

btnB.onclick = () => {
  const q = questions[idx];
  playTone(q.freqB);
  btnB.textContent = '🔊';
  setTimeout(() => { btnB.textContent = '▶'; }, 800);
};

function showSummary() {
  document.getElementById('final-score').textContent = score;
  document.getElementById('items-played').textContent = ROUNDS;
  document.getElementById('avg-accuracy').textContent = Math.round(correct / ROUNDS * 100) + '%';
  GameEngine.screens.show('#summary-screen');
}

loadQuestion();
