"use strict";
//?Импортирование Свайпера
import Swiper, { Navigation, Pagination, Keyboard, Mousewheel, Autoplay } from 'swiper'; //импорт свайпера
//?Делегирование события клик
import { delegationClick } from './modules/script.js';
import { initSpollers } from './modules/spollers.js';

window.addEventListener("load", windowLoad);
function windowLoad() {
    delegationClick();
    initSpollers();

    const sectionsSlider = document.querySelector('.page');
    if (sectionsSlider){
        const swiper = new Swiper(sectionsSlider, {
            modules: [Pagination, Keyboard, Mousewheel],
            wrapperClass: 'page__wrapper',
            slideClass: 'page__section',
            pagination: {
                el: '.page__navigation',
                clickable: true,
                bulletClass: 'page__bullet',
                bulletActiveClass: 'page__bullet_active'
            },
            direction: 'vertical',
            slidesPerView: 'auto',
            speed: 800,
            spaceBetween: 30,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
            mousewheel: {
                sensitivity: 1,
            },
            //Если один экран, отключается swiper
            watchOverflow: true,
/*             on : {
                slideChange: function(swiper) {
                    document.querySelectorAll('.animated').forEach(elem => {elem.classList.remove('animated');});
                    const activeSlide = document.querySelector('.swiper-slide-active');
                    activeSlide.querySelectorAll('[data-anim]').forEach(item => {
                        item.classList.add('animated');
                    });
                },
                init: function() {
                    const activeSlide = document.querySelector('.swiper-slide-active');
                    activeSlide.querySelectorAll('[data-anim]').forEach(item => {
                        item.classList.add('animated');
                    });
                }
            } */
        });
    }
}