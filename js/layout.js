$(function() {
   $(".background").addClass("opacity50");
   $(".header-background").addClass("opacity80");
   $("nav").addClass("fullOpacity");
   $(".content").addClass("fullOpacity");
   /*setTimeout(function() {
      $(".header-background").css("background-image", "url(img/slideshow/002.jpg)");
   }, 4000);
    setTimeout(function() {
        $(".header-background").css("background-image", "url(img/slideshow/001.jpg)");
    }, 10000);*/
});

$(window).scroll(function() {
   $("nav").addClass("scrolled");
});