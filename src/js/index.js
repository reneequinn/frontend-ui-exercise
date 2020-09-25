import Glide from '@glidejs/glide';

// Nav
const button = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

button.addEventListener('pointerdown', (e) => {
  nav.classList.toggle('open');
  e.currentTarget.classList.toggle('open');
});

// Hero
const heroGlide = new Glide('.hero', {
  type: 'carousel',
  autoplay: 5000,
  animationDuration: 700,
  gap: 0,
});

heroGlide.mount();

// Services
const servicesGlide = new Glide('.services-carousel', {
  type: 'carousel',
  perView: 3,
  gap: 30,
  breakpoints: {
    800: {
      perView: 1,
    },
    1024: {
      perView: 2,
    },
  },
});

servicesGlide.mount();

// Contact form
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
