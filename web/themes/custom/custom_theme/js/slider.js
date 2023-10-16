(function ($, Drupal, once) {
  Drupal.behaviors.matchSlider = {
    attach: function (context, settings) {
        $(once(".match-slider", "#item", context)).click(function () {
          // console.log("hi");
          // $('.match-slider', context).once('match-slider').each(function () {
            // once('.match-slider', '#item', context).forEach(function (element) {

        $('.match-slider').slick({
          dots: false,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000, 
          slidesToShow: 1,
          slidesToScroll: 1, 
          prevArrow: '<button class="slick-prev">Previous</button>',
          nextArrow: '<button class="slick-next">Next</button>',
        });
      });
    }
  };
})(jQuery, Drupal, once);  
