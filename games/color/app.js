window.GAME_ID = 'color';

function randomHex() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
}

function generateQuestions(n = 10) {
  return Array.from({ length: n }, () => {
    const correct = randomHex();
    const choices = [correct];
    while (choices.length < 4) {
      const c = randomHex();
      if (!choices.includes(c)) choices.push(c);
    }
    const shuffled = GameEngine.utils.shuffle(choices);
    return {
      prompt: correct,
      correctIdx: shuffled.indexOf(correct),
      choices: shuffled.map(c => ({ label: c, color: c }))
    };
  });
}

GameEngine.ChoiceRunner.init(generateQuestions(10), {
  summaryTitle: '🎨 猜颜色',
  swatchBtn: true,
  renderPrompt: q => `
    <div class="prompt-box" style="margin-bottom:20px">
      <div class="prompt-text" style="font-size:2rem;font-family:monospace;letter-spacing:0.1em;font-weight:800">${q.prompt}</div>
      <div class="prompt-sub">这个颜色代码对应哪个色块？</div>
    </div>
  `,
  renderChoice: c => `<div class="swatch" style="background:${c.color}"></div>`,
});
