var buy = document.querySelectorAll(".buy");
var modalAddItem = document.querySelector(".modal-add-item");
var closeAddItem = modalAddItem.querySelector(".close");
var basket = document.querySelector(".basket");

for (var i = 0; i < buy.length; i++) {
  buy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalAddItem.classList.add("modal-show");
    basket.classList.add("basket-full");
  });
};

closeAddItem.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalAddItem.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalAddItem.classList.contains("modal-show")) {
      evt.preventDefault();
      modalAddItem.classList.remove("modal-show");
    }
  }
});
