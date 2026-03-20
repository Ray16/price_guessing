GameEngine.NumberRunner._fmt = function(v) {
  return Math.round(v).toLocaleString('zh-CN') + ' 公里';
};

GameEngine.NumberRunner.init(DATA, {
  symbol: '',
  decimals: 0,
  label: '两城市之间相距多少公里？',
  thresholds: [
    [5,  100, '🎯', '太准了！',   'excellent'],
    [15, 75,  '🔥', '非常接近！', 'excellent'],
    [30, 50,  '👍', '还不错！',   'good'],
    [50, 25,  '😅', '有点偏了…',  'good'],
    [Infinity, 0, '😵', '差太远了！', 'off'],
  ],
  summaryTitle: '🗺️ 猜距离',
});
