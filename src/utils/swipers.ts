import 'swiper/css/bundle';

import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';

export const swipers = () => {
  const swiperModules = [Autoplay, EffectFade];

  const swiperEl = document.querySelectorAll('[swiper-option]') as NodeListOf<HTMLElement>;
  if (!swiperEl) return;

  swiperEl.forEach((el) => {
    const elAttr = el.getAttribute('swiper-option');
    const elList = el.querySelector('[swiper-list=' + elAttr + ']') as HTMLElement;
    const elChildren = elList.children;

    const swiper = new Swiper(el, {
      direction: 'vertical',
      // speed: 200,
      slidesPerView: 3,
      spaceBetween: 0,
      // loop: true,
      centeredSlides: true,
      centeredSlidesBounds: true,
      allowTouchMove: false,
    });

    let time = 0;
    setTimeout(() => {
      for (let index = 0; index < elChildren.length; index++) {
        if (index >= 3 && index <= 6) {
          setTimeout(() => {
            swiper.slideTo(index);
          }, time);
          time += 150;
        } else if (index >= 7 && index <= 10) {
          setTimeout(() => {
            swiper.slideTo(index);
          }, time);
          time += 250;
        } else if (index >= 11 && index <= 15) {
          setTimeout(() => {
            swiper.slideTo(index);
          }, time);
          time += 350;
        }
      }
    }, 3100);
  });
};
