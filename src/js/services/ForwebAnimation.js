export class AnimationHeight {

  constructor(element) {
    this.element = element
    this.height = 0
    this.checkForIE()
    this.startAnimate()
  }

  startAnimate() {
    // Если анимация не выполняется в данный момент, включаем влажок выполнения
  	this.element.appAnimated = true

    // Если класс присутствует, значит в данный момент элемент показан
  	if (this.element.classList.contains('open')) {
      this.close()
  	}
    // если закрыто
  	else if(!this.element.classList.contains('open')) {
  		this.open()
  	}
  }

  checkForIE() {
    // для поддержки IE проверяем наличие у element ключа 'animate' (в IE этот ключ отсутствует)
  	// Если ключ отсутствует, значит клиент IE, и выполняем перелючение класса open, который
  	// просто меняет свойство display: none/block и выходим из текущий функции,
  	// без выполнения остальных ее методов, т.к. IE их не поддерживает.
  	if (!('animate' in this.element)) {
  		this.element.classList.toggle('open')
  		return
  	}
  	// Проверяем, выполняется ли в данный момент аниация, если да, сценарий пользователя
  	// будет прерван без вызова остальных методов.
  	if (this.element.appAnimated) {
  		return
  	}
  }

  open() {
    // **** ДОБАВЛЯЕМ СПЕРВА КЛАСС, который включает display: block, чтобы браузер
		// смог прочитать высоту скрытого элемента, который мы собрались показывать
		this.element.classList.add('open');

		// получаем высоту скрытого элемента
		this.height = this.element.clientHeight

		// вызываем метод animate и создаем нужный кейфрейм
		let animate = this.element.animate([
			{ height: `${this.height}px`, opacity: 1 },
			{ height: 0, opacity: 0 },
			// параметром direction первернём порядок объектов кейфрейма,
			// чтобы свойства применились в обратном порядке
		], { duration: 300, direction: 'reverse' })

		// удаляем класс open после выполнения кейфрейма.
		animate.addEventListener('finish', event => {
			this.element.appAnimated = false
		})
  }

  close() {
    // Получаем текущее значение высоты, которое будем использовать
		// в создаии кейфрема анимации для метода animate
		this.height = this.element.clientHeight

		// созданный кейфрейм сохраняем в переменную, чтобы подписаться на
		// его событие finish, по которому будем удалять класс open
		let animate = this.element.animate([
			{ height: `${this.height}px`, opacity: 1 },
			{ height: 0, opacity: 0 },
		], { duration: 300 })

		// удаляем класс open после выполнения кейфрейма.
	  animate.addEventListener('finish', event => {
			this.element.classList.remove('open')
			this.element.appAnimated = false
		})
  }
}