	
			$(function(){
				//头部
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
					//下面
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
				
				$('.city_tab_city').click(function(){
					$('.city_panel').toggle(function(){
					});
					return false;
				});
				$('body').click(function(){
					$('.city_panel').css('display','none');
				});
				$('.city_panel').click(function(e){
					e.stopPropagation();
				});
				$('.city_first .city_first_center .city_uls_one>li').click(function(){
					$(this).addClass('city_one_li');
					$(this).siblings('li').removeClass('city_one_li');
				});
				$('.city_one_center .city_one_top .city_one_left .city_one_pbox>div').click(function(){
					$(this).addClass('pbox_one');
					$(this).siblings('div').removeClass('pbox_one');
				});
				$('.city_right_ul li').hover(function(){
					$(this).html($(this).attr('text'));
				},function(){
					$(this).html('');
				});
				$('.card-ot-img').hover(function(){
					$(this).siblings('.card-ot-t').css("display","block");
				},function(){
					$(this).siblings('.card-ot-t').css("display","none");
				});
				$('.card-ot-t').hover(function(){
					$(this).css("display","block");
				},function(){
					$(this).css("display","none");
				});
				$('.show-top-two .show-three-r').click(function(){
					$('.show-three-l').css('display','block');
					$('.show-img-two,.show-three-r').css('display','none');
				});
				$('.show-top-two .show-three-l').click(function(){
					$('.show-three-l').css('display','none');
					$('.show-img-two,.show-three-r').css('display','block');
				});
				$('.show-big-box .show-box-one p').click(function(){
					$(this).addClass('show-p-one');
					$(this).siblings('p').removeClass('show-p-one');
					var show=$(this).index();
					$('.show-tab>div').eq(show).siblings().css('display','none');
					$('.show-tab>div').eq(show).css('display','block');
				});
				$('.city_back_top').click(function(){
					$('body,html').animate({
						'scrollTop':'0px'
					},1000)
				});
				$(window).scroll(function(){
					console.log($(this).scrollTop());
					if($(this).scrollTop()>($('.show-top-four').offset().top-$(window).height())){
						$('.city_back_top').css('display','block');
					}else{
						$('.city_back_top').css('display','none');
					}
					if($(this).scrollTop()>($('.foot').offset().top-$(window).height())){
						$('.city_back_top').css({
							'position':'absolute',
							'bottom':'300px'
						});			
					}else{
						$('.city_back_top').css({
							'position':'fixed',
							'bottom':'70px'
						});	
					}
				});
			})