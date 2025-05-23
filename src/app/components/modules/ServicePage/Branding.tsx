"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from '../../../styles/branding/index.module.scss';
import Promo from "../../../components/promo/Promo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { dataBranding } from "../../../utils/data";
import { sliderBrandingSettings } from "../../../utils/common";

const Branding = () => {
  // Slider Branding

  const [currentSlideBranding, setCurrentSlideBranding] = useState(0);
  const swiperRef1 = useRef<any>(null); // Used to access the Swiper instance

  // Function to update the slide when the input range changes
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
    <section className={styles.branding}>
      <div className="container-lg">
        <div className={styles.branding__top}>
          <div className={styles.branding__top__left}>
            <h3 className={styles.tag}>Service</h3>
            <h1 className={`title-secondary ${styles.branding__title_secondary}`}>
              BRANDING & <br /> UX/UI
            </h1>
            <div className={styles.branding__top__text}>
              Our suite of services is designed to cater to every aspect of your
              online presence, from boosting your visibility to engaging your
              audience and driving conversions.
            </div>
          </div>
          <div className={styles.branding__top__right}>
            <div className={styles.branding__types}>
              <div className={styles.branding__types__left}>
                <div className={styles.branding__item}>Logo design</div>
                <div className={styles.branding__item}>UX/UI Design</div>
                <div className={styles.branding__item}>App Development</div>
                <div className={styles.branding__item}>Web Development</div>
              </div>
              <div className={styles.branding__types__right}>
                <div className={styles.branding__item}>Web Development</div>
                <div className={styles.branding__item}>Digital Transformation</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.branding__bottom}>
          <div className="container-right">
            <div className={styles.branding__slider__wrapper}>
              <Swiper
                {...sliderBrandingSettings}
                onSwiper={(swiper) => {
                  swiperRef1.current = swiper;
                }} // Save the swiper instance
                onSlideChange={(swiper) =>
                  setCurrentSlideBranding(swiper.activeIndex)
                } // Update the input value when the slide changes
                className="swiper-branding"
              >
                {dataBranding.map((item, i) => (
                  <SwiperSlide key={i} className={styles.branding__slide__wrapper}>
                    <div className={styles.branding__slide}>
                      <div className={styles.branding__slide__img_wrapper}>
                        <Image
                          className={styles.branding__slide__img}
                          src={item.image}
                          width={548}
                          height={311}
                          alt={item.title}
                        />
                        {item.promo && <Promo />}
                      </div>
                      <h3 className={styles.branding__slide__title}>{item.title}</h3>
                      <p className={styles.branding__slide__text}>{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className={styles.branding__slider__controls}>
            {/* Input for switching slides */}
            <input
              className={styles.branding__slider__range}
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
