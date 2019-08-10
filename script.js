$(document).ready(function() {
  $("#toggle-btn").click(function() {
    $(".nav-links").slideToggle(3000);
  });
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= 70) {
      $("#nav").addClass("new-nav");
    } else {
      $("#nav").removeClass("new-nav");
    }
  });
});
