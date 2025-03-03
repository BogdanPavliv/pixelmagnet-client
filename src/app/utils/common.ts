// Оголошуємо інтерфейс для типізації
interface BreakpointSettings {
  slidesPerView: number;
  spaceBetween: number;
}

interface SliderTestimonialsSettings {
  slidesPerView: number;
  spaceBetween: number;
  breakpoints: {
    [key: number]: BreakpointSettings;
  };
}

// Типізуємо об'єкт sliderTestimonialsSettings
// export const sliderBrandsSettings: SliderTestimonialsSettings = {
//   slidesPerView: 1,
//   spaceBetween: 15,
//   breakpoints: {
//     280: {
//       slidesPerView: 1,
//       spaceBetween: 15,
//     },
//     540: {
//       slidesPerView: 2,
//       spaceBetween: 15,
//     },
//     992: {
//       slidesPerView: 6,
//       spaceBetween: 25,
//     },
//   },
// };

export const sliderBrandsSettings = {
  dots: false,
  arrows: false,
  slidesToScroll: 5.5,
  // lazyLoad: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 5.5,
  autoplay: true,
  speed: 10000,
  autoplaySpeed: 10000,
  cssEase: "linear",

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4.8,
        slidesToScroll: 4,
        dots: false,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 4.8,
        slidesToScroll: 4,
        initialSlide: 1,
      },
    },
  ],
};

// export const sliderFeaturedSettings = {
//   dots: false,
//   arrows: false,
//   slidesToScroll: 1,
//   // lazyLoad: true,
//   infinite: true,
//   centerPadding: "0px",
//   slidesToShow: 2.5,
//   speed: 500,
//   // rtl: false, // Вимкнути режим справа наліво
//   responsive: [
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         dots: false,
//       },
//     },
//     {
//       breakpoint: 540,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         initialSlide: 1,
//       },
//     },
//   ],
// };

export const sliderFeaturedSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    280: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    540: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
  },
};

export const sliderRelatedArticlesSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    280: {
      slidesPerView: 1.12,
      spaceBetween: 15,
    },
    540: {
      slidesPerView: 1.12,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 2.12,
      spaceBetween: 32,
    },
  },
};

// export const sliderTestimonialsSettings = {
//   dots: true,
//   arrows: true,
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   vertical: true,
//   verticalSwiping: true,
//   swipeToSlide: true,
//   beforeChange: function(currentSlide: any, nextSlide: any) {
//     console.log("before change", currentSlide, nextSlide);
//   },
//   afterChange: function(currentSlide: any) {
//     console.log("after change", currentSlide);
//   }
// };

export const sliderTestimonialsSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  direction: 'vertical', // Вертикальний напрямок
  breakpoints: {
    280: {
      direction: 'horizontal' as 'horizontal', // Явно вказуємо тип
      slidesPerView: 1,
      spaceBetween: 15,
    },
    540: {
      direction: 'horizontal' as 'horizontal', // Явно вказуємо тип
      slidesPerView: 1,
      spaceBetween: 15,
    },
    1251: {
      direction: 'vertical' as 'vertical', // Явно вказуємо тип
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
};

export const sliderBrandingSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    280: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    540: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
  },
};

export const sliderAppSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    280: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    540: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
  },
};

export const slideDigitalSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    280: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    540: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
  },
};

export const sliderAdvancementSettings = {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    280: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    540: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
  },
};

