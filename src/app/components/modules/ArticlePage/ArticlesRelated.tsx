import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { dataRelatedArticles } from "../../../utils/data";
import { sliderRelatedArticlesSettings } from "../../../utils/common";

const ArticlesRelated = () => {
  // slider swiper

  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<any>(null); // Використовується для доступу до Swiper instance
  // Функція для оновлення слайда при зміні input range

  const handleSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCurrentSlide(value);
    if (swiperRef.current) {
      swiperRef.current.slideTo(value);
    }
  };
  return (
    <section className="articles-related">
      <div className="container-lg">
        <div className="articles-related__top">
          <h1 className="title">Related articles</h1>
          <a className="top--link" href="">
            View all
            <Image
              className="link-img"
              src="/img/section-featured-works/arrow-right.svg"
              width={36}
              height={36}
              alt="arrow right"
            />
          </a>
        </div>
        <div className="articles-related__bottom">
          <div className="container-right">
            <div className="articles-related__slider--wrapper">
              <Swiper
                {...sliderRelatedArticlesSettings}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }} // Зберігаємо інстанс swiper
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)} // Оновлюємо значення input при зміні слайду
                className="swiper-article"
              >
                {dataRelatedArticles.map((item, i) => (
                  <SwiperSlide key={i} className="related__slide--wrapper">
                    <div className="related__slide">
                      <div className="related__slide--img-wrapper">
                        <Image
                          width={628}
                          height={572}
                          className="related__slide--img"
                          src={item.image}
                          alt={item.title}
                        />
                      </div>
                      <h3 className="related__slide--title">{item.title}</h3>
                      <p className="related__slide--text">{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="articles-related__slider--controls">
            {/* Input для перемикання слайдів */}
            <input
              className="articles-related__slider--range"
              type="range"
              min="0"
              max={dataRelatedArticles.length - 1}
              value={currentSlide}
              onChange={handleSlideChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesRelated;
