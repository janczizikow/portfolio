$(document).ready(function() {
    $('body').removeClass('no-js');
    ShowHideNav();
    smoothScroll(750);
    burger();
    $('.effect').each(function() {
      $(this).addClass('active');
    })
    $('.fade').addClass('active');
});

// NAVIGATION LOGO SCROLL TOP
$('.logo').on('click', function(e) {
  e.preventDefault();
  $('.nav-toggle').removeClass('open');
  $('.menu-left').removeClass('collapse');
  $('.overlay').removeClass('show');
  $('html, body').animate({
    scrollTop: 0
  }, 750, 'easeInOutQuad')
});
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
      if($(this).scrollTop() > navbarHeight) {
        $('.bg-head').removeClass('bg-transparent');
      }
      // Making header transparent if on top
      else {
        $('.bg-head').addClass('bg-transparent');
      }
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 100);

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
      } else {
          // Scroll Up
          if(currentScroll + $(window).height() < $(document).height()) {
              $('header').removeClass('hide-nav').addClass('show-nav');
          }
      }

      lastScrollTop = currentScroll;
  }
}

// ALERT
$('#hero').append('<div class="alert">Thanks for stopping by! The website is still under development, click to dismiss warning.</div>');
$('.alert').on('click', function(){
  $(this).fadeOut(300);
});
