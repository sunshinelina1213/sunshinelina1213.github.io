$(function(){
	//清空文本框
	$("#txt").focus(function(){
		$(this).val("");
	})
	//鼠标滑过出现二级菜单(上装)
	$(".shangzhuang").mouseenter(function(){
		$(".shangzhuangcon").slideDown(300);
		$(".shangzhuangcon").css({"display":"block"});
	})
	$(".shangzhuang").mouseleave(function(){
		$(".shangzhuangcon").show();
	})
	$(".shangzhuangcon").mouseenter(function(){
		$(".shangzhuang").show();
	})
	$(".shangzhuangcon").mouseleave(function(){
		$(".shangzhuangcon").hide();
	})
	//鼠标滑过出现二级菜单(裙装)
	$(".qunzhuang").mouseover(function(){
		$(".qunzhuangcon").slideDown(300);
		$(".qunzhuangcon").css({"display":"block"});
	})
	$(".qunzhuang").mouseout(function(){
		$(".qunzhuangcon").hide();
	})

	
	
	//小三角点击展开菜单
	$(".dianji a").click(function(event){
		event.preventDefault();
		if($(".allfencon").css("height") == "100px"){
			$(".allfencon").animate({
				height:"364px"
			},500);
		}else{
			$(".allfencon").animate({
				height:"100px"
			},500);
		}
	})
	//商品评价tab切换评论
	$(function(){
		$(".pj_tab .pj_list1").click(function(){	
			$(".pj_list1").css({"color":"#f69","border-bottom":"2px solid #f69"}).siblings().css({"color":"#666","border-bottom":"none"});
			$(".pj_con .all_ping").css("display","block").siblings().css("display","none");
		})	
		$(".pj_tab .pj_list2").click(function(){	
			$(".pj_list2").css({"color":"#f69","border-bottom":"2px solid #f69"}).siblings().css({"color":"#666","border-bottom":"none"});
			$(".pj_con .hao_ping").css("display","block").siblings().css("display","none");
		})	
		$(".pj_tab .pj_list3").click(function(){	
			$(".pj_list3").css({"color":"#f69","border-bottom":"2px solid #f69"}).siblings().css({"color":"#666","border-bottom":"none"});
			$(".pj_con .zhong_ping").css("display","block").siblings().css("display","none");
		})	
		$(".pj_tab .pj_list4").click(function(){	
			$(".pj_list4").css({"color":"#f69","border-bottom":"2px solid #f69"}).siblings().css({"color":"#666","border-bottom":"none"});
			$(".pj_con .cha_ping").css("display","block").siblings().css("display","none");
		})	
		$(".pj_tab .pj_list5").click(function(){	
			$(".pj_list5").css({"color":"#f69","border-bottom":"2px solid #f69"}).siblings().css({"color":"#666","border-bottom":"none"});
			$(".pj_con .zhui_ping").css("display","block").siblings().css("display","none");
		})	
	})	
	//导航栏吸顶效果
	$(window).scroll(function(){
		var _top=$(window).scrollTop();
		if(_top>1390){
			$("#shopjie").addClass("shopjie_guding");
		}else{
			$("#shopjie").removeClass("shopjie_guding");
		}
	})
	
	
	//商品数量的增减
	var num = $('.shu').html();
	$('.ad').click(function() {
		num++;
		$('.shu').html(num);
	})
	$('.redu').click(function() {
		num--;
		if (num <= 1) {
			num = 1;
		}
		$('.shu').html(num);
	})
	
})
