$(function() {
   $(".background").addClass("opacity50");
   $(".header-background").addClass("opacity80");
   $("nav").addClass("fullOpacity");
   $(".content").addClass("fullOpacity");
});

$(window).scroll(function() {
   $("nav").addClass("scrolled");
});