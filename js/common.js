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
               
                $('.navbar-default').addClass("h55");
               $('.navbar-brand h1').addClass("lh55");
                $('.navbar-nav>li>a').addClass("lh55");
                $menu.addClass("fixed");
            }
             else if($(this).scrollTop() <= 75 && $menu.hasClass("fixed") && $( window ).width()>991)
                 {
                $('.navbar-default').removeClass("h55");
               $('.navbar-brand h1').removeClass("lh55");
                $('.navbar-nav>li>a').removeClass("lh55");
                 $menu.removeClass("fixed");}
                 
                 
           else if($(this).scrollTop() > 100 && $( window ).width()>767 && $( window ).width()<992){
              
                 $('.navbar-default').addClass("h55");
               $('.navbar-brand h1').addClass("lh55");
                $('.navbar-nav>li>a').addClass("lh55");
                $('.navbar-brand').addClass('display-none');
                $('.navbar-right').addClass('hidden-sm');
                $menu.addClass("fixed");
            }
            else if($(this).scrollTop() < 100 && $( window ).width()>767 && $( window ).width()<992){
               
                $menu.removeClass("fixed");
                $('.navbar-default').removeClass("h55");
               $('.navbar-brand h1').removeClass("lh55");
                $('.navbar-nav>li>a').removeClass("lh55");
                $('.navbar-brand').removeClass('display-none');
                $('.navbar-right').removeClass('hidden-sm');
            }
            
            
            
            
            
            else if($(this).scrollTop() <= 75 && $menu.hasClass("fixed")) {
                
                $menu.removeClass("fixed");
            }
        });//scroll
    });

/*var bg = [
    '../img/header-1.jpg',
    '../img/header-3.jpg',
    '../img/header-4.jpg' 
]
var count =1;
$(document).ready(function(){
    if(count<=3){
        setInterval(function() {
   $('header').css({'background':'url('+bg[count]+')'});
count++;
        }, 2000);
    }
    count=0;
});*/

var imgHead = [
			'../img/header-1.jpg',
    '../img/header-3.jpg',
    '../img/header-4.jpg' 
		], i=1;
	function csaHead(){

		if(i > (imgHead.length-1)){
			$('header').animate({'opacity':'1'},0,function(){
				i=1;
				$('header').css({'background':'url('+imgHead[0]+')'});
			});
			
		}else{
			$('header').animate({'opacity':'1'},0,function(){
				$('header').css({'background':'url('+imgHead[i]+')'});
				i++;
			});
		}
		
	}
	var intervalCsaHead = setInterval(csaHead,4000);



