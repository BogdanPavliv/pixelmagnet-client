"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Promo from "../../../components/promo/Promo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { dataApp } from "../../../utils/data";
import { sliderAppSettings } from "../../../utils/common";

const AppSection = () => {
  // Slider App

  const [currentSlideApp, setCurrentSlideApp] = useState(0);
  const swiperRef2 = useRef<any>(null); // Використовується для доступу до Swiper instance

  // Функція для оновлення слайда при зміні input range
  const handleSlideChangeApp = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCurrentSlideApp(value);
    if (swiperRef2.current) {
      swiperRef2.current.slideTo(value);
    }
  };
  return (
    <section className="app">
      <div className="container-lg">
        <div className="app__top">
          <div className="app__top--left">
            <h3 className="tag">Service</h3>
            <h1 className="title-secondary">App & Web development</h1>
            <div className="app__top--text">
              Our suite of services is designed to cater to every aspect of your
              online presence, from boosting your visibility to engaging your
              audience and driving conversions.
            </div>
          </div>
          <div className="app__top--right">
            <div className="app__types">
              <div className="app__types--left">
                <div className="app__item">Logo design</div>
                <div className="app__item">UX/UI Design</div>
                <div className="app__item">App Development</div>
                <div className="app__item">Web Development</div>
              </div>
              <div className="app__types--right">
                <div className="app__item">Web Development</div>
                <div className="app__item">Digital Transformation</div>
              </div>
            </div>
          </div>
        </div>
        <div className="app__bottom">
          <div className="container-right">
            <div className="app__slider--wrapper">
              <Swiper
                {...sliderAppSettings}
                onSwiper={(swiper) => {
                  swiperRef2.current = swiper;
                }} // Зберігаємо інстанс swiper
                onSlideChange={(swiper) => setCurrentSlideApp(swiper.activeIndex)} // Оновлюємо значення input при зміні слайду
                className="swiper-app"
              >
                {dataApp.map((item, i) => (
                  <SwiperSlide key={i} className="app__slide--wrapper">
                    <div className="app__slide">
                      <div className="app__slide--img-wrapper">
                        <Image
                          className="app__slide--img"
                          src={item.image}
                          width={548}
                          height={311}
                          alt={item.title}
                        />
                        {item.promo && <Promo />}
                      </div>
                      <h3 className="app__slide--title">{item.title}</h3>
                      <p className="app__slide--text">{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="app__slider--controls">
            {/* Input для перемикання слайдів */}
            <input
              className="app__slider--range"
              type="range"
              min="0"
              max={dataApp.length - 1}
              value={currentSlideApp}
              onChange={handleSlideChangeApp}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
