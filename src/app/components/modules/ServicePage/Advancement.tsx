"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Promo from "../../../components/promo/Promo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { dataAdvancement } from "../../../utils/data";
import { sliderAdvancementSettings } from "../../../utils/common";

const Advancement = () => {
  // Slider Advancement

  const [currentSlideAdvancement, setCurrentSlideAdvancement] = useState(0);
  const swiperRef4 = useRef<any>(null); // Використовується для доступу до Swiper instance

  // Функція для оновлення слайда при зміні input range
  const handleSlideChangeAdvancement = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCurrentSlideAdvancement(value);
    if (swiperRef4.current) {
      swiperRef4.current.slideTo(value);
    }
  };
  return (
    <section className="advancement">
      <div className="container-lg">
        <div className="advancement__top">
          <div className="advancement__top--left">
            <h3 className="tag">Service</h3>
            <h1 className="title-secondary">technological advancement</h1>
            <div className="advancement__top--text">
              Our suite of services is designed to cater to every aspect of your
              online presence, from boosting your visibility to engaging your
              audience and driving conversions.
            </div>
          </div>
          <div className="advancement__top--right">
            <div className="advancement__types">
              <div className="advancement__types--left">
                <div className="advancement__item">Logo design</div>
                <div className="advancement__item">UX/UI Design</div>
                <div className="advancement__item">App Development</div>
                <div className="advancement__item">Web Development</div>
              </div>
              <div className="advancement__types--right">
                <div className="advancement__item">Web Development</div>
                <div className="advancement__item">Digital Transformation</div>
              </div>
            </div>
          </div>
        </div>
        <div className="advancement__bottom">
          <div className="container-right">
            <div className="advancement__slider--wrapper">
              <Swiper
                {...sliderAdvancementSettings}
                onSwiper={(swiper) => {
                  swiperRef4.current = swiper;
                }} // Зберігаємо інстанс swiper
                onSlideChange={(swiper) => setCurrentSlideAdvancement(swiper.activeIndex)} // Оновлюємо значення input при зміні слайду
                className="swiper-advancement"
              >
                {dataAdvancement.map((item, i) => (
                  <SwiperSlide key={i} className="advancement__slide--wrapper">
                    <div className="advancement__slide">
                      <div className="advancement__slide--img-wrapper">
                        <Image
                          className="advancement__slide--img"
                          src={item.image}
                          width={548}
                          height={311}
                          alt={item.title}
                        />
                        {item.promo && <Promo />}
                      </div>
                      <h3 className="advancement__slide--title">
                        {item.title}
                      </h3>
                      <p className="advancement__slide--text">{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="advancement__slider--controls">
            {/* Input для перемикання слайдів */}
            <input
              className="advancement__slider--range"
              type="range"
              min="0"
              max={dataAdvancement.length - 1}
              value={currentSlideAdvancement}
              onChange={handleSlideChangeAdvancement}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advancement;
