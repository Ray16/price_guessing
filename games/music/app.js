window.GAME_ID = 'music';

const questions = GameEngine.utils.shuffle([...DATA]).slice(0, 10);
let idx = 0, score = 0, correct = 0, streak = 0;
let audio = null, progressTimer = null;

const CLIP_SECONDS = 30;
const NOTE_PLAYING = '🎶';
const NOTE_IDLE = '🎵';

function setHint(text) { document.getElementById('play-hint').textContent = text; }
function setNote(n, pulse) {
  const el = document.getElementById('music-note');
  el.textContent = n;
  el.className = pulse ? 'music-note pulsing' : 'music-note';
}
function setProgress(pct) {
  document.getElementById('clip-progress').style.width = pct + '%';
}

// ── Fetch 30-second preview URL from iTunes Search API ──
async function fetchPreviewUrl(name, artist) {
  const query = encodeURIComponent(name + ' ' + artist);
  const res = await fetch(
    `https://itunes.apple.com/search?term=${query}&media=music&limit=10&country=CN`
  );
  const data = await res.json();
  // Prefer studio version over live/remix
  const preferred = data.results.find(r =>
    r.previewUrl &&
    !/(live|现场|remix|翻唱)/i.test(r.trackName)
  );
  const fallback = data.results.find(r => r.previewUrl);
  return (preferred || fallback)?.previewUrl || null;
}

// ── Load question ──
async function loadQuestion() {
  stopAudio();
  const q = questions[idx];
  document.getElementById('progress-text').textContent = `${idx + 1} / ${questions.length}`;
  document.getElementById('result-section').classList.add('hidden');
  document.getElementById('play-btn').textContent = '▶';
  document.getElementById('play-btn').disabled = true;
  setNote(NOTE_IDLE, false);
  setHint('加载中…');
  setProgress(0);

  // Render choices immediately
  const shuffled = GameEngine.utils.shuffle([...q.choices]);
  document.getElementById('choices-container').innerHTML =
    `<div class="choices">${shuffled.map(c =>
      `<button class="choice-btn" data-choice="${c}">${c}</button>`
    ).join('')}</div>`;
  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => pick(btn.dataset.choice, q));
  });

  // Fetch preview URL from iTunes
  let previewUrl;
  try {
    previewUrl = await fetchPreviewUrl(q.name, q.artist);
  } catch (e) {
    setNote('⚠️', false);
    setHint('网络错误，请跳过');
    return;
  }

  if (!previewUrl) {
    setNote('⚠️', false);
    setHint('未找到音频，请跳过');
    return;
  }

  audio = new Audio(previewUrl);

  audio.addEventListener('error', () => {
    setNote('⚠️', false);
    setHint('加载失败，请跳过');
    document.getElementById('play-btn').disabled = true;
  });

  audio.addEventListener('canplay', () => {
    document.getElementById('play-btn').disabled = false;
    setHint('点击播放，听一听是哪首歌');
  }, { once: true });

  audio.load();
}

// ── Play / Pause ──
document.getElementById('play-btn').addEventListener('click', () => {
  if (!audio) return;

  if (audio.paused) {
    audio.currentTime = 0;
    audio.play().then(() => {
      document.getElementById('play-btn').textContent = '⏸';
      setNote(NOTE_PLAYING, true);
      setHint('播放中…');
      startClipTimer();
    }).catch(err => {
      setNote('⚠️', false);
      setHint(`播放失败: ${err.message}`);
    });
  } else {
    audio.pause();
    document.getElementById('play-btn').textContent = '▶';
    setNote(NOTE_IDLE, false);
    setHint('已暂停，点击继续');
    clearInterval(progressTimer);
  }
});

function startClipTimer() {
  clearInterval(progressTimer);
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

function stopAudio() {
  clearInterval(progressTimer);
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
