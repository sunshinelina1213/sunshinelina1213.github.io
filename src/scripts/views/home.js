var tplHome = require('../templates/home.string');
// 引用公共方法
var util = require('../util/fn.js');

//倒计时

setInterval(count,1000);

function count(){
	var endTime = new Date( 2016,7,1 );
	var nowTime = new Date();
	var Time = endTime.getTime() - nowTime.getTime();
//	console.log(endTime)
	var d1 = Math.floor(Time/1000/60/60/24);
	var h1 = Math.floor(Time/1000/60/60%24);
	var m1 = Math.floor(Time/1000/60%60);
	var s1 = Math.floor(Time/1000%60);
	var index=0;
	var str="";
	for(var i=0;i<4;i++){
		index = i;
		var day= document.getElementsByClassName("day")[index];
		str="剩"+ toTwo(d1) + "天" + toTwo(h1) + ":" + toTwo(m1) + ":" + toTwo(s1);		
		day.innerHTML=str;
	}
}
function toTwo( n ){
	if( n<10 ){
		n = "0" + n;
	}
		return n;
}


SPA.defineView('home',{
	html:tplHome,
	
	plugins: ['delegated'],

  	init: {
	    mySwiper: null,
  	},
	
	bindEvents: {
	    'show': function () {
	      this.mySwiper = new Swiper('#index-swiper', {
	        loop: true,
			autoplay:2000,
	      });
	    }
	},
	bindActions:{
		'goto.detail': function (e, data) {
	      SPA.open('detail');
	   }
	},
});
