window.GAME_ID = 'music';

const questions = GameEngine.utils.shuffle([...DATA]);
let idx = 0, score = 0, correct = 0, streak = 0;
let player = null, clipTimer = null, played = false;

const CLIP_SECONDS = 12;

// ── YouTube IFrame API ──
function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-frame', {
    height: '1', width: '1',
    events: { onReady: onPlayerReady, onStateChange: onStateChange }
  });
}

function onPlayerReady() { loadQuestion(); }

function onStateChange(e) {
  // When playing, stop after CLIP_SECONDS
  if (e.data === YT.PlayerState.PLAYING) {
    clearTimeout(clipTimer);
    clipTimer = setTimeout(() => {
      if (player) player.stopVideo();
      document.getElementById('play-btn').textContent = '↩';
      document.getElementById('play-hint').textContent = '再听一次';
    }, CLIP_SECONDS * 1000);
  }
}

// Load YouTube IFrame API script
(function() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
})();

// ── Game Logic ──
function loadQuestion() {
  played = false;
  const q = questions[idx];
  document.getElementById('progress-text').textContent = `${idx + 1} / ${questions.length}`;
  document.getElementById('play-btn').textContent = '▶';
  document.getElementById('play-btn').disabled = false;
  document.getElementById('play-hint').textContent = '点击播放片段';
  document.getElementById('result-section').classList.add('hidden');

  // Shuffle choices
  const shuffled = GameEngine.utils.shuffle([...q.choices]);
  document.getElementById('choices-container').innerHTML =
    `<div class="choices">${shuffled.map((c, i) =>
      `<button class="choice-btn" data-choice="${c}">${c}</button>`
    ).join('')}</div>`;

  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => pick(btn.dataset.choice, q, shuffled));
  });
}

function pick(choice, q, shuffled) {
  const isCorrect = choice === q.answer;
  if (isCorrect) { streak++; correct++; } else { streak = 0; }

  const pts = isCorrect ? (100 + Math.min(streak - 1, 4) * 10) : 0;
  score += pts;
  document.getElementById('score').textContent = score;

  // Highlight
  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.classList.add('locked');
    if (btn.dataset.choice === q.answer) btn.classList.add('correct');
    else if (btn.dataset.choice === choice && !isCorrect) btn.classList.add('wrong');
  });

  // Stop audio
  clearTimeout(clipTimer);
  if (player) player.stopVideo();

  // Show result
  document.getElementById('result-emoji').textContent = isCorrect ? (streak >= 3 ? '🔥' : '✅') : '❌';
  document.getElementById('result-song').textContent = q.answer;
  document.getElementById('result-artist').textContent = `— ${q.artist}`;
  document.getElementById('result-message').textContent = isCorrect
    ? `答对了！${streak >= 2 ? `连对${streak}个 (+${pts}分)` : `(+${pts}分)`}`
    : `答错了！正确答案是「${q.answer}」`;
  document.getElementById('result-card').className = `result-card ${isCorrect ? 'excellent' : 'off'}`;

  const isLast = idx >= questions.length - 1;
  document.getElementById('btn-next').textContent = isLast ? '查看结果' : '下一首 →';
  document.getElementById('result-section').classList.remove('hidden');
}

document.getElementById('play-btn').addEventListener('click', () => {
  if (!player || typeof player.loadVideoById !== 'function') return;
  const q = questions[idx];
  player.loadVideoById({ videoId: q.ytId, startSeconds: q.start });
  document.getElementById('play-hint').textContent = '播放中…';
  document.getElementById('play-btn').textContent = '⏹';
  played = true;
});

document.getElementById('btn-next').addEventListener('click', () => {
  clearTimeout(clipTimer);
  if (player) player.stopVideo();
  idx++;
  if (idx >= questions.length) {
    if (typeof Player !== 'undefined') Player.saveScore('music', score);
    document.getElementById('final-score').textContent = score;
    document.getElementById('items-played').textContent = questions.length;
    document.getElementById('avg-accuracy').textContent = Math.round(correct / questions.length * 100) + '%';
    GameEngine.screens.show('#summary-screen');
  } else {
    loadQuestion();
  }
});
