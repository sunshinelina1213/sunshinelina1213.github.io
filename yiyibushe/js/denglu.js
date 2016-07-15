// JavaScript Document
$(function(){
//	$(".denguser input").focus(function(){
//		if($(this).val()=="手机号"){
//			$(this).val("");
//		}
//	})
	$(".denguser input").focusout(function(){
//		if($(this).val()==""){
//			$(this).val("手机号");
//		}
//		
	
		var telnum=/^1\d{10}$/;
		if(telnum.test($(this).val())){
			findTel();
//			$(".denguser span").text("✔").css({"color":"#f69","display":"block"});
//			
//		}else{
//			$(".denguser span").text("请输入正确的11位手机号码").css({"color":"#f00","display":"block","line-height":"20px"})
		}
	})
//	
	
	
	$(".dengpsd input").focusout(function(){

		checklogpass();
	})
	
	
})
function findTel(){
			
			var oName = document.getElementById("tel").value;
			
//			var data = new Object;
//			data.tel = document.getElementById("tel").value;
//			data.pwd = document.getElementById("pwd").value;
			for (var i = 0; i < localStorage.length; i++) {
				var key = localStorage.key(i);
				var data = JSON.parse(localStorage.getItem(key));
				var name = data.tel;
				var isreg=false;
				if(oName != name){	
					continue;
				} else{	
					$(".noreg").hide();	
					return data.pwd;
					isreg=true;	
				}	
			}
			if(!isreg){
				$(".noreg").show();
			}
} 

function checklogpass(){
		//alert("11");
		var mima = findTel(mima);	 
		var oMima = $("#pwd").val();
		if(oMima!= mima){
			 $(".wrong").show();
		 }else{
			 $(".wrong").hide();
			  location.href="index.html";	
			  
		 }
	}
	 
