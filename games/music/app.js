window.GAME_ID = 'music';

const questions = GameEngine.utils.shuffle([...DATA]);
let idx = 0, score = 0, correct = 0, streak = 0;
let ytPlayer = null, clipTimer = null;

const CLIP_SECONDS = 12;

// ── YouTube IFrame API ──
// Must be a global function — called by the YouTube script when ready
window.onYouTubeIframeAPIReady = function() {
  const first = questions[0];
  ytPlayer = new YT.Player('yt-frame', {
    width: '1',
    height: '1',
    videoId: first.ytId,          // init with first video so player is fully ready
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      modestbranding: 1,
      start: first.start,
    },
    events: {
      onReady() {
        // Cue first question's video (don't autoplay)
        ytPlayer.cueVideoById({ videoId: first.ytId, startSeconds: first.start });
        document.getElementById('play-btn').disabled = false;
      },
      onStateChange(e) {
        if (e.data === YT.PlayerState.PLAYING) {
          clearTimeout(clipTimer);
          clipTimer = setTimeout(stopClip, CLIP_SECONDS * 1000);
        }
      }
    }
  });
};

// Load YouTube IFrame API script dynamically
(function() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
})();

function stopClip() {
  if (ytPlayer) ytPlayer.pauseVideo();
  document.getElementById('play-btn').textContent = '↩';
  document.getElementById('play-hint').textContent = '再听一次';
}

// ── Game Logic ──
function loadQuestion() {
  const q = questions[idx];
  document.getElementById('progress-text').textContent = `${idx + 1} / ${questions.length}`;
  document.getElementById('play-btn').textContent = '▶';
  document.getElementById('play-hint').textContent = '点击播放片段';
  document.getElementById('result-section').classList.add('hidden');

  // Pre-cue the video so play is instant
  if (ytPlayer && ytPlayer.cueVideoById) {
    ytPlayer.cueVideoById({ videoId: q.ytId, startSeconds: q.start });
  }

  const shuffled = GameEngine.utils.shuffle([...q.choices]);
  document.getElementById('choices-container').innerHTML =
    `<div class="choices">${shuffled.map(c =>
      `<button class="choice-btn" data-choice="${c}">${c}</button>`
    ).join('')}</div>`;

  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => pick(btn.dataset.choice, q));
  });
}

function pick(choice, q) {
  clearTimeout(clipTimer);
  if (ytPlayer) ytPlayer.pauseVideo();

  const isCorrect = choice === q.answer;
  if (isCorrect) { streak++; correct++; } else { streak = 0; }
  const pts = isCorrect ? (100 + Math.min(streak - 1, 4) * 10) : 0;
  score += pts;
  document.getElementById('score').textContent = score;

  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.classList.add('locked');
    if (btn.dataset.choice === q.answer) btn.classList.add('correct');
    else if (btn.dataset.choice === choice && !isCorrect) btn.classList.add('wrong');
  });

  document.getElementById('result-emoji').textContent = isCorrect ? (streak >= 3 ? '🔥' : '✅') : '❌';
  document.getElementById('result-song').textContent = q.answer;
  document.getElementById('result-artist').textContent = `— ${q.artist}`;
  document.getElementById('result-message').textContent = isCorrect
    ? `答对了！${streak >= 2 ? `连对${streak}个 (+${pts}分)` : `(+${pts}分)`}`
    : `答错了！正确答案是「${q.answer}」`;
  document.getElementById('result-card').className = `result-card ${isCorrect ? 'excellent' : 'off'}`;
  document.getElementById('btn-next').textContent = idx >= questions.length - 1 ? '查看结果' : '下一首 →';
  document.getElementById('result-section').classList.remove('hidden');
}

document.getElementById('play-btn').addEventListener('click', () => {
  if (!ytPlayer || !ytPlayer.playVideo) return;
  const q = questions[idx];
  const state = ytPlayer.getPlayerState();
  if (state === YT.PlayerState.PLAYING) {
    // Pause if already playing
    ytPlayer.pauseVideo();
    document.getElementById('play-btn').textContent = '▶';
    document.getElementById('play-hint').textContent = '已暂停，点击继续';
    clearTimeout(clipTimer);
  } else {
    // Seek to start time and play
    ytPlayer.seekTo(q.start, true);
    ytPlayer.playVideo();
    document.getElementById('play-hint').textContent = '播放中…';
    document.getElementById('play-btn').textContent = '⏸';
  }
});

document.getElementById('btn-next').addEventListener('click', () => {
  clearTimeout(clipTimer);
  if (ytPlayer) ytPlayer.pauseVideo();
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

// Start the game (questions load after YT player is ready via onReady callback)
document.getElementById('progress-text').textContent = `1 / ${questions.length}`;
document.getElementById('play-btn').disabled = true;
document.getElementById('play-hint').textContent = '加载中…';

// Also render choices immediately so layout is ready
(function initChoices() {
  const q = questions[0];
  const shuffled = GameEngine.utils.shuffle([...q.choices]);
  document.getElementById('choices-container').innerHTML =
    `<div class="choices">${shuffled.map(c =>
      `<button class="choice-btn" data-choice="${c}">${c}</button>`
    ).join('')}</div>`;
  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => pick(btn.dataset.choice, q));
  });
})();
