"use strict";

const bgItems = document.querySelectorAll(".slide-bg__link");//Ссылки с картинками
const imageSlides = document.querySelectorAll(".slide-bg__inner");//Обертки ссылок с картинками
const shapes = document.querySelectorAll(".shapes__content");//Фон правого блока
const shapeSlides = document.querySelectorAll(".shapes__item");//
const helperInput = document.querySelector("#helper-input");//Вспомогательный инпут
const mainSection = document.querySelector(".main-section");
const mouse = document.querySelector(".mouse");
const slideBg = document.querySelector(".slide-bg");
const links = document.querySelectorAll("a");//Все ссылки на странице

const slidesCount = 5;//Общее кол-во слайдов на странице
let slideCounter = 1;//Текущий номер слайда

const easing = BezierEasing(0.77, 0.125, 0.265, 1.04);

const startComplete = () => {
	imageSlides.forEach(el => el.style.opacity = 1);
	shapeSlides.forEach(el => el.style.opacity = 1);
};
const startingTl = gsap.timeline(
	{ defaults: { ease: easing }, onComplete: startComplete }
);//Стартовые настройки таймлайна
