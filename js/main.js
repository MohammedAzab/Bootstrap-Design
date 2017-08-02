$(function(){
  // navbar
  $('.navbar-nav>li:not(:last-child)').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })

  // color Option function
  $('.icon').click(function(){
    $(this).toggleClass('change');
    if ($(this).hasClass('change')) {
      $('.option-box').fadeIn();
    }
    if (!$(this).hasClass('change')) {
      $('.option-box').fadeOut();
    }
  })

  $('.color-o li').click(function(){
    $("link[href*='theme']").attr('href', $(this).attr('data-value'));
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() >= 700) {
      $('.top').fadeIn();
    }else {
      $('.top').fadeOut();
    }
  });
  $('.top').click(function() {
    $('html body').animate({scrollTop: 0}, 600);
  });

  if ($(document).ready()) {
    $('.loading-cover').delay(5000).fadeOut();
  }
});
