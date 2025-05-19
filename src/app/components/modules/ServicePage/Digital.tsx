"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from '../../../styles/digital/index.module.scss';
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
    <section className={styles.digital}>
      <div className="container-lg">
        <div className={styles.digital__top}>
          <div className={styles.digital__top__left}>
            <h3 className={styles.tag}>Service</h3>
            <h1 className={`title-secondary ${styles.digital__title_secondary}`}>digital transformation</h1>
            <div className={styles.digital__top__text}>
              Our suite of services is designed to cater to every aspect of your
              online presence, from boosting your visibility to engaging your
              audience and driving conversions.
            </div>
          </div>
          <div className={styles.digital__top__right}>
            <div className={styles.digital__types}>
              <div className={styles.digital__types__left}>
                <div className={styles.digital__item}>Logo design</div>
                <div className={styles.digital__item}>UX/UI Design</div>
                <div className={styles.digital__item}>App Development</div>
                <div className={styles.digital__item}>Web Development</div>
              </div>
              <div className={styles.digital__types__right}>
                <div className={styles.digital__item}>Web Development</div>
                <div className={styles.digital__item}>Digital Transformation</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.digital__bottom}>
          <div className="container-right">
            <div className={styles.digital__slider__wrapper}>
              <Swiper
                {...slideDigitalSettings}
                onSwiper={(swiper) => {
                  swiperRef3.current = swiper;
                }} // Зберігаємо інстанс swiper
                onSlideChange={(swiper) => setCurrentSlideDigital(swiper.activeIndex)} // Оновлюємо значення input при зміні слайду
                className="swiper-digital"
              >
                {dataDigital.map((item, i) => (
                  <SwiperSlide key={i} className={styles.digital__slide__wrapper}>
                    <div className={styles.digital__slide}>
                      <div className={styles.digital__slide__img_wrapper}>
                        <Image
                          className={styles.digital__slide__img}
                          src={item.image}
                          width={548}
                          height={311}
                          alt={item.title}
                        />
                        {item.promo && <Promo />}
                      </div>
                      <h3 className={styles.digital__slide__title}>{item.title}</h3>
                      <p className={styles.digital__slide__text}>{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className={styles.digital__slider__controls}>
            {/* Input для перемикання слайдів */}
            <input
              className={styles.digital__slider__range}
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
