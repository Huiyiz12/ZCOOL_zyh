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
					});
					$('.zbox>span').click(function(){
						$('.zbox').hide();
					});
				// 下面部分
				$('.act_tou .act_one_ul>li').click(function(){
					$(this).addClass('act_one_li');
					$(this).siblings('li').removeClass('act_one_li');
				});	
				$(window).scroll(function(){
					console.log($(this).scrollTop());
					// console.log($('.act_nav').offset().top);
					if($(this).scrollTop()>56){
						$('.act_tou').css({
							'position' : 'fixed',
							'top' : '0'
						});
					}else{
						$('.act_tou').css('position','static');
					}
					if($(this).scrollTop()>500){
						$('.right_fanhui').css('display','block');
					}else{
						$('.right_fanhui').css('display','none')
					}
				});	
				var num=0;
				$('.fy_default>p').click(function(){
					$(this).addClass('fy_curr');
					$(this).siblings('p').removeClass('fy_curr');		
					num=$(this).index()-1;
				});
					
				
				$('.fy_right').click(function(){	
					num++;
					if(num>0){
					$('.fy_left').css('display','block');
					}
					if(num>8){
						num=0;
					$('.fy_left').css('display','none');
					}	
					$('.fy_default>p').eq(num).addClass('fy_curr');
					$('.fy_default>p').eq(num).siblings('p').removeClass('fy_curr');
				});
				$('.fy_left').click(function(){	
					num--;
					if(num>0){
					$('.fy_right').css('display','block');
					}
					if(num<0){
						num=8;
					$('.fy_right').css('display','none');
					}
					$('.fy_default>p').eq(num).addClass('fy_curr');
					$('.fy_default>p').eq(num).siblings('p').removeClass('fy_curr');
				});
				$('.fy_default>p').click(function(){
					if(num<=$('.fy_default>p').length){
					$('.fy_left').css('display','block');
					}else if(num=0){
					$('.fy_left').css('display','none');
					}	
				})
				$('.right_fanhui').click(function(){
					$('body,html').animate({
						'scrollTop':'0'
					},600)
				});				
				$(window).scroll(function(){
					console.log($(this).scrollTop());
					if($(this).scrollTop()>($('.back').offset().top-$(window).height())){
						$('.right_fanhui').css('display','block');
					}else{
						$('.right_fanhui').css('display','none');
					}
					if($(this).scrollTop()>($('.foot').offset().top-$(window).height())){
						$('.right_fanhui').css({
							'position':'absolute',
							'bottom':'260px'
						});			
					}else{
						$('.right_fanhui').css({
							'position':'fixed',
							'bottom':'30px'
						});	
					}
				});
			})