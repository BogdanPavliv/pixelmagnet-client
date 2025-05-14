"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Promo from "../../../components/promo/Promo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { dataBranding } from "../../../utils/data";
import { sliderBrandingSettings } from "../../../utils/common";

const Branding = () => {
  // Slider Branding

  const [currentSlideBranding, setCurrentSlideBranding] = useState(0);
  const swiperRef1 = useRef<any>(null); // Використовується для доступу до Swiper instance

  // Функція для оновлення слайда при зміні input range
  const handleSlideChangeBranding = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);
    setCurrentSlideBranding(value);
    if (swiperRef1.current) {
      swiperRef1.current.slideTo(value);
    }
  };
  return (
    <section className="branding">
      <div className="container-lg">
        <div className="branding__top">
          <div className="branding__top--left">
            <h3 className="tag">Service</h3>
            <h1 className="title-secondary">
              BRANDING & <br /> UX/UI
            </h1>
            <div className="branding__top--text">
              Our suite of services is designed to cater to every aspect of your
              online presence, from boosting your visibility to engaging your
              audience and driving conversions.
            </div>
          </div>
          <div className="branding__top--right">
            <div className="branding__types">
              <div className="branding__types--left">
                <div className="branding__item">Logo design</div>
                <div className="branding__item">UX/UI Design</div>
                <div className="branding__item">App Development</div>
                <div className="branding__item">Web Development</div>
              </div>
              <div className="branding__types--right">
                <div className="branding__item">Web Development</div>
                <div className="branding__item">Digital Transformation</div>
              </div>
            </div>
          </div>
        </div>
        <div className="branding__bottom">
          <div className="container-right">
            <div className="branding__slider--wrapper">
              <Swiper
                {...sliderBrandingSettings}
                onSwiper={(swiper) => {
                  swiperRef1.current = swiper;
                }} // Зберігаємо інстанс swiper
                onSlideChange={(swiper) =>
                  setCurrentSlideBranding(swiper.activeIndex)
                } // Оновлюємо значення input при зміні слайду
                className="swiper-branding"
              >
                {dataBranding.map((item, i) => (
                  <SwiperSlide key={i} className="branding__slide--wrapper">
                    <div className="branding__slide">
                      <div className="branding__slide--img-wrapper">
                        <Image
                          className="branding__slide--img"
                          src={item.image}
                          width={548}
                          height={311}
                          alt={item.title}
                        />
                        {item.promo && <Promo />}
                      </div>
                      <h3 className="branding__slide--title">{item.title}</h3>
                      <p className="branding__slide--text">{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="branding__slider--controls">
            {/* Input для перемикання слайдів */}
            <input
              className="branding__slider--range"
              type="range"
              min="0"
              max={dataBranding.length - 1}
              value={currentSlideBranding}
              onChange={handleSlideChangeBranding}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;
