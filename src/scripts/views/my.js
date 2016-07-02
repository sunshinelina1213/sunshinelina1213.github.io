var tplMy = require('../templates/my.string');

SPA.defineView('my',{
	html:tplMy,
	
	plugins: ['delegated'],
	bindActions:{
		'goto.login': function (e, data) {
	      console.log(1);
	      SPA.open('login');
	   },
//  	'tap.login.slide': function (e, data) {
//    		this.homeSwiper.slideTo($(e.el).index());
//  	}	   
	}
});