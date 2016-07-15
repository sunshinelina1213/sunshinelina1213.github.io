$(function(){
	//tab切换
	
	$(".tab_deng .dengli1").click(function(){
		$(".tab_deng .dengli1").css({"borderBottom":"3px solid #f69","color":"#333333"}).siblings().css({"color":"#999999","borderBottom":"none"});
		$(".qq_wrap .kuaisu").css({"display":"block"}).siblings().css({"display":"none"});
	})
	$(".tab_deng .dengli2").click(function(){
		$(".tab_deng .dengli2").css({"borderBottom":"3px solid #f69","color":"#333333"}).siblings().css({"color":"#999999","borderBottom":"none"});
		$(".qq_wrap .zhanghao").css("display","block").siblings().css("display","none")
	})
	
	
})
