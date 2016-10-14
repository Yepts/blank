$(function(){
	$.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default
	$.mCustomScrollbar.defaults.axis="yx"; //enable 2 axis scrollbars by default	
	$(".right").mCustomScrollbar({theme:"dark-3"});
	$(".connav ul").mCustomScrollbar({theme:"dark-3"});
	$(".tagselect").mCustomScrollbar({theme:"dark-3"});
})

$(window).on({
	"resize":function(){
		size();
	},
	"load":function(){
		size()
	}
});

function size(){
	var h = $(window).height();
	var w = $(window).width();
	var head = $(".head").height()+4;
	var connav = $(".connav").width();
	var navtop = $(".navtop").height();
	var navbtm = $(".navbtm").height();
	var w2 = w-310-20;
	//console.log(w)
	var h2 = h-head;
	var h3 = h-head-navtop-navbtm;
	$(".content").css({"height":h2});
	$(".connav").css({"height":h2});
	$(".connav ul").css({"height":h3});
	$(".right").css({"height":h2,"width":w2});
}

$(function(){
	$(".workbox .hd .tab a").click(function(){
		var i = $(this).index();
		$(this).parent(".tab").children("a").each(function(){
			$(this).removeClass("active");
		});
		$(this).addClass("active")
		$(this).parent(".tab").parent(".hd").siblings(".bd").each(function(){
			$(this).hide();
		})
		$(this).parent(".tab").parent(".hd").siblings(".bd").eq(i).show()
	});
	$(".connav ul a").click(function(){
		if($(this).next().is(":hidden")){
			$(this).next().toggle();
		}
		else{
			$(this).next().hide();
		}
	})
})
