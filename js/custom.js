$(document).ready(function () {

    /*********** START HEADER JS HERE ***********/
    $(".Mobile_button").click(function(){
      $(".menu_overlay").addClass("active_overlay");
      $(".cm_header").addClass("active_cm_header");
      $('body').addClass("overflow-hidden");
    });

    $(".close_menu_btn button, .menu_overlay").click(function(){
      $(".menu_overlay").removeClass("active_overlay");
      $(".cm_header").removeClass("active_cm_header");
      $('body').removeClass("overflow-hidden");
    });
    /*********** END HEADER JS HERE ***********/

    /*********** START CAPTURE SLIDER HERE ***********/
    $('.capture_images_items').slick({
      dots: true,
      infinite: false,
      arrows:false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      autoplaySpeed: 2000
    });
    /*********** END CAPTURE SLIDER HERE ***********/
    
});
