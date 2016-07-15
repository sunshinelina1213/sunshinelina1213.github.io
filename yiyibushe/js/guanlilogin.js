//验证管理员的账号密码
$(function(){
	$("#guanlibtn").click(function(){
		if($("#gltxt").val()=="lina"&&$("#glpsd").val()==123456)
		{
			window.open("guanli.html");
			
			}else{
				alert("账号或密码有误请重新输入");
				
				}
		
	})
})