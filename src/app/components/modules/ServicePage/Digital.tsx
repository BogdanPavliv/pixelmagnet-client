"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Promo from "../../../components/promo/Promo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { dataDigital } from "../../../utils/data";
import { slideDigitalSettings } from "../../../utils/common";

const Digital = () => {
  // Slider Digital

  const [currentSlideDigital, setCurrentSlideDigital] = useState(0);
  const swiperRef3 = useRef<any>(null); // Використовується для доступу до Swiper instance

  // Функція для оновлення слайда при зміні input range
  const handleSlideChangeDigital = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCurrentSlideDigital(value);
    if (swiperRef3.current) {
      swiperRef3.current.slideTo(value);
    }
  };
  return (
    <section className="digital">
      <div className="container-lg">
        <div className="digital__top">
          <div className="digital__top--left">
            <h3 className="tag">Service</h3>
            <h1 className="title-secondary">digital transformation</h1>
            <div className="digital__top--text">
              Our suite of services is designed to cater to every aspect of your
              online presence, from boosting your visibility to engaging your
              audience and driving conversions.
            </div>
          </div>
          <div className="digital__top--right">
            <div className="digital__types">
              <div className="digital__types--left">
                <div className="digital__item">Logo design</div>
                <div className="digital__item">UX/UI Design</div>
                <div className="digital__item">App Development</div>
                <div className="digital__item">Web Development</div>
              </div>
              <div className="digital__types--right">
                <div className="digital__item">Web Development</div>
                <div className="digital__item">Digital Transformation</div>
              </div>
            </div>
          </div>
        </div>
        <div className="digital__bottom">
          <div className="container-right">
            <div className="digital__slider--wrapper">
              <Swiper
                {...slideDigitalSettings}
                onSwiper={(swiper) => {
                  swiperRef3.current = swiper;
                }} // Зберігаємо інстанс swiper
                onSlideChange={(swiper) => setCurrentSlideDigital(swiper.activeIndex)} // Оновлюємо значення input при зміні слайду
                className="swiper-digital"
              >
                {dataDigital.map((item, i) => (
                  <SwiperSlide key={i} className="digital__slide--wrapper">
                    <div className="digital__slide">
                      <div className="digital__slide--img-wrapper">
                        <Image
                          className="digital__slide--img"
                          src={item.image}
                          width={548}
                          height={311}
                          alt={item.title}
                        />
                        {item.promo && <Promo />}
                      </div>
                      <h3 className="digital__slide--title">{item.title}</h3>
                      <p className="digital__slide--text">{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="digital__slider--controls">
            {/* Input для перемикання слайдів */}
            <input
              className="digital__slider--range"
              type="range"
              min="0"
              max={dataDigital.length - 1}
              value={currentSlideDigital}
              onChange={handleSlideChangeDigital}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Digital;
