export const ToggleMenu = function() {
  const menuButton = document.querySelector('.js-menu-open')
  const menuContainer = document.querySelector('.js-menu-container')
  const menuClose = document.querySelector('.js-menu-close')

  menuButton?.addEventListener('click', function(e) {
    if (e.target.closest('.js-menu-open')) {
      menuContainer.classList.add('open')
    }
  })

  menuClose?.addEventListener('click', function(e) {
    if (e.target.closest('.js-menu-close') && menuContainer.classList.contains('open')) {
      menuContainer.classList.remove('open')
    }
  })
}