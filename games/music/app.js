window.GAME_ID = 'music';

const questions = GameEngine.utils.shuffle([...DATA]);
let idx = 0, score = 0, correct = 0, streak = 0;
let ytPlayer = null, clipTimer = null;

const CLIP_SECONDS = 12;

function setOverlay(state) {
  const anim = document.getElementById('music-anim');
  const label = document.getElementById('music-anim-label');
  if (state === 'loading')  { anim.textContent = '🎵'; anim.className = ''; label.textContent = '加载中…'; }
  if (state === 'ready')    { anim.textContent = '🎵'; anim.className = ''; label.textContent = '点击播放'; }
  if (state === 'playing')  { anim.textContent = '🎶'; anim.className = 'playing-anim'; label.textContent = '播放中…'; }
  if (state === 'paused')   { anim.textContent = '🎵'; anim.className = ''; label.textContent = '已暂停'; }
  if (state === 'done')     { anim.textContent = '✅'; anim.className = ''; label.textContent = '片段结束'; }
}

// ── YouTube IFrame API ──
window.onYouTubeIframeAPIReady = function() {
  const first = questions[0];
  ytPlayer = new YT.Player('yt-frame', {
    width: '320',
    height: '180',
    videoId: first.ytId,
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      modestbranding: 1,
      rel: 0,
      iv_load_policy: 3,
    },
    events: {
      onReady() {
        ytPlayer.cueVideoById({ videoId: first.ytId, startSeconds: first.start });
        document.getElementById('play-btn').disabled = false;
        setOverlay('ready');
      },
      onStateChange(e) {
        if (e.data === YT.PlayerState.PLAYING) {
          setOverlay('playing');
          clearTimeout(clipTimer);
          clipTimer = setTimeout(() => {
            ytPlayer.pauseVideo();
            document.getElementById('play-btn').textContent = '↩';
            document.getElementById('play-hint').textContent = '片段结束，可重听';
            setOverlay('done');
          }, CLIP_SECONDS * 1000);
        }
        if (e.data === YT.PlayerState.PAUSED) {
          setOverlay('paused');
        }
        if (e.data === YT.PlayerState.CUED) {
          document.getElementById('play-btn').disabled = false;
          setOverlay('ready');
        }
        if (e.data === YT.PlayerState.BUFFERING) {
          setOverlay('loading');
        }
      },
      onError(e) {
        // Video can't be embedded — show message
        setOverlay('ready');
        document.getElementById('music-anim-label').textContent = '⚠️ 此视频无法播放，请跳过';
        document.getElementById('play-btn').disabled = true;
      }
    }
  });
};

(function loadYTScript() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
})();

// ── Game Logic ──
function loadQuestion() {
  const q = questions[idx];
  document.getElementById('progress-text').textContent = `${idx + 1} / ${questions.length}`;
  document.getElementById('play-btn').textContent = '▶';
  document.getElementById('play-btn').disabled = true;
  document.getElementById('play-hint').textContent = '加载中…';
  document.getElementById('result-section').classList.add('hidden');
  setOverlay('loading');

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
  setOverlay('done');
}

document.getElementById('play-btn').addEventListener('click', () => {
  if (!ytPlayer || !ytPlayer.getPlayerState) return;
  const q = questions[idx];
  const state = ytPlayer.getPlayerState();
  if (state === YT.PlayerState.PLAYING) {
    ytPlayer.pauseVideo();
    document.getElementById('play-btn').textContent = '▶';
    document.getElementById('play-hint').textContent = '已暂停，点击继续';
    clearTimeout(clipTimer);
  } else {
    ytPlayer.seekTo(q.start, true);
    ytPlayer.playVideo();
    document.getElementById('play-btn').textContent = '⏸';
    document.getElementById('play-hint').textContent = '播放中…';
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

// Init first question UI immediately
document.getElementById('progress-text').textContent = `1 / ${questions.length}`;
document.getElementById('play-btn').disabled = true;
setOverlay('loading');

const firstShuffled = GameEngine.utils.shuffle([...questions[0].choices]);
document.getElementById('choices-container').innerHTML =
  `<div class="choices">${firstShuffled.map(c =>
    `<button class="choice-btn" data-choice="${c}">${c}</button>`
  ).join('')}</div>`;
document.querySelectorAll('.choice-btn').forEach(btn => {
  btn.addEventListener('click', () => pick(btn.dataset.choice, questions[0]));
});
