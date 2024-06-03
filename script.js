var btnClose = document.querySelector("span");
var btnSubmit = document.querySelector(".submit");
var modal = document.querySelector(".modal-container");
if (btnSubmit) {
  btnSubmit.addEventListener("click", function () {
    modal.classList.add("show");
    const next = document.querySelector(".next");
    next.setAttribute("value", "");
  });
}
if (btnClose) {
  btnClose.addEventListener("click", function () {
    modal.style.visibility = "hidden";
  });
}
