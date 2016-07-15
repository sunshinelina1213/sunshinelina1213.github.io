// JavaScript Document

	$(function(){
		//清空文本框
		$("#txt").focus(function(){
			$("#txt").val("");
		})
		
		
	})
	

	
	$(function(){
		//回到顶部
		$("#totop").click(function(){
			$("body,html").animate({
				scrollTop:0
			},500);
			return false;
		})
	})
	//吸顶效果
	$(window).scroll(function(){
		var _top=$(window).scrollTop();
		if(_top>200){
			$("#nav").addClass("guding");
		}else{
			$("#nav").removeClass("guding");
		}
	})
	
   //hi范儿
	window.onload = function(){
		var oumei = document.getElementById("oumei");
		var yuanchuang = document.getElementById("yuanchuang");
		var rihan = document.getElementById("rihan");
		var tianmei = document.getElementById("tianmei");
		
		oumei.onmouseover = function(){
			document.getElementById("oumei_div").style.display = "block";
			document.getElementById("yuanchuang_div").style.display = "none";
			document.getElementById("rihan_div").style.display = "none";
			document.getElementById("tianmei_div").style.display = "none";
		}
		yuanchuang.onmouseover = function(){
			document.getElementById("oumei_div").style.display = "none";
			document.getElementById("yuanchuang_div").style.display = "block";
			document.getElementById("rihan_div").style.display = "none";
			document.getElementById("tianmei_div").style.display = "none";
		}
		rihan.onmouseover = function(){
			document.getElementById("oumei_div").style.display = "none";
			document.getElementById("yuanchuang_div").style.display = "none";
			document.getElementById("rihan_div").style.display = "block";
			document.getElementById("tianmei_div").style.display = "none";
		}
		tianmei.onmouseover = function(){
			document.getElementById("oumei_div").style.display = "none";
			document.getElementById("yuanchuang_div").style.display = "none";
			document.getElementById("rihan_div").style.display = "none";
			document.getElementById("tianmei_div").style.display = "block";
		}
	} 
	
	//banner轮播图
	$(function(){
		var num=$("bannerNum li").length;
		var page=0;
		var time1;
		var flag=true;
		time1=setInterval(Shuffling,2000);	
		function Shuffling(){
			page++;
			if(page>4){
				page=0
			}
			Lunbo();
			flag=false;
		}
		
		function reduce(){
			page--;
			if(page<0){
				page=4;
			}
			Lunbo();
			flag=false;
		}
		
		function Lunbo(){//轮播
			$(".bannerLunbo div").eq(page).stop().siblings().fadeOut(500,function(){
				$(".bannerLunbo div").eq(page).stop().fadeIn(0,function(){
					$(".bannerNum li").eq(page).addClass("firstNum").siblings().removeClass("firstNum");
					flag=true;//
				});
			});
		}
		
		
		$(".bannerNum li").mouseover(function(){
			var page = $(this).index();
			$(".bannerNum li").eq(page).addClass("firstNum").siblings().removeClass("firstNum");
			$(".bannerLunbo div").eq(page).stop().fadeIn(500).siblings().fadeOut(500);
			
		})
		
	
	$(".mingxing img").mouseover(function(){
		$(".mxhidden").css("display","block");
	})
	$(".mingxing img").mouseout(function(){
		$(".mxhidden").css("display","none");
	})
})


		







