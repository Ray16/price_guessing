// 谁说的 — 名言数据库 (500+ 条)
// correctIdx: 0 — 正确答案始终在 choices[0]，引擎会自动打乱选项顺序

const DATA = [

  // ══════════════════════════════════════════
  // 孔子 / 《论语》
  // ══════════════════════════════════════════
  { prompt: '「学而时习之，不亦说乎？有朋自远方来，不亦乐乎？」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'荀子'},{label:'老子'}] },
  { prompt: '「知之为知之，不知为不知，是知也。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'庄子'},{label:'韩非子'}] },
  { prompt: '「己所不欲，勿施于人。」', correctIdx: 0, choices: [{label:'孔子'},{label:'老子'},{label:'孟子'},{label:'庄子'}] },
  { prompt: '「三人行，必有我师焉。」', correctIdx: 0, choices: [{label:'孔子'},{label:'荀子'},{label:'孟子'},{label:'韩非子'}] },
  { prompt: '「温故而知新，可以为师矣。」', correctIdx: 0, choices: [{label:'孔子'},{label:'荀子'},{label:'墨子'},{label:'老子'}] },
  { prompt: '「学而不思则罔，思而不学则殆。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'墨子'},{label:'庄子'}] },
  { prompt: '「吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？」', correctIdx: 0, choices: [{label:'孔子'},{label:'曾子（孔子弟子）'},{label:'孟子'},{label:'颜回'}] },
  { prompt: '「见贤思齐焉，见不贤而内自省也。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'荀子'},{label:'老子'}] },
  { prompt: '「德不孤，必有邻。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'老子'},{label:'庄子'}] },
  { prompt: '「朝闻道，夕死可矣。」', correctIdx: 0, choices: [{label:'孔子'},{label:'庄子'},{label:'老子'},{label:'孟子'}] },
  { prompt: '「逝者如斯夫，不舍昼夜。」', correctIdx: 0, choices: [{label:'孔子'},{label:'老子'},{label:'孟子'},{label:'屈原'}] },
  { prompt: '「知者乐水，仁者乐山。」', correctIdx: 0, choices: [{label:'孔子'},{label:'老子'},{label:'孟子'},{label:'荀子'}] },
  { prompt: '「工欲善其事，必先利其器。」', correctIdx: 0, choices: [{label:'孔子'},{label:'墨子'},{label:'韩非子'},{label:'孟子'}] },
  { prompt: '「人无远虑，必有近忧。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'荀子'},{label:'老子'}] },
  { prompt: '「君子坦荡荡，小人长戚戚。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'荀子'},{label:'老子'}] },
  { prompt: '「君子和而不同，小人同而不和。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'庄子'},{label:'老子'}] },
  { prompt: '「道不同，不相为谋。」', correctIdx: 0, choices: [{label:'孔子'},{label:'老子'},{label:'庄子'},{label:'孟子'}] },
  { prompt: '「其身正，不令而行；其身不正，虽令不从。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'韩非子'},{label:'荀子'}] },
  { prompt: '「过而不改，是谓过矣。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'老子'},{label:'庄子'}] },
  { prompt: '「知者不惑，仁者不忧，勇者不惧。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'荀子'},{label:'庄子'}] },
  { prompt: '「名不正，则言不顺；言不顺，则事不成。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'韩非子'},{label:'老子'}] },
  { prompt: '「仁远乎哉？我欲仁，斯仁至矣。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'荀子'},{label:'老子'}] },
  { prompt: '「质胜文则野，文胜质则史；文质彬彬，然后君子。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'荀子'},{label:'老子'}] },
  { prompt: '「学而优则仕，仕而优则学。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'荀子'},{label:'韩非子'}] },
  { prompt: '「不在其位，不谋其政。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'老子'},{label:'庄子'}] },
  { prompt: '「言必信，行必果。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'墨子'},{label:'荀子'}] },
  { prompt: '「父母在，不远游，游必有方。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'荀子'},{label:'老子'}] },
  { prompt: '「益者三友：友直、友谅、友多闻，益矣。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'荀子'},{label:'庄子'}] },
  { prompt: '「不患寡而患不均，不患贫而患不安。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'老子'},{label:'韩非子'}] },
  { prompt: '「吾未见好德如好色者也。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'庄子'},{label:'老子'}] },

  // ══════════════════════════════════════════
  // 老子 / 《道德经》
  // ══════════════════════════════════════════
  { prompt: '「道可道，非常道；名可名，非常名。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'庄子'},{label:'孟子'}] },
  { prompt: '「上善若水，水善利万物而不争。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'孟子'},{label:'庄子'}] },
  { prompt: '「知人者智，自知者明；胜人者有力，自胜者强。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'孟子'},{label:'庄子'}] },
  { prompt: '「合抱之木，生于毫末；九层之台，起于累土；千里之行，始于足下。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'孟子'},{label:'荀子'}] },
  { prompt: '「信言不美，美言不信；善者不辩，辩者不善。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'韩非子'},{label:'庄子'}] },
  { prompt: '「天下莫柔弱于水，而攻坚强者莫之能胜。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'孟子'},{label:'庄子'}] },
  { prompt: '「知足者富。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'孟子'},{label:'庄子'}] },
  { prompt: '「为学日益，为道日损，损之又损，以至於无为。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'孟子'},{label:'庄子'}] },
  { prompt: '「祸兮福之所倚，福兮祸之所伏。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'庄子'},{label:'孟子'}] },
  { prompt: '「曲则全，枉则直，洼则盈，弊则新。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'庄子'},{label:'孟子'}] },
  { prompt: '「天之道，利而不害；圣人之道，为而不争。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'孟子'},{label:'墨子'}] },
  { prompt: '「知足不辱，知止不殆，可以长久。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'孟子'},{label:'庄子'}] },
  { prompt: '「大直若屈，大巧若拙，大辩若讷。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'庄子'},{label:'孟子'}] },
  { prompt: '「天网恢恢，疏而不漏。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'孟子'},{label:'韩非子'}] },
  { prompt: '「飘风不终朝，骤雨不终日。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'庄子'},{label:'孟子'}] },
  { prompt: '「圣人不积，既以为人己愈有；既以与人己愈多。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'孟子'},{label:'墨子'}] },
  { prompt: '「金玉满堂，莫之能守。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'孟子'},{label:'庄子'}] },
  { prompt: '「宠辱若惊，贵大患若身。」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'庄子'},{label:'孟子'}] },

  // ══════════════════════════════════════════
  // 孟子
  // ══════════════════════════════════════════
  { prompt: '「得道多助，失道寡助。」', correctIdx: 0, choices: [{label:'孟子'},{label:'孔子'},{label:'老子'},{label:'荀子'}] },
  { prompt: '「生于忧患，死于安乐。」', correctIdx: 0, choices: [{label:'孟子'},{label:'孔子'},{label:'老子'},{label:'荀子'}] },
  { prompt: '「老吾老，以及人之老；幼吾幼，以及人之幼。」', correctIdx: 0, choices: [{label:'孟子'},{label:'孔子'},{label:'墨子'},{label:'老子'}] },
  { prompt: '「天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤。」', correctIdx: 0, choices: [{label:'孟子'},{label:'孔子'},{label:'荀子'},{label:'老子'}] },
  { prompt: '「穷则独善其身，达则兼善天下。」', correctIdx: 0, choices: [{label:'孟子'},{label:'孔子'},{label:'荀子'},{label:'老子'}] },
  { prompt: '「民为贵，社稷次之，君为轻。」', correctIdx: 0, choices: [{label:'孟子'},{label:'孔子'},{label:'荀子'},{label:'韩非子'}] },
  { prompt: '「富贵不能淫，贫贱不能移，威武不能屈。」', correctIdx: 0, choices: [{label:'孟子'},{label:'孔子'},{label:'荀子'},{label:'老子'}] },
  { prompt: '「尽信书，则不如无书。」', correctIdx: 0, choices: [{label:'孟子'},{label:'孔子'},{label:'荀子'},{label:'庄子'}] },
  { prompt: '「天时不如地利，地利不如人和。」', correctIdx: 0, choices: [{label:'孟子'},{label:'孔子'},{label:'荀子'},{label:'孙子'}] },
  { prompt: '「我善养吾浩然之气。」', correctIdx: 0, choices: [{label:'孟子'},{label:'孔子'},{label:'荀子'},{label:'老子'}] },
  { prompt: '「仁者无敌。」', correctIdx: 0, choices: [{label:'孟子'},{label:'孔子'},{label:'老子'},{label:'荀子'}] },
  { prompt: '「人皆可以为尧舜。」', correctIdx: 0, choices: [{label:'孟子'},{label:'孔子'},{label:'荀子'},{label:'老子'}] },
  { prompt: '「爱人者人恒爱之，敬人者人恒敬之。」', correctIdx: 0, choices: [{label:'孟子'},{label:'孔子'},{label:'墨子'},{label:'老子'}] },

  // ══════════════════════════════════════════
  // 庄子
  // ══════════════════════════════════════════
  { prompt: '「相濡以沫，不如相忘于江湖。」', correctIdx: 0, choices: [{label:'庄子'},{label:'孔子'},{label:'老子'},{label:'孟子'}] },
  { prompt: '「吾生也有涯，而知也无涯；以有涯随无涯，殆已。」', correctIdx: 0, choices: [{label:'庄子'},{label:'老子'},{label:'孔子'},{label:'孟子'}] },
  { prompt: '「人生天地之间，若白驹之过隙，忽然而已。」', correctIdx: 0, choices: [{label:'庄子'},{label:'老子'},{label:'孔子'},{label:'孟子'}] },
  { prompt: '「至人无己，神人无功，圣人无名。」', correctIdx: 0, choices: [{label:'庄子'},{label:'老子'},{label:'孔子'},{label:'孟子'}] },
  { prompt: '「朝菌不知晦朔，蟪蛄不知春秋。」', correctIdx: 0, choices: [{label:'庄子'},{label:'老子'},{label:'孔子'},{label:'孟子'}] },
  { prompt: '「举世誉之而不加劝，举世非之而不加沮。」', correctIdx: 0, choices: [{label:'庄子'},{label:'老子'},{label:'孔子'},{label:'孟子'}] },
  { prompt: '「天地与我并生，万物与我为一。」', correctIdx: 0, choices: [{label:'庄子'},{label:'老子'},{label:'孔子'},{label:'孟子'}] },
  { prompt: '「知足者不以利自累也。」', correctIdx: 0, choices: [{label:'庄子'},{label:'老子'},{label:'孔子'},{label:'孟子'}] },
  { prompt: '「方生方死，方死方生；方可方不可，方不可方可。」', correctIdx: 0, choices: [{label:'庄子'},{label:'老子'},{label:'孔子'},{label:'墨子'}] },
  { prompt: '「一尺之捶，日取其半，万世不竭。」', correctIdx: 0, choices: [{label:'庄子'},{label:'老子'},{label:'孔子'},{label:'墨子'}] },

  // ══════════════════════════════════════════
  // 荀子 / 墨子 / 韩非子 / 其他先秦
  // ══════════════════════════════════════════
  { prompt: '「青，取之于蓝，而青于蓝；冰，水为之，而寒于水。」', correctIdx: 0, choices: [{label:'荀子'},{label:'孔子'},{label:'孟子'},{label:'庄子'}] },
  { prompt: '「不积跬步，无以至千里；不积小流，无以成江海。」', correctIdx: 0, choices: [{label:'荀子'},{label:'孔子'},{label:'孟子'},{label:'老子'}] },
  { prompt: '「锲而不舍，金石可镂。」', correctIdx: 0, choices: [{label:'荀子'},{label:'孔子'},{label:'孟子'},{label:'庄子'}] },
  { prompt: '「骐骥一跃，不能十步；驽马十驾，功在不舍。」', correctIdx: 0, choices: [{label:'荀子'},{label:'孔子'},{label:'孟子'},{label:'庄子'}] },
  { prompt: '「天行有常，不为尧存，不为桀亡。」', correctIdx: 0, choices: [{label:'荀子'},{label:'孔子'},{label:'孟子'},{label:'老子'}] },
  { prompt: '「兼相爱，交相利。」', correctIdx: 0, choices: [{label:'墨子'},{label:'孔子'},{label:'孟子'},{label:'老子'}] },
  { prompt: '「法不阿贵，绳不挠曲。」', correctIdx: 0, choices: [{label:'韩非子'},{label:'孔子'},{label:'孟子'},{label:'老子'}] },
  { prompt: '「知彼知己，百战不殆。」', correctIdx: 0, choices: [{label:'孙子'},{label:'孔子'},{label:'孟子'},{label:'老子'}] },
  { prompt: '「不战而屈人之兵，善之善者也。」', correctIdx: 0, choices: [{label:'孙子'},{label:'孔子'},{label:'孟子'},{label:'韩非子'}] },
  { prompt: '「凡事预则立，不预则废。」', correctIdx: 0, choices: [{label:'《礼记》'},{label:'孔子'},{label:'孟子'},{label:'荀子'}] },
  { prompt: '「玉不琢，不成器；人不学，不知道。」', correctIdx: 0, choices: [{label:'《礼记》'},{label:'孔子'},{label:'孟子'},{label:'荀子'}] },
  { prompt: '「大道之行也，天下为公。」', correctIdx: 0, choices: [{label:'《礼记》'},{label:'孔子'},{label:'孟子'},{label:'老子'}] },
  { prompt: '「苟日新，日日新，又日新。」', correctIdx: 0, choices: [{label:'《大学》'},{label:'孔子'},{label:'孟子'},{label:'荀子'}] },
  { prompt: '「博学之，审问之，慎思之，明辨之，笃行之。」', correctIdx: 0, choices: [{label:'《中庸》'},{label:'孔子'},{label:'孟子'},{label:'荀子'}] },

  // ══════════════════════════════════════════
  // 屈原 / 《楚辞》
  // ══════════════════════════════════════════
  { prompt: '「路漫漫其修远兮，吾将上下而求索。」', correctIdx: 0, choices: [{label:'屈原'},{label:'宋玉'},{label:'贾谊'},{label:'司马相如'}] },
  { prompt: '「亦余心之所善兮，虽九死其犹未悔。」', correctIdx: 0, choices: [{label:'屈原'},{label:'宋玉'},{label:'贾谊'},{label:'陶渊明'}] },
  { prompt: '「举世皆浊我独清，众人皆醉我独醒。」', correctIdx: 0, choices: [{label:'屈原'},{label:'宋玉'},{label:'贾谊'},{label:'庄子'}] },
  { prompt: '「长太息以掩涕兮，哀民生之多艰。」', correctIdx: 0, choices: [{label:'屈原'},{label:'杜甫'},{label:'宋玉'},{label:'贾谊'}] },
  { prompt: '「惟草木之零落兮，恐美人之迟暮。」', correctIdx: 0, choices: [{label:'屈原'},{label:'宋玉'},{label:'贾谊'},{label:'陶渊明'}] },
  { prompt: '「与天地兮同寿，与日月兮齐光。」', correctIdx: 0, choices: [{label:'屈原'},{label:'宋玉'},{label:'贾谊'},{label:'庄子'}] },

  // ══════════════════════════════════════════
  // 《诗经》
  // ══════════════════════════════════════════
  { prompt: '「关关雎鸠，在河之洲，窈窕淑女，君子好逑。」', correctIdx: 0, choices: [{label:'《诗经》'},{label:'《楚辞》'},{label:'《乐府诗集》'},{label:'《古诗十九首》'}] },
  { prompt: '「所谓伊人，在水一方。」', correctIdx: 0, choices: [{label:'《诗经》'},{label:'《楚辞》'},{label:'《乐府诗集》'},{label:'《古诗十九首》'}] },
  { prompt: '「知我者谓我心忧，不知我者谓我何求。」', correctIdx: 0, choices: [{label:'《诗经》'},{label:'《楚辞》'},{label:'《论语》'},{label:'《庄子》'}] },
  { prompt: '「他山之石，可以攻玉。」', correctIdx: 0, choices: [{label:'《诗经》'},{label:'《楚辞》'},{label:'《荀子》'},{label:'《礼记》'}] },
  { prompt: '「靡不有初，鲜克有终。」', correctIdx: 0, choices: [{label:'《诗经》'},{label:'《楚辞》'},{label:'《论语》'},{label:'《礼记》'}] },
  { prompt: '「青青子衿，悠悠我心。」', correctIdx: 0, choices: [{label:'《诗经》'},{label:'《楚辞》'},{label:'《乐府诗集》'},{label:'曹操'}] },
  { prompt: '「投我以桃，报之以李。」', correctIdx: 0, choices: [{label:'《诗经》'},{label:'《楚辞》'},{label:'《荀子》'},{label:'《论语》'}] },
  { prompt: '「如切如磋，如琢如磨。」', correctIdx: 0, choices: [{label:'《诗经》'},{label:'《楚辞》'},{label:'《荀子》'},{label:'《礼记》'}] },

  // ══════════════════════════════════════════
  // 汉/三国/魏晋
  // ══════════════════════════════════════════
  { prompt: '「燕雀安知鸿鹄之志哉！」', correctIdx: 0, choices: [{label:'陈涉（《史记》）'},{label:'项羽'},{label:'刘邦'},{label:'韩信'}] },
  { prompt: '「运筹帷幄之中，决胜千里之外。」', correctIdx: 0, choices: [{label:'张良（《史记》）'},{label:'诸葛亮'},{label:'刘备'},{label:'曹操'}] },
  { prompt: '「老骥伏枥，志在千里；烈士暮年，壮心不已。」', correctIdx: 0, choices: [{label:'曹操'},{label:'刘备'},{label:'孙权'},{label:'诸葛亮'}] },
  { prompt: '「山不厌高，海不厌深；周公吐哺，天下归心。」', correctIdx: 0, choices: [{label:'曹操'},{label:'曹植'},{label:'曹丕'},{label:'诸葛亮'}] },
  { prompt: '「非淡泊无以明志，非宁静无以致远。」', correctIdx: 0, choices: [{label:'诸葛亮'},{label:'刘备'},{label:'曹操'},{label:'司马懿'}] },
  { prompt: '「鞠躬尽瘁，死而后已。」', correctIdx: 0, choices: [{label:'诸葛亮'},{label:'刘备'},{label:'曹操'},{label:'周瑜'}] },
  { prompt: '「勿以善小而不为，勿以恶小而为之。」', correctIdx: 0, choices: [{label:'刘备'},{label:'诸葛亮'},{label:'曹操'},{label:'孔子'}] },
  { prompt: '「捐躯赴国难，视死忽如归。」', correctIdx: 0, choices: [{label:'曹植'},{label:'曹操'},{label:'曹丕'},{label:'刘备'}] },
  { prompt: '「先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中。」', correctIdx: 0, choices: [{label:'诸葛亮（《出师表》）'},{label:'曹操'},{label:'刘备'},{label:'司马懿'}] },
  { prompt: '「采菊东篱下，悠然见南山。」', correctIdx: 0, choices: [{label:'陶渊明'},{label:'王维'},{label:'孟浩然'},{label:'谢灵运'}] },

  // ══════════════════════════════════════════
  // 李白（唐）
  // ══════════════════════════════════════════
  { prompt: '「床前明月光，疑是地上霜。举头望明月，低头思故乡。」', correctIdx: 0, choices: [{label:'李白'},{label:'杜甫'},{label:'王维'},{label:'孟浩然'}] },
  { prompt: '「天生我材必有用，千金散尽还复来。」', correctIdx: 0, choices: [{label:'李白'},{label:'杜甫'},{label:'王昌龄'},{label:'高适'}] },
  { prompt: '「举杯邀明月，对影成三人。」', correctIdx: 0, choices: [{label:'李白'},{label:'杜甫'},{label:'苏轼'},{label:'王维'}] },
  { prompt: '「飞流直下三千尺，疑是银河落九天。」', correctIdx: 0, choices: [{label:'李白'},{label:'杜甫'},{label:'王维'},{label:'刘禹锡'}] },
  { prompt: '「长风破浪会有时，直挂云帆济沧海。」', correctIdx: 0, choices: [{label:'李白'},{label:'杜甫'},{label:'高适'},{label:'岑参'}] },
  { prompt: '「抽刀断水水更流，举杯消愁愁更愁。」', correctIdx: 0, choices: [{label:'李白'},{label:'杜甫'},{label:'王维'},{label:'白居易'}] },
  { prompt: '「两岸猿声啼不住，轻舟已过万重山。」', correctIdx: 0, choices: [{label:'李白'},{label:'杜甫'},{label:'王维'},{label:'孟浩然'}] },
  { prompt: '「桃花潭水深千尺，不及汪伦送我情。」', correctIdx: 0, choices: [{label:'李白'},{label:'杜甫'},{label:'王维'},{label:'白居易'}] },
  { prompt: '「仰天大笑出门去，我辈岂是蓬蒿人。」', correctIdx: 0, choices: [{label:'李白'},{label:'杜甫'},{label:'王维'},{label:'高适'}] },
  { prompt: '「云想衣裳花想容，春风拂槛露华浓。」', correctIdx: 0, choices: [{label:'李白'},{label:'杜甫'},{label:'王昌龄'},{label:'白居易'}] },
  { prompt: '「朝辞白帝彩云间，千里江陵一日还。」', correctIdx: 0, choices: [{label:'李白'},{label:'杜甫'},{label:'王维'},{label:'孟浩然'}] },
  { prompt: '「安能摧眉折腰事权贵，使我不得开心颜。」', correctIdx: 0, choices: [{label:'李白'},{label:'杜甫'},{label:'白居易'},{label:'王维'}] },
  { prompt: '「人生得意须尽欢，莫使金樽空对月。」', correctIdx: 0, choices: [{label:'李白'},{label:'杜甫'},{label:'白居易'},{label:'苏轼'}] },

  // ══════════════════════════════════════════
  // 杜甫（唐）
  // ══════════════════════════════════════════
  { prompt: '「烽火连三月，家书抵万金。」', correctIdx: 0, choices: [{label:'杜甫'},{label:'李白'},{label:'白居易'},{label:'王维'}] },
  { prompt: '「出师未捷身先死，长使英雄泪满襟。」', correctIdx: 0, choices: [{label:'杜甫'},{label:'李白'},{label:'白居易'},{label:'陆游'}] },
  { prompt: '「读书破万卷，下笔如有神。」', correctIdx: 0, choices: [{label:'杜甫'},{label:'李白'},{label:'白居易'},{label:'韩愈'}] },
  { prompt: '「会当凌绝顶，一览众山小。」', correctIdx: 0, choices: [{label:'杜甫'},{label:'李白'},{label:'王维'},{label:'白居易'}] },
  { prompt: '「朱门酒肉臭，路有冻死骨。」', correctIdx: 0, choices: [{label:'杜甫'},{label:'李白'},{label:'白居易'},{label:'刘禹锡'}] },
  { prompt: '「安得广厦千万间，大庇天下寒士俱欢颜。」', correctIdx: 0, choices: [{label:'杜甫'},{label:'李白'},{label:'白居易'},{label:'刘禹锡'}] },
  { prompt: '「感时花溅泪，恨别鸟惊心。」', correctIdx: 0, choices: [{label:'杜甫'},{label:'李白'},{label:'王维'},{label:'白居易'}] },
  { prompt: '「无边落木萧萧下，不尽长江滚滚来。」', correctIdx: 0, choices: [{label:'杜甫'},{label:'李白'},{label:'王维'},{label:'白居易'}] },
  { prompt: '「晓看红湿处，花重锦官城。」', correctIdx: 0, choices: [{label:'杜甫'},{label:'李白'},{label:'白居易'},{label:'王维'}] },

  // ══════════════════════════════════════════
  // 王维（唐）
  // ══════════════════════════════════════════
  { prompt: '「独在异乡为异客，每逢佳节倍思亲。」', correctIdx: 0, choices: [{label:'王维'},{label:'李白'},{label:'杜甫'},{label:'白居易'}] },
  { prompt: '「空山新雨后，天气晚来秋。」', correctIdx: 0, choices: [{label:'王维'},{label:'孟浩然'},{label:'李白'},{label:'杜甫'}] },
  { prompt: '「大漠孤烟直，长河落日圆。」', correctIdx: 0, choices: [{label:'王维'},{label:'李白'},{label:'岑参'},{label:'高适'}] },
  { prompt: '「明月松间照，清泉石上流。」', correctIdx: 0, choices: [{label:'王维'},{label:'孟浩然'},{label:'李白'},{label:'杜甫'}] },
  { prompt: '「劝君更尽一杯酒，西出阳关无故人。」', correctIdx: 0, choices: [{label:'王维'},{label:'李白'},{label:'高适'},{label:'岑参'}] },
  { prompt: '「行到水穷处，坐看云起时。」', correctIdx: 0, choices: [{label:'王维'},{label:'李白'},{label:'孟浩然'},{label:'柳宗元'}] },

  // ══════════════════════════════════════════
  // 白居易（唐）
  // ══════════════════════════════════════════
  { prompt: '「日出江花红胜火，春来江水绿如蓝。」', correctIdx: 0, choices: [{label:'白居易'},{label:'杜甫'},{label:'李白'},{label:'王维'}] },
  { prompt: '「在天愿作比翼鸟，在地愿为连理枝。」', correctIdx: 0, choices: [{label:'白居易'},{label:'李白'},{label:'杜甫'},{label:'元稹'}] },
  { prompt: '「同是天涯沦落人，相逢何必曾相识。」', correctIdx: 0, choices: [{label:'白居易'},{label:'李白'},{label:'杜甫'},{label:'刘禹锡'}] },
  { prompt: '「野火烧不尽，春风吹又生。」', correctIdx: 0, choices: [{label:'白居易'},{label:'李白'},{label:'杜甫'},{label:'王维'}] },
  { prompt: '「可怜九月初三夜，露似真珠月似弓。」', correctIdx: 0, choices: [{label:'白居易'},{label:'李白'},{label:'杜甫'},{label:'王维'}] },
  { prompt: '「千呼万唤始出来，犹抱琵琶半遮面。」', correctIdx: 0, choices: [{label:'白居易'},{label:'李白'},{label:'杜甫'},{label:'元稹'}] },

  // ══════════════════════════════════════════
  // 其他唐代诗人
  // ══════════════════════════════════════════
  { prompt: '「春眠不觉晓，处处闻啼鸟。」', correctIdx: 0, choices: [{label:'孟浩然'},{label:'王维'},{label:'李白'},{label:'杜甫'}] },
  { prompt: '「气蒸云梦泽，波撼岳阳城。」', correctIdx: 0, choices: [{label:'孟浩然'},{label:'杜甫'},{label:'李白'},{label:'王维'}] },
  { prompt: '「但使龙城飞将在，不教胡马度阴山。」', correctIdx: 0, choices: [{label:'王昌龄'},{label:'李白'},{label:'高适'},{label:'岑参'}] },
  { prompt: '「洛阳亲友如相问，一片冰心在玉壶。」', correctIdx: 0, choices: [{label:'王昌龄'},{label:'李白'},{label:'王维'},{label:'孟浩然'}] },
  { prompt: '「秦时明月汉时关，万里长征人未还。」', correctIdx: 0, choices: [{label:'王昌龄'},{label:'李白'},{label:'高适'},{label:'岑参'}] },
  { prompt: '「莫愁前路无知己，天下谁人不识君。」', correctIdx: 0, choices: [{label:'高适'},{label:'李白'},{label:'杜甫'},{label:'王维'}] },
  { prompt: '「忽如一夜春风来，千树万树梨花开。」', correctIdx: 0, choices: [{label:'岑参'},{label:'李白'},{label:'高适'},{label:'王维'}] },
  { prompt: '「北风卷地白草折，胡天八月即飞雪。」', correctIdx: 0, choices: [{label:'岑参'},{label:'王维'},{label:'李白'},{label:'高适'}] },
  { prompt: '「商女不知亡国恨，隔江犹唱后庭花。」', correctIdx: 0, choices: [{label:'杜牧'},{label:'李商隐'},{label:'李白'},{label:'白居易'}] },
  { prompt: '「停车坐爱枫林晚，霜叶红于二月花。」', correctIdx: 0, choices: [{label:'杜牧'},{label:'李商隐'},{label:'白居易'},{label:'李白'}] },
  { prompt: '「南朝四百八十寺，多少楼台烟雨中。」', correctIdx: 0, choices: [{label:'杜牧'},{label:'李商隐'},{label:'白居易'},{label:'杜甫'}] },
  { prompt: '「东风不与周郎便，铜雀春深锁二乔。」', correctIdx: 0, choices: [{label:'杜牧'},{label:'李商隐'},{label:'白居易'},{label:'杜甫'}] },
  { prompt: '「春风十里扬州路，卷上珠帘总不如。」', correctIdx: 0, choices: [{label:'杜牧'},{label:'李商隐'},{label:'白居易'},{label:'柳宗元'}] },
  { prompt: '「相见时难别亦难，东风无力百花残。」', correctIdx: 0, choices: [{label:'李商隐'},{label:'杜牧'},{label:'白居易'},{label:'李白'}] },
  { prompt: '「身无彩凤双飞翼，心有灵犀一点通。」', correctIdx: 0, choices: [{label:'李商隐'},{label:'杜牧'},{label:'白居易'},{label:'李白'}] },
  { prompt: '「此情可待成追忆，只是当时已惘然。」', correctIdx: 0, choices: [{label:'李商隐'},{label:'杜牧'},{label:'白居易'},{label:'刘禹锡'}] },
  { prompt: '「春蚕到死丝方尽，蜡炬成灰泪始干。」', correctIdx: 0, choices: [{label:'李商隐'},{label:'杜牧'},{label:'白居易'},{label:'元稹'}] },
  { prompt: '「沉舟侧畔千帆过，病树前头万木春。」', correctIdx: 0, choices: [{label:'刘禹锡'},{label:'杜甫'},{label:'白居易'},{label:'李白'}] },
  { prompt: '「山不在高，有仙则名；水不在深，有龙则灵。」', correctIdx: 0, choices: [{label:'刘禹锡'},{label:'白居易'},{label:'杜甫'},{label:'李白'}] },
  { prompt: '「旧时王谢堂前燕，飞入寻常百姓家。」', correctIdx: 0, choices: [{label:'刘禹锡'},{label:'杜甫'},{label:'白居易'},{label:'李白'}] },
  { prompt: '「前不见古人，后不见来者；念天地之悠悠，独怆然而涕下。」', correctIdx: 0, choices: [{label:'陈子昂'},{label:'李白'},{label:'杜甫'},{label:'王维'}] },
  { prompt: '「春江潮水连海平，海上明月共潮生。」', correctIdx: 0, choices: [{label:'张若虚'},{label:'李白'},{label:'杜甫'},{label:'白居易'}] },
  { prompt: '「江畔何人初见月？江月何年初照人？」', correctIdx: 0, choices: [{label:'张若虚'},{label:'李白'},{label:'杜甫'},{label:'王维'}] },
  { prompt: '「欲穷千里目，更上一层楼。」', correctIdx: 0, choices: [{label:'王之涣'},{label:'李白'},{label:'杜甫'},{label:'白居易'}] },
  { prompt: '「羌笛何须怨杨柳，春风不度玉门关。」', correctIdx: 0, choices: [{label:'王之涣'},{label:'王昌龄'},{label:'高适'},{label:'岑参'}] },
  { prompt: '「醉卧沙场君莫笑，古来征战几人回。」', correctIdx: 0, choices: [{label:'王翰'},{label:'李白'},{label:'高适'},{label:'岑参'}] },
  { prompt: '「海内存知己，天涯若比邻。」', correctIdx: 0, choices: [{label:'王勃'},{label:'李白'},{label:'杜甫'},{label:'白居易'}] },
  { prompt: '「落霞与孤鹜齐飞，秋水共长天一色。」', correctIdx: 0, choices: [{label:'王勃'},{label:'李白'},{label:'杜甫'},{label:'白居易'}] },
  { prompt: '「少小离家老大回，乡音无改鬓毛衰。」', correctIdx: 0, choices: [{label:'贺知章'},{label:'李白'},{label:'杜甫'},{label:'白居易'}] },
  { prompt: '「姑苏城外寒山寺，夜半钟声到客船。」', correctIdx: 0, choices: [{label:'张继'},{label:'杜牧'},{label:'李白'},{label:'杜甫'}] },
  { prompt: '「海上生明月，天涯共此时。」', correctIdx: 0, choices: [{label:'张九龄'},{label:'李白'},{label:'杜甫'},{label:'王维'}] },
  { prompt: '「日暮乡关何处是？烟波江上使人愁。」', correctIdx: 0, choices: [{label:'崔颢'},{label:'李白'},{label:'杜甫'},{label:'白居易'}] },
  { prompt: '「鸟宿池边树，僧敲月下门。」', correctIdx: 0, choices: [{label:'贾岛'},{label:'孟浩然'},{label:'王维'},{label:'柳宗元'}] },
  { prompt: '「男儿何不带吴钩，收取关山五十州。」', correctIdx: 0, choices: [{label:'李贺'},{label:'李白'},{label:'杜甫'},{label:'杜牧'}] },
  { prompt: '「天若有情天亦老，人间正道是沧桑。」', correctIdx: 0, choices: [{label:'毛泽东（化用李贺诗句）'},{label:'李贺'},{label:'李白'},{label:'杜甫'}] },
  { prompt: '「曾经沧海难为水，除却巫山不是云。」', correctIdx: 0, choices: [{label:'元稹'},{label:'白居易'},{label:'李白'},{label:'杜甫'}] },
  { prompt: '「书山有路勤为径，学海无涯苦作舟。」', correctIdx: 0, choices: [{label:'韩愈'},{label:'孔子'},{label:'荀子'},{label:'孟子'}] },

  // ══════════════════════════════════════════
  // 宋词 / 宋诗
  // ══════════════════════════════════════════
  { prompt: '「但愿人长久，千里共婵娟。」', correctIdx: 0, choices: [{label:'苏轼'},{label:'李清照'},{label:'辛弃疾'},{label:'柳永'}] },
  { prompt: '「大江东去，浪淘尽，千古风流人物。」', correctIdx: 0, choices: [{label:'苏轼'},{label:'辛弃疾'},{label:'柳永'},{label:'岳飞'}] },
  { prompt: '「竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。」', correctIdx: 0, choices: [{label:'苏轼'},{label:'陆游'},{label:'辛弃疾'},{label:'李清照'}] },
  { prompt: '「横看成岭侧成峰，远近高低各不同。」', correctIdx: 0, choices: [{label:'苏轼'},{label:'陆游'},{label:'王安石'},{label:'欧阳修'}] },
  { prompt: '「不识庐山真面目，只缘身在此山中。」', correctIdx: 0, choices: [{label:'苏轼'},{label:'陆游'},{label:'王安石'},{label:'欧阳修'}] },
  { prompt: '「枝上柳绵吹又少，天涯何处无芳草。」', correctIdx: 0, choices: [{label:'苏轼'},{label:'柳永'},{label:'李清照'},{label:'欧阳修'}] },
  { prompt: '「人生如逆旅，我亦是行人。」', correctIdx: 0, choices: [{label:'苏轼'},{label:'陆游'},{label:'辛弃疾'},{label:'李清照'}] },
  { prompt: '「明月几时有？把酒问青天。」', correctIdx: 0, choices: [{label:'苏轼'},{label:'李白'},{label:'辛弃疾'},{label:'陆游'}] },
  { prompt: '「十年生死两茫茫，不思量，自难忘。」', correctIdx: 0, choices: [{label:'苏轼'},{label:'陆游'},{label:'李清照'},{label:'柳永'}] },
  { prompt: '「莫道不消魂，帘卷西风，人比黄花瘦。」', correctIdx: 0, choices: [{label:'李清照'},{label:'苏轼'},{label:'辛弃疾'},{label:'柳永'}] },
  { prompt: '「知否，知否，应是绿肥红瘦。」', correctIdx: 0, choices: [{label:'李清照'},{label:'苏轼'},{label:'辛弃疾'},{label:'欧阳修'}] },
  { prompt: '「寻寻觅觅，冷冷清清，凄凄惨惨戚戚。」', correctIdx: 0, choices: [{label:'李清照'},{label:'苏轼'},{label:'辛弃疾'},{label:'柳永'}] },
  { prompt: '「此情无计可消除，才下眉头，却上心头。」', correctIdx: 0, choices: [{label:'李清照'},{label:'苏轼'},{label:'辛弃疾'},{label:'晏殊'}] },
  { prompt: '「生当作人杰，死亦为鬼雄。」', correctIdx: 0, choices: [{label:'李清照'},{label:'苏轼'},{label:'辛弃疾'},{label:'陆游'}] },
  { prompt: '「了却君王天下事，赢得生前身后名，可怜白发生！」', correctIdx: 0, choices: [{label:'辛弃疾'},{label:'岳飞'},{label:'陆游'},{label:'苏轼'}] },
  { prompt: '「众里寻他千百度，蓦然回首，那人却在灯火阑珊处。」', correctIdx: 0, choices: [{label:'辛弃疾'},{label:'苏轼'},{label:'柳永'},{label:'晏殊'}] },
  { prompt: '「少年不识愁滋味，爱上层楼，为赋新词强说愁。」', correctIdx: 0, choices: [{label:'辛弃疾'},{label:'苏轼'},{label:'柳永'},{label:'欧阳修'}] },
  { prompt: '「青山遮不住，毕竟东流去。」', correctIdx: 0, choices: [{label:'辛弃疾'},{label:'苏轼'},{label:'陆游'},{label:'柳永'}] },
  { prompt: '「醉里挑灯看剑，梦回吹角连营。」', correctIdx: 0, choices: [{label:'辛弃疾'},{label:'岳飞'},{label:'陆游'},{label:'苏轼'}] },
  { prompt: '「今宵酒醒何处？杨柳岸，晓风残月。」', correctIdx: 0, choices: [{label:'柳永'},{label:'苏轼'},{label:'辛弃疾'},{label:'晏殊'}] },
  { prompt: '「衣带渐宽终不悔，为伊消得人憔悴。」', correctIdx: 0, choices: [{label:'柳永'},{label:'晏殊'},{label:'苏轼'},{label:'辛弃疾'}] },
  { prompt: '「多情自古伤离别，更那堪，冷落清秋节。」', correctIdx: 0, choices: [{label:'柳永'},{label:'苏轼'},{label:'辛弃疾'},{label:'晏殊'}] },
  { prompt: '「无可奈何花落去，似曾相识燕归来。」', correctIdx: 0, choices: [{label:'晏殊'},{label:'欧阳修'},{label:'苏轼'},{label:'柳永'}] },
  { prompt: '「醉翁之意不在酒，在乎山水之间也。」', correctIdx: 0, choices: [{label:'欧阳修'},{label:'苏轼'},{label:'柳永'},{label:'陆游'}] },
  { prompt: '「庭院深深深几许，杨柳堆烟，帘幕无重数。」', correctIdx: 0, choices: [{label:'欧阳修'},{label:'苏轼'},{label:'柳永'},{label:'晏殊'}] },
  { prompt: '「先天下之忧而忧，后天下之乐而乐。」', correctIdx: 0, choices: [{label:'范仲淹'},{label:'欧阳修'},{label:'王安石'},{label:'苏轼'}] },
  { prompt: '「不以物喜，不以己悲。」', correctIdx: 0, choices: [{label:'范仲淹'},{label:'欧阳修'},{label:'苏轼'},{label:'王安石'}] },
  { prompt: '「王师北定中原日，家祭无忘告乃翁。」', correctIdx: 0, choices: [{label:'陆游'},{label:'辛弃疾'},{label:'苏轼'},{label:'岳飞'}] },
  { prompt: '「山重水复疑无路，柳暗花明又一村。」', correctIdx: 0, choices: [{label:'陆游'},{label:'苏轼'},{label:'辛弃疾'},{label:'王安石'}] },
  { prompt: '「零落成泥碾作尘，只有香如故。」', correctIdx: 0, choices: [{label:'陆游'},{label:'李清照'},{label:'辛弃疾'},{label:'苏轼'}] },
  { prompt: '「位卑未敢忘忧国。」', correctIdx: 0, choices: [{label:'陆游'},{label:'辛弃疾'},{label:'范仲淹'},{label:'苏轼'}] },
  { prompt: '「莫等闲，白了少年头，空悲切。」', correctIdx: 0, choices: [{label:'岳飞'},{label:'辛弃疾'},{label:'陆游'},{label:'苏轼'}] },
  { prompt: '「壮志饥餐胡虏肉，笑谈渴饮匈奴血。」', correctIdx: 0, choices: [{label:'岳飞'},{label:'辛弃疾'},{label:'陆游'},{label:'戚继光'}] },
  { prompt: '「两情若是久长时，又岂在朝朝暮暮。」', correctIdx: 0, choices: [{label:'秦观'},{label:'柳永'},{label:'苏轼'},{label:'李清照'}] },
  { prompt: '「金风玉露一相逢，便胜却人间无数。」', correctIdx: 0, choices: [{label:'秦观'},{label:'柳永'},{label:'苏轼'},{label:'李清照'}] },

  // ══════════════════════════════════════════
  // 明清文学
  // ══════════════════════════════════════════
  { prompt: '「世事洞明皆学问，人情练达即文章。」', correctIdx: 0, choices: [{label:'曹雪芹《红楼梦》'},{label:'吴承恩'},{label:'罗贯中'},{label:'施耐庵'}] },
  { prompt: '「满纸荒唐言，一把辛酸泪；都云作者痴，谁解其中味。」', correctIdx: 0, choices: [{label:'曹雪芹'},{label:'吴承恩'},{label:'蒲松龄'},{label:'施耐庵'}] },
  { prompt: '「花谢花飞花满天，红消香断有谁怜？」', correctIdx: 0, choices: [{label:'林黛玉（曹雪芹）'},{label:'薛宝钗（曹雪芹）'},{label:'王昭君'},{label:'苏轼'}] },
  { prompt: '「天下大势，分久必合，合久必分。」', correctIdx: 0, choices: [{label:'罗贯中《三国演义》'},{label:'司马迁《史记》'},{label:'陈寿《三国志》'},{label:'苏轼'}] },
  { prompt: '「滚滚长江东逝水，浪花淘尽英雄。」', correctIdx: 0, choices: [{label:'杨慎（《三国演义》开篇词）'},{label:'罗贯中'},{label:'苏轼'},{label:'辛弃疾'}] },
  { prompt: '「人生自古谁无死，留取丹心照汗青。」', correctIdx: 0, choices: [{label:'文天祥'},{label:'岳飞'},{label:'辛弃疾'},{label:'陆游'}] },
  { prompt: '「臣心一片磁针石，不指南方不肯休。」', correctIdx: 0, choices: [{label:'文天祥'},{label:'岳飞'},{label:'辛弃疾'},{label:'陆游'}] },
  { prompt: '「山河破碎风飘絮，身世浮沉雨打萍。」', correctIdx: 0, choices: [{label:'文天祥'},{label:'岳飞'},{label:'辛弃疾'},{label:'陆游'}] },
  { prompt: '「人生若只如初见，何事秋风悲画扇。」', correctIdx: 0, choices: [{label:'纳兰性德'},{label:'苏轼'},{label:'辛弃疾'},{label:'柳永'}] },
  { prompt: '「我是人间惆怅客，知君何事泪纵横。」', correctIdx: 0, choices: [{label:'纳兰性德'},{label:'苏轼'},{label:'李清照'},{label:'柳永'}] },
  { prompt: '「问世间情为何物，直教生死相许。」', correctIdx: 0, choices: [{label:'元好问'},{label:'柳永'},{label:'苏轼'},{label:'李清照'}] },
  { prompt: '「苟利国家生死以，岂因祸福避趋之。」', correctIdx: 0, choices: [{label:'林则徐'},{label:'左宗棠'},{label:'曾国藩'},{label:'梁启超'}] },
  { prompt: '「宁可枝头抱香死，何曾吹落北风中。」', correctIdx: 0, choices: [{label:'郑思肖'},{label:'陆游'},{label:'辛弃疾'},{label:'苏轼'}] },

  // ══════════════════════════════════════════
  // 近现代中国
  // ══════════════════════════════════════════
  { prompt: '「横眉冷对千夫指，俯首甘为孺子牛。」', correctIdx: 0, choices: [{label:'鲁迅'},{label:'郭沫若'},{label:'茅盾'},{label:'巴金'}] },
  { prompt: '「不在沉默中爆发，就在沉默中灭亡。」', correctIdx: 0, choices: [{label:'鲁迅'},{label:'郭沫若'},{label:'茅盾'},{label:'巴金'}] },
  { prompt: '「真的猛士，敢于直面惨淡的人生，敢于正视淋漓的鲜血。」', correctIdx: 0, choices: [{label:'鲁迅'},{label:'郭沫若'},{label:'茅盾'},{label:'老舍'}] },
  { prompt: '「其实地上本没有路，走的人多了，也便成了路。」', correctIdx: 0, choices: [{label:'鲁迅'},{label:'郭沫若'},{label:'冰心'},{label:'巴金'}] },
  { prompt: '「黑夜给了我黑色的眼睛，我却用它寻找光明。」', correctIdx: 0, choices: [{label:'顾城'},{label:'北岛'},{label:'舒婷'},{label:'海子'}] },
  { prompt: '「面朝大海，春暖花开。」', correctIdx: 0, choices: [{label:'海子'},{label:'顾城'},{label:'北岛'},{label:'舒婷'}] },
  { prompt: '「活着的意义就在于忍受，去撕碎那套欺骗而华丽的布幕。」', correctIdx: 0, choices: [{label:'余华《活着》'},{label:'莫言'},{label:'路遥'},{label:'巴金'}] },
  { prompt: '「为中华之崛起而读书。」', correctIdx: 0, choices: [{label:'周恩来'},{label:'毛泽东'},{label:'邓小平'},{label:'孙中山'}] },
  { prompt: '「不到长城非好汉。」', correctIdx: 0, choices: [{label:'毛泽东'},{label:'邓小平'},{label:'周恩来'},{label:'朱德'}] },
  { prompt: '「没有调查，就没有发言权。」', correctIdx: 0, choices: [{label:'毛泽东'},{label:'邓小平'},{label:'周恩来'},{label:'列宁'}] },
  { prompt: '「一万年太久，只争朝夕。」', correctIdx: 0, choices: [{label:'毛泽东'},{label:'邓小平'},{label:'周恩来'},{label:'朱德'}] },
  { prompt: '「不管白猫黑猫，能抓到老鼠就是好猫。」', correctIdx: 0, choices: [{label:'邓小平'},{label:'毛泽东'},{label:'周恩来'},{label:'江泽民'}] },
  { prompt: '「少年强则国强，少年智则国智。」', correctIdx: 0, choices: [{label:'梁启超'},{label:'康有为'},{label:'严复'},{label:'孙中山'}] },
  { prompt: '「天下兴亡，匹夫有责。」', correctIdx: 0, choices: [{label:'梁启超（改自顾炎武）'},{label:'顾炎武（原文）'},{label:'孙中山'},{label:'林则徐'}] },
  { prompt: '「驱除鞑虏，恢复中华。」', correctIdx: 0, choices: [{label:'孙中山'},{label:'梁启超'},{label:'康有为'},{label:'谭嗣同'}] },
  { prompt: '「路漫漫其修远兮，我亦上下而求索。」', correctIdx: 0, choices: [{label:'屈原（鲁迅引用）'},{label:'鲁迅原创'},{label:'李白'},{label:'杜甫'}] },

  // ══════════════════════════════════════════
  // 希腊古典哲学
  // ══════════════════════════════════════════
  { prompt: '「我唯一知道的事，就是我什么都不知道。」', correctIdx: 0, choices: [{label:'苏格拉底'},{label:'柏拉图'},{label:'亚里士多德'},{label:'普罗泰戈拉'}] },
  { prompt: '「认识你自己。」', correctIdx: 0, choices: [{label:'苏格拉底'},{label:'柏拉图'},{label:'亚里士多德'},{label:'普罗泰戈拉'}] },
  { prompt: '「人不能两次踏进同一条河流。」', correctIdx: 0, choices: [{label:'赫拉克利特'},{label:'苏格拉底'},{label:'柏拉图'},{label:'芝诺'}] },
  { prompt: '「未经审视的人生不值得过。」', correctIdx: 0, choices: [{label:'苏格拉底'},{label:'柏拉图'},{label:'亚里士多德'},{label:'普罗泰戈拉'}] },
  { prompt: '「吾爱吾师，吾更爱真理。」', correctIdx: 0, choices: [{label:'亚里士多德'},{label:'苏格拉底'},{label:'柏拉图'},{label:'普罗泰戈拉'}] },
  { prompt: '「给我一个支点，我可以撬动整个地球。」', correctIdx: 0, choices: [{label:'阿基米德'},{label:'苏格拉底'},{label:'柏拉图'},{label:'毕达哥拉斯'}] },
  { prompt: '「人天生是政治动物。」', correctIdx: 0, choices: [{label:'亚里士多德'},{label:'苏格拉底'},{label:'柏拉图'},{label:'普罗泰戈拉'}] },
  { prompt: '「美是一种自然的优势。」', correctIdx: 0, choices: [{label:'亚里士多德'},{label:'苏格拉底'},{label:'柏拉图'},{label:'色诺芬'}] },
  { prompt: '「幸福是人类所有活动的最终目的。」', correctIdx: 0, choices: [{label:'亚里士多德'},{label:'苏格拉底'},{label:'柏拉图'},{label:'伊壁鸠鲁'}] },
  { prompt: '「我们是什么，取决于我们重复做什么事情。」', correctIdx: 0, choices: [{label:'亚里士多德'},{label:'苏格拉底'},{label:'柏拉图'},{label:'普罗泰戈拉'}] },

  // ══════════════════════════════════════════
  // 欧洲近代哲学
  // ══════════════════════════════════════════
  { prompt: '「我思故我在。」', correctIdx: 0, choices: [{label:'笛卡尔'},{label:'苏格拉底'},{label:'亚里士多德'},{label:'柏拉图'}] },
  { prompt: '「知识就是力量。」', correctIdx: 0, choices: [{label:'弗朗西斯·培根'},{label:'伏尔泰'},{label:'卢梭'},{label:'洛克'}] },
  { prompt: '「人是目的，不是手段。」', correctIdx: 0, choices: [{label:'康德'},{label:'黑格尔'},{label:'笛卡尔'},{label:'斯宾诺莎'}] },
  { prompt: '「凡是合乎理性的，都是现实的；凡是现实的，都是合乎理性的。」', correctIdx: 0, choices: [{label:'黑格尔'},{label:'康德'},{label:'笛卡尔'},{label:'叔本华'}] },
  { prompt: '「存在先于本质。」', correctIdx: 0, choices: [{label:'萨特'},{label:'加缪'},{label:'海德格尔'},{label:'尼采'}] },
  { prompt: '「他人即地狱。」', correctIdx: 0, choices: [{label:'萨特'},{label:'加缪'},{label:'叔本华'},{label:'尼采'}] },
  { prompt: '「上帝死了。」', correctIdx: 0, choices: [{label:'尼采'},{label:'萨特'},{label:'叔本华'},{label:'加缪'}] },
  { prompt: '「那杀不死我的，必将使我更强大。」', correctIdx: 0, choices: [{label:'尼采'},{label:'萨特'},{label:'叔本华'},{label:'加缪'}] },
  { prompt: '「人是需要超越的东西。」', correctIdx: 0, choices: [{label:'尼采'},{label:'萨特'},{label:'叔本华'},{label:'加缪'}] },
  { prompt: '「我反抗，故我在。」', correctIdx: 0, choices: [{label:'加缪'},{label:'萨特'},{label:'尼采'},{label:'笛卡尔'}] },
  { prompt: '「想象西西弗斯是幸福的。」', correctIdx: 0, choices: [{label:'加缪'},{label:'萨特'},{label:'尼采'},{label:'海德格尔'}] },
  { prompt: '「一个人能做的最勇敢的事，就是继续活下去，哪怕他很痛苦。」', correctIdx: 0, choices: [{label:'加缪'},{label:'萨特'},{label:'尼采'},{label:'叔本华'}] },
  { prompt: '「人生而自由，却无往不在枷锁之中。」', correctIdx: 0, choices: [{label:'卢梭'},{label:'伏尔泰'},{label:'孟德斯鸠'},{label:'康德'}] },
  { prompt: '「我不同意你说的话，但我誓死捍卫你说话的权利。」', correctIdx: 0, choices: [{label:'伏尔泰（常见引用）'},{label:'卢梭'},{label:'孟德斯鸠'},{label:'康德'}] },
  { prompt: '「书是斧头，劈开我们心中冰冻的大海。」', correctIdx: 0, choices: [{label:'卡夫卡'},{label:'尼采'},{label:'萨特'},{label:'加缪'}] },

  // ══════════════════════════════════════════
  // 西方文学
  // ══════════════════════════════════════════
  { prompt: '「生存还是毁灭，这是一个问题。」', correctIdx: 0, choices: [{label:'莎士比亚《哈姆雷特》'},{label:'歌德《浮士德》'},{label:'托尔斯泰'},{label:'狄更斯'}] },
  { prompt: '「凡是过往，皆为序章。」', correctIdx: 0, choices: [{label:'莎士比亚'},{label:'狄更斯'},{label:'雨果'},{label:'歌德'}] },
  { prompt: '「世界是一个大舞台，所有男男女女只是演员。」', correctIdx: 0, choices: [{label:'莎士比亚'},{label:'歌德'},{label:'雨果'},{label:'狄更斯'}] },
  { prompt: '「弱者，你的名字是女人！」', correctIdx: 0, choices: [{label:'莎士比亚《哈姆雷特》'},{label:'歌德'},{label:'雨果'},{label:'托尔斯泰'}] },
  { prompt: '「玫瑰叫什么名字都一样芳香。」', correctIdx: 0, choices: [{label:'莎士比亚《罗密欧与朱丽叶》'},{label:'雨果'},{label:'歌德'},{label:'狄更斯'}] },
  { prompt: '「如果音乐是爱情的食粮，那就继续演奏吧。」', correctIdx: 0, choices: [{label:'莎士比亚《第十二夜》'},{label:'歌德'},{label:'雨果'},{label:'托尔斯泰'}] },
  { prompt: '「幸福的家庭都是相似的，不幸的家庭各有各的不幸。」', correctIdx: 0, choices: [{label:'托尔斯泰《安娜·卡列尼娜》'},{label:'陀思妥耶夫斯基'},{label:'普希金'},{label:'果戈里'}] },
  { prompt: '「美将拯救世界。」', correctIdx: 0, choices: [{label:'陀思妥耶夫斯基《白痴》'},{label:'托尔斯泰'},{label:'普希金'},{label:'契诃夫'}] },
  { prompt: '「如果上帝不存在，那么一切都是被允许的。」', correctIdx: 0, choices: [{label:'陀思妥耶夫斯基《卡拉马佐夫兄弟》'},{label:'托尔斯泰'},{label:'萨特'},{label:'尼采'}] },
  { prompt: '「这是最好的时代，也是最坏的时代。」', correctIdx: 0, choices: [{label:'狄更斯《双城记》'},{label:'雨果'},{label:'巴尔扎克'},{label:'福楼拜'}] },
  { prompt: '「我哭泣，因为我没有鞋子穿；直到我看见一个没有脚的人。」', correctIdx: 0, choices: [{label:'波斯诗人萨迪（常见引用）'},{label:'鲁米'},{label:'卡夫卡'},{label:'雨果'}] },
  { prompt: '「人可以被消灭，但不能被打败。」', correctIdx: 0, choices: [{label:'海明威《老人与海》'},{label:'马克·吐温'},{label:'福克纳'},{label:'斯坦贝克'}] },
  { prompt: '「经验是每个人给自己的错误所起的名字。」', correctIdx: 0, choices: [{label:'王尔德'},{label:'萧伯纳'},{label:'拜伦'},{label:'雪莱'}] },
  { prompt: '「生活中只有两种悲剧：一种是得不到自己想要的，另一种是得到了。」', correctIdx: 0, choices: [{label:'王尔德'},{label:'萧伯纳'},{label:'狄更斯'},{label:'雨果'}] },
  { prompt: '「做你自己，因为其他人都有人做了。」', correctIdx: 0, choices: [{label:'王尔德'},{label:'萧伯纳'},{label:'拜伦'},{label:'雪莱'}] },
  { prompt: '「我们接受我们认为自己值得的爱。」', correctIdx: 0, choices: [{label:'斯蒂芬·乔博斯基《壁花少年》'},{label:'简·奥斯汀'},{label:'托尔斯泰'},{label:'萨特'}] },
  { prompt: '「生活就像一盒巧克力，你永远不知道下一颗是什么味道。」', correctIdx: 0, choices: [{label:'《阿甘正传》台词'},{label:'马克·吐温'},{label:'海明威'},{label:'卓别林'}] },
  { prompt: '「明天又是新的一天。」', correctIdx: 0, choices: [{label:'玛格丽特·米切尔《飘》'},{label:'简·奥斯汀'},{label:'勃朗特'},{label:'狄更斯'}] },
  { prompt: '「傲慢与偏见是爱情最大的障碍。」', correctIdx: 0, choices: [{label:'简·奥斯汀《傲慢与偏见》（书名含义）'},{label:'勃朗特'},{label:'狄更斯'},{label:'萨克雷'}] },
  { prompt: '「我们在最黑暗的时刻会发现光芒。」', correctIdx: 0, choices: [{label:'J.K.罗琳《哈利·波特》（邓布利多）'},{label:'托尔金'},{label:'C.S.刘易斯'},{label:'托尔斯泰'}] },
  { prompt: '「不是所有闪光的都是金子；不是所有流浪者都迷失了方向。」', correctIdx: 0, choices: [{label:'托尔金《魔戒》'},{label:'莎士比亚'},{label:'C.S.刘易斯'},{label:'雨果'}] },
  { prompt: '「如果你真正了解一个人，那么即使他做出任何事情，你也不会感到惊讶。」', correctIdx: 0, choices: [{label:'哈珀·李《杀死一只知更鸟》'},{label:'简·奥斯汀'},{label:'勃朗特'},{label:'托尔斯泰'}] },
  { prompt: '「真正的旅行不是去寻找新的风景，而是拥有新的眼光。」', correctIdx: 0, choices: [{label:'马塞尔·普鲁斯特'},{label:'加缪'},{label:'萨特'},{label:'雨果'}] },
  { prompt: '「一切快乐的家庭彼此相似；每个不幸的家庭各有其不幸。（安娜开篇）」', correctIdx: 0, choices: [{label:'列夫·托尔斯泰'},{label:'陀思妥耶夫斯基'},{label:'普希金'},{label:'屠格涅夫'}] },

  // ══════════════════════════════════════════
  // 科学家 / 发明家
  // ══════════════════════════════════════════
  { prompt: '「天才是百分之一的灵感加上百分之九十九的汗水。」', correctIdx: 0, choices: [{label:'爱迪生'},{label:'爱因斯坦'},{label:'牛顿'},{label:'特斯拉'}] },
  { prompt: '「我没有失败，我只是发现了一万种不管用的方法。」', correctIdx: 0, choices: [{label:'爱迪生'},{label:'特斯拉'},{label:'爱因斯坦'},{label:'居里夫人'}] },
  { prompt: '「想象力比知识更重要。」', correctIdx: 0, choices: [{label:'爱因斯坦'},{label:'爱迪生'},{label:'牛顿'},{label:'霍金'}] },
  { prompt: '「如果你能轻易解释某件事，那你就真的懂了它。」', correctIdx: 0, choices: [{label:'爱因斯坦'},{label:'费曼'},{label:'霍金'},{label:'牛顿'}] },
  { prompt: '「如果我能看得更远，是因为我站在巨人的肩膀上。」', correctIdx: 0, choices: [{label:'牛顿'},{label:'爱因斯坦'},{label:'伽利略'},{label:'哥白尼'}] },
  { prompt: '「物竞天择，适者生存。」', correctIdx: 0, choices: [{label:'达尔文（赫胥黎总结）'},{label:'孟德尔'},{label:'拉马克'},{label:'林奈'}] },
  { prompt: '「生命中没有什么是值得恐惧的，只有值得理解的。」', correctIdx: 0, choices: [{label:'居里夫人'},{label:'爱因斯坦'},{label:'达尔文'},{label:'霍金'}] },
  { prompt: '「要记住仰望星空，而不是低头看脚下。」', correctIdx: 0, choices: [{label:'史蒂芬·霍金'},{label:'爱因斯坦'},{label:'卡尔·萨根'},{label:'尼尔·德格拉斯·泰森'}] },
  { prompt: '「疯狂是一遍又一遍地做同样的事，却期待不同的结果。」', correctIdx: 0, choices: [{label:'爱因斯坦（常见引用）'},{label:'爱迪生'},{label:'弗洛伊德'},{label:'巴甫洛夫'}] },
  { prompt: '「科学没有国界，但科学家有祖国。」', correctIdx: 0, choices: [{label:'路易·巴斯德'},{label:'居里夫人'},{label:'爱因斯坦'},{label:'达尔文'}] },
  { prompt: '「自然界不跳跃。」', correctIdx: 0, choices: [{label:'达尔文'},{label:'牛顿'},{label:'莱布尼茨'},{label:'爱因斯坦'}] },
  { prompt: '「宇宙中最不可理解的事，是宇宙是可以被理解的。」', correctIdx: 0, choices: [{label:'爱因斯坦'},{label:'霍金'},{label:'牛顿'},{label:'玻尔'}] },

  // ══════════════════════════════════════════
  // 世界历史人物 / 政治家
  // ══════════════════════════════════════════
  { prompt: '「你可以在所有时间欺骗一些人；可以在一些时间欺骗所有人；但不能在所有时间欺骗所有人。」', correctIdx: 0, choices: [{label:'亚伯拉罕·林肯'},{label:'富兰克林·罗斯福'},{label:'温斯顿·丘吉尔'},{label:'约翰·肯尼迪'}] },
  { prompt: '「政府是民有、民治、民享的。」', correctIdx: 0, choices: [{label:'林肯（葛底斯堡演说）'},{label:'杰斐逊'},{label:'华盛顿'},{label:'罗斯福'}] },
  { prompt: '「成功是从一个失败走向另一个失败，但热情不减。」', correctIdx: 0, choices: [{label:'温斯顿·丘吉尔'},{label:'富兰克林·罗斯福'},{label:'戴高乐'},{label:'林肯'}] },
  { prompt: '「不要问国家为你做了什么，要问你为国家做了什么。」', correctIdx: 0, choices: [{label:'约翰·肯尼迪'},{label:'林肯'},{label:'丘吉尔'},{label:'罗斯福'}] },
  { prompt: '「成为你希望在世界上看到的改变。」', correctIdx: 0, choices: [{label:'甘地'},{label:'曼德拉'},{label:'马丁·路德·金'},{label:'奥巴马'}] },
  { prompt: '「勇敢不是没有恐惧，而是判断出还有比恐惧更重要的事情。」', correctIdx: 0, choices: [{label:'넬슨·曼德拉'},{label:'甘地'},{label:'马丁·路德·金'},{label:'林肯'}] },
  { prompt: '「我有一个梦想。」', correctIdx: 0, choices: [{label:'马丁·路德·金'},{label:'甘地'},{label:'曼德拉'},{label:'肯尼迪'}] },
  { prompt: '「我们选择登月，不是因为它容易，而是因为它困难。」', correctIdx: 0, choices: [{label:'约翰·肯尼迪'},{label:'尼尔·阿姆斯特朗'},{label:'艾森豪威尔'},{label:'林肯'}] },
  { prompt: '「那是人的一小步，却是人类的一大步。」', correctIdx: 0, choices: [{label:'尼尔·阿姆斯特朗'},{label:'尤里·加加林'},{label:'约翰·肯尼迪'},{label:'爱德华·怀特'}] },
  { prompt: '「自由、平等、博爱。」', correctIdx: 0, choices: [{label:'法国大革命口号'},{label:'卢梭'},{label:'伏尔泰'},{label:'孟德斯鸠'}] },

  // ══════════════════════════════════════════
  // 现代商业 / 科技人物
  // ══════════════════════════════════════════
  { prompt: '「Stay hungry, stay foolish.（求知若饥，虚怀若愚）」', correctIdx: 0, choices: [{label:'史蒂夫·乔布斯'},{label:'比尔·盖茨'},{label:'杰夫·贝索斯'},{label:'马克·扎克伯格'}] },
  { prompt: '「你的时间有限，所以不要为别人的生活而浪费它。」', correctIdx: 0, choices: [{label:'史蒂夫·乔布斯'},{label:'比尔·盖茨'},{label:'埃隆·马斯克'},{label:'沃伦·巴菲特'}] },
  { prompt: '「活着就是要改变世界，否则活着有什么意义？」', correctIdx: 0, choices: [{label:'史蒂夫·乔布斯'},{label:'比尔·盖茨'},{label:'埃隆·马斯克'},{label:'杰夫·贝索斯'}] },
  { prompt: '「最大的风险就是不冒任何风险。」', correctIdx: 0, choices: [{label:'马克·扎克伯格'},{label:'乔布斯'},{label:'贝索斯'},{label:'马斯克'}] },
  { prompt: '「失败是一个选项，如果失败没有发生，那说明你的创新还不够大胆。」', correctIdx: 0, choices: [{label:'埃隆·马斯克'},{label:'乔布斯'},{label:'贝索斯'},{label:'扎克伯格'}] },
  { prompt: '「如果你是第一个就行了，完美可以等一等。」', correctIdx: 0, choices: [{label:'杰夫·贝索斯'},{label:'乔布斯'},{label:'马斯克'},{label:'扎克伯格'}] },
  { prompt: '「要在有生之年见到人类成为多星球物种。」', correctIdx: 0, choices: [{label:'埃隆·马斯克'},{label:'杰夫·贝索斯'},{label:'比尔·盖茨'},{label:'扎克伯格'}] },
  { prompt: '「人们不关心你知道多少，直到他们知道你有多关心。」', correctIdx: 0, choices: [{label:'西奥多·罗斯福（常见引用）'},{label:'卡内基'},{label:'乔布斯'},{label:'巴菲特'}] },
  { prompt: '「今天很残酷，明天更残酷，后天很美好，但大多数人死在了明天晚上。」', correctIdx: 0, choices: [{label:'马云'},{label:'任正非'},{label:'柳传志'},{label:'王石'}] },
  { prompt: '「我永远都不会打工，我要做老板，做最大的老板。」', correctIdx: 0, choices: [{label:'马云（早年访谈）'},{label:'任正非'},{label:'王健林'},{label:'刘强东'}] },
  { prompt: '「一个亿的小目标。」', correctIdx: 0, choices: [{label:'王健林'},{label:'马云'},{label:'任正非'},{label:'马化腾'}] },

  // ══════════════════════════════════════════
  // 电影 / 流行文化
  // ══════════════════════════════════════════
  { prompt: '「Life is like a box of chocolates, you never know what you\'re gonna get.（生活就像一盒巧克力……）」', correctIdx: 0, choices: [{label:'《阿甘正传》'},{label:'《肖申克的救赎》'},{label:'《泰坦尼克号》'},{label:'《美丽人生》'}] },
  { prompt: '「You had me at hello.（你一开口，我便沦陷）」', correctIdx: 0, choices: [{label:'《杰瑞·马奎尔》'},{label:'《泰坦尼克号》'},{label:'《当哈利遇见莎莉》'},{label:'《北非谍影》'}] },
  { prompt: '「I'll be back.（我会回来的）」', correctIdx: 0, choices: [{label:'《终结者》'},{label:'《第一滴血》'},{label:'《独立日》'},{label:'《虎胆龙威》'}] },
  { prompt: '「May the Force be with you.（愿原力与你同在）」', correctIdx: 0, choices: [{label:'《星球大战》'},{label:'《星际迷航》'},{label:'《阿凡达》'},{label:'《黑客帝国》'}] },
  { prompt: '「We accept the love we think we deserve.（我们接受我们认为自己值得的爱）」', correctIdx: 0, choices: [{label:'《壁花少年》'},{label:'《贫民窟的百万富翁》'},{label:'《暮光之城》'},{label:'《爱乐之城》'}] },
  { prompt: '「To infinity and beyond!（飞向宇宙，浩瀚无垠！）」', correctIdx: 0, choices: [{label:'《玩具总动员》'},{label:'《星球大战》'},{label:'《超人总动员》'},{label:'《星际穿越》'}] },
  { prompt: '「You can't handle the truth!（你承受不了真相！）」', correctIdx: 0, choices: [{label:'《好人寥寥》'},{label:'《肖申克的救赎》'},{label:'《疤面煞星》'},{label:'《教父》'}] },
  { prompt: '「Just keep swimming.（继续游，继续游）」', correctIdx: 0, choices: [{label:'《海底总动员》多莉'},{label:'《玩具总动员》'},{label:'《狮子王》'},{label:'《冰雪奇缘》'}] },
  { prompt: '「The greatest trick the devil ever pulled was convincing the world he didn't exist.（魔鬼最大的把戏是让世人相信他不存在）」', correctIdx: 0, choices: [{label:'《非常嫌疑犯》'},{label:'《七宗罪》'},{label:'《搏击俱乐部》'},{label:'《魔鬼代言人》'}] },
  { prompt: '「I see dead people.（我看见死人）」', correctIdx: 0, choices: [{label:'《灵异第六感》'},{label:'《闪灵》'},{label:'《寂静岭》'},{label:'《电锯惊魂》'}] },
  { prompt: '「To be, or not to be, that is the question.」', correctIdx: 0, choices: [{label:'莎士比亚《哈姆雷特》'},{label:'莎士比亚《麦克白》'},{label:'莎士比亚《奥赛罗》'},{label:'莎士比亚《李尔王》'}] },
  { prompt: '「Here's looking at you, kid.（这里望着你，孩子）」', correctIdx: 0, choices: [{label:'《卡萨布兰卡（北非谍影）》'},{label:'《泰坦尼克号》'},{label:'《乱世佳人》'},{label:'《罗马假日》'}] },
  { prompt: '「You is kind, you is smart, you is important.（你善良，你聪明，你重要）」', correctIdx: 0, choices: [{label:'《相助》'},{label:'《贫民窟的百万富翁》'},{label:'《阿甘正传》'},{label:'《荒野猎人》'}] },
  { prompt: '「After all, tomorrow is another day.（毕竟，明天又是新的一天）」', correctIdx: 0, choices: [{label:'《乱世佳人》斯嘉丽'},{label:'《泰坦尼克号》'},{label:'《魂断蓝桥》'},{label:'《罗马假日》'}] },
  { prompt: '「Why so serious?（为什么那么严肃？）」', correctIdx: 0, choices: [{label:'《蝙蝠侠：黑暗骑士》小丑'},{label:'《超人》'},{label:'《蜘蛛侠》'},{label:'《复仇者联盟》'}] },
  { prompt: '「你好，打劫。」', correctIdx: 0, choices: [{label:'《功夫》（无厘头喜剧）'},{label:'《少林足球》'},{label:'《唐伯虎点秋香》'},{label:'《大话西游》'}] },
  { prompt: '「曾经有一份真诚的爱情放在我面前，我没有珍惜……」', correctIdx: 0, choices: [{label:'《大话西游》至尊宝'},{label:'《天若有情》'},{label:'《花样年华》'},{label:'《重庆森林》'}] },
  { prompt: '「人生就是这样，总是充满各种各样的选择。」', correctIdx: 0, choices: [{label:'《肖申克的救赎》'},{label:'《心灵捕手》'},{label:'《阿甘正传》'},{label:'《搏击俱乐部》'}] },
  { prompt: '「Get busy living, or get busy dying.（要么忙着活，要么忙着死）」', correctIdx: 0, choices: [{label:'《肖申克的救赎》'},{label:'《阿甘正传》'},{label:'《心灵捕手》'},{label:'《泰坦尼克号》'}] },
  { prompt: '「Houston, we have a problem.（休斯顿，我们出问题了）」', correctIdx: 0, choices: [{label:'《阿波罗13号》'},{label:'《星球大战》'},{label:'《星际穿越》'},{label:'《地心引力》'}] },
  { prompt: '「You jump, I jump.（你跳，我就跳）」', correctIdx: 0, choices: [{label:'《泰坦尼克号》'},{label:'《爱乐之城》'},{label:'《罗马假日》'},{label:'《卡萨布兰卡》'}] },

  // ══════════════════════════════════════════
  // 其他名言 / 杂
  // ══════════════════════════════════════════
  { prompt: '「细节决定成败。」', correctIdx: 0, choices: [{label:'汪中求（中国管理学者）'},{label:'张瑞敏'},{label:'任正非'},{label:'柳传志'}] },
  { prompt: '「真正的危险不是计算机开始像人一样思考，而是人开始像计算机一样思考。」', correctIdx: 0, choices: [{label:'悉尼·哈里斯'},{label:'霍金'},{label:'比尔·盖茨'},{label:'马斯克'}] },
  { prompt: '「Every day may not be good, but there is something good in every day.（每天未必都好，但每天都有好事）」', correctIdx: 0, choices: [{label:'爱丽丝·莫尔斯·厄尔'},{label:'简·奥斯汀'},{label:'卡夫卡'},{label:'海明威'}] },
  { prompt: '「Well-behaved women seldom make history.（乖乖女很少创造历史）」', correctIdx: 0, choices: [{label:'劳雷尔·斯塔奇韦尔'},{label:'玛格丽特·撒切尔'},{label:'西蒙娜·德·波伏娃'},{label:'弗里达·卡罗'}] },
  { prompt: '「In three words I can sum up everything I've learned about life: it goes on.（用三个词总结生命：它继续）」', correctIdx: 0, choices: [{label:'罗伯特·弗罗斯特'},{label:'海明威'},{label:'马克·吐温'},{label:'狄金森'}] },
  { prompt: '「两条路在树林里分叉，我选择了人迹罕至的那条，因此一切变得不同。」', correctIdx: 0, choices: [{label:'罗伯特·弗罗斯特'},{label:'海明威'},{label:'惠特曼'},{label:'狄金森'}] },
  { prompt: '「第一，你永远是对的；第二，当你发现你错了，请参考第一条。」', correctIdx: 0, choices: [{label:'商界格言（无确切作者）'},{label:'乔布斯'},{label:'韦尔奇'},{label:'比尔·盖茨'}] },
  { prompt: '「幸福不是因为拥有的多，而是因为计较的少。」', correctIdx: 0, choices: [{label:'亚里士多德（常见引用）'},{label:'苏格拉底'},{label:'伊壁鸠鲁'},{label:'斯多葛派'}] },
  { prompt: '「The only way to do great work is to love what you do.（做伟大工作的唯一方式是热爱你所做的事）」', correctIdx: 0, choices: [{label:'史蒂夫·乔布斯'},{label:'比尔·盖茨'},{label:'沃伦·巴菲特'},{label:'马克·扎克伯格'}] },
  { prompt: '「Not all those who wander are lost.（不是所有流浪者都迷失了方向）」', correctIdx: 0, choices: [{label:'J.R.R.托尔金《魔戒》'},{label:'C.S.刘易斯'},{label:'乔·罗琳'},{label:'海明威'}] },
  { prompt: '「Time you enjoy wasting is not wasted time.（你享受着浪费的时间不是被浪费的时间）」', correctIdx: 0, choices: [{label:'马尔塔·特朗特（常见误引用为罗素）'},{label:'罗素'},{label:'卡夫卡'},{label:'普鲁斯特'}] },
  { prompt: '「It does not matter how slowly you go as long as you do not stop.（不管走多慢，只要不停就好）」', correctIdx: 0, choices: [{label:'孔子（常见引用）'},{label:'老子'},{label:'孟子'},{label:'庄子'}] },
  { prompt: '「The secret of getting ahead is getting started.（成功的秘诀是开始行动）」', correctIdx: 0, choices: [{label:'马克·吐温'},{label:'本杰明·富兰克林'},{label:'亚伯拉罕·林肯'},{label:'温斯顿·丘吉尔'}] },
  { prompt: '「Wherever you go, go with all your heart.（无论去哪里，全心全意去）」', correctIdx: 0, choices: [{label:'孔子（常见引用）'},{label:'老子'},{label:'孟子'},{label:'庄子'}] },
  { prompt: '「In the middle of difficulty lies opportunity.（困难之中蕴藏机会）」', correctIdx: 0, choices: [{label:'爱因斯坦'},{label:'爱迪生'},{label:'牛顿'},{label:'达尔文'}] },
  { prompt: '「The best time to plant a tree was 20 years ago. The second best time is now.（种树最好的时间是20年前，其次是现在）」', correctIdx: 0, choices: [{label:'中国谚语'},{label:'孔子'},{label:'老子'},{label:'孟子'}] },


  // ══════════════════════════════════════════
  // 更多唐诗宋词
  // ══════════════════════════════════════════
  { prompt: '「会当凌绝顶，一览众山小。」（登泰山有感）', correctIdx: 0, choices: [{label:'杜甫'},{label:'李白'},{label:'王维'},{label:'孟浩然'}] },
  { prompt: '「无言独上西楼，月如钩。寂寞梧桐深院锁清秋。」', correctIdx: 0, choices: [{label:'李煜'},{label:'李清照'},{label:'柳永'},{label:'晏殊'}] },
  { prompt: '「问君能有几多愁？恰似一江春水向东流。」', correctIdx: 0, choices: [{label:'李煜'},{label:'李清照'},{label:'柳永'},{label:'苏轼'}] },
  { prompt: '「林花谢了春红，太匆匆。无奈朝来寒雨晚来风。」', correctIdx: 0, choices: [{label:'李煜'},{label:'李清照'},{label:'晏殊'},{label:'秦观'}] },
  { prompt: '「剪不断，理还乱，是离愁，别是一般滋味在心头。」', correctIdx: 0, choices: [{label:'李煜'},{label:'李清照'},{label:'柳永'},{label:'苏轼'}] },
  { prompt: '「春花秋月何时了，往事知多少。」', correctIdx: 0, choices: [{label:'李煜'},{label:'苏轼'},{label:'李清照'},{label:'晏殊'}] },
  { prompt: '「东篱把酒黄昏后，有暗香盈袖。」', correctIdx: 0, choices: [{label:'李清照'},{label:'苏轼'},{label:'辛弃疾'},{label:'陆游'}] },
  { prompt: '「帘卷西风，人比黄花瘦。」', correctIdx: 0, choices: [{label:'李清照'},{label:'苏轼'},{label:'柳永'},{label:'晏殊'}] },
  { prompt: '「此情可待成追忆？只是当时已惘然。」', correctIdx: 0, choices: [{label:'李商隐'},{label:'杜牧'},{label:'白居易'},{label:'李白'}] },
  { prompt: '「举头望明月，低头思故乡。」', correctIdx: 0, choices: [{label:'李白'},{label:'杜甫'},{label:'王维'},{label:'孟浩然'}] },
  { prompt: '「浮云游子意，落日故人情。」', correctIdx: 0, choices: [{label:'李白'},{label:'杜甫'},{label:'王维'},{label:'孟浩然'}] },
  { prompt: '「深林人不知，明月来相照。」', correctIdx: 0, choices: [{label:'王维'},{label:'孟浩然'},{label:'李白'},{label:'杜甫'}] },
  { prompt: '「随风潜入夜，润物细无声。」', correctIdx: 0, choices: [{label:'杜甫'},{label:'李白'},{label:'白居易'},{label:'王维'}] },
  { prompt: '「国破山河在，城春草木深。」', correctIdx: 0, choices: [{label:'杜甫'},{label:'李白'},{label:'白居易'},{label:'王维'}] },
  { prompt: '「月落乌啼霜满天，江枫渔火对愁眠。」', correctIdx: 0, choices: [{label:'张继'},{label:'杜牧'},{label:'李白'},{label:'杜甫'}] },
  { prompt: '「但愿人长久，千里共婵娟。」（水调歌头）', correctIdx: 0, choices: [{label:'苏轼'},{label:'李清照'},{label:'辛弃疾'},{label:'柳永'}] },
  { prompt: '「不识庐山真面目，只缘身在此山中。」（题西林壁）', correctIdx: 0, choices: [{label:'苏轼'},{label:'陆游'},{label:'王安石'},{label:'欧阳修'}] },
  { prompt: '「欲把西湖比西子，淡妆浓抹总相宜。」', correctIdx: 0, choices: [{label:'苏轼'},{label:'陆游'},{label:'白居易'},{label:'欧阳修'}] },
  { prompt: '「春色满园关不住，一枝红杏出墙来。」', correctIdx: 0, choices: [{label:'叶绍翁'},{label:'苏轼'},{label:'陆游'},{label:'王安石'}] },
  { prompt: '「等闲识得东风面，万紫千红总是春。」', correctIdx: 0, choices: [{label:'朱熹'},{label:'苏轼'},{label:'陆游'},{label:'王安石'}] },
  { prompt: '「接天莲叶无穷碧，映日荷花别样红。」', correctIdx: 0, choices: [{label:'杨万里'},{label:'苏轼'},{label:'陆游'},{label:'白居易'}] },
  { prompt: '「小荷才露尖尖角，早有蜻蜓立上头。」', correctIdx: 0, choices: [{label:'杨万里'},{label:'苏轼'},{label:'陆游'},{label:'杜甫'}] },
  { prompt: '「借问酒家何处有？牧童遥指杏花村。」', correctIdx: 0, choices: [{label:'杜牧'},{label:'李白'},{label:'杜甫'},{label:'白居易'}] },
  { prompt: '「千里莺啼绿映红，水村山郭酒旗风。」', correctIdx: 0, choices: [{label:'杜牧'},{label:'李白'},{label:'杜甫'},{label:'白居易'}] },
  { prompt: '「烟笼寒水月笼沙，夜泊秦淮近酒家。」', correctIdx: 0, choices: [{label:'杜牧'},{label:'李商隐'},{label:'李白'},{label:'杜甫'}] },
  { prompt: '「无边光景一时新。」（春日）', correctIdx: 0, choices: [{label:'朱熹'},{label:'苏轼'},{label:'陆游'},{label:'王安石'}] },
  { prompt: '「王师北定中原日，家祭无忘告乃翁。」', correctIdx: 0, choices: [{label:'陆游'},{label:'辛弃疾'},{label:'苏轼'},{label:'岳飞'}] },
  { prompt: '「拣尽寒枝不肯栖，寂寞沙洲冷。」', correctIdx: 0, choices: [{label:'苏轼'},{label:'辛弃疾'},{label:'陆游'},{label:'柳永'}] },
  { prompt: '「纵使晴明无雨色，入云深处亦沾衣。」', correctIdx: 0, choices: [{label:'张旭'},{label:'李白'},{label:'杜甫'},{label:'白居易'}] },
  { prompt: '「人面不知何处去，桃花依旧笑春风。」', correctIdx: 0, choices: [{label:'崔护'},{label:'杜牧'},{label:'李白'},{label:'白居易'}] },

  // ══════════════════════════════════════════
  // 更多西方文学 / 名言
  // ══════════════════════════════════════════
  { prompt: '「When you can't go back, you have to worry only about the best way of moving forward.（当你无法回头，就只需考虑如何向前迈进）」', correctIdx: 0, choices: [{label:'保罗·柯艾略《牧羊少年奇幻之旅》'},{label:'托尔斯泰'},{label:'海明威'},{label:'加缪'}] },
  { prompt: '「没有比这个更孤独的了：狮子回到人群中。」', correctIdx: 0, choices: [{label:'弗里德里希·尼采'},{label:'萨特'},{label:'加缪'},{label:'卡夫卡'}] },
  { prompt: '「人类是需要故事的动物。」', correctIdx: 0, choices: [{label:'萨尔曼·拉什迪'},{label:'博尔赫斯'},{label:'马尔克斯'},{label:'卡夫卡'}] },
  { prompt: '「直到你看见一个孩子的眼睛，你才能真正明白人类的灵魂。」', correctIdx: 0, choices: [{label:'维克多·雨果'},{label:'狄更斯'},{label:'巴尔扎克'},{label:'福楼拜'}] },
  { prompt: '「爱情是一种疾病，而且没有解药。」', correctIdx: 0, choices: [{label:'马尔克斯《霍乱时期的爱情》'},{label:'托尔斯泰'},{label:'雨果'},{label:'莫泊桑'}] },
  { prompt: '「每个人都是一座孤岛。」', correctIdx: 0, choices: [{label:'约翰·多恩（常见引用）'},{label:'卡夫卡'},{label:'加缪'},{label:'萨特'}] },
  { prompt: '「It was the best of times, it was the worst of times.（这是最好的时代，这是最坏的时代）」', correctIdx: 0, choices: [{label:'查尔斯·狄更斯《双城记》'},{label:'维克多·雨果'},{label:'巴尔扎克'},{label:'托尔斯泰'}] },
  { prompt: '「Carpe diem. Seize the day.（及时行乐，把握当下）」', correctIdx: 0, choices: [{label:'贺拉斯（拉丁诗人）'},{label:'奥维德'},{label:'维吉尔'},{label:'西塞罗'}] },
  { prompt: '「Hell is other people.（他人即地狱）」', correctIdx: 0, choices: [{label:'让-保罗·萨特《禁闭》'},{label:'加缪'},{label:'尼采'},{label:'叔本华'}] },
  { prompt: '「One must imagine Sisyphus happy.（人们必须想象西西弗斯是幸福的）」', correctIdx: 0, choices: [{label:'阿尔贝·加缪《西西弗斯神话》'},{label:'萨特'},{label:'尼采'},{label:'海德格尔'}] },
  { prompt: '「The cave you fear to enter holds the treasure you seek.（你不敢进入的洞穴，藏着你寻觅的宝藏）」', correctIdx: 0, choices: [{label:'约瑟夫·坎贝尔'},{label:'荣格'},{label:'弗洛伊德'},{label:'尼采'}] },
  { prompt: '「All happy families are alike; each unhappy family is unhappy in its own way.」', correctIdx: 0, choices: [{label:'列夫·托尔斯泰《安娜·卡列尼娜》'},{label:'陀思妥耶夫斯基'},{label:'屠格涅夫'},{label:'契诃夫'}] },
  { prompt: '「A reader lives a thousand lives before he dies.（读者在死之前活了一千次）」', correctIdx: 0, choices: [{label:'乔治·R·R·马丁'},{label:'托尔金'},{label:'J.K.罗琳'},{label:'斯蒂芬·金'}] },
  { prompt: '「There is no friend as loyal as a book.（没有比书更忠诚的朋友）」', correctIdx: 0, choices: [{label:'欧内斯特·海明威'},{label:'马克·吐温'},{label:'萧伯纳'},{label:'狄更斯'}] },
  { prompt: '「The only way out of the labyrinth of suffering is to forgive.（走出苦难迷宫的唯一方法是宽恕）」', correctIdx: 0, choices: [{label:'约翰·格林《寻找阿拉斯加》'},{label:'托尔斯泰'},{label:'陀思妥耶夫斯基'},{label:'加缪'}] },
  { prompt: '「We are all of us stars, and we deserve to twinkle.（我们都是星星，我们值得闪耀）」', correctIdx: 0, choices: [{label:'玛丽莲·梦露'},{label:'奥黛丽·赫本'},{label:'加里·格兰特'},{label:'格蕾丝·凯利'}] },

  // ══════════════════════════════════════════
  // 更多名人名言
  // ══════════════════════════════════════════
  { prompt: '「创造力是把自己与众不同的东西拿出来，与别人分享的能力。」', correctIdx: 0, choices: [{label:'布鲁诺·贝特尔海姆'},{label:'爱因斯坦'},{label:'毕加索'},{label:'达芬奇'}] },
  { prompt: '「艺术的目的是洗净日常生活的尘埃，让灵魂看见清澈。」', correctIdx: 0, choices: [{label:'毕加索'},{label:'达芬奇'},{label:'梵高'},{label:'马蒂斯'}] },
  { prompt: '「我没有特殊才能，只是有强烈的好奇心。」', correctIdx: 0, choices: [{label:'爱因斯坦'},{label:'牛顿'},{label:'达尔文'},{label:'居里夫人'}] },
  { prompt: '「Logic will get you from A to B. Imagination will take you everywhere.（逻辑让你从A到B，想象力带你去任何地方）」', correctIdx: 0, choices: [{label:'爱因斯坦'},{label:'牛顿'},{label:'霍金'},{label:'爱迪生'}] },
  { prompt: '「In every walk with nature, one receives far more than he seeks.（每次亲近自然，总有意外收获）」', correctIdx: 0, choices: [{label:'约翰·缪尔'},{label:'梭罗'},{label:'爱默生'},{label:'惠特曼'}] },
  { prompt: '「To go fast, go alone; to go far, go together.（走得快，独行；走得远，同行）」', correctIdx: 0, choices: [{label:'非洲谚语'},{label:'中国谚语'},{label:'印度谚语'},{label:'古希腊格言'}] },
  { prompt: '「The secret of change is to focus all of your energy on building the new, not fighting the old.（改变的秘密是把精力放在建设新的，而非对抗旧的）」', correctIdx: 0, choices: [{label:'苏格拉底（常见引用）'},{label:'柏拉图'},{label:'亚里士多德'},{label:'普鲁塔克'}] },
  { prompt: '「Try not. Do. Or do not. There is no try.（不要尝试，要去做，不然就别做，没有尝试这回事）」', correctIdx: 0, choices: [{label:'《星球大战》尤达大师'},{label:'《蝙蝠侠》'},{label:'《星际迷航》'},{label:'《黑客帝国》'}] },
  { prompt: '「Whether you think you can or you think you can't, you're right.（不论你认为你能还是不能，你都是对的）」', correctIdx: 0, choices: [{label:'亨利·福特'},{label:'卡内基'},{label:'爱迪生'},{label:'洛克菲勒'}] },
  { prompt: '「The greatest glory in living lies not in never falling, but in rising every time we fall.（生命最大的荣耀不在于从未跌倒，而在于每次跌倒后都能重新站起）」', correctIdx: 0, choices: [{label:'넬슨·曼德拉'},{label:'马丁·路德·金'},{label:'甘地'},{label:'林肯'}] },
  { prompt: '「Education is the most powerful weapon which you can use to change the world.（教育是改变世界最有力的武器）」', correctIdx: 0, choices: [{label:'넬슨·曼德拉'},{label:'甘地'},{label:'马丁·路德·金'},{label:'奥巴马'}] },
  { prompt: '「Be yourself; everyone else is already taken.（做你自己；其他所有人都已经有人做了）」', correctIdx: 0, choices: [{label:'奥斯卡·王尔德'},{label:'萧伯纳'},{label:'马克·吐温'},{label:'乔治·伯纳德·肖'}] },
  { prompt: '「The truth will set you free, but first it will make you miserable.（真相会让你自由，但首先它会让你痛苦）」', correctIdx: 0, choices: [{label:'詹姆斯·A·加菲尔德'},{label:'林肯'},{label:'约翰·16:32'},{label:'海明威'}] },
  { prompt: '「Two roads diverged in a wood, and I took the one less traveled by.（树林里有两条路，我选了人迹罕至的那条）」', correctIdx: 0, choices: [{label:'罗伯特·弗罗斯特'},{label:'惠特曼'},{label:'爱默生'},{label:'狄金森'}] },
  { prompt: '「I am not afraid of storms, for I am learning how to sail my ship.（我不怕风暴，因为我正在学习如何驾驶我的船）」', correctIdx: 0, choices: [{label:'路易莎·梅·奥尔科特《小妇人》'},{label:'简·奥斯汀'},{label:'勃朗特'},{label:'乔治·艾略特'}] },

  // ══════════════════════════════════════════
  // 更多中国近现代
  // ══════════════════════════════════════════
  { prompt: '「人生的意义在于付出，在于给予，而不是接受，也不是争取。」', correctIdx: 0, choices: [{label:'巴金'},{label:'鲁迅'},{label:'郭沫若'},{label:'茅盾'}] },
  { prompt: '「生命是短暂的，把时间浪费在无聊事情上是一种罪恶。」', correctIdx: 0, choices: [{label:'老舍'},{label:'鲁迅'},{label:'巴金'},{label:'茅盾'}] },
  { prompt: '「世界上最宽阔的是海洋，比海洋更宽阔的是天空，比天空更宽阔的是人的胸怀。」', correctIdx: 0, choices: [{label:'雨果（常见中文引用）'},{label:'泰戈尔'},{label:'鲁迅'},{label:'托尔斯泰'}] },
  { prompt: '「生命本没有意义，你要能给它什么意义，它就有什么意义。」', correctIdx: 0, choices: [{label:'林语堂'},{label:'鲁迅'},{label:'巴金'},{label:'钱钟书'}] },
  { prompt: '「婚姻是一座围城，城外的人想进去，城里的人想出来。」', correctIdx: 0, choices: [{label:'钱钟书《围城》'},{label:'鲁迅'},{label:'巴金'},{label:'老舍'}] },
  { prompt: '「读一本好书，就是和许多高尚的人谈话。」', correctIdx: 0, choices: [{label:'歌德'},{label:'鲁迅'},{label:'培根'},{label:'歌德'}] },
  { prompt: '「不论平地与山尖，无限风光尽被占。采得百花成蜜后，为谁辛苦为谁甜。」', correctIdx: 0, choices: [{label:'罗隐'},{label:'白居易'},{label:'杜甫'},{label:'李白'}] },
  { prompt: '「我自横刀向天笑，去留肝胆两昆仑。」', correctIdx: 0, choices: [{label:'谭嗣同'},{label:'梁启超'},{label:'林则徐'},{label:'康有为'}] },
  { prompt: '「各人自扫门前雪，莫管他人瓦上霜。」', correctIdx: 0, choices: [{label:'中国谚语'},{label:'孔子'},{label:'老子'},{label:'孟子'}] },
  { prompt: '「吃得苦中苦，方为人上人。」', correctIdx: 0, choices: [{label:'中国谚语'},{label:'孔子'},{label:'孟子'},{label:'荀子'}] },
  { prompt: '「勤能补拙是良训，一分辛苦一分才。」', correctIdx: 0, choices: [{label:'华罗庚'},{label:'钱学森'},{label:'茅以升'},{label:'陈景润'}] },

  // ══════════════════════════════════════════
  // 泰戈尔 / 纪伯伦 / 其他东方
  // ══════════════════════════════════════════
  { prompt: '「生如夏花之绚烂，死如秋叶之静美。」', correctIdx: 0, choices: [{label:'泰戈尔'},{label:'鲁迅'},{label:'巴金'},{label:'郭沫若'}] },
  { prompt: '「世界以痛吻我，要我回报以歌。」', correctIdx: 0, choices: [{label:'泰戈尔'},{label:'鲁迅'},{label:'冰心'},{label:'郭沫若'}] },
  { prompt: '「让我的爱，像阳光一样包围着你，而又给你光辉灿烂的自由。」', correctIdx: 0, choices: [{label:'泰戈尔'},{label:'鲁迅'},{label:'冰心'},{label:'郭沫若'}] },
  { prompt: '「也许在某天早晨醒来，我们才发现已把梦中的黄金遗忘在枕边。」', correctIdx: 0, choices: [{label:'纪伯伦'},{label:'泰戈尔'},{label:'鲁迅'},{label:'冰心'}] },
  { prompt: '「我们所爱的人，我们渴望成为的样子。」', correctIdx: 0, choices: [{label:'纪伯伦'},{label:'泰戈尔'},{label:'萨特'},{label:'加缪'}] },
  { prompt: '「如果你爱某人，放他去吧；他若回来，他永远是你的；他若不回来，他从来就不是你的。」', correctIdx: 0, choices: [{label:'克里福德·乔达'},{label:'纪伯伦'},{label:'泰戈尔'},{label:'鲁米'}] },
  { prompt: '「昨日已逝，明日未来，我们拥有的只有今天。」', correctIdx: 0, choices: [{label:'特蕾莎修女'},{label:'甘地'},{label:'曼德拉'},{label:'马丁·路德·金'}] },
  { prompt: '「你永远无法控制结局，但你可以决定你在其中的角色。」', correctIdx: 0, choices: [{label:'奥黛丽·赫本'},{label:'玛丽莲·梦露'},{label:'凯瑟琳·赫本'},{label:'格蕾丝·凯利'}] },

  // ══════════════════════════════════════════
  // 更多科学家 / 哲学家
  // ══════════════════════════════════════════
  { prompt: '「An unexamined life is not worth living.（未经审视的生命不值得活）」', correctIdx: 0, choices: [{label:'苏格拉底'},{label:'柏拉图'},{label:'亚里士多德'},{label:'伊壁鸠鲁'}] },
  { prompt: '「God is dead. God remains dead. And we have killed him.（上帝死了……我们杀死了他）」', correctIdx: 0, choices: [{label:'弗里德里希·尼采'},{label:'萨特'},{label:'加缪'},{label:'叔本华'}] },
  { prompt: '「The most beautiful thing we can experience is the mysterious.（最美好的事物是神秘感）」', correctIdx: 0, choices: [{label:'爱因斯坦'},{label:'牛顿'},{label:'霍金'},{label:'居里夫人'}] },
  { prompt: '「Science without religion is lame, religion without science is blind.（没有宗教的科学是跛脚的，没有科学的宗教是盲目的）」', correctIdx: 0, choices: [{label:'爱因斯坦'},{label:'牛顿'},{label:'霍金'},{label:'达尔文'}] },
  { prompt: '「The important thing is to not stop questioning.（最重要的是不要停止追问）」', correctIdx: 0, choices: [{label:'爱因斯坦'},{label:'牛顿'},{label:'费曼'},{label:'霍金'}] },
  { prompt: '「Reality is merely an illusion, albeit a very persistent one.（现实只不过是一种幻觉，尽管是非常持久的幻觉）」', correctIdx: 0, choices: [{label:'爱因斯坦'},{label:'薛定谔'},{label:'玻尔'},{label:'海森堡'}] },
  { prompt: '「I am enough of an artist to draw freely upon my imagination.（我有足够的艺术家气质，可以自由运用想象力）」', correctIdx: 0, choices: [{label:'爱因斯坦'},{label:'达芬奇'},{label:'毕加索'},{label:'莫扎特'}] },
  { prompt: '「If I have seen further, it is by standing on the shoulders of giants.（如果我能看得更远，是因为我站在巨人的肩膀上）」', correctIdx: 0, choices: [{label:'牛顿'},{label:'爱因斯坦'},{label:'伽利略'},{label:'开普勒'}] },
  { prompt: '「The most incomprehensible thing about the world is that it is comprehensible.（关于世界最难以理解的事情是它是可以理解的）」', correctIdx: 0, choices: [{label:'爱因斯坦'},{label:'霍金'},{label:'玻尔'},{label:'薛定谔'}] },
  { prompt: '「Give me a place to stand and I will move the earth.（给我一个立足点，我将移动地球）」', correctIdx: 0, choices: [{label:'阿基米德'},{label:'苏格拉底'},{label:'柏拉图'},{label:'毕达哥拉斯'}] },
  { prompt: '「I know that I am intelligent, because I know that I know nothing.（我知道我是聪明的，因为我知道我什么都不知道）」', correctIdx: 0, choices: [{label:'苏格拉底'},{label:'柏拉图'},{label:'亚里士多德'},{label:'赫拉克利特'}] },
  { prompt: '「The measure of intelligence is the ability to change.（智力的衡量标准是改变的能力）」', correctIdx: 0, choices: [{label:'爱因斯坦'},{label:'达尔文'},{label:'牛顿'},{label:'图灵'}] },

  // ══════════════════════════════════════════
  // 更多电影 / 流行文化
  // ══════════════════════════════════════════
  { prompt: '「Elementary, my dear Watson.（基本方法，我亲爱的华生）」', correctIdx: 0, choices: [{label:'《福尔摩斯》（并非原著，为流行引用）'},{label:'《大侦探波洛》'},{label:'《CSI犯罪现场》'},{label:'《神探夏洛克》'}] },
  { prompt: '「Keep your friends close, but your enemies closer.（亲近你的朋友，但更要亲近你的敌人）」', correctIdx: 0, choices: [{label:'《教父2》迈克尔·柯里昂'},{label:'《教父》'},{label:'《疤面煞星》'},{label:'孙子'}] },
  { prompt: '「We accept the love we think we deserve.（我们接受自认为值得的爱）」', correctIdx: 0, choices: [{label:'斯蒂芬·乔博斯基《壁花少年》'},{label:'简·奥斯汀'},{label:'勃朗特'},{label:'狄更斯'}] },
  { prompt: '「With great power comes great responsibility.（能力越大，责任越大）」', correctIdx: 0, choices: [{label:'《蜘蛛侠》（源自伏尔泰）'},{label:'《蝙蝠侠》'},{label:'《超人》'},{label:'《复仇者联盟》'}] },
  { prompt: '「It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward.（不在于你出拳多重，而在于你挨打多重还能继续前进）」', correctIdx: 0, choices: [{label:'《洛基》西尔维斯特·史泰龙'},{label:'《愤怒的公牛》'},{label:'《铁拳》'},{label:'《百万美元宝贝》'}] },
  { prompt: '「You is kind. You is smart. You is important.（你善良，你聪明，你重要）」', correctIdx: 0, choices: [{label:'《相助》（凯瑟琳·斯托克特）'},{label:'《了不起的盖茨比》'},{label:'《贫民窟的百万富翁》'},{label:'《阿甘正传》'}] },
  { prompt: '「Every passing minute is another chance to turn it all around.（每一分钟的流逝，都是一个让一切逆转的机会）」', correctIdx: 0, choices: [{label:'《香草天空》'},{label:'《蝴蝶效应》'},{label:'《时间旅行者的妻子》'},{label:'《回到未来》'}] },
  { prompt: '「我要你知道，世上有个地方，永远等你。」', correctIdx: 0, choices: [{label:'《大话西游》紫霞仙子'},{label:'《倩女幽魂》'},{label:'《花样年华》'},{label:'《重庆森林》'}] },
  { prompt: '「不是我不明白，这世界变化快。」', correctIdx: 0, choices: [{label:'崔健《一无所有》'},{label:'罗大佑'},{label:'郑钧'},{label:'唐朝乐队'}] },

  // ══════════════════════════════════════════
  // 补充：各类名言
  // ══════════════════════════════════════════
  { prompt: '「穷则变，变则通，通则久。」', correctIdx: 0, choices: [{label:'《易经》'},{label:'孔子'},{label:'孟子'},{label:'老子'}] },
  { prompt: '「天下无难事，只怕有心人。」', correctIdx: 0, choices: [{label:'中国谚语'},{label:'孔子'},{label:'孟子'},{label:'荀子'}] },
  { prompt: '「千教万教，教人求真；千学万学，学做真人。」', correctIdx: 0, choices: [{label:'陶行知'},{label:'蔡元培'},{label:'梁启超'},{label:'胡适'}] },
  { prompt: '「读万卷书，行万里路。」', correctIdx: 0, choices: [{label:'刘彝（中国古语）'},{label:'孔子'},{label:'孟子'},{label:'庄子'}] },
  { prompt: '「业精于勤，荒于嬉；行成于思，毁于随。」', correctIdx: 0, choices: [{label:'韩愈'},{label:'柳宗元'},{label:'苏轼'},{label:'欧阳修'}] },
  { prompt: '「古之学者必有师。师者，所以传道授业解惑也。」', correctIdx: 0, choices: [{label:'韩愈'},{label:'柳宗元'},{label:'欧阳修'},{label:'苏轼'}] },
  { prompt: '「祸患常积于忽微，而智勇多困于所溺。」', correctIdx: 0, choices: [{label:'欧阳修'},{label:'苏轼'},{label:'范仲淹'},{label:'王安石'}] },
  { prompt: '「醉翁之意不在酒，在乎山水之间也。」', correctIdx: 0, choices: [{label:'欧阳修'},{label:'苏轼'},{label:'柳宗元'},{label:'王安石'}] },
  { prompt: '「居庙堂之高则忧其民，处江湖之远则忧其君。」', correctIdx: 0, choices: [{label:'范仲淹'},{label:'欧阳修'},{label:'苏轼'},{label:'王安石'}] },
  { prompt: '「人之初，性本善，性相近，习相远。」', correctIdx: 0, choices: [{label:'《三字经》（王应麟）'},{label:'孔子'},{label:'孟子'},{label:'荀子'}] },
  { prompt: '「宁教我负天下人，休教天下人负我。」', correctIdx: 0, choices: [{label:'曹操（《三国演义》中）'},{label:'刘备'},{label:'孙权'},{label:'项羽'}] },
  { prompt: '「聪明反被聪明误。」', correctIdx: 0, choices: [{label:'苏轼'},{label:'欧阳修'},{label:'柳宗元'},{label:'王安石'}] },
  { prompt: '「冰冻三尺，非一日之寒。」', correctIdx: 0, choices: [{label:'中国谚语'},{label:'孔子'},{label:'孟子'},{label:'庄子'}] },
  { prompt: '「风声雨声读书声，声声入耳；家事国事天下事，事事关心。」', correctIdx: 0, choices: [{label:'顾宪成（东林书院）'},{label:'范仲淹'},{label:'欧阳修'},{label:'陆游'}] },
  { prompt: '「活到老，学到老。」', correctIdx: 0, choices: [{label:'中国谚语（或苏格拉底对应语）'},{label:'孔子'},{label:'孟子'},{label:'荀子'}] },
  { prompt: '「凡益之道，与时偕行。」', correctIdx: 0, choices: [{label:'《易经》'},{label:'孔子'},{label:'老子'},{label:'孟子'}] },
  { prompt: '「纸上得来终觉浅，绝知此事要躬行。」', correctIdx: 0, choices: [{label:'陆游'},{label:'苏轼'},{label:'辛弃疾'},{label:'朱熹'}] },
  { prompt: '「种树者必培其根，种德者必养其心。」', correctIdx: 0, choices: [{label:'王守仁（王阳明）'},{label:'朱熹'},{label:'程颐'},{label:'张载'}] },
  { prompt: '「知行合一。」', correctIdx: 0, choices: [{label:'王守仁（王阳明）'},{label:'朱熹'},{label:'程颐'},{label:'程颢'}] },
  { prompt: '「此心光明，亦复何言。」', correctIdx: 0, choices: [{label:'王守仁（王阳明）遗言'},{label:'朱熹'},{label:'程颐'},{label:'陆九渊'}] },
  { prompt: '「良知是心之本体，无善无恶是谓本体。」', correctIdx: 0, choices: [{label:'王守仁（王阳明）'},{label:'朱熹'},{label:'程颐'},{label:'陆九渊'}] },
  { prompt: '「言不必信，行不必果，惟义所在。」', correctIdx: 0, choices: [{label:'孟子'},{label:'孔子'},{label:'荀子'},{label:'老子'}] },
  { prompt: '「格物致知。」', correctIdx: 0, choices: [{label:'《大学》（朱熹诠释）'},{label:'孔子'},{label:'孟子'},{label:'老子'}] },
  { prompt: '「知之者不如好之者，好之者不如乐之者。」', correctIdx: 0, choices: [{label:'孔子'},{label:'孟子'},{label:'荀子'},{label:'老子'}] },
  { prompt: '「古人学问无遗力，少壮工夫老始成。」', correctIdx: 0, choices: [{label:'陆游'},{label:'苏轼'},{label:'辛弃疾'},{label:'欧阳修'}] },
  { prompt: '「If you tell the truth, you don't have to remember anything.（如果你说真话，你就不必记住任何东西）」', correctIdx: 0, choices: [{label:'马克·吐温'},{label:'林肯'},{label:'本杰明·富兰克林'},{label:'惠特曼'}] },
  { prompt: '「Whenever you find yourself on the side of the majority, it is time to reform.（每当你发现自己与大多数人站在一边，是时候反思了）」', correctIdx: 0, choices: [{label:'马克·吐温'},{label:'林肯'},{label:'爱默生'},{label:'梭罗'}] },
  { prompt: '「Twenty years from now you will be more disappointed by the things that you didn't do.（二十年后，你会更后悔没做的事）」', correctIdx: 0, choices: [{label:'马克·吐温（常见引用）'},{label:'本杰明·富兰克林'},{label:'林肯'},{label:'罗斯福'}] },
  { prompt: '「Be the change you wish to see in the world.（成为你希望世界上存在的那种改变）」', correctIdx: 0, choices: [{label:'甘地'},{label:'曼德拉'},{label:'马丁·路德·金'},{label:'特蕾莎修女'}] },
  { prompt: '「I think, therefore I am.（我思故我在）」', correctIdx: 0, choices: [{label:'笛卡尔'},{label:'康德'},{label:'黑格尔'},{label:'斯宾诺莎'}] },
  { prompt: '「Act only according to that maxim by which you can at the same time will that it should become a universal law.（只按你能同时愿望成为普遍法则的准则行动）」', correctIdx: 0, choices: [{label:'伊曼努尔·康德'},{label:'黑格尔'},{label:'笛卡尔'},{label:'斯宾诺莎'}] },
  { prompt: '「Man is condemned to be free.（人被迫是自由的）」', correctIdx: 0, choices: [{label:'让-保罗·萨特'},{label:'加缪'},{label:'尼采'},{label:'海德格尔'}] },
  { prompt: '「We are what we repeatedly do. Excellence, then, is not an act but a habit.（我们是我们重复做的事情；因此，卓越不是一种行为，而是一种习惯）」', correctIdx: 0, choices: [{label:'亚里士多德（威尔·杜兰特总结）'},{label:'苏格拉底'},{label:'柏拉图'},{label:'伊壁鸠鲁'}] },
  { prompt: '「Float like a butterfly, sting like a bee.（漂浮如蝴蝶，蜇刺如蜜蜂）」', correctIdx: 0, choices: [{label:'穆罕默德·阿里'},{label:'泰森'},{label:'弗洛伊德·梅威瑟'},{label:'罗奇'}] },
  { prompt: '「The journey of a thousand miles begins with a single step.（千里之行，始于足下）」', correctIdx: 0, choices: [{label:'老子'},{label:'孔子'},{label:'孟子'},{label:'庄子'}] },
  { prompt: '「It does not matter how slowly you go as long as you do not stop.（不管走得多慢，只要不停下就好）」', correctIdx: 0, choices: [{label:'孔子（常见英文引用）'},{label:'老子'},{label:'孟子'},{label:'庄子'}] },

];

