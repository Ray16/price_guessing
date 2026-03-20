window.GAME_ID = 'headline';
GameEngine.ChoiceRunner.init(DATA, {
  summaryTitle: '📰 真假新闻',
  renderPrompt: q => `
    <div class="prompt-box" style="margin-bottom:20px">
      <div style="font-size:0.8rem;color:var(--primary);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:10px">📰 新闻标题</div>
      <div class="prompt-text" style="font-size:1.15rem;font-weight:700;line-height:1.6">${q.prompt}</div>
      <div class="prompt-sub" style="margin-top:10px">这条新闻是真实的吗？</div>
    </div>
  `,
  renderChoice: c => c.label,
  onResult: (q, correct, chosenIdx) => {
    const box = document.getElementById('explain-box');
    if (box) box.textContent = q.explain;
  }
});
