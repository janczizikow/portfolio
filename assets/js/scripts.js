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
	var toTop = $('#to-top'),
  		page = $('html, body'),
			treshold = 350,
			tresholdCrossed = false;

	$(window).scroll(function() {
		if ( $(this).scrollTop() > treshold && !tresholdCrossed ) {
			toTop.addClass('show');
		} else if ($(this).scrollTop() <= treshold && tresholdCrossed) {
			toTop.removeClass('show');
		}
		tresholdCrossed = $(this).scrollTop() > treshold;
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
  var previousScroll = 0,
			$header = $('#header'),
			navHeight = $('#header').outerHeight(),
			detachPoint = 650,
			hideShowOffset = 6;

  $(window).scroll(function(){
    if (!$header.hasClass('fixed')) {
			var currentScroll = $(this).scrollTop(),
					scrollDifference = Math.abs(currentScroll - previousScroll);
			if (currentScroll > navHeight) {
				if (currentScroll > detachPoint) {
					if (!$header.hasClass('fix-nav'))
						$header.addClass('fix-nav');
				}
				if (scrollDifference >= hideShowOffset) {
					if (currentScroll > previousScroll) {
						if (!$header.hasClass('hide-nav'))
							$header.addClass('hide-nav');
							$('.nav-toggle').removeClass('open');
							$('.menu-left').removeClass('collapse');
							$('.overlay').removeClass('show');
							$('#expanded').prop('checked', false);
					} else {
						if ($header.hasClass('hide-nav'))
							$('#header').removeClass('hide-nav');
					}
				}
			} else {
				if (currentScroll <= 0) {
						$header.removeClass();
				}
			}
			if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
				$header.removeClass('hide-nav');
			}
			previousScroll = currentScroll;
		}
  })
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
			// $('#test').remove('loading').html('√');
    },
    error: function(err) {
			alert('Ups, something went wrong, please try again. You can check console log for more information.');
      console.log(err);
    }
  });
});
