$(document).ready(function() {

    //Navigation
    $('nav a').click(function(e) {

        var tab_target = $(this).attr('href');
        if(tab_target.indexOf('tel')!=-1)return;

        if (tab_target != "javascript:void(0);") {
            e.preventDefault();
            // alert("from");	
            $('html, body').animate({
                scrollTop: $(tab_target).offset().top - $('header').height()
            }, 500);
            $(this).addClass('active').siblings().removeClass('active');
            $('.subnav').addClass('sticked_subanv');
            if ($(window).width() <= 1024) {
                $('nav').removeClass('active');
                $('.overlay-1').removeClass('active');
            }
        }

    });

    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('section').each(function(i) {
                if ($(this).position().top <= windscroll + 350) {
                    console.log($(this), $(this).position().top)
                    $('nav a.active').removeClass('active');
                    $('nav a').eq(i).addClass('active');
                }
            });

        $('a.down-arrow').fadeOut();
        } else {
            $('nav a.active').removeClass('active');
            $('a.down-arrow').fadeIn();
        }
    }).scroll();


    $('.scrollTop a').click(function(e) {
        e.preventDefault();
        var tab_target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(tab_target).offset().top - $('header').height()
        }, 500);
        $('.scrollTop').removeClass('active');
    });

    /*$(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.banner-wrp').each(function(i) {
                if ($(this).position().top <= windscroll + 350) {
                    $('.scrollTop.active').removeClass('active');
                    $('.scrollTop').eq(i).addClass('active');
                }
            });
        } else {
            $('.scrollTop').removeClass('active');
        }
    }).scroll();*/


    if ($(window).width() <= 1024) {

        $('.menu-btn').click(function() {
            $('nav').addClass('active')
            $('.overlay-1').addClass('active');
            $('header').addClass('active');
        })
        $('nav').append('<a href="#" class="close">X</a>');
        $('nav .close').click(function(e) {
            e.preventDefault();
            $('nav').removeClass('active');
            $('.overlay-1').removeClass('active');
            $('header').removeClass('active');
        })
    }

    if ($(window).width() <= 768) {
        $('.form-wrp .heading').click(function() {
            $('.form-wrp .wrapper-01 .form-content').show();
            $('.overlay-2').addClass('active');
        })
        $('.form-wrp .wrapper-01 .form-content').append('<a href="#" class="close">X</a>');
        $('.form-wrp .wrapper-01 .close').click(function(e) {
            e.preventDefault();
            console.log('click');
            $('.form-wrp .wrapper-01 .form-content').hide();
            $('.overlay-2').removeClass('active');
        });

        $(".overlay-2").click(function() {

            {
                $('.form-wrp .wrapper-01 .form-content').hide();

            }
        });

        $(window).scroll(function() {
           if($(window).scrollTop() + $(window).height() == $(document).height())
            {
               
               $("#mobi-enquire-btn").trigger('click');
           }
            });
       
    }
     


    $('.overlay').click(function() {
        $('nav').removeClass('active');
    });

    //Background color change


    $(window).scroll(function()
     {
    if ($(this).scrollTop() > 2){  
        $('.menu-wrapper').addClass("active");
    }
    else{
        $('.menu-wrapper').removeClass("active");
    }
    });
     

    $(".nav-xs").click(function(){

        $(".menu-wrapper nav").addClass("active");
        $("body").addClass("active");
        $("body.active .overlay").addClass("display-block");
    });

     $(".nav-xs-close").click(function(){

        $(".menu-wrapper nav").removeClass("active");
         $("body.active .overlay").removeClass("display-block");
         $("body").removeClass("active");
    });


     $("nav ul li a").bind("click", function() {
        $("body").addClass("active");
        $("body.active .overlay").removeClass("display-block");
        $("body").removeClass("active");
    });

    


    //Main banner	
    $('#banner').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        items: 1,
        nav: true,
        dosts: false,
        mouseDrag: true,

    });


    //Gallery banner

    $('#gallery-amt').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 45,
        stagePadding: 40,
        items: 3,
        nav: true,
        dosts: false,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 800,
        responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }

    });
    

    //amenities-banner
    $('#amentities-gallery').owlCarousel({
        loop: true,  
        autoplay: true,
        margin: 32,
        stagePadding: 30,
        items: 4,
        nav: true,
        dosts: false,
        mouseDrag: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 800,
        responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }

    });

    $('.unit-slider ').owlCarousel({
        loop: false,
        mouseDrag: false,
        autoplay: true,
        margin: 0,
        items: 1,
        nav: true,
        dosts: false
       
    });


    //$("#phone").intlTelInput();
    $("#popup-tel").intlTelInput();
    $("#schedule-tel").intlTelInput();
    $(".fancybox").fancybox();

    //Unit plan switch tab
    $("#unit-plan-disp ul.unit-tab li").click(function() {
        var ptab = $(this).attr("data-tab");
        $("#unit-plan-disp ul.unit-tab li").removeClass("current");
        $(".unitplan-container").removeClass("current");
        $(this).addClass("current");
        $("#" + ptab).addClass("current");
    });

    $("#mobi-enquire-btn").bind("click", function() {
        $(".footer-form-wrp").css('display', 'block');
        //$(".main-form-otp").addClass('display-otp');
        $(this).scrollTop();
    });

    $(".fa-times").bind("click", function() {
        $(".footer-form-wrp").css('display', 'none');
        $(".enqcontainer").css('display', 'block');
    });

    $(".btn-config").click(function(){
        $("body").addClass("active");
        $("body.active .overlay").addClass("display-block");
        $("body.active .configuration-popup").addClass("display-block");
        $("body.active #schedule-otp-config").addClass("display-otp");

        var interested_project = $(this).data('typology');
        $('#intersted_project_id').val(interested_project);

    });

    $(".configuration-popup .close, body .overlay").bind("click", function() {
        $("body").addClass("active");
        $("body.active .overlay").removeClass("display-block");
        $("body.active .configuration-popup").removeClass("display-block");
        $("body").removeClass("active");
        $("body.active #schedule-otp-config").addClass("display-block");
        $("#form-config").css("display","block");
        
        
    });

    //config popup
     $("#config-submit").click(function(){
        $("#form-config").css("display","none");
        $("#schedule-otp-config").removeClass("display-otp");

    });


    $(".schdeule-visit-btn").click(function(){
        $("body").addClass("active");
        $("body.active .overlay").addClass("display-block");
        $("body.active .schdeule-visit ").addClass("display-block");
        $("body.active #schedule-otp").addClass("display-otp");
    });

     $(".schdeule-visit .close, body .overlay").bind("click", function() {
        $("body").addClass("active");
        $("body.active .overlay").removeClass("display-block");
        $("body.active .schdeule-visit").removeClass("display-block");
        $("body.active #schedule-visit").addClass("display-block");
         $("body").removeClass("active");
    });

    /* $(".book-myshow-container .close").click(function(){
        alert();
        $(".book-myshow-container").css("display","none");
     })*/

    //Schedule visit
    $("#schedule-submit").click(function(){
        $("#schedule-visit").css("display","none");
        $("#schedule-otp").removeClass("display-otp");
    });

    // Detect ios 11_x_x affected  
    // NEED TO BE UPDATED if new versions are affected
    var ua = navigator.userAgent,
    iOS = /iPad|iPhone|iPod/.test(ua),
    iOS11 = /OS 11_0_1|OS 11_0_2|OS 11_0_3|OS 11_1|OS 11_1_1|OS 11_1_2|OS 11_2|OS 11_2_1/.test(ua);

    // ios 11 bug caret position
    if ( iOS && iOS11 ) 
    {
      // Add CSS class to body
       $(".schdeule-visit-btn,.btn-config,#mobi-enquire-btn,#bookmyshow-submit").bind("click", function() {
       $("html, body").addClass("iosBugFixCaret");
     });

    }
});

$('a.down-arrow').click(function(e) {
    e.preventDefault();
    var target = $(this).attr('href')

    $('body, html').animate({
        scrollTop : $(target).offset().top
    })
    $(this).fadeOut();
})

/*$(document).on("click",".book-myshow-container .close",function(){
        $('.book-myshow-container').fadeOut(500);
        });*/


/**********************As per requirement on 29/06/2018 hide Book my show********************/

/*$(document).on("click",".book-myshow-container .close",function(){        
        $('.book-myshow-container,.overlay-2').fadeOut(500);
        });

$(document).on("click",".overlay-2",function(){        
        $('.book-myshow-container,.overlay-2').fadeOut(500);
        });

          setTimeout(function(){
        $('.book-myshow-container,.overlay-2').fadeIn(800);
    },15000);*/