var text1 = $(".main-text");
var text2 = $(".main-text2");
var img1 = $(".img");
var img2 = $(".img2");

var counter = 0;
// transform:rotateY(180deg)
$(".prev").click(function () {
  counter++;
  if (counter % 2 === 1) {
    $(".main-text").css("display", "none");
    $(".main-text2").css("animationName", "fadeIn");
    $(".main-text2").css("display", "block");
    $(".img2").css("display", "none");
    $(".img3").css("animationName", "rotate");
    $(".img3").css("display", "block");
  } else {
    $(".main-text").css("animationName", "fadeIn");
    $(".main-text").css("display", "block");
    $(".main-text2").css("display", "none");
    $(".img2").css("animationName", "rotate");
    $(".img2").css("display", "block");
    $(".img3").css("display", "none");
  }
});

$(".next").click(function () {
  counter++;
  if (counter % 2 === 1) {
    $(".main-text").css("display", "none");
    $(".main-text2").css("animationName", "fadeIn");
    $(".main-text2").css("display", "block");
    $(".img2").css("display", "none");
    $(".img3").css("animationName", "rotate");
    $(".img3").css("display", "block");
  } else {
    $(".main-text").css("animationName", "fadeIn");
    $(".main-text").css("display", "block");
    $(".main-text2").css("display", "none");
    $(".img2").css("animationName", "rotate");
    $(".img2").css("display", "block");
    $(".img3").css("display", "none");
  }
});
