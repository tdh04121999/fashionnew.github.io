$(document).ready(function(){
        
        $("#icon-menu-responsive").click(function(){
            $("#site").toggleClass('open-menu-respon');
        });
        
        $(window).resize(function(){    
            if($(this).width()>845){
                $('#respon-menu').css('display','none');
                $("#site").removeClass('open-menu-respon');
            }
        });
        
        $("#wrapper").click(function(){
            $("#site").removeClass('open-menu-respon');
        });
        
        $(window).scroll(function(){
            $("#site").removeClass('open-menu-respon');
        });
        
        $(window).scroll(function(){
            if($(this).scrollTop()!=0){
                $('#back-to-top').stop().fadeIn(100);
            }
            else{
                $('#back-to-top').stop().fadeOut(100);
            }
        });
        
        $("#back-to-top").click(function(){
            $("body, html").stop().animate({scrollTop : 0},500);
        });
});