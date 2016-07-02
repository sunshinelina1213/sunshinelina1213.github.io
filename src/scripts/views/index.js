// 引入模板
var tplIndex = require('../templates/index.string');

//引用公用方法
var util = require('../util/fn.js');

//定义视图
SPA.defineView('index',{
	html: tplIndex,
	// 载入插件列表
 	// delegated 实现tab事件的绑定
	plugins :['delegated'],	
	  // 初始化一些属性和方法
	init: {
	    // setFocus: function (e) {
	    //   $(e.el).addClass('active').siblings().removeClass('active');
	    // }
	},
	// 定义子视图
	modules:[{
		name: 'content',
		views: ['home','vip','group','message','my'], //定义视图的列表
		defaultTag: 'home',//定义默认视图
		container: '.l-container' //子视图的容器
	}],
	
	bindActions: {
		
		'switch.tabs': function (e,data){
			// 设置当前 tab 高亮
			util.setFocus(e.el);
			// 切换子视图
			this.modules.content.launch(data.tag);
		}
	}
	
})
