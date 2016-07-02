// 引入spa类库
require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');
require('./lib/swiper.animate1.0.2.min.js');

// 引入views
require('./views/index.js');
require('./views/home.js');
require('./views/my.js');
require('./views/group.js');
require('./views/vip.js');
require('./views/message.js');
require('./views/login.js');
require('./views/guide.js');


require('./views/detail.js');

// SPA设置
SPA.config({
  indexView: 'guide'
});