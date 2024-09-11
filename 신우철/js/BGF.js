  var swiper = new Swiper(".mySwiper", {
      speed: 1000,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      spaceBetween: 30,
      slideOffsetBefore: 300,
      slidesPerView: "auto",
    });