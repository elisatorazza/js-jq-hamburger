// Hamburger menu:
// mostrare / nascondere il menu principale
var hamburger = $(".header-right > a > .fa-bars");

hamburger.click(
  function () {
    $(".hamburger-menu").addClass("active");
  }
);

var close = $(".hamburger-menu > a > .fa-times");

close.click(
  function () {
    $(".hamburger-menu").removeClass("active");
  }
);
