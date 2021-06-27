let elBurgerBtn = document.querySelector('.js-open-close-button');

let elBurgerActive = document.querySelector('.site-header__burger--active');

let elModal = document.querySelector('.header-modal');

function removeActiveBtn() {
  elBurgerBtn.classList.remove('site-header__burger--active')
}

function addActiveBtn() {
  elBurgerBtn.classList.add('site-header__burger--active');
}

elBurgerBtn.addEventListener('click', function() {
  elModal.classList.toggle('header-modal__open')
  elBurgerBtn.classList.toggle('site-header__burger--active')
})