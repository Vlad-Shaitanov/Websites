"use strict";

const init = () => {
	const showNextSlide = () => {
		console.log("next");
	};

	const showPrevSlide = () => {
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