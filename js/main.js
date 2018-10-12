/*--------------------------------------------------------------
# Smooth Scroll
--------------------------------------------------------------*/

$(document).ready(function () {
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
        &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(':focus')) {
              return false;
            } else {
              $target.attr('tabindex', '-1');
              $target.focus(); 
            }
          });
        }
      }
    });


});


$(function() {
  $( '.toggle-open' ).click(function() {
    $('.nav-wrapper').fadeOut();
    $('.header-menu').toggleClass('menu-active');
  });

  $( '.menu-close' ).click(function() {
    $('.header-menu').removeClass('menu-active');
    $('.nav-wrapper').fadeIn();
  });

  $('.header-menu__services').click( function() {
    $('.header-menu__services-container').stop().slideToggle();
  })

  $( '.js-contact' ).click(function() {
    $('.contact-page').toggleClass('menu-active');
  });

  $( '.menu-close' ).click(function() {
    $('.nav-wrapper').fadeIn();
    $('.contact-page').removeClass('menu-active');
    $('.header-menu').removeClass('menu-active');
  });

});


 
