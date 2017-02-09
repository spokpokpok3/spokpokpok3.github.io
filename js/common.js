$('.navbar-toggle').click(function(){
    $('.mobile-menu').animate({
                width: "toggle"
            });
});

 $('.btn').click(function(){
             if($(this).hasClass('trans')){
                 $(this).removeClass('trans');
             }
             else{
                 $(this).addClass('trans');
                 }
             $(this).next().slideToggle();
             
         });

$(document).ready(function(){

        var $menu = $("nav");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 75 && $( window ).width()>991
               ){
                $('.header-main>h1').addClass('mt295');
                $('.navbar-default').addClass("h55");
               $('.navbar-brand h1').addClass("lh55");
                $('.navbar-nav>li>a').addClass("lh55");
                $menu.addClass("fixed");
            }
             else if($(this).scrollTop() <= 75 && $menu.hasClass("fixed") && $( window ).width()>991)
                 {$('.header-main>h1').removeClass('mt295');
                $('.navbar-default').removeClass("h55");
               $('.navbar-brand h1').removeClass("lh55");
                $('.navbar-nav>li>a').removeClass("lh55");
                 $menu.removeClass("fixed");}
                 
                 
            else if($(this).scrollTop() > 130 && $( window ).width()>767 && $( window ).width()<992){
                $('.header-main>h1').addClass('pt350');
                 $('.navbar-default').addClass("h55");
               $('.navbar-brand h1').addClass("lh55");
                $('.navbar-nav>li>a').addClass("lh55");
                $('.navbar-brand').addClass('display-none');
                $('.navbar-right').addClass('hidden-sm');
                $menu.addClass("fixed");
            }
            else if($(this).scrollTop() < 130 && $( window ).width()>767 && $( window ).width()<992){
               $('.header-main>h1').removeClass('pt350');
                $menu.removeClass("fixed");
                $('.navbar-default').removeClass("h55");
               $('.navbar-brand h1').removeClass("lh55");
                $('.navbar-nav>li>a').removeClass("lh55");
                $('.navbar-brand').removeClass('display-none');
                $('.navbar-right').removeClass('hidden-sm');
            }
            
            
            
            
            
            else if($(this).scrollTop() <= 75 && $menu.hasClass("fixed")) {
                $('.header-main>h1').removeClass('mt295');
                $menu.removeClass("fixed");
            }
        });//scroll
    });