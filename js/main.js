var elToggleButton = document.querySelector(".site-header__toogle");
var elMenu = document.querySelector(".site-header");


elToggleButton.addEventListener("click", function () {
  elMenu.classList.toggle("site-header--active");
});