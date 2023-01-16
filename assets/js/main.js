(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".hero_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    navText: [
      '<i class="fal fa-arrow-circle-right"></i>',
      '<i class="fal fa-arrow-circle-left"></i>'
    ],
    nav: true,
    dots: false
  });

  // owlCarousel
  $(".team_slider").owlCarousel({
    loop: true,
    margin: 20,
    items: 4,
    navText: [
      '<i class="fal fa-angle-left"></i>',
      '<i class="fal fa-angle-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      },
      1100: {
        items: 4
      }
    }
  });

  // owlCarousel
  $(".test_slider").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    navText: [
      '<i class="fal fa-angle-left"></i>',
      '<i class="fal fa-angle-right"></i>'
    ],
    nav: true,
    dots: false
  });



    // dropDown https://codepen.io/alexdevero/pen/rNKzoN
    $(function() {
    var list = $('.js-dropdown-list');
    var link = $('.js-link');
    link.click(function(e) {
        e.preventDefault();
        list.slideToggle(200);
    });
    list.find('li').click(function() {
        var text = $(this).html();
        var icon = '<i class="fa fa-chevron-down"></i>';
        link.html(text+icon);
        list.slideToggle(200);
        if (text === '* Reset') {
        link.html('Select one option'+icon);
        }
    });
});

 
})(jQuery);
