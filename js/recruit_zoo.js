$(function(){
	$('.nav_uls li').mouseenter(function(){
		var i=$(this).index();
		$('.nav_box').children().eq(i).show();
		$('.nav_box').children().eq(i).siblings().hide();
	});
	$('.nav_uls li').mouseleave(function(){
		var i=$(this).index();
		$('.nav_box').children().eq(i).hide();
	});
	$('.nav_box').children().mouseenter(function(){
		$(this).show();
	});
	$('.nav_box').children().mouseleave(function(){
		$(this).hide();
	});
	$('.search').click(function(){
		$(this).fadeOut();
		$('.nav').fadeOut();
		$('.close').fadeIn();
		$('.inp').fadeIn();
		$('.inp').focus();
		$('.search2').fadeIn();
		$('.searchbox').fadeIn();
		return false;
	});
	$('.close').click(function(){
		$(this).fadeOut()
		$('.inp').fadeOut();
		$('.search2').fadeOut();
		$('.nav').fadeIn();
		$('.searchbox').hide();
		$('.search').fadeIn();
	});
	$('body').click(function(){
		$('.close').fadeOut()
		$('.inp').fadeOut();
		$('.search2').fadeOut();
		$('.nav').fadeIn();
		$('.searchbox').hide();
		$('.search').fadeIn();
	});
	$('.inp').click(function(){
		return false;
	});
	$('.searchbox').click(function(){
		return false;
	});
})