export default () => {
  const hamburger = document.querySelector('.js-hamburger');
  const header = document.querySelector('.header');

  if(!hamburger && !header) return;

  const toggler = () => {
    header.classList.toggle('is-open');
	  hamburger.classList.toggle('is-active');
  }

  hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    toggler();
  });
}
