const button = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

button.addEventListener('pointerdown', (e) => {
  nav.classList.toggle('open');
  e.currentTarget.classList.toggle('open');
});
