$(function(){
	//用户信息
	$(".userlie").mouseover(function(){
		$(".userinfo").css("display","block");
	})
	$(".userlie").mouseout(function(){
		$(".userinfo").css("display","none")
	})
	//关闭提醒
	$(".guanbi").click(function(){
		$(".tixing").css("display","none");
	})
	//tab切换
	$(".ddright_top .listall").click(function(){
		$(".ddcontain .ddall").css("display","block").siblings().css("display","none");
		$(".listall").css("border-bottom","2px solid #f69").siblings().css("border","none");
	})
	$(".ddright_top .listzhifu").click(function(){	
		$(".ddcontain .daizhifu").css("display","block").siblings().css("display","none");
		$(".listzhifu").css("border-bottom","2px solid #f69").siblings().css("border","none");
	})
	$(".ddright_top .listfahuo").click(function(){	
		$(".ddcontain .daifahuo").css("display","block").siblings().css("display","none");
		$(".listfahuo").css("border-bottom","2px solid #f69").siblings().css("border","none");
	})
	$(".ddright_top .listshouhuo").click(function(){	
		$(".ddcontain .daishouhuo").css("display","block").siblings().css("display","none");
		$(".listshouhuo").css("border-bottom","2px solid #f69").siblings().css("border","none");
	})
	$(".ddright_top .listpingjia").click(function(){	
		$(".ddcontain .daipingjia").css("display","block").siblings().css("display","none");
		$(".listpingjia").css("border-bottom","2px solid #f69").siblings().css("border","none");
	})
	
	//取消订单
	$(".quxiaodingdan").click(function(){
		var conf=confirm("亲，您确定要取消订单吗？");
		if(conf){
			$(this).parent().parent().remove();
			$("thead").remove();
		}else{
			alert("亲，订单陪你度过漫长岁月");
		}
	})
})
