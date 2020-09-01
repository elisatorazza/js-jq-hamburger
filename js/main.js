// Hamburger menu:
// mostrare / nascondere il menu principale
var hamburger = $(".header-right > a");

hamburger.click(
  function () {
    $(".hamburger-menu").addClass("active");
  }
);

var close = $(".hamburger-menu > a");

close.click(
  function () {
    $(".hamburger-menu").removeClass("active");
  }
);
