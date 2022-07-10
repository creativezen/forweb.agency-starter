import Inputmask from "inputmask"

export const InputMask = () => {
  const telInputArray = Array.from(document.querySelectorAll('input[type="tel"]'))
  telInputArray?.forEach(input => {
    const inputMask = new Inputmask('+7 (999) 999-99-99')
    inputMask.mask(input)
  })
}

export const SendForm = function() {
  // jQuery(".js-form").submit(function(e) {
  //   e.preventDefault()
  //   let form = $(this),
  //       track = form.data('ym-track')
  //   var formData = jQuery(this).serialize()
  //   jQuery.ajax({
  //     type: "POST",
  //     url: "/sendMail.php",
  //     data: formData
  //   }).done(function() {
  //     // ym(89440269,'reachGoal','sendForm')
  //     modal.success()
  //   })
  // })
}