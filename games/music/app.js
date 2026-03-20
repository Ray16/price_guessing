window.GAME_ID = 'music';

const questions = GameEngine.utils.shuffle([...DATA]).slice(0, 10);
let idx = 0, score = 0, correct = 0, streak = 0;
let audio = null, clipTimer = null, progressTimer = null;

const CLIP_SECONDS = 15;
const NOTE_PLAYING = '🎶';
const NOTE_IDLE = '🎵';

function audioUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

function setHint(text) { document.getElementById('play-hint').textContent = text; }
function setNote(n, pulse) {
  const el = document.getElementById('music-note');
  el.textContent = n;
  el.className = pulse ? 'music-note pulsing' : 'music-note';
}
function setProgress(pct) {
  document.getElementById('clip-progress').style.width = pct + '%';
}

// ── Load question ──
function loadQuestion() {
  stopAudio();
  const q = questions[idx];
  document.getElementById('progress-text').textContent = `${idx + 1} / ${questions.length}`;
  document.getElementById('result-section').classList.add('hidden');
  document.getElementById('play-btn').textContent = '▶';
  document.getElementById('play-btn').disabled = false;
  setNote(NOTE_IDLE, false);
  setHint('点击播放，听一听是哪首歌');
  setProgress(0);

  // Pre-load audio (no crossOrigin — NetEase doesn't send CORS headers)
  audio = new Audio();
  audio.src = audioUrl(q.id);
  audio.preload = 'metadata';

  audio.addEventListener('error', (e) => {
    const codes = { 1:'已终止', 2:'网络错误', 3:'解码错误', 4:'资源不支持' };
    const msg = codes[audio.error?.code] || '未知错误';
    setNote('⚠️', false);
    setHint(`加载失败 (${msg})，请跳过`);
    document.getElementById('play-btn').disabled = true;
  });

  // Render choices
  const shuffled = GameEngine.utils.shuffle([...q.choices]);
  document.getElementById('choices-container').innerHTML =
    `<div class="choices">${shuffled.map(c =>
      `<button class="choice-btn" data-choice="${c}">${c}</button>`
    ).join('')}</div>`;
  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => pick(btn.dataset.choice, q));
  });
}

// ── Play / Pause ──
document.getElementById('play-btn').addEventListener('click', () => {
  if (!audio) return;
  const q = questions[idx];

  if (audio.paused) {
    setHint('加载中…');
    document.getElementById('play-btn').disabled = true;

    const doPlay = () => {
      audio.currentTime = q.start;
      audio.play().then(() => {
        document.getElementById('play-btn').textContent = '⏸';
        document.getElementById('play-btn').disabled = false;
        setNote(NOTE_PLAYING, true);
        setHint('播放中…');
        startClipTimer(q);
      }).catch((err) => {
        document.getElementById('play-btn').disabled = false;
        setNote('⚠️', false);
        setHint(`播放失败: ${err.message}`);
      });
    };

    // If already loaded enough, play immediately; otherwise wait
    if (audio.readyState >= 1) {
      doPlay();
    } else {
      audio.addEventListener('loadedmetadata', doPlay, { once: true });
    }
  } else {
    audio.pause();
    document.getElementById('play-btn').textContent = '▶';
    setNote(NOTE_IDLE, false);
    setHint('已暂停，点击继续');
    clearTimers();
  }
});

function startClipTimer(q) {
  clearTimers();
  const endTime = q.start + CLIP_SECONDS;
  const startedAt = Date.now();

  progressTimer = setInterval(() => {
    const elapsed = (Date.now() - startedAt) / 1000;
    setProgress(Math.min(elapsed / CLIP_SECONDS * 100, 100));
    if (elapsed >= CLIP_SECONDS) {
      stopAudio();
      document.getElementById('play-btn').textContent = '↩';
      setNote(NOTE_IDLE, false);
      setHint('片段结束，可点击重听');
      setProgress(100);
    }
  }, 100);
}

function clearTimers() {
  clearTimeout(clipTimer);
  clearInterval(progressTimer);
}

function stopAudio() {
  clearTimers();
  if (audio) { audio.pause(); audio = null; }
  document.getElementById('play-btn').textContent = '▶';
}

// ── Pick answer ──
function pick(choice, q) {
  stopAudio();
  const isCorrect = choice === q.name;
  if (isCorrect) { streak++; correct++; } else { streak = 0; }
  const pts = isCorrect ? (100 + Math.min(streak - 1, 4) * 10) : 0;
  score += pts;
  document.getElementById('score').textContent = score;

  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.classList.add('locked');
    if (btn.dataset.choice === q.name) btn.classList.add('correct');
    else if (btn.dataset.choice === choice && !isCorrect) btn.classList.add('wrong');
  });

  setNote(isCorrect ? '🎉' : '😢', false);
  document.getElementById('result-emoji').textContent = isCorrect ? (streak >= 3 ? '🔥' : '✅') : '❌';
  document.getElementById('result-song').textContent = `《${q.name}》`;
  document.getElementById('result-artist').textContent = `— ${q.artist}`;
  document.getElementById('result-message').textContent = isCorrect
    ? `答对了！${streak >= 2 ? `连对${streak}个 (+${pts}分)` : `(+${pts}分)`}`
    : `答错了！正确答案是《${q.name}》`;
  document.getElementById('result-card').className = `result-card ${isCorrect ? 'excellent' : 'off'}`;
  document.getElementById('btn-next').textContent = idx >= questions.length - 1 ? '查看结果' : '下一首 →';
  document.getElementById('result-section').classList.remove('hidden');
}

// ── Next ──
document.getElementById('btn-next').addEventListener('click', () => {
  stopAudio();
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

// ── Init ──
loadQuestion();
