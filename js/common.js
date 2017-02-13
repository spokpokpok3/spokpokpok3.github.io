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

var imgHead = [
			'../img/header-1-min.jpg',
    '../img/header-3-min.jpg',
    '../img/header-4-min.jpg' 
		], i=1;
	function csaHead(){

		if(i > (imgHead.length-1)){
            i=1;
	$('header').css({'background':'url('+imgHead[0]+')'});
		}else{
            $('header').css({'background':'url('+imgHead[i]+')'});
				i++;
		}
		
	}
	var intervalCsaHead = setInterval(csaHead,3000);


/*progress bar anim*/

$(document).ready(function(){

            var barY = 
$(".progress").offset();
        $(window).scroll(function(){
            if ( $(this).scrollTop()+$(window).height() > barY.top+150
               ){
               $(".progress-bar").animate({
                width: "show"
            },1500);
              
            }
       
        });//scroll
    });

/*numbers anim*/
$(document).ready(function(){
    var show = true;
    var numY = $(".number-block").offset();
    $(window).scroll(function(){
        if(!show) return false;  
    if ( $(this).scrollTop()+$(window).height() > numY.top+160){
        
    
    $(".spincrement").spincrement({
    from: 0,  
        to: $(".spincrement").attr('data-num'),
    decimalPlaces: 0,      // Разделитель десятичной части числа
    thousandSeparator: "", // Разделитель тыcячных
    duration: 1500          // Продолжительность анимации в 
});
    show = false;
    }
         });//scroll
});


