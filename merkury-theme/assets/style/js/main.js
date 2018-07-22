$(document).ready(function() {
  /******** NAVIGATION ********/

  // Hide responsive navar upon nav-item click
  $(".nav-link, .navbar-brand").click(function() {
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

  // Smooth scrolling
  // NOTE: need full version (NOT slim) of jquery for this to work
  $("#main-nav a, .intro-text a").on("click", function(e) {
    // Check for hash value on clicked link
    if (this.hash !== "") {
      // Prevent default behavior
      e.preventDefault();

      // store hash # (anchor string)
      const hash = this.hash;

      // Animate smooth scroll
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        900,
        function() {
          // Add hash/anchor string to URL after scroll
          window.location.hash = hash;
        }
      );
    }
  });
});
