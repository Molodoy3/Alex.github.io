export function delegationClick() {
  document.addEventListener("click", documentActions);
  function documentActions(e) {
    const targetElement = e.target;

    if (window.innerWidth > 767.98) {
      if (targetElement.closest(".menu__body li")) {
        const item = targetElement.closest(".menu__body li");
        if (item.querySelector("ul")) {
          item.classList.toggle("active");
          e.preventDefault();
        }
      } else if (!targetElement.closest(".menu__body.active")) {
        const item = document.querySelector(".menu__body li.active");
        if (item) {
          item.classList.remove("active");
        }
      }
    }
    //!Табы
    if (targetElement.closest('[data-filter]')) {
      const itemFilter = targetElement.closest('[data-filter]');
      const filterValue = itemFilter.dataset.filter;
      const tabs = itemFilter.closest('[data-tabs]');

      tabs.querySelectorAll('[data-filter]').forEach(item => { item.classList.remove('active') });
      /*             filterValue === "*" ? itemsGrid.arrange({ filter: `` }) : 
                      itemsGrid.arrange({ filter: `[data-filter="${filterValue}"]` }) */
      itemFilter.classList.add('active');
      const tabsItems = tabs.querySelectorAll('[data-filter-item]');
      const durationAnimation = 300;
      if (filterValue === "*") {
        tabsItems.forEach(item => {
          if (item.style.position !== 'absolute') {
            item.style.cssText = `opacity: 0;`;
            setTimeout(() => {
              item.style.cssText = `position: absolute;opacity: 0;top: 0;`;
            }, durationAnimation);
          }
        });

        setTimeout(() => {
          tabsItems.forEach(item => {
            item.style.cssText = ``;
            setTimeout(() => { item.style.cssText = `opacity: 1;`; }, 100);
          });
        }, durationAnimation);
      } else {
        tabsItems.forEach(item => {
          if (item.style.position !== 'absolute') {
            item.style.cssText = `opacity: 0;`;
            setTimeout(() => {
              item.style.cssText = `position: absolute;opacity: 0;top: 0;`;
            }, durationAnimation);
          }
        });
        setTimeout(() => {
          tabsItems.forEach(item => {
            if (item.dataset.filterItem === filterValue) {
              item.style.cssText = ``;
              setTimeout(() => { item.style.cssText = `opacity: 1;`; }, 100);
            }
          });
        }, durationAnimation);
      }
      e.preventDefault();
    }
    //Открывание бургера
    if (targetElement.closest(".menu__icon")) {
      targetElement.closest(".menu__icon").classList.toggle("active");
      document.querySelector(".menu__body").classList.toggle("open");
      document.body.classList.toggle("lock");
    }
    //Плавный скрол с закрыванием бурегера
    /*         if (targetElement.closest('[data-goto]')) {
            if (targetElement.closest('.menu__link')) {
                document.querySelector('.menu__body').classList.remove('open');
                document.querySelector('.menu__icon').classList.remove('active');
                document.body.classList.remove('lock');
            }
            const link = targetElement.closest('[data-goto]');
            const goToBlock = document.querySelector(link.dataset.goto);
            if (goToBlock) {
                let goToBlockValue = goToBlock.getBoundingClientRect().top + scrollY;
                const header = document.querySelector('.header');
                if (header) {
                    goToBlockValue -= header.offsetHeight;
                }
                window.scrollTo({
                    top: goToBlockValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            }
        } */
  }
}
//Анимация шакпи при скролле
export function headerScroll() {
  const header = document.querySelector(".header");
  if (header) {
    if (window.scrollY > 0) {
      header.classList.add("scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
    });
  }


}
