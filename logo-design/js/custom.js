$(document).ready(function() {
 
     $(window).load(function() {
            var reverseLogoCard = true;
            var lastLogoCardIndex = -1;
            $('.logo-card .back').show();
            $('.logo-card').data('reverseLogoCard', reverseLogoCard).flip({
                trigger: 'manual',
                reverse: reverseLogoCard
            });

            function flipLogoCard() {
                var max = $('.logo-card').length;
                if ($('body').width() < 551) max = 6;
                var index = Math.floor(Math.random() * max);
                if (index == lastLogoCardIndex) {
                    index = Math.floor(Math.random() * max);
                }
                lastLogoCardIndex = index;
                var wait = Math.random() * 1000 * Math.floor(Math.random() * 4) + 750;
                var card = $('.logo-card').eq(index);
                reverseLogoCard = card.data('reverseLogoCard') ? false : true;
                card.data('reverseLogoCard', reverseLogoCard);
                card.flip('toggle', function() {
                    card.flip({
                        reverse: reverseLogoCard
                    });
                    setTimeout(function() {
                        flipLogoCard();
                    }, wait);
                });
            }
            setTimeout(function() {
                flipLogoCard();
            }, 1000);
        });

    $('.bxslider1').bxSlider({
    pagerCustom: '#bx-pager',
    auto:true,
    mode: 'vertical'
    });

    // init Isotope
    var $container = $('.isotope').isotope({
        itemSelector: '.pfimg',
        filter:'.3d',
        layoutMode: 'fitRows'

    });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match(/ium$/);
    }
  };

  // bind filter button click
  $('#filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $container.isotope({
      filter: filterValue
    });
  });

   

  // change is-checked class on buttons
  $('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });
  //****************************
  // Isotope Load more button
  //****************************
  //****************************
  // Isotope Load more button
  //****************************
  var initShow = 12; //number of items loaded on init & onclick load more button
  var counter = initShow; //counter for load more button
  var iso = $container.data('isotope'); // get Isotope instance

  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $container.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $container.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      jQuery("#showMore").hide();
    } else {
      jQuery("#showMore").show();
    };

  }


//   function loadMore(toShow) {
//     $container.find(".hidden").removeClass("hidden");
 
  //append load more button
  $container.after('<button id="showMore"> Load More</button>');

  //when load more button clicked
  $("#showMore").click(function() {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    loadMore(counter);
  });

  //when filter button clicked
  $("#filters").click(function() {
    $(this).data('clicked', true);

    loadMore(initShow);
  });

    $('.filter-dis').click(function() {
      $('.zz button').prop( "disabled", true );
    });

$('.filter-enb').click(function() {
      $('.zz button').removeAttr("disabled");
    });

 
    $('#carousel').carousel();

    //bootstrap carousel plugin

    $('.carousel').carousel({

        interval: 5000,

        pause: ""

    });
  
	$('#testimonial').owlCarousel({
    loop:true,
    margin:0,
	nav:false,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1      
		},
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.pricing-sec .packages-slider').owlCarousel({
    loop:false,
    margin:0,
	dots:false,
    navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
    responsiveClass:true,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1      
		},
        576:{
            items:2
        },
       768:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
	
$('#logos-type').owlCarousel({
    loop:true,
    margin:0,
	nav:false,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1      
		},
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
	
    
    // $(".fancybox").fancybox({
        // openEffect: "none",
        // closeEffect: "none"
    // });
$(".lazy").lazyload({
    effect : "fadeIn"
});
 
    $('.s-bar').hover(function(){
        $(this).stop(true,true).animate({right:'184px'}, 500, 'easeOutExpo');
        $('.side-bars').css('z-index','1004');
    }, function(){
        $(this).animate({right:'0px'}, 500, 'easeOutBounce');
        $('.side-bars').css('z-index','999');
    });
 

    $('a.close').click(function() {
        $('.cus-overlay').trigger('click');
    });

    $('a.close').click(function() {
        $('.cus-overlay').trigger('click');
    });


    $('.cus-overlay').click(function() {
        $(this).fadeOut(300);
        $('.popup-form').removeClass('visibleit');
        $('.popup-form').fadeOut();
        $('#popupformLead2').fadeOut();
        $('#ouibounce-modal').fadeOut(200);
        $('.floating-form-wrap').animate({'margin-right': '-584px'})
    })

    $('.floating-form-wrap .form-handle, #slideform').click(function() {
        if ($('.floating-form-wrap').css('margin-right') == '-584px') {
            $('.floating-form-wrap').animate({
                'margin-right': '0px'
            })
            $('.cus-overlay').fadeIn(300);
        } else {
            $('.floating-form-wrap').animate({
                'margin-right': '-584px'
            })
            $('.cus-overlay').fadeOut(300);
        }
    });

    $('.floating-banner').hover(function() {
        $('.floating-banner').stop(1, 1).animate({
            'margin-left': '0px'
        }, 200);
        $('.cus-overlay').stop(1, 1).fadeIn(200);
    }, function() {
        $('.floating-banner').animate({
            'margin-left': '-610px'
        }, 200);
        $('.cus-overlay').fadeOut(200);
    });

 
    //window scroll end
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $('.floating-form-wrap, .side-bars').fadeIn(300);
        }
        if (scroll <= 200) {
            $('.floating-form-wrap, .side-bars').fadeOut(300);
            $('.cus-overlay').fadeOut(200);
        }
    });

if($( window ).width() <= 992){
    if($('.responsive-slider').length != 0){
        $('.responsive-slider').find('.display-none').remove();
        $('.responsive-slider').addClass('owl-theme owl-carousel');
        $('.responsive-slider').owlCarousel({
            loop:false,
            margin:0,
            items:3,
            dots:false,
            navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
            nav:false,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                360:{
                    items:2
                }
                ,
                375:{
                    items:2
                },
                415:{
                    items:3
                },
                481:{
                    items:3
                },
                575:{
                    items:4
                },
                767:{
                    items:5
                }
            }
        })
    }
}


if($( window ).width() <= 769){
    if($('.responsive-slider3').length != 0){
        $('.responsive-slider3').find('.display-none').remove();
        $('.responsive-slider3').addClass('owl-theme owl-carousel');
        $('.responsive-slider3').owlCarousel({
            loop:false,
            margin:0,
            items:3,
            dots:false,
            navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
            nav:false,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                575:{
                    items:2
                },
                767:{
                    items:2
                }
            }
        })
    }
}

if($( window ).width() <= 769){
    if($('.responsive-slider4').length != 0){
        $('.responsive-slider4').find('.display-none').remove();
        $('.responsive-slider4').addClass('owl-theme owl-carousel');
        $('.responsive-slider4').owlCarousel({
            loop:false,
            margin:0,
            items:3,
            dots:false,
            navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
            nav:false,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                415:{
                    items:3
                },
                481:{
                    items:3
                }
                ,
                575:{
                    items:4
                },
                767:{
                    items:5
                }
            }
        })
    }
}

if($( window ).width() <= 769){
    if($('.responsive-slider2').length != 0){
        $('.responsive-slider2').find('.display-none').remove();
        $('.responsive-slider2').addClass('owl-theme owl-carousel');
        $('.responsive-slider2').owlCarousel({
            loop:false,
            margin:0,
            items:3,
            dots:false,
            navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
            nav:false,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                575:{
                    items:2
                },
                767:{
                    items:2
                }
            }
        })
    }
}

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
    $(".sticky-cta").addClass("fixed");
    $(".fixed-area").addClass("fixed");
  } else {
    $(".fixed-area").removeClass("fixed");
    $(".sticky-cta").removeClass("fixed");
  }
});


 
 

//End  countInnit


}); ;