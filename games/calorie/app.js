window.GAME_ID = 'calorie';
// Patch _fmt before init so it's used in all submissions
GameEngine.NumberRunner._fmt = function(v) {
  return Math.round(v).toLocaleString('zh-CN') + ' kcal';
};

GameEngine.NumberRunner.init(DATA.slice(0, 10), {
  symbol: '',
  decimals: 0,
  label: '这道食物有多少卡路里？（千卡）',
  thresholds: [
    [10, 100, '🎯', '太准了！',   'excellent'],
    [25, 75,  '🔥', '非常接近！', 'excellent'],
    [40, 50,  '👍', '还不错！',   'good'],
    [60, 25,  '😅', '有点偏了…',  'good'],
    [Infinity, 0, '😵', '差太远了！', 'off'],
  ],
  summaryTitle: '🍽️ 猜卡路里',
});
