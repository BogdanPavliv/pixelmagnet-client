import React, { useState, useRef } from "react";
import Image from "next/image";
import Promo from "../../../components/promo/Promo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { dataFaetured } from "../../../utils/data";
import { sliderFeaturedSettings } from "../../../utils/common";

const FeaturedWorks = () => {
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
    <section className="featured-works">
      <div className="container-lg">
        <div className="featured-works__top">
          <h1 className="title">Other works</h1>
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
        <div className="featured-works__bottom">
          <div className="container-right">
            <div className="featured-works__slider--wrapper">
              <Swiper
                {...sliderFeaturedSettings}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }} // Зберігаємо інстанс swiper
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)} // Оновлюємо значення input при зміні слайду
                className="swiper-project"
              >
                {dataFaetured.map((item, i) => (
                  <SwiperSlide key={i} className="featured__slide--wrapper">
                    <div className="featured__slide">
                      <div className="featured__slide--img-wrapper">
                        <Image
                          width={548}
                          height={600}
                          className="featured__slide--img"
                          src={item.image}
                          alt={item.title}
                        />
                        {item.promo && <Promo />}
                      </div>
                      <h3 className="featured__slide--title">{item.title}</h3>
                      <p className="featured__slide--text">{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="featured-works__slider--controls">
            {/* Input для перемикання слайдів */}
            <input
              className="featured-works__slider--range"
              type="range"
              min="0"
              max={dataFaetured.length - 1}
              value={currentSlide}
              onChange={handleSlideChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
