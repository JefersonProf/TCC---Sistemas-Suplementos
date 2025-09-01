document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper === 'undefined') {
    console.error('SwiperJS não carregou. Verifique a ordem dos <script>.');
    return;
  }

  new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200: { slidesPerView: 4, spaceBetween: 24 },
      992:  { slidesPerView: 3, spaceBetween: 20 },
      768:  { slidesPerView: 2, spaceBetween: 16 },
      0:    { slidesPerView: 1, spaceBetween: 12 }
    }
  });
});
