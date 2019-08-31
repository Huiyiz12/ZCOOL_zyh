$(function(){
	$('.box .box2 .b2_uls li.lis').click(function(){
		var b=$(this).index();
		$(this).addClass('lis1');
		$(this).siblings('.lis').removeClass('lis1');
		$('.box .box2 .dzc').eq(b).css('display','block');
		$('.box .box2 .dzc').eq(b).siblings('.dzc').css('display','none');
	});
	$('.box .box2 .b2_box1 input.inp1').focus(function(){
		$(this).css('background-color','white');
		$(this).siblings('.inp1').css('background-color','#f4f4f4');
	});
	$('.box .box2 .b2_box1 input.inp1').blur(function(){
		$(this).css('background-color','#f4f4f4');
		if(($('.box .box2 .b2_box1 input.inp1').eq(0).val()!='')&&($('.box .box2 .b2_box1 input.inp1').eq(1).val()!='')){
			$('.box .box2 .b2_box1 input.inp3').css('background-color','#ffe300');
		}else{
			$('.box .box2 .b2_box1 input.inp3').css('background-color','#f4f4f4');
		}
	});
	$('.box .box2 .b2_boxy .sjh input').focus(function(){
		$(this).css('background-color','white')
	})
	$('.box .box2 .b2_boxy .sjh input').blur(function(){
		$(this).css('background-color','#f4f4f4')
	})
	var a=0;
	$('.box .box2 .b2_boxy .sjh .j86').click(function(){
		if(a%2==0){
			$('.box .box2 .b2_boxy .sjh ul').css('display','block');
		}else{
			$('.box .box2 .b2_boxy .sjh ul').css('display','none');
		}
		a++;
	});
	$('.box .box2 .b2_boxy .sjh ul li').click(function(){
		$('.box .box2 .b2_boxy .sjh .j86').html($(this).children().html());
		$('.box .box2 .b2_boxy .sjh ul').css('display','none');
		a++;
	})
	$('.box .box2 .b2_uls li:nth-of-type(3)').click(function(){
		$('.box .box2').css('display','none');
		$('.box .weima').css('display','block');
	});
	$('.box .weima span').click(function(){
		$('.box .weima').css('display','none');
		$('.box .box2').css('display','block');
	});
	var sj = /^1[345789]\d{9}$/;
	var yx = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	$('.box .box2 .b2_box1 input.inp3').click(function(){
		if($('.box .box2 .b2_box1 input.inp4').val()!=''&&$('.box .box2 .b2_box1 input.inp2').val()!=''){
			if(sj.test($('.box .box2 .b2_box1 input.inp4').val())||yx.test($('.box .box2 .b2_box1 input.inp4').val())){
				$('.box2 .cwt').css('display','none');
			}else{
				$('.box2 .cwt').css('display','block');
				$('.box2 .cwt').html('请输入正确的手机号或邮箱');
			}
		}
	});
	$('.box .box2 .b2_boxy .sjh input').blur(function(){
		if($(this).val()==''){
			$('.box2 .cwt2').css('display','none');
		}else if(sj.test($(this).val())){
			$('.box2 .cwt2').css('display','none');
		}else{
			$('.box2 .cwt2').css('display','block');
			$('.box2 .cwt2').html('请输入正确的手机号');
		}
	});
})