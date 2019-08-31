$(function(){
    
    var a=0;
	var timer;
	function lbt(){
        
		timer=setInterval(function(){
			a++;
			if(a==$('.uli').children().length){
				a=0;
                $('.uli').css('margin-left',-1200*a+'px');
                $('.point').eq(a).addClass("active").siblings().removeClass("active");
                a=1;
            }
            if(a==$('.uli').children().length-1){
                $('.point').eq(0).addClass("active").siblings().removeClass("active");
			}
			$('.uli').stop().animate({
				'margin-left':-1200*a+'px'
            },800);
            
            $('.point').eq(a).addClass("active").siblings().removeClass("active");
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
            $('.uli').css('margin-left',-1200*a+'px');
			a=$('.uli').children().length-2;
        }
        if(a==$('.uli').children().length-1){
            $('.point').eq(0).addClass("active").siblings().removeClass("active");
        }
		$('.uli').stop().animate({
			'margin-left':-1200*a+'px'
        },800);
        $('.point').eq(a).addClass("active").siblings().removeClass("active");
    });
    
	$('.tt_lbt .btn2').click(function(){
		a++;
		if(a==$('.uli').children().length){
			a=0;
            $('.uli').css('margin-left',-1200*a+'px');
			a=1;
        }
        if(a==$('.uli').children().length-1){
            $('.point').eq(0).addClass("active").siblings().removeClass("active");
        }
		$('.uli').stop().animate({
			'margin-left':-1200*a+'px'
        },800);
        $('.point').eq(a).addClass("active").siblings().removeClass("active");
    });
	
	
	$(".current1").click(function(){
		$(".current1").addClass("curon");
		$(".current2").removeClass("curon");
		$(".tablan1").css({
			"display":"block"
		})
		$(".tablan2").css({
			"display":"none"
		})
	})

	$(".current2").click(function(){
		$(".current2").addClass("curon");
		$(".current1").removeClass("curon");
		$(".tablan2").css({
			"display":"block"
		})
		$(".tablan1").css({
			"display":"none"
		})
	})


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
	});
	$('.zbox>span').click(function(){
		$('.zbox').hide();
	});

	$(".Mylogin").click(function(){
		$(".zbox").css({
			"display":"block",
		})
	})

})