"use client"
import React, { useState, useRef } from 'react';
import Image from "next/image";

import {useLenis} from "./hooks/useLenis";

import Circle from './components/UI/Circle';
import Promo from "./components/promo/Promo";
import SlideNavigation from "./components/UI/SlideNavigation";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';

import {dataBrands} from "./utils/data";
import {dataFaetured} from "./utils/data";
import {dataTestimonials} from "./utils/data";
import {sliderBrandsSettings} from "./utils/common";
import {sliderFeaturedSettings} from "./utils/common";
import {sliderTestimonialsSettings} from "./utils/common";

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

const Home = () => {
  // Плавний скрол
  useLenis();

  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<any>(null);  // Використовується для доступу до Swiper instance

  // Функція для оновлення слайда при зміні input range
  const handleSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCurrentSlide(value);
    if (swiperRef.current) {
      swiperRef.current.slideTo(value);
    }
  };

  const testimonialsRef = useRef(null);

  return (
    <div className="main">
      <section className="begin">
       <div className="container">
          <div className="begin__inner">
            <div className="begin__top">
              <div className="begin__top__left">
                <h1 className="title ellipse">Begin your   Digital Odyssey</h1>
                <p className="begin__text">We&apos;re the explorers of the digital frontier. Join us on an epic odyssey to discover the uncharted territories of online success.</p>
              </div>
              <div className="begin__top__right">
                <div className="our-service">Our service</div>
                <ul className="begin__list">
                  <li className="begin__item">Branding</li>
                  <li className="begin__item">UX/UI Design </li>
                  <li className="begin__item">App Development</li>
                  <li className="begin__item">Web Development</li>
                  <li className="begin__item">Digital Transformation</li>
                </ul>
                <button className="add" type="button">Explore more</button>
              </div>
            </div>
            <div className="begin__bottom">
              <div className="begin__bottom__wrapper">
                  <div className="begin__image__wrapper">
                     <Image className="begin__image" src="/img/section-begin/section-begin-img.jpg" width={1376} height={424} alt="begin"/>
                  </div>
                  
                  <div className="compaties_helped">
                    <div className="compaties_helped__digit">1200+</div>
                    <p className="compaties_helped__text">Companies
                    were helped</p>
                  </div>
                  <div className="quote">
                    <p className="quote__text">PixelMagnet has earned its place as a digital marketing frontrunner. Their innovative strategies and creative prowess make them a force to be reckoned with in the industry.</p>
                    <div className="quote__author">- Digital Marketing Magazine</div>
                  </div>
              </div>
            </div>
          </div>
       </div>
      </section>
      <section className="trusted-by">
        <div className="container-max">
          <div className="trusted-by__wrapper">
            <h3 className="trusted-by__title">TRUSTED BY THE WORLD’S LEADING COMPANIES</h3>
            <div className="trusted-by__slider--wrapper">
              <Slider
              {...sliderBrandsSettings}
              className="slick-brands"
              >
                {
                  dataBrands.map((brand: any) => (
                    <div key={brand.id} className="brands__slide--wrapper">
                      <div className="brands__slide">
                        <div className={ brand.accent ? "brands__name accent" : "brands__name"}>{brand.name}</div>
                      </div>
                    </div>
                  ))
                }
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-works">
        <div className="container-lg">
          <div className="featured-works__top">
           <h1 className="title">Featured works</h1>
           <a className="top--link" href="">
              View all
              <Image className="link-img" src="/img/section-featured-works/arrow-right.svg" width={36} height={36} alt="arrow right"/>
           </a>
          </div>
          <div className="featured-works__bottom">
            <div className="container-right">
              <div className="featured-works__slider--wrapper">
                <Swiper
                  {...sliderFeaturedSettings}
                  onSwiper={(swiper) => { swiperRef.current = swiper; }} // Зберігаємо інстанс swiper
                  onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}  // Оновлюємо значення input при зміні слайду
                  className="swiper-featured"
                >
                  {dataFaetured.map((item, i) => (
                    <SwiperSlide key={i} className="featured__slide--wrapper">
                      <div className="featured__slide">
                        <div className="featured__slide--img-wrapper">
                        <Image width={548} height={600} className="featured__slide--img" src={item.image} alt={item.title} />
                        {item.promo && <Promo/>}
                        </div>
                        <h3 className="featured__slide--title">{item.title}</h3>
                        <p className="featured__slide--text">{item.text}</p>
                        
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="featured-works__slider--controls">
              {/* Input для перемикання слайдів */}
              <input
                className="featured-works__slider--range"
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
      <section className="what-we-do">
        <div className="container">
          <div className="what-we-do__top">
           <h1 className="title">What we do</h1>
           <a className="top--link" href="">
              Learn more
              <Image className="link-img" src="/img/section-featured-works/arrow-right.svg" width={36} height={36} alt="arrow right"/>
           </a>
          </div>
          <div className="what-we-do__bottom">
            <div className="what-we-do__bottom-top">
              <div className="what-we-do__img-wrapper">
                <Image width={461} height={303} className="what-we-do__img" src="/img/section-what-we-do/what-we-do-img.png" alt="What we do" /> 
              </div>
              
              <h3 className="what-we-do__text">We&apos;re not your average marketing agency. We&apos;re a bunch of digital nomads on a mission to make your brand shine.</h3>
            </div>
            <div className="what-we-do__bottom-bottom">
              <div className="what-we-do__grid">
                <div className="what-we-do__grid-item">Branding <br /> design</div>
                <div className="what-we-do__grid-item">UX/UI <br /> design</div>
                <div className="what-we-do__grid-item">App <br /> development</div>
                <div className="what-we-do__grid-item">WEB <br /> development</div>
                <div className="what-we-do__grid-item">Digital <br /> transformation</div>
                <div className="what-we-do__grid-item">Technological <br /> Advancement</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <div className="testimonials--wrapper">
            <div className="testimonials__slider--wrapper">
              <Swiper 
                {...sliderTestimonialsSettings}
                className='slider-testimonials'
                direction={"vertical"} // Вертикальний напрямок
                pagination={{
                  el: '.custom-pagination', // Вказуємо контейнер для пагінації
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<span class="${className} custom-bullet"></span>`;
                  },
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                modules={[Pagination, Navigation]}
              >
                {
                  dataTestimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className='testimonials__slide--wrapper'>
                      <div className='testimonials__slide'>
                        <div className="testimonials__slide--quote">{testimonial.quote}</div>
                        <div className="testimonials__slide--bottom">
                        <Image className='testimonials__slide--image' width={72} height={72} src={testimonial.image} alt={testimonial.name} />
                          <div className="testimonials__slide--text">
                            <div className="testimonials__slide--name">{testimonial.name}</div>
                            <div className="testimonials__slide--role">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
            <div className="testimonials__slider--controls">
              <SlideNavigation testimonialsRef={testimonialsRef} />
            </div>
          </div>
          
        </div>
      </section>
      <section className="magnetize">
            <div className="container-xs">
              <div className="magnetize__wrapper">
                <h1 className="title text-white">Let&apos;s <span className='text-bg'>magnetize</span> your online presence with our creative prowess and expert strategies </h1>
                <Circle>Let&apos; talk</Circle>
              </div>
            </div>
      </section>
    </div>
  );
}

export default Home;
