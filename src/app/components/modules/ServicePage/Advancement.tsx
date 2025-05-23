"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from '../../../styles/advancement/index.module.scss';
import Promo from "../../../components/promo/Promo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { dataAdvancement } from "../../../utils/data";
import { sliderAdvancementSettings } from "../../../utils/common";

const Advancement = () => {
  // Slider Advancement

  const [currentSlideAdvancement, setCurrentSlideAdvancement] = useState(0);
  const swiperRef4 = useRef<any>(null); // Used to access the Swiper instance

  // Function to update the slide when the input range changes
  const handleSlideChangeAdvancement = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCurrentSlideAdvancement(value);
    if (swiperRef4.current) {
      swiperRef4.current.slideTo(value);
    }
  };
  return (
    <section className={styles.advancement}>
      <div className="container-lg">
        <div className={styles.advancement__top}>
          <div className={styles.advancement__top__left}>
            <h3 className={styles.tag}>Service</h3>
            <h1 className={`title-secondary ${styles.advancement__title_secondary}`}>technological advancement</h1>
            <div className={styles.advancement__top__text}>
              Our suite of services is designed to cater to every aspect of your
              online presence, from boosting your visibility to engaging your
              audience and driving conversions.
            </div>
          </div>
          <div className={styles.advancement__top__right}>
            <div className={styles.advancement__types}>
              <div className={styles.advancement__types__left}>
                <div className={styles.advancement__item}>Logo design</div>
                <div className={styles.advancement__item}>UX/UI Design</div>
                <div className={styles.advancement__item}>App Development</div>
                <div className={styles.advancement__item}>Web Development</div>
              </div>
              <div className={styles.advancement__types__right}>
                <div className={styles.advancement__item}>Web Development</div>
                <div className={styles.advancement__item}>Digital Transformation</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.advancement__bottom}>
          <div className="container-right">
            <div className={styles.advancement__slider__wrapper}>
              <Swiper
                {...sliderAdvancementSettings}
                onSwiper={(swiper) => {
                  swiperRef4.current = swiper;
                }} // Save the swiper instance
                onSlideChange={(swiper) => setCurrentSlideAdvancement(swiper.activeIndex)} // Update input value when slide changes
                className="swiper-advancement"
              >
                {dataAdvancement.map((item, i) => (
                  <SwiperSlide key={i} className={styles.advancement__slide__wrapper}>
                    <div className={styles.advancement__slide}>
                      <div className={styles.advancement__slide__img_wrapper}>
                        <Image
                          className={styles.advancement__slide__img}
                          src={item.image}
                          width={548}
                          height={311}
                          alt={item.title}
                        />
                        {item.promo && <Promo />}
                      </div>
                      <h3 className={styles.advancement__slide__title}>
                        {item.title}
                      </h3>
                      <p className={styles.advancement__slide__text}>{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className={styles.advancement__slider__controls}>
            {/* Input for switching slides */}
            <input
              className={styles.advancement__slider__range}
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
