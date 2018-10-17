$(function() {
  $( '.toggle-open' ).click(function() {
    $('.nav-wrapper').fadeOut();
    $('.header-menu').toggleClass('menu-active');
  });

  $('.header-menu__services').click( function() {
    $('.header-menu__services-container').stop().slideToggle();
    $('.header-menu').toggleClass('fade-links');
  })

  $( '.js-contact' ).click(function() {
    $('.contact-page').toggleClass('menu-active');
  });

  $( '.menu-close' ).click(function() {
    $('.nav-wrapper').fadeIn();
    $('.contact-page').removeClass('menu-active');
    $('.header-menu').removeClass('menu-active');
    $('.header-menu').removeClass('fade-links');
    $('.header-menu__services-container').stop().slideUp();
  });
  
});


