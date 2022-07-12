import './_vendor'

import { InputMask, SendForm } from './components/form'
import { ToggleMenu } from './components/menu'

import ForwebModal from './components/ForwebModal'
// import ForwebAccordion from './components/ForwebAccordion'
// import ForwebTabs from './components/ForwebTabs'

const FORWEB_UI = {
  modal: 'forweb-modal',
  accordion: 'forweb-accordion',
  tabs: 'forweb-tabs'
}

window.addEventListener('DOMContentLoaded', function () {

  const modal = new ForwebModal(null, FORWEB_UI.modal)
  // const accordion = new ForwebAccordion(FORWEB_UI.accordion)
  // const tabs = new ForwebTabs(FORWEB_UI.tabs)

  window.modal = modal

  InputMask()
  SendForm()
  ToggleMenu()
})
