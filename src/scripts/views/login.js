var tplLogin = require('../templates/login.string');

// 引用公共方法
var util = require('../util/fn.js');

SPA.defineView('login',{
	html:tplLogin,
	
	init:{
		loginSwiper:null,
	},
	
	plugins: ['delegated'],
	bindActions: {
	    'tap.login.slide': function (e, data) {
	      this.loginSwiper.slideTo($(e.el).index());
	    },
	    
	    'goto.back':function(e, data){
	    	this.hide();
	    }
	},
	
	bindEvents: {
		'show': function () {
	    var that = this;
	
	    that.loginSwiper = new Swiper('#login-swiper', {
	       	loop: false,
	        onSlideChangeStart: function (swiper) {
		        var index = swiper.activeIndex;
		        var $lis = $('#login-nav li');
		        util.setFocus($lis.eq(index));
	        }
	    });
	    }
	}
});
