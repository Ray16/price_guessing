window.GAME_ID = 'area';

function formatArea(n) {
  return n.toLocaleString('zh-CN') + ' 平方公里';
}

GameEngine.ChoiceRunner.init(DATA.slice(0, 10), {
  summaryTitle: '🗾 猜面积',
  renderPrompt: q => `
    <div class="prompt-box" style="margin-bottom:20px">
      <div class="prompt-text" style="font-size:1.3rem;font-weight:800">${q.prompt}</div>
      <div class="prompt-sub">点击你认为面积更大的那个</div>
    </div>
  `,
  renderChoice: c => `<span style="font-size:1.4rem;font-weight:700">${c.label}</span>`,
  onResult: (q, correct, chosenIdx) => {
    const reveal = document.getElementById('area-reveal');
    if (reveal) {
      reveal.innerHTML = q.choices.map((c, i) =>
        `${c.label}：${formatArea(c.area)}`
      ).join('<br>');
    }
  }
});
