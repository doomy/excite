$(function() {
    $('.content').hide();
    $('.content').first().show();
   $(".background").addClass("opacity50");
   $(".header-background").addClass("fullOpacity");
   $("nav").addClass("fullOpacity");
   $(".content").addClass("fullOpacity");

   $('nav ul li a').click(function() {
      var selector = $(this).attr("href");
      $('.content').hide();
       $(selector).addClass("invisible");
      $(selector).show();

      $(selector).removeClass('invisible');
      return false;
   });

    $('.burgerSwitch').click(function () {
       $('#navMobile').toggleClass('invisible');
    });

    $('#navMobile li a').click(function() {$('#navMobile').toggleClass('invisible')});
});

$(window).scroll(function() {
   $("nav").addClass("scrolled");
});