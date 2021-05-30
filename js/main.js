$(function () {
  $(".menu-icon").on("click", function () {
    $(".menu").css("display", "block");
  });

  $(".menu i").on("click", function () {
    $(".menu").css("display", "none");
  });
});
