'use strict';

shapes.forEach(el => el.style.backgroundColor = `${el.dataset.bg}`);
bgItems.forEach(el => el.style.backgroundImage = `url("${el.dataset.bg}")`);

const bgSlides = (direction) => {
	//Определяем в каком направлении производится скролл

	let itemClass = `slide-${slideCounter}`;

	if (direction == "down") {
		if (slideCounter < slidesCount) {
			//Если текущий счетчик слайда < общего числа слайдов:
			mainSection.classList.remove(itemClass);//Удаляем класс
			slideCounter++;

			itemClass = `slide-${slideCounter}`;//Присваиваем счетчику значение след. слайда
			mainSection.classList.add(itemClass);//Добавляем класс
		}
	} else if (direction == "up") {
		if (slideCounter > 1) {
			//Если текущий счетчик слайда < общего числа слайдов:
			mainSection.classList.remove(itemClass);//Удаляем класс
			slideCounter--;

			itemClass = `slide-${slideCounter}`;//Присваиваем счетчику значение след. слайда
			mainSection.classList.add(itemClass);//Добавляем класс
		}
	}
};