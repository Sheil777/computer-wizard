$(document).ready(function(){
  $(".mask__phone").mask("+7(999) 999-9999");

  const swiper = new Swiper('.price__slider', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    // Миниатюры
    thumbs: {
      swiper: {
          observer: true,
          el: '.price__pagination',
          slidesPerView: 'auto',
          spaceBetween: 10,
      }
    }
  });

  const swiperFeedback = new Swiper('.feedback__slider', {
    navigation: {
      prevEl: '.feedback__prev',
      nextEl: '.feedback__next',
    },
    autoHeight: true,
  });
});