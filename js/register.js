$(function(){
	$('.n_inp .sjh input').focus(function(){
		$(this).css('background-color','white')
	})
	$('.n_inp .sjh input').blur(function(){
		$(this).css('background-color','#f4f4f4')
	})
	var a=0;
	$('.n_inp .sjh .j86').click(function(){
		if(a%2==0){
			$('.n_inp .sjh ul').css('display','block');
		}else{
			$('.n_inp .sjh ul').css('display','none');
		}
		a++;
	});
	$('.n_inp .sjh ul li.lis').click(function(){
		$('.n_inp .sjh .j86').html($(this).children().html());
		$('.n_inp .sjh ul').css('display','none');
		a++;
	});
	$('.n_inp .sjh ul li:first-child span').click(function(){
		$('.n_inp .sjh ul').css('display','none');
		a++;
	})
})