import Scroll from "../utilities/Scroll"

export const ToggleMenu = function() {
  const menuButton = document.querySelector('.js-menu-open')
  const menuContainer = document.querySelector('.js-menu-container')
  const menuClose = document.querySelector('.js-menu-close')
  const scroll = new Scroll

  menuButton?.addEventListener('click', function(e) {
    if (e.target.closest('.js-menu-open')) {
      menuContainer.classList.add('open')
      scroll.disable()
    }
  })

  menuClose?.addEventListener('click', function(e) {
    if (e.target.closest('.js-menu-close') && menuContainer.classList.contains('open')) {
      menuContainer.classList.remove('open')
      scroll.enable()
    }
  })
}