// 听歌识曲 — Song data
// ytId: YouTube video ID
// start: start time in seconds for the clip
// Each question plays a ~10s clip and asks the user to pick the correct song

const DATA = [
  { ytId: 'lWY-7tPa_uY', start: 30,  answer: '不想长大',       artist: 'S.H.E',      choices: ['不想长大','Super Star','你曾是少年','恋人未满'] },
  { ytId: 'CmTrCEYqzqM', start: 40,  answer: 'Super Star',     artist: 'S.H.E',      choices: ['Super Star','中国话','他还是不懂','美丽新世界'] },
  { ytId: 'Z3KrBdS3U8k', start: 20,  answer: '告白气球',       artist: '周杰伦',     choices: ['告白气球','稻香','七里香','晴天'] },
  { ytId: 'rnAVoUcSsCY', start: 25,  answer: '晴天',           artist: '周杰伦',     choices: ['晴天','简单爱','我的地盘','算什么男人'] },
  { ytId: 'dDAhxhP-yEY', start: 15,  answer: '稻香',           artist: '周杰伦',     choices: ['稻香','听妈妈的话','彩虹','好久不见'] },
  { ytId: 'LO3RuGq4SkA', start: 30,  answer: '夜曲',           artist: '周杰伦',     choices: ['夜曲','霍元甲','最后的战役','双截棍'] },
  { ytId: 'Z3y_h8cO_vA', start: 20,  answer: '说好不哭',       artist: '周杰伦 ft. 五月天',  choices: ['说好不哭','说好的幸福呢','园游会','浪漫手机'] },
  { ytId: 'O6n5y5CPZHY', start: 35,  answer: '突然好想你',     artist: '五月天',     choices: ['突然好想你','恋爱ing','如烟','我不愿让你一个人'] },
  { ytId: 'Xy_Xa2OePJk', start: 20,  answer: '温柔',           artist: '五月天',     choices: ['温柔','爱情万岁','离开地球表面','诺亚方舟'] },
  { ytId: '0BgaHmpbZ8M', start: 30,  answer: '小幸运',         artist: '田馥甄',     choices: ['小幸运','你就不要想起我','我爱你','苦瓜'] },
  { ytId: 'gqO0mF_JSVY', start: 25,  answer: '我愿意',         artist: '王菲',       choices: ['我愿意','红豆','传奇','人间'] },
  { ytId: 'nT8Uf9Lqrus', start: 30,  answer: '红豆',           artist: '王菲',       choices: ['红豆','传奇','人间','梦中人'] },
  { ytId: '6H7FZkFOLXU', start: 20,  answer: '童话',           artist: '光良',       choices: ['童话','第一次','一起走到','背叛'] },
  { ytId: 'JnpHaC7a8aw', start: 25,  answer: '情非得已',       artist: '庾澄庆',     choices: ['情非得已','让我一次爱个够','老实情歌','命中注定'] },
  { ytId: 'tqmEqnHFHco', start: 20,  answer: '遇见',           artist: '孙燕姿',     choices: ['遇见','天黑黑','逆光','我不难过'] },
  { ytId: 'YxaI8mNJkKI', start: 35,  answer: '开始懂了',       artist: '孙燕姿',     choices: ['开始懂了','完美的一天','逃脱','同类'] },
  { ytId: '5dLfQ-8VWBE', start: 20,  answer: '菊花台',         artist: '周杰伦',     choices: ['菊花台','东风破','发如雪','青花瓷'] },
  { ytId: 'Y49hLBPbOCM', start: 30,  answer: '青花瓷',         artist: '周杰伦',     choices: ['青花瓷','东风破','兰亭序','菊花台'] },
  { ytId: 'N9DCJBK0mXY', start: 25,  answer: '给我一个理由忘记', artist: '任然',     choices: ['给我一个理由忘记','有一种悲伤','执迷不悟','Fiction'] },
  { ytId: 'ELaVdqPjIx0', start: 20,  answer: '光年之外',       artist: 'G.E.M.',    choices: ['光年之外','泡沫','爱你','新的心跳'] },
  { ytId: 'DFbVf5RQEJM', start: 30,  answer: '泡沫',           artist: 'G.E.M.',    choices: ['泡沫','光年之外','倒数','走天涯'] },
  { ytId: 'mNB4RhCa6wM', start: 20,  answer: '后来',           artist: '刘若英',     choices: ['后来','很爱很爱你','成全','原来你也在这里'] },
  { ytId: 'JwjBiE0tshY', start: 25,  answer: '演员',           artist: '薛之谦',     choices: ['演员','认真的雪','动物世界','丑八怪'] },
  { ytId: 'q1qLJCj6LqY', start: 30,  answer: '认真的雪',       artist: '薛之谦',     choices: ['认真的雪','演员','动物世界','暗语'] },
  { ytId: '8AQlKLX5JQk', start: 20,  answer: '夜空中最亮的星', artist: '逃跑计划',   choices: ['夜空中最亮的星','一万次悲伤','思念是一种病','要我怎么办'] },
  { ytId: 'JBjgblCGAg8', start: 30,  answer: '平凡之路',       artist: '朴树',       choices: ['平凡之路','那些花儿','白桦林','生如夏花'] },
  { ytId: '8Mv-IirNXgA', start: 20,  answer: '成都',           artist: '赵雷',       choices: ['成都','理想','南方姑娘','我记得'] },
  { ytId: 'K0gPZ2CpGxs', start: 35,  answer: '起风了',         artist: '买辣椒也用券', choices: ['起风了','云与海','不谓侠','像风一样'] },
  { ytId: 'JeVMJNvxe1Y', start: 25,  answer: '漠河舞厅',       artist: '柳爽',       choices: ['漠河舞厅','花海','蓝莲花','盛夏的果实'] },
  { ytId: 'B7VW4tqiFHE', start: 20,  answer: '可惜没如果',     artist: '林俊杰',     choices: ['可惜没如果','修炼爱情','她说','江南'] },
];
