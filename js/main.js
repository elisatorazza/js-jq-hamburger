// Hamburger menu:
// mostrare / nascondere il menu principale

var hamburger = $(".header-right > a > .fa-bars");

hamburger.click(
  function () {
    $(".hamburger-menu").show();
  }
);

var close = $(".hamburger-menu > a > .fa-times");

close.click(
  function () {
    $(".hamburger-menu").hide();
  }
);
