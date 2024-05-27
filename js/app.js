$(document).ready(function () {

  $("#nav0").click(function () {
    $('html, body').animate({
      scrollTop: $("#home").offset().top
   }, 500);
  });

  $("#nav1").click(function () {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
   }, 500);
  });
  $("#nav2").click(function () {
    $('html, body').animate({
      scrollTop: $("#proyects").offset().top
   }, 500);
  });
  $("#nav3").click(function () {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
   }, 500);
  });
  $("#effect4b").click(function () {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
   }, 500);
  });


  setTimeout(function () {
    $("#effect1").fadeIn(500);
    $("#effect2").fadeIn(1000);
    $("#effect3").fadeIn(1500);
    $("#effect4").fadeIn(2000);
    $("#effect4b").fadeIn(2000);
    $("#effect5").fadeIn(2500);
  }, 500);

  $(".btn_prog").mouseover(function () {
    $(this).css("background-color", "black");
    $(this).css("color", "white");
  });

  $(".btn_prog").mouseleave(function () {
    $(this).css("background-color", "white");
    $(this).css("color", "black");
  });



});
