import Swiper from 'swiper';

export default () => {
  const swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    direction: 'vertical',
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
