/*
    Author: Jan Czizikow
    Author URL: http://janczizikow.com
*/

/*
	= PRELOADER
    = SCROLLING NAV
    = SCROLL TOP / LOAD HOME / LOAD ABOUT
    = SIDEBAR
*/

/* ---------------------------------------------- /*
    * PRELOADER
/* ---------------------------------------------- */

// $(window).load(function() {

// 	setTimeout(function() {
//         $('#').fadeOut(100);
//         $('.').fadeOut(500);
// 		$('body').addClass('loaded');
// 	}, 3000);  
// });

/* ---------------------------------------------- /*
    * SCROLLING NAV
/* ---------------------------------------------- */

$(window).scroll(function() {
    if ($(".navbar").offset().top > 60) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

/* ---------------------------------------------- /*
    * SCROLL TOP / LOAD HOME / LOAD ABOUT
/* ---------------------------------------------- */

//Requires jQuery Easing plugin
// $(function() {
//     $('a.page-scroll').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 750, 'easeInOutQuad');
//         event.preventDefault();
//     });
// });

$(document).ready(function() {
    $('.navbar-brand').on('click', function() {
        if ( $('.nav li:eq(0)').hasClass('active') ){
            $('html,body').animate({
                scrollTop: 0
            }, 750, 'easeInOutQuad')
            }
    });

    $('.name').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        },750, 'easeInOutQuad');
    });

    $('nav li').on('click', function(event) {
        event.preventDefault();
        var url = this.href;
 
        $.ajax({
            beforeSend: function(xhr) {
                if (xhr.overrideMimeType) {
                    xhr.overrideMimeType("application/json")
                }
            }
        });

        $('nav li.active').removeClass('active');
        $(this).addClass('active');
        $('#container').remove();
        $('#content-ajax').load(url + ' #container').hide().fadeIn('slow');
    });

    // // * LOAD HOME
    // $('.img-project').addClass('loaded-img');
    // // * LOAD ABOUT
    // $('.img-about').css({'opacity': '0'}).animate({
    //     opacity: 1.0,
    // },950, 'easeInOutQuad');
    // $('.about-p').css('opacity', '0').animate({
    //     opacity: 1.0,
    // },750, 'easeInOutQuad');
});

/* ---------------------------------------------- /*
    * HOVER EFFECT
/* ---------------------------------------------- */

$(document).ready(function() { 

    $('figure').hover(
        function(){
            $(this).find('.caption').fadeIn(250); 
        },
        function(){
            $(this).find('.caption').fadeOut(200);
        }
    ); 
});

//Arrows

// $(function() { 
//     $('.prev-project').on('mousedown', '#arrow-back', function(event){
//         event.preventDefault();
//         $('#arrow-back').css('marign-left', '-50px');
//     });
// });

$(function() { 
    $('.prev-project').hover(function(event){
        event.preventDefault();
        $('#arrow-back').css('marign-left', '-50px');
    });
});

/* ---------------------------------------------- /*
    * SIDEBAR
/* ---------------------------------------------- */

//Sidebar
$(function() {  
 
    $('#wrapper').on('click', '#trigger', function(){
        $('#sidebar').addClass('open');
        $('#sidebar-filter').fadeIn(750, function(){
            $(this).addClass('open-filter');
        });
    });
});

//Close sidebar 
$(function() {
    $('#wrapper').on('click', '#sidebar #btnclose', function(event){
        $('#sidebar').removeClass('open');
        $('#sidebar-filter').fadeOut(750, function(){
            $(this).removeClass('open-filter');
        });
    });
});

// Close sidebar with click on filter
$(function() {
    $('#wrapper').on('click', '#sidebar-filter', function(event){
        $('#sidebar').removeClass('open');
        $('#sidebar-filter').fadeOut(750, function(){
            $(this).removeClass('open-filter');
        });
    });
});
