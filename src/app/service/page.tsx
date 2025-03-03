"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

import {useLenis} from "../hooks/useLenis";

import Promo from "../components/promo/Promo";
import Circle from '../components/UI/Circle';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { dataBranding } from "../utils/data";
import { dataApp } from "../utils/data";
import { dataDigital } from "../utils/data";
import { dataAdvancement } from "../utils/data";
import { sliderBrandingSettings } from "../utils/common";
import { sliderAppSettings } from "../utils/common";
import { slideDigitalSettings } from "../utils/common";
import { sliderAdvancementSettings } from "../utils/common";

type Props = {};

const Service = (props: Props) => {
  // Плавний скрол
  useLenis();

  // Slider 1

  const [currentSlide1, setCurrentSlide1] = useState(0);
  const swiperRef1 = useRef<any>(null); // Використовується для доступу до Swiper instance

  // Функція для оновлення слайда при зміні input range
  const handleSlideChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCurrentSlide1(value);
    if (swiperRef1.current) {
      swiperRef1.current.slideTo(value);
    }
  };

 // Slider 2

  const [currentSlide2, setCurrentSlide2] = useState(0);
  const swiperRef2 = useRef<any>(null); // Використовується для доступу до Swiper instance

  // Функція для оновлення слайда при зміні input range
  const handleSlideChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCurrentSlide2(value);
    if (swiperRef2.current) {
      swiperRef2.current.slideTo(value);
    }
  };

  // Slider 3
 
  const [currentSlide3, setCurrentSlide3] = useState(0);
  const swiperRef3 = useRef<any>(null); // Використовується для доступу до Swiper instance

  // Функція для оновлення слайда при зміні input range
  const handleSlideChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCurrentSlide3(value);
    if (swiperRef3.current) {
      swiperRef3.current.slideTo(value);
    }
  };

  // Slider 4
 
  const [currentSlide4, setCurrentSlide4] = useState(0);
  const swiperRef4 = useRef<any>(null); // Використовується для доступу до Swiper instance

  // Функція для оновлення слайда при зміні input range
  const handleSlideChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCurrentSlide4(value);
    if (swiperRef4.current) {
      swiperRef4.current.slideTo(value);
    }
  };


  return (
    <div className="main">
      <section className="empower">
        <div className="container">
          <div className="empower__inner">
            <div className="empower__top">
              <div className="empower__top--left">
                <h3 className="tag">Service</h3>
                <h1 className="title-secondary">
                  empower your brand to shine in the digital realm
                </h1>
              </div>
              <div className="empower__top--right">
                <p className="empower__top--right-text">
                  Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.
                </p>
              </div>
            </div>
            <div className="empower__bottom">
              <div className="empower__bottom--items">
                <div className="empower__bottom--item-bg">
                  <div className="empower__bottom--item-bg-wrapper">
                    <Image className="empower__bottom--item-bg-img" width={174} height={64} src="/img/section-empower/technologies.png" alt="" />
                    <div className="empower__bottom--item-bg-title">1200+</div>
                    <div className="empower__bottom--item-bg-text">Projects</div>
                  </div>
                </div>
                <div className="empower__bottom-bottom">
                  <div className="empower__bottom--item-grid">
                    <div className="empower__bottom--item-grid-img-wrapper">
                      <Image width={238} height={238} className="empower__bottom--item-grid-img" src="/img/section-empower/section-empower-img-1.jpg" alt="" />
                    </div>
                    <div className="empower__bottom--item-grid-img-wrapper">
                      <Image width={238} height={238} className="empower__bottom--item-grid-img" src="/img/section-empower/section-empower-img-2.jpg" alt="" />
                    </div>
                    <div className="empower__bottom--item-grid-img-wrapper">
                      <Image width={238} height={238} className="empower__bottom--item-grid-img" src="/img/section-empower/section-empower-img-3.jpg" alt="" />
                    </div>
                    <div className="empower__bottom--item-grid-img-wrapper">
                      <Image width={238} height={238} className="empower__bottom--item-grid-img" src="/img/section-empower/section-empower-img-4.jpg" alt="" />
                    </div>
                  </div>
                  <div className="empower__bottom--item-bg-sm">
                    <ul className="empower__bottom--item-bg-sm-list">
                      <li className="empower__bottom--item-bg-sm-item">Branding</li>
                      <li className="empower__bottom--item-bg-sm-item">UX/UI Design </li>
                      <li className="empower__bottom--item-bg-sm-item">App Development</li>
                      <li className="empower__bottom--item-bg-sm-item">Web Development</li>
                      <li className="empower__bottom--item-bg-sm-item">Digital Transformation</li>
                      <li className="empower__bottom--item-bg-sm-item">Technological Advancement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="branding">
        <div className="container-lg">
          <div className="branding__top">
            <div className="branding__top--left">
              <h3 className="tag">Service</h3>
              <h1 className="title-secondary">
                BRANDING & <br /> UX/UI
              </h1>
              <div className="branding__top--text">
                Our suite of services is designed to cater to every aspect of
                your online presence, from boosting your visibility to engaging
                your audience and driving conversions.
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
                    setCurrentSlide1(swiper.activeIndex)
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
                value={currentSlide1}
                onChange={handleSlideChange1}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="app">
        <div className="container-lg">
          <div className="app__top">
            <div className="app__top--left">
              <h3 className="tag">Service</h3>
              <h1 className="title-secondary">
                App & Web development
              </h1>
              <div className="app__top--text">
                Our suite of services is designed to cater to every aspect of
                your online presence, from boosting your visibility to engaging
                your audience and driving conversions.
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
                  onSlideChange={(swiper) =>
                    setCurrentSlide2(swiper.activeIndex)
                  } // Оновлюємо значення input при зміні слайду
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
                value={currentSlide2}
                onChange={handleSlideChange2}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="digital">
        <div className="container-lg">
          <div className="digital__top">
            <div className="digital__top--left">
              <h3 className="tag">Service</h3>
              <h1 className="title-secondary">
                digital transformation
              </h1>
              <div className="digital__top--text">
                Our suite of services is designed to cater to every aspect of
                your online presence, from boosting your visibility to engaging
                your audience and driving conversions.
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
                  onSlideChange={(swiper) =>
                    setCurrentSlide3(swiper.activeIndex)
                  } // Оновлюємо значення input при зміні слайду
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
                value={currentSlide3}
                onChange={handleSlideChange3}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="advancement">
        <div className="container-lg">
          <div className="advancement__top">
            <div className="advancement__top--left">
              <h3 className="tag">Service</h3>
              <h1 className="title-secondary">
                technological advancement
              </h1>
              <div className="advancement__top--text">
                Our suite of services is designed to cater to every aspect of
                your online presence, from boosting your visibility to engaging
                your audience and driving conversions.
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
                  onSlideChange={(swiper) =>
                    setCurrentSlide4(swiper.activeIndex)
                  } // Оновлюємо значення input при зміні слайду
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
                        <h3 className="advancement__slide--title">{item.title}</h3>
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
                value={currentSlide4}
                onChange={handleSlideChange4}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="magnetize">
            <div className="container-xs">
              <div className="magnetize__wrapper">
                <h1 className="title text-white">Let&apos;s <span className='text-bg'>magnetize</span> your online presence with our creative prowess and expert strategies </h1>
                <Circle>Let&apos;s talk</Circle>
              </div>
            </div>
      </section>
    </div>
  );
};

export default Service;
