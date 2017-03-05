$(document).ready(function() {
    $('body').removeClass('no-js');
    ShowHideNav();
    smoothScroll(750);
    burger();
    scrollTop();
    $('.effect').each(function() {
      $(this).addClass('active');
    })
    $('.fade').addClass('active');
});

//SCROLL TOP
function scrollTop() {
  var page = $('html, body');

  $('#to-top').on('click', function(e){
    e.preventDefault();
    page.on('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function(){
      page.stop();
    });
    page.animate({
      scrollTop: 0
    }, 750, 'easeInOutQuad')

    // O
    // if (('.nav-toggle').hasClass('open') && ('.menu-left').hasClass('collapse') && ('.overlay').hasClass('show') ) {
    //   $(this).removeClass('open', 'collapse', 'show');
    // }
    // else {
    //   return false;
    // }
  });
  return false;
}

$('#to-top')
.on('mouseenter', function(e) {
  e.preventDefault();
  $('#to-top').css('background-color', '#277cea' );
})
.on('mouseleave', function(e){
  e.preventDefault();
  $(this).css('background-color', '#676767');
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

// AJAX Forms

$.ajax({
  url: 'https://formspree.io/jan.czizikow@gmail.com',
  method: 'Post',
  data: $('#contactForm').serialize(),
  dataType: 'json',
  beforeSend: function() {
    console.log('loading');
  },
  sucess: function(data) {
    console.log(data);
  },
  error: function(err) {
    console.log('error');
  }
});

// ALERT
$('#hero').append('<div class="alert">Thanks for stopping by! The website is still under development, click to dismiss warning.</div>');
$('.alert').on('click', function(){
  $(this).fadeOut(300);
});
