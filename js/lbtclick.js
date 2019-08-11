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
	
	$('.zbox .box22 .b2_uls li.lis').click(function(){
		var l=$(this).index();
		$(this).addClass('lis1');
		$(this).siblings('.lis').removeClass('lis1');
		$('.zbox .box22 .dzc').eq(l).css('display','block');
		$('.zbox .box22 .dzc').eq(l).siblings('.dzc').css('display','none');
	});
	$('.zbox .box22 .b2_box1 input.inp1').focus(function(){
		$(this).css('background-color','white');
		$(this).siblings('.inp1').css('background-color','#f4f4f4');
	});
	$('.zbox .box22 .b2_box1 input.inp1').blur(function(){
		$(this).css('background-color','#f4f4f4');
		if(($('.zbox .box22 .b2_box1 input.inp1').eq(0).val()!='')&&($('.zbox .box22 .b2_box1 input.inp1').eq(1).val()!='')){
			$('.zbox .box22 .b2_box1 input.inp3').css('background-color','#ffe300');
		}else{
			$('.zbox .box22 .b2_box1 input.inp3').css('background-color','#f4f4f4');
		}
	});
	$('.zbox .box22 .b2_boxy .sjh input').focus(function(){
		$(this).css('background-color','white')
	})
	$('.zbox .box22 .b2_boxy .sjh input').blur(function(){
		$(this).css('background-color','#f4f4f4')
	})
	var p=0;
	$('.zbox .box22 .b2_boxy .sjh .j86').click(function(){
		if(p%2==0){
			$('.zbox .box22 .b2_boxy .sjh ul').css('display','block');
		}else{
			$('.zbox .box22 .b2_boxy .sjh ul').css('display','none');
		}
		p++;
	});
	$('.zbox .box22 .b2_boxy .sjh ul li').click(function(){
		$('.zbox .box22 .b2_boxy .sjh .j86').html($(this).children().html());
		$('.zbox .box22 .b2_boxy .sjh ul').css('display','none');
		p++;
	})
	$('.zbox .box22 .b2_uls li:nth-of-type(3)').click(function(){
		$('.zbox .box22').css('display','none');
		$('.zbox .weima').css('display','block');
	});
	$('.zbox .weima span').click(function(){
		$('.zbox .weima').css('display','none');
		$('.zbox .box22').css('display','block');
	});
	$('.hea_top .cloud a').click(function(){
		$('.zbox').show();
	});
	$('.zbox>span').click(function(){
		$('.zbox').hide();
	});
	
	$('.box1 .longnv .tit h2 span:nth-of-type(2)').hover(function(){
		$('.box1 .longnv .tit .yin1').show();
	},function(){
		$('.box1 .longnv .tit .yin1').hide();
	});
	$('.box1 .longnv .tit .yin1').hover(function(){
		$('.box1 .longnv .tit .yin1').show();
	},function(){
		$('.box1 .longnv .tit .yin1').hide();
	});
	$('.lab').hover(function(){
		$('.box1 .lab .l_fs span').show();
	},function(){
		$('.box1 .lab .l_fs span').hide();
	});
	$('.tnv>div h3 span:nth-of-type(3)').hover(function(){
		$('.box1 .tnv .yin2').show();
	},function(){
		$('.box1 .tnv .yin2').hide();
	});
	$('.box1 .tnv .yin2').hover(function(){
		$('.box1 .tnv .yin2').show();
	},function(){
		$('.box1 .tnv .yin2').hide();
	});
	
	$('.tnv>div h3 span:nth-of-type(1)').hover(function(){
		$('.box1 .tnv .ihide').show();
	},function(){
		$('.box1 .tnv .ihide').hide();
	});
	$('.box1 .tnv .ihide').hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});
	var a=$('.box1 .conen').offset().top;
	var b=$('.conen .zan').offset().top;
	console.log(a);
	$(window).scroll(function(){
		// console.log($(this).scrollTop());
		if($(this).scrollTop()>b){
			$('.box1 .tnv').slideUp();
		}else if($(this).scrollTop()>a){
			$('.box1 .tnv').slideDown();
			$('.box1 .tnv').css({
				'position':'fixed',
				'top':'0px'
			});
		}else{
			$('.box1 .tnv').slideUp();
		}
	});
	var c=0;
	$('.bb_lef .zpxx>p span').click(function(){
		if(c%2==0){
			$('.bb_lef .zpxx .czsj').hide();
			$('.bb_lef .zpxx>p').css('border-radius','5px');
		}else{
			$('.bb_lef .zpxx .czsj').show();
			$('.bb_lef .zpxx>p').css('border-radius','5px 5px 0 0');
		}
		c++;
	});
	$('.pingl .pll .pl .nro').hover(function(){
		$(this).children('.czuo').children('.uls').children('li:first-child').show();
	},function(){
		$(this).children('.czuo').children('.uls').children('li:first-child').hide();
	});
	$('.bb_rig .pingl .pll .pl > img').hover(function(){
		$(this).siblings().children('.czuo').children('.uls').children('li:first-child').show();
	},function(){
		$(this).siblings().children('.czuo').children('.uls').children('li:first-child').hide();
	});
	$('.pingl .pll .pl .nro .czuo .uls li:first-child').hover(function(){
		$(this).css('color', '#282828');
		$(this).children().eq(0).attr('src','../img/lbtclick/jubaohover.svg');
	},function(){
		$(this).css('color', 'darkgray');
		$(this).children().eq(0).attr('src','../img/lbtclick/jubaoqian.svg');
	});
	$('.pingl .pll .pl .nro .czuo .uls li:nth-of-type(2)').hover(function(){
		$(this).children().eq(0).attr('src','../img/lbtclick/liuy01hover.svg');
	},function(){
		$(this).children().eq(0).attr('src','../img/lbtclick/liuy01.svg');
	});
	$('.pingl .pll .pl .nro .czuo .uls li:nth-of-type(3)').hover(function(){
		$(this).children().eq(0).attr('src','../img/lbtclick/dianz01hover.svg');
	},function(){
		$(this).children().eq(0).attr('src','../img/lbtclick/dianz01.svg');
	});
	$('.pingl .ckgd>div span').hover(function(){
		$(this).css('color', '#444444');
		$(this).children().eq(0).attr('src','../img/lbtclick/bihover.svg');
	},function(){
		$(this).css('color', '#999999');
		$(this).children().eq(0).attr('src','../img/lbtclick/bi.svg')
	});
	$('.clike .t_box .one .item .sp1').mouseenter(function(){
		$(this).parent().siblings('.ihide2').show();
	});
	$('.clike .t_box .one .item .sp1').mouseleave(function(){
		$(this).parent().siblings('.ihide2').hide();
	});
	$('.clike .t_box .one .ihide2').hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});
	
	var s=$('.conen > div .tex p').offset().top;
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