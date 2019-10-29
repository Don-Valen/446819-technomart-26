var leftArrow = document.querySelector(".slider-left-arrow");
var rightArrow = document.querySelector(".slider-right-arrow");
var slider1 = document.querySelector(".dot1");
var slider2 = document.querySelector(".dot2");

leftArrow.addEventListener("click", function (evt) {
  if (!slider1.checked) {
      slider1.checked = true;
    }
});

rightArrow.addEventListener("click", function (evt) {
  if (slider1.checked) {
    slider2.checked = true;
  }
});
