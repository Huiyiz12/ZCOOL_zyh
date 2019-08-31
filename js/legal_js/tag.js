$(function(){
    $(".GKraw").click(function(){
        // console.log($(this).index());
        var index = $(this).index();
        $(".taglan").eq(index).siblings(".taglan").css("display","none");
        $(".GKraw").eq(index).siblings(".GKraw").removeClass("on");
        $(".GKraw").eq(index).addClass("on");
        $(".taglan").eq(index).css("display","block");
    })
})