var writeus = document.querySelector(".writeus");
var modalLetter = document.querySelector(".modal-letter");
var closeLetter = modalLetter.querySelector(".close");
var formLetter = modalLetter.querySelector("form");
var clientName = modalLetter.querySelector("[name=client-name]");
var clientEmail = modalLetter.querySelector("[name=client-email]");
var clientMessage = modalLetter.querySelector("[name=message]");

writeus.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLetter.classList.add("modal-show");
  clientName.focus();
});

closeLetter.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLetter.classList.remove("modal-show");
  modalLetter.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalLetter.classList.contains("modal-show")) {
      evt.preventDefault();
      modalLetter.classList.remove("modal-show");
      modalLetter.classList.remove("modal-error");
    }
  }
});

formLetter.addEventListener("submit", function (evt) {
  if (!clientName.value || !clientEmail.value || !clientMessage.value) {
    evt.preventDefault();
    modalLetter.classList.remove("modal-error");
    modalLetter.offsetWidth = modalLetter.offsetWidth;
    modalLetter.classList.add("modal-error");
  } else {
    localStorage.setItem("clientName", clientName.value);
  }
});
