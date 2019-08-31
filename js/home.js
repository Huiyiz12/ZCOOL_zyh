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
		$('.hea_top .sousuo').fadeIn();
		$('.inp').focus();
		return false;
	});
	$('.close').click(function(){
		$('.hea_top .sousuo').fadeOut();
		$('.nav').fadeIn();
		$('.search').fadeIn();
	});
	$('body').click(function(){
		$('.hea_top .sousuo').fadeOut();
		$('.nav').fadeIn();
		$('.search').fadeIn();
	});
	$('.hea_top .sousuo').click(function(){
		return false;
	});
	
	$('.zbox .box2 .b2_uls li.lis').click(function(){
		var l=$(this).index();
		$(this).addClass('lis1');
		$(this).siblings('.lis').removeClass('lis1');
		$('.zbox .box2 .dzc').eq(l).css('display','block');
		$('.zbox .box2 .dzc').eq(l).siblings('.dzc').css('display','none');
	});
	$('.zbox .box2 .b2_box1 input.inp1').focus(function(){
		$(this).css('background-color','white');
		$(this).siblings('.inp1').css('background-color','#f4f4f4');
	});
	$('.zbox .box2 .b2_box1 input.inp1').blur(function(){
		$(this).css('background-color','#f4f4f4');
		if(($('.zbox .box2 .b2_box1 input.inp1').eq(0).val()!='')&&($('.zbox .box2 .b2_box1 input.inp1').eq(1).val()!='')){
			$('.zbox .box2 .b2_box1 input.inp3').css('background-color','#ffe300');
		}else{
			$('.zbox .box2 .b2_box1 input.inp3').css('background-color','#f4f4f4');
		}
	});
	$('.zbox .box2 .b2_boxy .sjh input').focus(function(){
		$(this).css('background-color','white')
	})
	$('.zbox .box2 .b2_boxy .sjh input').blur(function(){
		$(this).css('background-color','#f4f4f4')
	})
	var p=0;
	$('.zbox .box2 .b2_boxy .sjh .j86').click(function(){
		if(p%2==0){
			$('.zbox .box2 .b2_boxy .sjh ul').css('display','block');
		}else{
			$('.zbox .box2 .b2_boxy .sjh ul').css('display','none');
		}
		p++;
	});
	$('.zbox .box2 .b2_boxy .sjh ul li').click(function(){
		$('.zbox .box2 .b2_boxy .sjh .j86').html($(this).children().html());
		$('.zbox .box2 .b2_boxy .sjh ul').css('display','none');
		p++;
	})
	$('.zbox .box2 .b2_uls li:nth-of-type(3)').click(function(){
		$('.zbox .box2').css('display','none');
		$('.zbox .weima').css('display','block');
	});
	$('.zbox .weima span').click(function(){
		$('.zbox .weima').css('display','none');
		$('.zbox .box2').css('display','block');
	});
	$('.hea_top .cloud a').click(function(){
		$('.zbox').show();
		$('.bxxo').show();
	});
	$('.zbox>span').click(function(){
		$('.zbox').hide();
		$('.bxxo').hide();
	});
	var sj = /^1[345789]\d{9}$/;
	var yx = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	$('.zbox .box2 .b2_box1 input.inp3').click(function(){
		if($('.zbox .box2 .b2_box1 input.inp4').val()!=''&&$('.zbox .box2 .b2_box1 input.inp2').val()!=''){
			if(sj.test($('.zbox .box2 .b2_box1 input.inp4').val())||yx.test($('.zbox .box2 .b2_box1 input.inp4').val())){
				$('.box2 .cwt').css('display','none');
			}else{
				$('.box2 .cwt').css('display','block');
				$('.box2 .cwt').html('请输入正确的手机号或邮箱');
			}
		}
	});
	$('.zbox .box2 .b2_boxy .sjh input').blur(function(){
		if($(this).val()==''){
			$('.box2 .cwt2').css('display','none');
		}else if(sj.test($(this).val())){
			$('.box2 .cwt2').css('display','none');
		}else{
			$('.box2 .cwt2').css('display','block');
			$('.box2 .cwt2').html('请输入正确的手机号');
		}
	});
	var a=0;
	var timer;
	function lbt(){
		timer=setInterval(function(){
			a++;
			if(a==$('.uli').children().length){
				a=0;
				$('.uli').css('margin-left',-1130*a+'px');
				a=1;
			}
			$('.uli').stop().animate({
				'margin-left':-1130*a+'px'
			},800);
		},3000);
	}
	lbt();
	$('.hea_ttp .tt_lbt').mouseenter(function(){
		clearInterval(timer);
		$('.tt_lbt .btn1').css('display','block');
		$('.tt_lbt .btn2').css('display','block');
	});
	$('.hea_ttp .tt_lbt').mouseleave(function(){
		lbt();
		$('.tt_lbt .btn1').css('display','none');
		$('.tt_lbt .btn2').css('display','none');
	});
	$('.tt_lbt .btn1').click(function(){
		a--;
		if(a<0){
			a=$('.uli').children().length-1;
			$('.uli').css('margin-left',-1130*a+'px');
			a=$('.uli').children().length-2;
		}
		$('.uli').stop().animate({
			'margin-left':-1130*a+'px'
		},800);
	});
	$('.tt_lbt .btn2').click(function(){
		a++;
		if(a==$('.uli').children().length){
			a=0;
			$('.uli').css('margin-left',-1130*a+'px');
			a=1;
		}
		$('.uli').stop().animate({
			'margin-left':-1130*a+'px'
		},800);
	});
	$('.hea_bot ul li').click(function(){
		$(this).addClass('lis');
		$(this).siblings().removeClass('lis');
	});
	var b=$('.hea_bot').offset().top;
	$(window).scroll(function(e){
		if($(this).scrollTop()>b){
			$('.hea_bot').css({
				'position':'fixed',
				'top':'0px'
			});
		}else{
			$('.hea_bot').css({
				'position':'static'
			});
		}
	});
	$('.theme .t_box .one .item .sp1').mouseenter(function(){
		// $('.theme .t_box .one .ihide').css('display','block');
		// $('.theme .t_box .one .ihide').show(1000);
		$(this).parent().siblings('.ihide').css('display','block');
	});
	$('.theme .t_box .one .item .sp1').mouseleave(function(){
		// $('.theme .t_box .one .ihide').css('display','none');
		// $('.theme .t_box .one .ihide').hide(1000);
		$(this).parent().siblings('.ihide').css('display','none');
	});
	$('.theme .t_box .one .ihide').mouseenter(function(){
		$(this).css('display','block');
	});
	$('.theme .t_box .one .ihide').mouseleave(function(){
		$(this).css('display','none');
	});
	var c=0;
	$('.theme .yeshu ul li.lis').click(function(){
		c=$(this).index()-1;
		$(this).addClass('lis3');
		$(this).siblings('.lis').removeClass('lis3');
		xyxy();
	});
	$('.theme .yeshu ul li.lis5').eq(0).click(function(){
		c--;
		$('.theme .yeshu ul li.lis').eq(c).addClass('lis3');
		$('.theme .yeshu ul li.lis').eq(c).siblings('.lis').removeClass('lis3');
		xyxy();
	});
	$('.theme .yeshu ul li.lis5').eq(1).click(function(){
		c++;
		if(c==$('.theme .yeshu ul li.lis').length){
			c=0;
		}
		$('.theme .yeshu ul li.lis').eq(c).addClass('lis3');
		$('.theme .yeshu ul li.lis').eq(c).siblings('.lis').removeClass('lis3');
		xyxy();
	});
	function xyxy(){
		if($('.theme .yeshu ul li:nth-of-type(2)').attr('class')!='lis lis3'){
			$('.theme .yeshu ul li.lis2').css('display','block');
		}else{
			$('.theme .yeshu ul li.lis2').css('display','none');
		}
	}
	var s=$('.cen').offset().top;
	var e=$('footer').offset().top-$(window).height();
	$(window).scroll(function(){
		if($(this).scrollTop()>s){
			$('.rtn').css({
				'display':'block',
				'position':'fixed',
				'bottom':'50px'
			});
		}else{
			$('.rtn').css('display','none');
		}
		if($(this).scrollTop()>e){
			$('.rtn').css({
				'position':'relative',
				'bottom':'50px'
			});
		}else{
			$('.rtn').css({
				'position':'fixed',
				'bottom':'50px'
			});
		}
	});
	$('.rtn').click(function(){
		$('body,html').animate({
			'scrollTop':'0'
		},500)
	});
	
})