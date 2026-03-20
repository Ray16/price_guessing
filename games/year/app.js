window.GAME_ID = 'year';
// Year game uses absolute year difference, not percentage
// Override _submit to use absolute difference scoring
GameEngine.NumberRunner._submit = function() {
  const input = document.querySelector('#price-input');
  const guess = parseFloat(input.value);
  if (isNaN(guess) || guess < 1800 || guess > 2030) {
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 400);
    return;
  }
  const actual = this._q[this._idx].price;
  const diff = Math.abs(guess - actual);

  let pts, emoji, msg, grade;
  if (diff === 0)      { pts = 100; emoji = '🎯'; msg = '完全正确！';  grade = 'excellent'; }
  else if (diff <= 2)  { pts = 80;  emoji = '🔥'; msg = '非常接近！';  grade = 'excellent'; }
  else if (diff <= 5)  { pts = 60;  emoji = '👍'; msg = '还不错！';    grade = 'good'; }
  else if (diff <= 10) { pts = 30;  emoji = '😅'; msg = '有点偏了…';   grade = 'good'; }
  else                 { pts = 0;   emoji = '😵'; msg = '差太远了！';  grade = 'off'; }

  const acc = Math.max(0, 100 - diff * 5);
  this._score += pts;
  this._accs.push(acc);
  document.querySelector('#score').textContent = this._score;

  const $ = id => document.querySelector(id);
  $('#guess-section').style.display = 'none';
  $('#result-emoji').textContent = emoji;
  $('#user-guess').textContent = Math.round(guess) + ' 年';
  $('#actual-price').textContent = actual + ' 年';
  if ($('#price-diff')) $('#price-diff').textContent = diff === 0 ? '0 年' : diff + ' 年';
  $('#result-message').textContent = `${msg} (+${pts} 分)`;
  $('#result-card').className = `result-card ${grade}`;
  const isLast = this._idx >= this._q.length - 1;
  $('#btn-next').textContent = isLast ? '查看结果' : '下一个 →';
  $('#result-section').classList.remove('hidden');
};

GameEngine.NumberRunner.init(DATA, {
  symbol: '',
  decimals: 0,
  label: '这件事发生在哪一年？',
  summaryTitle: '📅 猜年份',
});
