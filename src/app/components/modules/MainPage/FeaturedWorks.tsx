"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Promo from "../../../components/promo/Promo";
import styles from '../../../styles/featured-works/index.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { sliderFeaturedSettings } from "../../../utils/common";
import { dataFaetured } from "../../../utils/data";

const FeaturedWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<any>(null); // Used to access the Swiper instance

  // Function to update the slide when the input range changes
  const handleSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCurrentSlide(value);
    if (swiperRef.current) {
      swiperRef.current.slideTo(value);
    }
  };
  return (
    <section className={styles.featured_works}>
      <div className="container-lg">
        <div className={styles.featured_works__top}>
          <h1 className={`title ${styles.featured_works__title}`}>Featured works</h1>
          <a className={styles.top__link} href="">
            View all
            <Image
              className={styles.link_img}
              src="/img/section-featured-works/arrow-right.svg"
              width={36}
              height={36}
              alt="arrow right"
            />
          </a>
        </div>
        <div className={styles.featured_works__bottom}>
          <div className="container-right">
            <div className={styles.featured_works__slider__wrapper}>
              <Swiper
                {...sliderFeaturedSettings}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }} // Зберігаємо інстанс swiper
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)} // Оновлюємо значення input при зміні слайду
                className="swiper-featured"
              >
                {dataFaetured.map((item, i) => (
                  <SwiperSlide key={i} className={styles.featured__slide__wrapper}>
                    <div className={styles.featured__slide}>
                      <div className={styles.featured__slide__img_wrapper}>
                        <Image
                          width={548}
                          height={600}
                          className={styles.featured__slide__img}
                          src={item.image}
                          alt={item.title}
                        />
                        {item.promo && <Promo />}
                      </div>
                      <h3 className={styles.featured__slide__title}>{item.title}</h3>
                      <p className={styles.featured__slide__text}>{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className={styles.featured_works__slider__controls}>
            {/* Input для перемикання слайдів */}
            <input
              className={styles.featured_works__slider__range}
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
