jQuery(document).ready(function() {

	$('body').removeClass('no-js');
	ShowHideNav();
	scrollTop();
	smoothScroll(750);
	burger();
	$('.effect').each(function() {
		$(this).addClass('active');
	})
	$('.fade').addClass('active');
});

//SCROLL TOP
function scrollTop() {
	var toTop = $('#to-top');
  var page = $('html, body');

	$(window).scroll(function() {
		if ( $(this).scrollTop() > 350 ) {
			toTop.addClass('show');
		} else {
			toTop.removeClass('show');
		}

	});

  toTop.on('click', function(e){
    e.preventDefault();
    page.on('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function(){
      page.stop();
    });
    page.animate({
      scrollTop: 0
    }, 800, 'easeOutQuad')
  });
  return false;
}

// LINKS TO ANCHORS
function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

    var $target = $(this.getAttribute('href'));

    if($target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: $target.offset().top
      }, duration, 'easeInOutQuad');
    }
  });
}

function burger() {
  // TOGGLE HAMBURGER & COLLAPSE NAV
  $('.nav-toggle').on('click', function() {
    $(this).toggleClass('open');
    $('.menu-left').toggleClass('collapse');
    $('.overlay').toggleClass('show');
  });

  // REMOVE X & COLLAPSE NAV ON CLICK
  $('.menu-left a').on('click', function() {
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse');
    $('.overlay').removeClass('show');
  });

  $('.overlay').on('click', function() {
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse');
    $('.overlay').removeClass('show');
    $('#expanded').prop('checked', false);
  });
}

// SHOW/HIDE NAV
function ShowHideNav() {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
      // Removing transparency after scroll more then navHeight
      // if($(this).scrollTop() > navbarHeight) {
			// 	$('header').removeClass('top');
      //   $('.bg-head').removeClass('bg-transparent');
      // }
      // // Making header transparent if on top
      // else {
			// 	$('header').addClass('top');
      // }
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var currentScroll = $(this).scrollTop();

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - currentScroll) <= delta)
          return;

      // If they scrolled down and are past the navbar, add class .hide-nav.
      // This is necessary so you never see what is "behind" the navbar.
      if (currentScroll > lastScrollTop && currentScroll > navbarHeight){
          // Scroll Down
          $('header').removeClass('show-nav').addClass('hide-nav');
          $('.nav-toggle').removeClass('open');
          $('.menu-left').removeClass('collapse');
          $('.overlay').removeClass('show');
          $('#expanded').prop('checked', false);
      }
      else if ($(window).scrollTop > 350) {
        toTopBind();
      }
      else {
          // Scroll Up
          if(currentScroll + $(window).height() < $(document).height()) {
              $('header').removeClass('hide-nav').addClass('show-nav');
          }
      }

      lastScrollTop = currentScroll;
  }
}

// AJAX Forms
$('#contactForm').submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: 'https://formspree.io/jan.czizikow@gmail.com',
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    beforeSend: function() {
			console.log('Sending...')
			// $('#test').addClass('loading').html('<div class="spin"></div>');
    },
		complete: function() {
			console.log('Complete')
			// $('#test').removeClass('loading').html('Send');
		},
    success: function(data) {
      alert('Thank you for contacting me! Message was sent succesfully, will get back to you soon!');
			$('#test').remove('loading').html('√');
    },
    error: function(err) {
			alert('Ups, something went wrong, please try again. You can check console log for more information.');
      console.log(err);
    }
  });
});
