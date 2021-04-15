"use strict";

const shapesSlides = (direction) => {
	//Текущий слайд
	let currentSlide = document.querySelector(".shapes__item--current");
	let nextSlide;

	/*При скролле вниз в nextSlide мы запишем следующий элемент*/
	direction == "down" ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;

	if (nextSlide) {
		shapeSlides.forEach(el => {
			el.classList.remove("index");
		});

		/*Добавляем класс текущему элементу,
		чтобы z-index стал на 1 меньше, чем был*/
		currentSlide.classList.add("index");

		const tl = gsap.timeline({
			defaults: { ease: easing },
			onComplete: function () {
				currentSlide.classList.remove("index");
			}
		});

		tl.from(nextSlide, 0.5, {
			xPercent: 100,
			delay: 0.5
		})
			.from(nextSlide.querySelector(".shapes__content"), 0.5, {
				xPercent: -100,
				delay: -1
			});

		//Удаляем активный класс у текущего слайда
		currentSlide.classList.remove("shapes__item--current");
		//Добавляем активный класс следующему слайду
		nextSlide.classList.add("shapes__item--current");
	}
};