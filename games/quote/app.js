window.GAME_ID = 'quote';

DailyLoader.load('quote', DATA, { timeoutMs: 5000 }).then(questions => {
  GameEngine.ChoiceRunner.init(questions, {
    summaryTitle: '💬 谁说的',
    renderPrompt: q => `
      <div class="prompt-box" style="margin-bottom:20px">
        <div class="prompt-text" style="font-size:1.15rem;font-style:italic;line-height:1.7">${q.prompt}</div>
        <div class="prompt-sub">这句话出自谁？</div>
      </div>
    `,
    renderChoice: c => c.label,
  });
});
