export default class Scroll {
  constructor() {
    this.state = 'enable'
    this.position = 0
    this.offset = 0
  }

  disable() {
    if (this.state === 'enable') {
      this.position = window.scrollY
      this.lock()
      document.body.classList.add('disable-scroll')
      document.body.dataset.position = this.position
      document.body.style.top = -this.position + 'px'
      this.state = 'disable'
    }
  }

  enable() {
    if (this.state === 'disable') {
      this.position = parseInt(document.body.dataset.position, 10)
      this.unlock()
      document.body.style.top = 'auto'
      document.body.classList.remove('disable-scroll')
      window.scroll({
        top: this.position,
        left: 0
      })
      document.body.removeAttribute('data-position')
      this.state = 'enable'
    }
  }

  lock() {
    this.offset = window.innerWidth - document.body.offsetWidth + 'px'
    document.body.style.paddingRight = this.offset
  }

  unlock() {
    document.body.style.paddingRight = '0px'
  }
}
