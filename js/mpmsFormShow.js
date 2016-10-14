$(function(){
	// tab切换
	tabTagSlide();
	tagSelectSlide();
	btnBack();
})

function tabTagSlide(){
	var _tag = $(".tabtags li a");
	_tag.click(function(event){
		event.preventDefault();
		var _index = $(this).parent().index();
		$(this).parent().addClass("on").siblings().removeClass("on");
		$(".tablist").eq(_index).show().siblings(".tablist").hide();
	})
}
function tagSelectSlide(){
	var _tagSelect = $(".tagselect dt");
	_tagSelect.click(function(event){
		$(this).siblings().toggle();
	})
}

function btnBack(){
	var _btn = $(".float .back");
	_btn.click(function(){
		$(this).parents(".float").hide();
		$(".float-bg").hide();
	})
}