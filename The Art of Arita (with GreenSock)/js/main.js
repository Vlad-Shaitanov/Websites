"use strict";

const init = () => {

	window.onload = function () {
		//Обработка стартовой анимации
		const preloader = document.querySelector(".preloader");

		preloader.classList.add("preloader-animation");

		setTimeout(() => {
			preloader.classList.remove("preloader-animation");

			//Скрываем прелодер
			preloader.classList.add("preloader-hidden");
		}, 3000);

		setTimeout(() => {
			startAnimation();

			//Убираем прелодер
			preloader.classList.add("preloader-none");
		}, 3200);
	};

	const showNextSlide = () => {
		bgSlides("down");
		imagesSlides("down");
		console.log("next");
	};

	const showPrevSlide = () => {
		bgSlides("up");
		imagesSlides("up");
		console.log("prev");
	};

	if (window.innerWidth >= 768) {//Отслеживаем событие, если ширина окна больше 768px
		window.addEventListener("wheel", (event) => {
			let delta = - event.deltaY;

			if (delta > 0) {
				//При скролле колесом мыши вверх
				if (helperInput.value == "1") {
					console.log("scrollup");
					helperInput.value = 0;
					showPrevSlide();

					setTimeout(() => {
						helperInput.value = 1;
					}, 1500);
				}
			} else {
				if (helperInput.value == "1") {
					console.log("scrolldown");
					helperInput.value = 0;
					showNextSlide();

					setTimeout(() => {
						helperInput.value = 1;
					}, 1500);
				}
			}
		});
	} else {
		document.addEventListener("swiped-left", () => {
			showNextSlide();
		});

		document.addEventListener("swiped-right", () => {
			showPrevSlide();
		});
	}
};

init();