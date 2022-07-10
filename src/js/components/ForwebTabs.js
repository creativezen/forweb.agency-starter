
export default class ForwebTabs {

  constructor(mainStage) {
    this.tabs = Array.from(document.querySelectorAll(`.${mainStage}`))
    this.contents = Array.from(document.querySelectorAll(`[data-tab-content]`))
    this.tab = false
    this.name = false
    this.content = false
    this.init()
  }

  init() {
    if (this.tabs) {

      // Бежим по всем панелям с табами
      this.tabs.forEach(tabs => {

        // Слушаем каждую панель на событие клика
        tabs.addEventListener('click', function(e) {
          // Делегируем клик на дочерний элемент, по которому кликнули
          this.tab = e.target.closest('.forweb-tabs-item')
          // Забираем из дочернего элемента значение tab-target
          this.name = this.tab.dataset.tabTarget
          // Ищем в документе скрытый блок соответствующий tab-target значению
          // таба, на котором произошёл клик
          this.content = document.querySelector(`[data-tab-content="${this.name}"]`)
          // Скрываем активный блок с содержимым
          this.hide(tabs.querySelectorAll('.forweb-tabs-item'))
          // Переключаем таб
          this.toggle(this.tab)
          // Показываем целевой блок с содержимым
          this.show()

        }.bind(this))
      })
    }
  }

  // Принимаем на вход коллекцию табов из целевой панели
  hide(tabs) {
    // Скрываем активный блок с содержимым
    this.contents.forEach(content => content.classList.remove('active'))
    // Выключаем активный таб
    tabs.forEach((item) => item.classList.remove('active'))
  }

  toggle(currentTab) {
    // Принимаем на вход таб, на котором произошёл клик
    // делаем его активным
    currentTab.classList.add('active')
  }

  show() {
    // Показываем блок
    this.content.classList.add('active')
  }
}

