
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = true;

// 首页配置
export const homeConfig = {
  // 标题
  title: '生日抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '送给我的宝贝', },
    { key: 's', wording: '你是我生命中最珍贵的宝藏', },
    { key: 'd', wording: '每一天都因为有你而变得更加美好', },
  ],
  // 最终解释权归属人
  owner: '陶善侃',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '雅诗兰黛小棕瓶套装', alias: '雅诗兰黛', image: '/images/1.png',  description: '与你一起绽放美丽' },
  { key: 'p', name: 'TOM FORD「爱意鎏金」双唇礼盒 ', alias: 'TF口红', image: '/images/7.png',  description: '唇印绽放，爱意永恒' },
  { key: 'r', name: '1314红包', alias: '1314', image: '/images/5.png',  description: '一生一世，爱你无止境' },
  { key: 'w', name: '腾讯视频VIP', alias: 'VIP', image: '/images/2.png',  description: '与你一起共享美好时光' },
  { key: 't', name: '海蓝之谜修护精萃水', alias: '海蓝之谜', image: '/images/3.png',  description: 'NO.1 才配你' },
  { key: 'u', name: '芦丹氏香水', alias: '柏林少女', image: '/images/4.png',  description: '香氛如你，美丽动人' },
  { key: 'o', name: 'Dior真我香水', alias: 'Diro', image: '/images/6.png',  description: '芬芳之约，真我与你' },
  { key: 'r', name: '5200红包', alias: '5200', image: '/images/5.png',  description: '从今往后，我都会在你旁边' },
];
