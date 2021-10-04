// Swiper

if (document.querySelector('.example-slider')) {
  new Swiper('.example-slider', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    loop: true,
    // direction: 'vertical',
    // simulateTouch: false,
    pagination: {
      el: '.example-slider__swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: '.example-slider__swiper-button-next',
      prevEl: '.example-slider__swiper-button-prev',
    },
    autoplay: {
      delay: 5000
    }
  });
}

if (document.querySelector('.example-carousel')) {
  new Swiper('.example-carousel', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    // loop: true,
    // loopAdditionalSlides: 5,
    // slidesPerView: 5,
    // spaceBetween: 10,
    // slidesPerGroup: 2,
    speed: 800,
    pagination: {
      el: '.example-carousel__swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.example-carousel__swiper-button-next',
      prevEl: '.example-carousel__swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 10
      }
    }
  });
}

if (document.querySelector('.ext-example-carousel')) {
  document.querySelectorAll('.ext-example-carousel').forEach(function (elem) {
    new Swiper(elem.querySelector('.swiper-container'), {
      slidesPerView: 5,
      spaceBetween: 10,
      pagination: {
        el: elem.querySelector('.ext-example-carousel__swiper-pagination'),
        clickable: true
      },
      navigation: {
        nextEl: elem.querySelector('.ext-example-carousel__btn_next'),
        prevEl: elem.querySelector('.ext-example-carousel__btn_prev'),
      },
    });
  })
}

if (document.querySelector('.example-images-slider') || document.querySelector('.example-thumbnails-carousel')) {

  const thumbs = new Swiper('.example-thumbnails-carousel', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 7,
    spaceBetween: 20,
    navigation: {
      nextEl: '.example-thumbnails-carousel__swiper-button-next',
      prevEl: '.example-thumbnails-carousel__swiper-button-prev',
    },
  });

  new Swiper('.example-images-slider', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    thumbs: {
      swiper: thumbs
    },
    navigation: {
      nextEl: '.example-images-slider__swiper-button-next',
      prevEl: '.example-images-slider__swiper-button-prev',
    }
  });

}

