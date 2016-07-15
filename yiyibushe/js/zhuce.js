

$(function(){
	var telyanzheng=false;
	var pwdyanzheng=false;
	var pwdyanzheng2=false;
	var yzyanzheng=false;
	
	//手机验证方式
	$(".checktel input").focusout(function(){
		
		var telnum=/^1\d{10}$/;
		if(telnum.test($(this).val())){
			$(".checktel span").text("✔").css({"color":"#f69","display":"block"});
			findTel();
			telyanzheng = true;
		}else{
			$(".checktel span").text("请输入正确的11位手机号码").css({"color":"#f00","display":"block"});
			
		}
	})
	
	//密码验证,6~20位字符
	$(".checkpsd1 .psd1").focusout(function(){
		var reg= /^[a-z0-9_]{6,20}$/;
		if(reg.test($(this).val())){
			$(".checkpsd1 span").text("✔").css({"color":"#f69","display":"block"});
			pwdyanzheng = true;
		}else{
			$(".checkpsd1 span").text("请输入6~20位的字母数字或者下划线组合").css({"color":"#f00","display":"block"});
			
		}
	})
	
	//第二次密码验证
	
	$(".checkpsd2 .psd2").focusout(function(){
		if($(this).val()==$(".checkpsd1 .psd1").val()){
			$(".checkpsd2 .span").text("✔").css({"color":"#f69","display":"block"});
			pwdyanzheng2 = true;
		}else{
			$(".checkpsd2 span").text("两次密码不一致").css({"color":"#f00","display":"block"});
			
		}
	})
	
	//验证码
	$(".checkcheck input").focus(function(){
		if($(this).val()=="验证码"){
			$(this).val("");
		}
	})
	
	$(".checkcheck input").focusout(function(){
		if($(this).val()==""){
			$(this).val("验证码");
		}
		
		if($(this).val().toLowerCase()==$(".checkcheck .checkma2").text().toLowerCase()){
			$(".checkcheck span").text("✔").css({"color":"#f69","display":"block"});
			yzyanzheng =true;
		}else{
			$(".checkcheck span").text("请输入正确的验证码").css({"color":"#f00","display":"block","line-height":"36px"});
			changeCheck();
			
		}
	})
	
	$(".huan").click(function(event){
		event.preventDefault();
		changeCheck();
	})
	
	changeCheck();
	function changeCheck(){
		var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
		var str="";
		for(var i=0; i<4; i++){
			var index=parseInt(Math.random()*62);
			str=str+arr[index];
		}
		$(".checkcheck .checkma2").text(str);
	}
	$(".btn").click(function(){
		if(telyanzheng==true && pwdyanzheng==true && pwdyanzheng2 == true && yzyanzheng==true){
			window.open("zhucesuccess.html");
		}
	})
	
})
//本地存储信息
	function savelocalData(){
		//alert("11");
			var data = new Object;
			data.tel = document.getElementById("tel").value;
			data.pwd = document.getElementById("pwd").value;
			
			var str = JSON.stringify(data);
			var time = new Date().getTime();
			var key = time.toString();
			localStorage.setItem(time,str);
	}
	function findTel(){
			//alert(1);
 			var oTel = document.getElementById("tel").value;				
			//遍历所有在localStorage中的对象
			for (var i = 0; i < localStorage.length; i++) {			
				var key = localStorage.key(i);
				var data = JSON.parse(localStorage.getItem(key));
				
				//遍历对象中的属性
				for (var pTel in data) {
					//console.log(data);
					var tel = data.tel;
					if(oTel == tel){	
						alert("该用户已经注册过了");
						document.getElementById("tel").value="";
						return ;
					}	
				}	
			}
		}
	