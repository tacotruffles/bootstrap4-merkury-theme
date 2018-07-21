$(document).ready(function() {
  /******** NAVIGATION ********/

  // Hide responsive navar upon nav-item click
  $(".nav-link").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Init Scrollspy
  $("body").scrollspy({
    target: "#main-nav",
    offest: 70
  });

  // Adjust/Animate Navbar upon initial scroll depth past 50 pixels
  $(window).scroll(function() {
    console.log("..");
    if ($("#main-nav").offset().top > 50) {
      $("#main-nav").addClass("navbar-shrink");
    } else {
      $("#main-nav").removeClass("navbar-shrink");
    }
  });
});
