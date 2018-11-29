$(function() {
   $(".background").addClass("opacity50");
   $(".header-background").addClass("fullOpacity");
   $("nav").addClass("fullOpacity");
   $(".content").addClass("fullOpacity");
});

$(window).scroll(function() {
   $("nav").addClass("scrolled");
});