$(document).ready(function() {
	com.resize();
	com.loaded();
})
var com = {
	loaded: function() {
		document.onreadystatechange = subSomething; //当页面加载状态改变的时候执行这个方法.
		function subSomething() {
			if (document.readyState == "complete") {
				setTimeout(function(){
					$("#loading").fadeOut();
					com.ani();
				},2000);
			}
		}
	},
	resize: function() {
		var winWidth = $(window).width();
		var winHeight = $(window).height();
		var docWidth = winWidth > 640 ? 640 : winWidth;
		var start = $(".start");
		var mk = $(".mk");
		$(".page,.view,.content,.mask").css({
			"width": docWidth,
			"height": winHeight
		});
		start.css({
			"width": docWidth * 4,
			"height": winHeight
		});
		mk.css({
			"width": docWidth * 11,
			"height": winHeight
		})
	},
	ani: function() {
		var start = $(".start"),
			train = $(".train"),
			content = $(".content"),
			btn_go = $(".btn-go"),
			select_text = $(".select-text"),
			btn_close = $(".btn-close"),
			btnGo = $(".btnGo"),
			btn_close2 = $(".btn-close2"),
			btn_goon = $(".btn-goon"),
			btn_main = $(".btn-shiyijian,.btn-xiangmeishi,.btn-zhonghuacheng,.btn-fengbaozhan");
		var test1 = document.getElementById("test1");
		var test2 = document.getElementById("test2");
		var test3 = document.getElementById("test3");
		var test4 = document.getElementById("test4");
		test1.addEventListener("webkitTransitionEnd", function() {
			$(".m1").find(".mask").fadeIn();
		})
		test2.addEventListener("webkitTransitionEnd", function() {
			$(".m2").find(".mask").fadeIn();
		})
		test4.addEventListener("webkitTransitionEnd", function() {
			$(".m4").find(".mask").fadeIn();
		})
		setTimeout(function() {
			start.css("left", "-200%");
		}, 500);
		btn_go.click(function() {
			start.css("left", "0%");
		})
		select_text.click(function() {
			setTimeout(function() {
				$(".start,.train").css("display", "none");
			}, 1);
			setTimeout(function() {
				content.fadeIn();
			}, 100);
		});
		btn_main.click(function() {
			var elm = $(this).attr("alt");
			setTimeout(function() {
				content.css("display", "none");
			}, 1);
			setTimeout(function() {
				$("." + elm + ",.train").css("display", "block");
			}, 200);
			setTimeout(function() {
				$("." + elm).css("left", "0%");
			}, 1000);
		});
		btn_close.click(function() {
			setTimeout(function() {
				content.css("display", "none");
			}, 1);
			setTimeout(function() {
				$(".start,.train").css("display", "block");
			}, 200);
		});
		btnGo.click(function() {
			$(this).siblings(".mask").fadeIn();
		})
		btn_close2.click(function() {
			$(this).parent().fadeOut();
		})
		btn_goon.click(function() {
			$(this).parent().css("display", "none").parent().css("display", "none").siblings(".content").fadeIn();
		})
	}
}