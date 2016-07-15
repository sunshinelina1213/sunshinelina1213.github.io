$(function(){
	//模态窗口的显示与关闭
	$(".tianaddress").click(function(){
		$(".addbox").css("display","block");
	})
	$(".addclose").click(function(){
		$(".addbox").css("display","none");
	})
	
	//删除地址
	$(".address").on("click",".shanchu", function(){
		var conf=confirm("亲，您确定要删除吗？");
		if(conf==true){
			$(this).parent().parent().remove();
			alert("已经成功删除");
		}else{
			alert("已经取消");
		}
	})
	
	//模态取消
	$(".address_btn2").click(function(){
		$(".addbox").css("display","none");
	})
	
	//创建元素
	function baocundizhi(event){
		$(".addbox").css("display","none");
		var oTr = $("<tr></tr>").appendTo(".address");
		$("<td></td>").appendTo(oTr).text($(".address_name input").val());
		$("<td></td>").appendTo(oTr).text($(".address_address select").eq(0).val()+$(".address_address select").eq(1).val()+$(".address_address select").eq(2).val()+$(".address_xiangxi textarea").val());
		$("<td></td>").appendTo(oTr).text($(".address_phone input").val());
		$("<td></td>").appendTo(oTr).html('<a class="shanchu" href="#">删除</a>');
	
	
	//清空内容
		$('.address_name input').val("");
		$('.address_phone input').val("");
		$('.address_address input').val("");
		$('.address_xiangxi textarea').val("");	
		//清空span
		$(".address_name td span").text("");
		$(".address_phone span").text("");
		$(".address_address span").text("");
		$(".address_xiangxi span").text("");
	}
	//名字验证
	$(".address_name input").focusout(function(){
		if($(this).val()==""){
			$(".address_name td span").text("收货人姓名不能为空").css("color","red");
		}else{
			$(".address_name td span").text("√").css("color","red");
		}
	})
	
	//手机号验证
	$(".address_phone input").focusout(function(){
		var phonenum=/[0-9]{11}/;
		if(phonenum.test($(this).val())){
			$(".address_phone td span").text("√").css({"color":"red"})
		}else{
			$(".address_phone td span").text("请输入正确的11位手机号码").css({"color":"red"})
		}
	})
	
	$(".address_btn").click(function(event){
		event.preventDefault();
		if($(".address_name input").val()==""){
			$(".address_name td span").text("姓名不能为空").css({"color":"#f00"});
		}else if($(".address_phone input").val()==""){
			$(".address_phone td span").text("请输入正确的11位手机号码").css({"color":"#f00"});
		}else{
			baocundizhi();
		}
	})
	
	//提交订单
	$(".tjdd").click(function(){
		window.open("dingdansuccess.html");
	})
})
