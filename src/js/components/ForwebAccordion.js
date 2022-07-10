import { AnimationHeight } from "../services/ForwebAnimation"

export default class ForwebAccordion {

  constructor(mainStage) {
    this.accordions = Array.from(document.querySelectorAll(`.${mainStage}`))
    this.item = false
    this.target = false
    this.animationHeight = false
    this.init()
  }

  init() {
    if (this.accordions) {
      this.accordions.forEach(accordion => {
        accordion.addEventListener('click', function(e) {
          this.start(e.target)
        }.bind(this))
      })
    }
  }

  start(target) {
    this.item = target.closest('.forweb-accordion-item')
    this.target = this.item.querySelector('.forweb-accordion-target')
    this.animationHeight = new AnimationHeight(this.target)
  }
}