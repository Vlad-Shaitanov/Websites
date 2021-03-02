"use strict";

document.addEventListener("DOMContentLoaded", () => {
    //Верхний блок
    const top = document.querySelector(".top");

    const header = document.querySelector(".header");
    const scrollItems = document.querySelectorAll(".scroll-item");
    //Круг прогресса
    const circle = document.querySelector(".progress");
    //Линия прогресса
    const line = document.querySelector('.progress__line-item');

    const scrollAnimation = () => {
        //Центр вьюпорта
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        console.log(windowCenter);

        scrollItems.forEach(element => {
            let scrollOffset = element.offsetTop + (element.offsetHeight / 2);
            if (windowCenter >= scrollOffset) {
                element.classList.add('animation-class');
                console.log('add');
            } else {
                element.classList.remove('animation-class');
                console.log('remove');
            }
        });
    };
    
    
	const headerFixed = () => {
		let scrollTop = window.scrollY;
		let topCenter = top.offsetHeight / 2;

		if (scrollTop >= topCenter) {
			header.classList.add('fixed')
			top.style.marginTop = `${header.offsetHeight}px`;
		} else {
			header.classList.remove('fixed')
			top.style.marginTop = `0px`;
		}
	};

	const progressAnimation = () => {
		let scrollTop = window.scrollY;
		let windowHeight = window.innerHeight;
		let siteHeight = document.documentElement.scrollHeight;
		let percentageProgress = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);
		line.style.width = `${percentageProgress}%`;

		let radius = circle.getAttribute('r');
		let circleLength = 2 * Math.PI * radius;
		circle.setAttribute('stroke-dasharray', circleLength);
		circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
	};

    
    headerFixed();
	scrollAnimation();
	progressAnimation();
	window.addEventListener('scroll', () => {
		headerFixed();
		scrollAnimation();
		progressAnimation();
	});
});