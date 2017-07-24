/**
 * Created by Lucas on 2017/7/17.
 */

//背景随机

$(function() {
    var length = 3;
    $(".bg-img li:nth-child(1)").show();
    setInterval(function () {
        var randomBgIndex = Math.round(Math.random() * length);
        // $("#section1 .bg-img li").eq(randomBgIndex).addClass("show").siblings().removeClass("show");
        $("#section1 .bg-img li").eq(randomBgIndex).css("display","block").addClass("show").siblings()
        .removeClass("show").css("display","none");
        // $("#section1 .bg-img li").eq(randomBgIndex).siblings();
    },5000);
});




$(function() {
    //编辑器控制

    var _top;
    var top1 = $("#section2").offset().top-50;
    var top2 = $("#section4").offset().top-50;
    var top3 = $("#section3").offset().top-50;
    var top4 = $("#section5").offset().top-50;
    // var top5 = $("#section6").offset().top-30;
    // var top6 = $("#section7").offset().top-30;
    var tops = [top1,top2,top3,top4];
    $(window).resize();

    //回到顶部
    $("#top").click(function () {
        $('html,body').stop().animate({
            scrollTop: 0
        }, 700);
    });
    showScroll();
    var min_height = document.documentElement.clientHeight /2;
    function showScroll() {
        $(window).scroll(function() {
            var s = $(window).scrollTop();
            s > min_height ? $('#top').fadeIn() : $('#top').fadeOut();
        });
    }

    //导航高亮
    $(".nav li").bind("click", function () {
        var index = $(this).index();//获取序号
        $(".nav li").eq(index).addClass("active").siblings().removeClass("active");
    });
    //关于我
    $("#btn-aboutme").bind("click", function () {
       $(".nav li:nth-child(1)").click();
    });

    //导航点击
    $(".nav li").bind("click", function () {
        var index = $(this).index();//获取序号
        _top = $(".section").eq(index+1).offset().top; //获取对应div距顶高度
        moveTo();
    });
    //导航slideToggle
    // $(".more-nav").bind("click", function () {
    //     $(".nav-ul.nav-xs-ul").stop().slideToggle(300);
    // });
    function moveTo(){
        $('html,body').animate({
            scrollTop: _top
        }, 500);
    }




    //教育经历具体显示,circle的hover
    $("#masterCircle").bind("mouseover",function(){
    	$("#master").css("opacity","0");
    	$(".my-xp li+li").css("opacity","0");
    	$("#masterDetail").css("opacity","1");
    	$("#masterDetail").css("top","160px");
    });
    $("#masterCircle").bind("mouseout",function(){
    	$("#master").css("opacity","1");
    	$(".my-xp li+li").css("opacity","1");
    	$("#masterDetail").css("opacity","0");
   		$("#masterDetail").css("top","180px");
    });
    $("#undergraduateCircle").bind("mouseover",function(){
    	$("#undergraduate").css("opacity","0");
    	$(".my-xp li:nth-child(1)").css("opacity","0");
    	$("#undergraduateDetail").css("opacity","1");
    	$("#undergraduateDetail").css("bottom","0px");
    });
    $("#undergraduateCircle").bind("mouseout",function(){
    	$("#undergraduate").css("opacity","1");
    	$(".my-xp li:nth-child(1)").css("opacity","1");
    	$("#undergraduateDetail").css("opacity","0");
   		$("#undergraduateDetail").css("bottom","-20px");
    });
    

    //页面滚动
    $(window).scroll(function () {
        //导航fixed
        var s = $(window).scrollTop();
        s > top1 ? $('.navbar').addClass("fixed") : $('.navbar').removeClass("fixed");
        //导航跟随滚动响应
        if((s>top1)&&(s<top2)){
            $(".nav li").eq(0).addClass("active").siblings().removeClass("active");
            // $(".nav-xs-ul li").eq(0).addClass("active").siblings().removeClass("active");
            $("#section2").addClass("active");
        }else if((s>top2)&&(s<top3)){
            $(".nav li").eq(1).addClass("active").siblings().removeClass("active");
            // $(".nav-xs-ul li").eq(1).addClass("active").siblings().removeClass("active");
            $("#section3").addClass("active");
        }else if((s>top3)&&(s<top4)){
            $(".nav li").eq(2).addClass("active").siblings().removeClass("active");
            // $(".nav-xs-ul li").eq(2).addClass("active").siblings().removeClass("active");
            $("#section4").addClass("active");
        }else if((s>top4)){
            $(".nav li").eq(3).addClass("active").siblings().removeClass("active");
            // $(".nav-xs-ul li").eq(3).addClass("active").siblings().removeClass("active");
            $("#section5").addClass("active");
        }
    });

});

