$(document).ready(function() {

  /* Not iPad or Mobile */
  if (document.documentElement.clientWidth > 1024) {
   
    /* Navigation Current State */
    function setCurrent() {
      var currentSection = $('section:in-viewport').attr('id');
      $('nav ul li a').removeClass('current');
      $('nav ul li a[href="#' + currentSection + '"]').addClass('current');
    }
    setCurrent();
    
    /* Page Scroll */
    $('nav h2').click(function (){
      $('html, body').animate({scrollTop : 0}, 0);
      setCurrent();
    });
    $('nav ul li a').click(function (){
      var anchor = $(this).attr('href');
      $('html, body').animate({scrollTop: $(anchor).offset().top}, 0);
      setCurrent();
      return false;
    });
    
    /* Nav Toggle */
    $('nav ul li').hide();
    $('<span>Toggle</span>').appendTo('nav ul');
    $('nav').hover(
      function () {
        $(this).not('.active').animate({paddingRight: '5px'}, 150);
      },
      function () {
        $(this).not('.active').animate({paddingRight: '0'}, 50);
      }
    );
    $('nav').click(function() {
      if($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).find('ul span').rotate({animateTo: 0, duration: 250});
        $(this).find('ul li').hide(150,'linear');
      } else {
        $(this).addClass('active');
        $(this).find('ul span').rotate({animateTo: 135, duration: 500});
        $(this).find('ul li').show(300,'linear');
      }
    });
    /* Map */
    $('<span>Toggle</span>').appendTo('section#contact header').rotate({animateTo: 135, duration: 0});
    function map() {
      $('#map').googleMap({ markers : 'p[data-lat]'});
    }
    $('section#contact header p').click(function() {
      $('section#contact header h2, section#contact header p').hide();
      $('section#contact header div#map').fadeIn(500);
      $('section#contact header span').show();
      map();
    });
    $('section#contact header span').click(function() {
      $('section#contact header h2, section#contact header p').show();
      $('section#contact header div#map').fadeOut(500);
      $('section#contact header span').hide();
    });
    }
    });
    