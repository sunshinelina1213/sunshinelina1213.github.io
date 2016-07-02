var tplGuide = require('../templates/guide.string');

SPA.defineView('guide',{
	html: tplGuide,
	plugins: ['delegated'],

	  bindActions: {
	    'goto.index': function () {
	      // 视图切换
	      SPA.open('index');
	    }
	  },
	
	  bindEvents: {
	    show: function () {
	      var mySwiper = new Swiper('#guide-swiper', {
	        loop: false
	      });
	    }
	  }
});
