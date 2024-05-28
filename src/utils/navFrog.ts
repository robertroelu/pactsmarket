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

  // FOR ROTATION TABS
  // Start Tabs
  let tabTimeout: number | undefined;
  clearTimeout(tabTimeout);
  tabLoop();

  // Connect your class names to elements.
  function tabLoop() {
    tabTimeout = window.setTimeout(() => {
      const currentTab = document.querySelector('.tabs-menu .w--current') as HTMLElement;
      const nextTab = currentTab?.nextElementSibling as HTMLElement;

      if (nextTab) {
        nextTab.click(); // Simulate a click on the next tab
      } else {
        const firstTab = document.querySelector('.tab-button:first-child') as HTMLElement;
        if (firstTab) {
          firstTab.click(); // Simulate a click on the first tab if no next tab is found
        }
      }
    }, 10000); // 10 Second Rotation
  }

  // Reset Loops
  document.querySelectorAll('.tab-button').forEach((tab) => {
    tab.addEventListener('click', () => {
      if (tabTimeout !== undefined) {
        clearTimeout(tabTimeout);
      }
      tabLoop();
    });
  });
};
