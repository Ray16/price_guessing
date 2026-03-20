// Rating game: score based on absolute difference from actual rating
GameEngine.NumberRunner._submit = function() {
  const input = document.querySelector('#price-input');
  const guess = parseFloat(input.value);
  if (isNaN(guess) || guess < 0 || guess > 10) {
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 400);
    return;
  }
  const actual = this._q[this._idx].price;
  const diff = Math.abs(parseFloat(guess.toFixed(1)) - actual);

  let pts, emoji, msg, grade;
  if (diff <= 0.1)     { pts = 100; emoji = '🎯'; msg = '太准了！';   grade = 'excellent'; }
  else if (diff <= 0.3){ pts = 80;  emoji = '🔥'; msg = '非常接近！'; grade = 'excellent'; }
  else if (diff <= 0.8){ pts = 50;  emoji = '👍'; msg = '还不错！';   grade = 'good'; }
  else if (diff <= 1.5){ pts = 25;  emoji = '😅'; msg = '有点偏了…';  grade = 'good'; }
  else                 { pts = 0;   emoji = '😵'; msg = '差太远了！'; grade = 'off'; }

  const acc = Math.max(0, 100 - diff * 40);
  this._score += pts;
  this._accs.push(acc);
  document.querySelector('#score').textContent = this._score;

  const $ = id => document.querySelector(id);
  $('#guess-section').style.display = 'none';
  $('#result-emoji').textContent = emoji;
  $('#user-guess').textContent = '⭐ ' + parseFloat(guess).toFixed(1);
  $('#actual-price').textContent = '⭐ ' + actual.toFixed(1);
  if ($('#price-diff')) $('#price-diff').textContent = diff.toFixed(1) + ' 分';
  $('#result-message').textContent = `${msg} (+${pts} 分)`;
  $('#result-card').className = `result-card ${grade}`;
  const isLast = this._idx >= this._q.length - 1;
  $('#btn-next').textContent = isLast ? '查看结果' : '下一个 →';
  $('#result-section').classList.remove('hidden');
};

GameEngine.NumberRunner.init(DATA, {
  symbol: '⭐ ',
  decimals: 1,
  label: '这部电影豆瓣评分是多少？（0–10分）',
  summaryTitle: '🎬 猜评分',
});
