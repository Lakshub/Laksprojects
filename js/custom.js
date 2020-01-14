/********************************************************
 SERVICES
 *********************************************************/
$(document).ready(function() {
  //animate on scroll
  new WOW().init();
});
/********************************************************
 WORK
 *********************************************************/
$(document).ready(function() {
  $("#work").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image", // other options
    gallery: {
      enabled: true
    }
  });
});
/********************************************************
 TEAM
 *********************************************************/
$(document).ready(function() {
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});
/********************************************************
 TESTIMONIAL
 *********************************************************/
$(document).ready(function() {
  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});
/********************************************************
 STATS
 *********************************************************/
$(document).ready(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 3000
  });
});
/********************************************************
 CLIENTS
 *********************************************************/
$(document).ready(function() {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});
/********************************************************
 NAVIGATION
 *********************************************************/
//show or hide transparent black navigation
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop < 50) {
      //hide nav
      $("nav").removeClass("vesco-top-nav");
      $("#back-to-top").fadeOut();
    } else {
      //show nav
      $("nav").addClass("vesco-top-nav");
      $("#back-to-top").fadeIn();
    }
  });
});
// Smooth Scrolling
$(document).ready(function() {
  $("a.smooth-scroll").click(function(event) {
    event.preventDefault();
    var section = $(this).attr("href");
    $("html,body").animate(
      {
        scrollTop: $(section).offset().top - 64
      },
      1250,
      "easeInOutExpo"
    );
  });
});
