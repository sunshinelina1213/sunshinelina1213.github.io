$(function(){
	//tab切换
	$(".liuxing_tab").click(function(event){
		event.preventDefault();
		$(".liuxing").css("display","block").siblings().css("display","none");
	})
	$(".rexiao_tab").click(function(event){
		event.preventDefault();
		$(".rexiao").css("display","block").siblings().css("display","none");
	})
	$(".shangxin_tab").click(function(event){
		event.preventDefault();
		$(".shangxin").css("display","block").siblings().css("display","none");
	})
})
