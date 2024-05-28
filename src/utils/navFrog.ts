export const navFrog = () => {
  const navEl = document.querySelectorAll('[frog-nav]') as NodeListOf<HTMLElement>;
  if (!navEl) return;
  const imageEl = document.querySelectorAll('[frog-image]') as NodeListOf<HTMLImageElement>;
  if (!imageEl) return;

  navEl.forEach((el: HTMLElement) => {
    el.addEventListener('click', (event) => {
      const clickedEl = event.currentTarget as HTMLElement;
      const attrVal = clickedEl.getAttribute('frog-nav');

      const imageFrog = document.querySelector(`[frog-image="${attrVal}"]`) as HTMLImageElement;

      imageFrog.style.opacity = '1';

      imageEl.forEach((el: HTMLElement) => {
        if (el.getAttribute('frog-image') !== attrVal) {
          el.style.zIndex = '0';
          el.style.opacity = '0';
        }
      });

      imageFrog.style.zIndex = '10';
    });
  });
};
