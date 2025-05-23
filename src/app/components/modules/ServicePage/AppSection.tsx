"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from '../../../styles/appsection/index.module.scss';
import Promo from "../../../components/promo/Promo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { dataApp } from "../../../utils/data";
import { sliderAppSettings } from "../../../utils/common";

const AppSection = () => {
  // Slider App

  const [currentSlideApp, setCurrentSlideApp] = useState(0);
  const swiperRef2 = useRef<any>(null); // Used to access the Swiper instance

  // Function to update the slide when the input range changes
  const handleSlideChangeApp = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCurrentSlideApp(value);
    if (swiperRef2.current) {
      swiperRef2.current.slideTo(value);
    }
  };
  return (
    <section className={styles.app}>
      <div className="container-lg">
        <div className={styles.app__top}>
          <div className={styles.app__top__left}>
            <h3 className={styles.tag}>Service</h3>
            <h1 className={`title-secondary ${styles.app__title_secondary}`}>App & Web development</h1>
            <div className={styles.app__top__text}>
              Our suite of services is designed to cater to every aspect of your
              online presence, from boosting your visibility to engaging your
              audience and driving conversions.
            </div>
          </div>
          <div className={styles.app__top__right}>
            <div className={styles.app__types}>
              <div className={styles.app__types__left}>
                <div className={styles.app__item}>Logo design</div>
                <div className={styles.app__item}>UX/UI Design</div>
                <div className={styles.app__item}>App Development</div>
                <div className={styles.app__item}>Web Development</div>
              </div>
              <div className={styles.app__types__right}>
                <div className={styles.app__item}>Web Development</div>
                <div className={styles.app__item}>Digital Transformation</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.app__bottom}>
          <div className="container-right">
            <div className={styles.app__slider__wrapper}>
              <Swiper
                {...sliderAppSettings}
                onSwiper={(swiper) => {
                  swiperRef2.current = swiper;
                }} // Save the swiper instance
                onSlideChange={(swiper) => setCurrentSlideApp(swiper.activeIndex)} // Update the input value when the slide changes
                className="swiper-app"
              >
                {dataApp.map((item, i) => (
                  <SwiperSlide key={i} className={styles.app__slide__wrapper}>
                    <div className={styles.app__slide}>
                      <div className={styles.app__slide__img_wrapper}>
                        <Image
                          className={styles.app__slide__img}
                          src={item.image}
                          width={548}
                          height={311}
                          alt={item.title}
                        />
                        {item.promo && <Promo />}
                      </div>
                      <h3 className={styles.app__slide__title}>{item.title}</h3>
                      <p className={styles.app__slide__text}>{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className={styles.app__slider__controls}>
            {/* Input for switching slides */}
            <input
              className={styles.app__slider__range}
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
