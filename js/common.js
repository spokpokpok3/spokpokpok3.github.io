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