$(function(){
	//扫码支付
	$(".zfewm").mouseover(function(){
		$(".zfhidden").css("display","block");
	})
	$(".zfewm").mouseout(function(){
		$(".zfhidden").css("display","none");
	})
	
	
	//银行卡
	$(".bank1 input").click(function(){
		$(".zf_bank").animate({
			height:"120px",
		},1000);
		$(".zf_pingtai").animate({
			height:"50px"
		},1000);
		$(".zf_bank").css("border","1px solid #f69").siblings().css("border","1px solid #ccc");
		
	})
	//平台支付
	$(".zf_pingtai input").click(function(){
		$(".zf_pingtai").animate({
			height:"120px",
		},1000);
		$(".zf_bank").animate({
			height:"50px",
		},1000);
		$(".zf_pingtai").css("border","1px solid #f69").siblings().css("border","1px solid #ccc")
	})
})
