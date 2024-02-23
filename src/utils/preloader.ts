import { gsap } from 'gsap';

export const preloader = () => {
  // Preloader section
  const preloader = document.querySelector('.preloader');
  gsap.fromTo(
    preloader,
    {
      display: 'flex',
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 1,
      delay: 2.3,
    }
  );
  gsap.to(preloader, {
    display: 'none',
    delay: 3.3,
  });

  // Preloader subheading
  const textUnder = document.querySelector('.preloader_subheading');
  if (!textUnder) return;
  gsap.fromTo(
    textUnder,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.1,
      delay: 1.3,
    }
  );

  // Letters animation
  const parentEl = document.querySelectorAll('[animation-start]');
  if (!parentEl) return;

  const images: Array<Node> = [];
  parentEl.forEach((parent) => {
    // Prevent flashing - in webflow it is set on opacity: 0
    gsap.to(parent, {
      opacity: 1,
    });
    const childEl = parent.querySelectorAll('div');
    childEl.forEach((child) => {
      child.style.opacity = '0';
      images.push(child);
    });
  });

  let initDelay = 0.3;
  images.forEach((image, index) => {
    const lengthOfImages = images.length;
    if (index < lengthOfImages) {
      initDelay += 0.1;
    }
    gsap.fromTo(
      image,
      {
        opacity: 0,
        y: +350,
      },
      {
        opacity: 1,
        duration: 1.1,
        y: 0,
        delay: initDelay,
        ease: 'power2.out',
      }
    );
  });
};
