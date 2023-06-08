(function($) {
"use strict";
    
    jQuery(window).scroll(function(){
      if(jQuery(window) .scrollTop() > 150 ){
        jQuery("#scrollUp").fadeIn(500);
      }
      else{
        jQuery("#scrollUp").fadeOut(500);
      }
    });

    jQuery(document).ready(function(){
        /*-------------------------------------------
        js wow
        --------------------------------------------- */
        new WOW().init();

        /*-------------------------------------------
        js scrollup
        --------------------------------------------- */
        jQuery("#scrollUp").on('click', function() {
          jQuery('html, body').animate({ 'scrollTop': '0' }, 2000,);
          return false;
        });

        /*-------------------------------------------
        accordion
        --------------------------------------------- */
        $('.collapse').collapse()

        /*---------------------------------
        Menu Stick
        -----------------------------------*/
        var header = jQuery('.sticky-bar');
        var win = jQuery(window);
        win.on('scroll', function() {
            var scroll = win.scrollTop();
            if (scroll < 200) {
                header.removeClass('stick');
            } else {
                header.addClass('stick');
            }
        });
        
        /*---------------------------------
        magnificPopup active
        -----------------------------------*/
        $('.popup-video').venobox(); 


        
        /*---------------------------------
        countdown-timer active
        -----------------------------------*/
        jQuery('#countdown-timer').syotimer({
            year: 2020,
            month: 11,
            day: 19,
            hour: 20,
            minute: 30
        });

        
        /*---------------------------------
        niceSelect active
        -----------------------------------*/
        jQuery('select').niceSelect();
        /*---------------------------------
        mobile menu active
        -----------------------------------*/
        jQuery('.nav-item.dropdown .nav-link').on('click', function() {
            jQuery(this).parent('.nav-item.dropdown ').children('.dropdown-menu').slideToggle();
        });
        jQuery('.nav-item.dropdown li ').on('click', function() {
            jQuery(this).children('.nav-item.dropdown li ul').slideToggle();
        });
               
    });
    

})(jQuery);