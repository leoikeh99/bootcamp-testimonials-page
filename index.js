const next = $(".btn-next");
const prev = $(".btn-prev");

var counter = 0;

console.log(document.querySelector(".img2"));
$(next).click(function () {
  counter++;
  if (counter % 2 === 1) {
    document.querySelector(".img2").style.display = "none";
    document.querySelector(".img3").style.display = "block";
    transOut("img3");
    document.querySelector(".content").style.display = "none";
    document.querySelector(".content2").style.display = "block";
    fadeIn("content2");
  } else {
    document.querySelector(".img2").style.display = "block";
    transOut("img2");
    document.querySelector(".img3").style.display = "none";
    document.querySelector(".content").style.display = "block";
    fadeIn("content");
    document.querySelector(".content2").style.display = "none";
  }
});

$(prev).click(function () {
  counter++;
  if (counter % 2 === 1) {
    document.querySelector(".img2").style.display = "none";
    document.querySelector(".img3").style.display = "block";
    transOut("img3");
    document.querySelector(".content").style.display = "none";
    document.querySelector(".content2").style.display = "block";
    fadeIn("content2");
  } else {
    document.querySelector(".img2").style.display = "block";
    transOut("img2");
    document.querySelector(".img3").style.display = "none";
    document.querySelector(".content").style.display = "block";
    fadeIn("content");
    document.querySelector(".content2").style.display = "none";
  }
});

function transOut(element) {
  document.querySelector(`.${element}`).style.animationDuration = "1s";
  document.querySelector(`.${element}`).style.animationName = "out";
  document.querySelector(`.${element}`).style.animationFillMode = "forwards";
}

function fadeIn(element) {
  document.querySelector(`.${element}`).style.animationDuration = "3s";
  document.querySelector(`.${element}`).style.animationName = "fadeIn";
  document.querySelector(`.${element}`).style.animationFillMode = "forwards";
}
