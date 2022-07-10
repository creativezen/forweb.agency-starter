import './_vendor'

// import { InputMask, SendForm } from './components/form'
// import { ToggleMenu } from './components/menu'

import ForwebAccordion from './components/ForwebAccordion'
import ForwebModal from './components/ForwebModal'
import ForwebTabs from './components/ForwebTabs'

const FORWEB_CONST = {
  modal: 'forweb-modal',
  accordion: 'forweb-accordion',
  tabs: 'forweb-tabs'
}

window.addEventListener('DOMContentLoaded', function () {

  const modal = new ForwebModal(null, FORWEB_CONST.modal)
  const accordion = new ForwebAccordion(FORWEB_CONST.accordion)
  const tabs = new ForwebTabs(FORWEB_CONST.tabs)

  window.modal = modal
  window.accordion = accordion
  window.tabs = tabs

  // InputMask()
  // SendForm()
  // ToggleMenu()
})
