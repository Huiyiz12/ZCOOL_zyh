$(function(){
    
    $(window).scroll(function(){
        var aside = $("aside").offset().top;
        // console.log(aside);
        

        if($(this).scrollTop()<147){
            $('aside').css({
                "position":"static"
            });
            $('.backTotop').css({
                "display":"none"
            })
        }else if($(this).scrollTop()>=147&&$(this).scrollTop()<1093){
            $('aside').css({
                "position":"fixed",
                "top":"0"
            });
            $('.backTotop').css({
                "display":"block"
            });
        }else{
            $('aside').css({
                "position":"absolute",
                "top":"1093px"
            });
        }


        var num2 = $("footer").offset().top-$(window).height();
        console.log(num2);
        if($(this).scrollTop()>num2){
            $('.backTotop').css({
                "position":"absolute",
                "bottom":"270px"
            });
        }else{
            $('.backTotop').css({
                "position":"fixed",
                "bottom":"34px"
            });
        }
        // if($(this).scrollTop()>147&&$(this).scrollTop()<1200){
        //     $('aside').css({
        //         "position":"fixed",
        //         "top":"0"
        //     });
        // }else{
        //     $('aside').css({
        //         "position":"absolute",
        //         "top":"1000px"
        //     });
        // }
    });

    $(".backTotop").click(function(){
        $('html,body').animate({
            scrollTop: '0px'
        }, 400);
    })


    $(".changecity").click(function(){
        $(".cityBox").css({
            "display":"block"
        })
    })

    $(".closeBox").click(function(){
        $(".cityBox").css({
            "display":"none"
        })
    })

    $(".zhuanhuancity").click(function(){
        console.log($(this).text());
        $(".nowyouchange").text($(this).text());
        $(".city").text($(this).text());
    })


})