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

    const tabs = document.querySelectorAll('[data-tabs]');
    if (tabs.length) {
        tabs.forEach(tab => {
            const activeFilter = tab.querySelector('.active');
            if (activeFilter) {
                const filterValue = activeFilter.dataset.filter;
                tab.querySelectorAll('[data-filter-item]').forEach(filterItem => {
                    if (filterItem.dataset.filterItem != filterValue) {
                        filterItem.style.cssText = `position: absolute;opacity: 0;`;
                    }
                });
            }
        });
    }

    const progressLines = document.querySelectorAll('[data-progress]');
    if (progressLines.length) {
        progressLines.forEach(line => {
            const progressValue = line.dataset.progress;
            line.style.cssText = `width: ${progressValue}%;`;
        });
    }

/*     document.querySelectorAll('[data-filter]').forEach(filter => {
        if (filter.classList.contains('active')) {
            const filterValue = filter.dataset.filter;
            document.querySelectorAll('[data-filter-item]').forEach(filterItem => {
                if (filterItem.dataset.filterItem === filterValue) {

                }
            });
        }
    }); */

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
    const portfoliosSlider = document.querySelector('.portfolios__slider');
    if(portfoliosSlider){
        new Swiper(portfoliosSlider, {
            modules: [Navigation, Autoplay],
            autoplay: true,
            wrapperClass: 'portfolios__wrapper',
            slideClass: 'portfolios__slide',
            navigation: {
                prevEl: '.portfolios__prev',
                nextEl: '.portfolios__next',
            },
            direction: 'horizontal',
            slidesPerView: 3,
            speed: 800,
            spaceBetween: 56,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            loop: true,
            breakpoints: {
                992.98 : {
                    slidesPerView: 3,
                },
                479.98 : {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                0 : {
                    slidesPerView: 1,
                },
            }
        });
    }
}