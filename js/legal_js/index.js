$(function(){
    var trrigle=1;
    $('.down').click(function(){
        // console.log(1);
        trrigle++;
        if(trrigle%2==0){
            $("#nav4").fadeIn();
        }else{
            $("#nav4").hide();
        }
        $(".down").css({
            'transform':'rotate('+180*trrigle+'deg)'
        })
    })
	
    
})