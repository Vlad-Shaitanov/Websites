"use strict";


const imagesSlides = (direction) => {
	//Текущий слайд
	let currentSlide = document.querySelector('.slide-bg__inner--current');
	let nextSlide;

	/*При скролле вниз в nextSlide мы запишем следующий элемент*/
	direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;

	if (nextSlide) {
		imageSlides.forEach(el => {
			el.classList.remove('index');
		});

		/*Добавляем класс текущему элементу,
		чтобы z-index стал на 1 меньше, чем был*/
		currentSlide.classList.add('index');

		const tl = gsap.timeline({
			defaults: { ease: easing },
			onComplete: function () {
				currentSlide.classList.remove('index');
			}
		});

		tl.from(nextSlide, 0.5, {
			xPercent: 100
		})
			.from(nextSlide.querySelector('.slide-bg__link'), 0.5, {
				xPercent: -100,
				delay: -0.5
			});

		//Удаляем активный класс у текущего слайда
		currentSlide.classList.remove('slide-bg__inner--current');
		//Добавляем активный класс следующему слайду
		nextSlide.classList.add('slide-bg__inner--current');
	}
};