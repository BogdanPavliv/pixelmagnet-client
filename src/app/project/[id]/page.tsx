"use client"

import React, { useState, useRef } from 'react';
import Image from "next/image";

import {useLenis} from "../../hooks/useLenis";

import Promo from "../../components/promo/Promo";
import SlideNavigation from "../../components/UI/SlideNavigation";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';

import {dataFaetured} from "../../utils/data";
import {dataTestimonials} from "../../utils/data";
import {sliderFeaturedSettings} from "../../utils/common";
import {sliderTestimonialsSettings} from "../../utils/common";

import Circle from '../../components/UI/Circle';

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

import { dataProjects } from "../../utils/data";

// Визначення типу Project (за потреби)
type Project = {
  id: number;
  title: string;
  text: string;
  images: {
    image: string;
    image2: string;
    image3: string;
    image4: string;
  };
};

const ProjectPage = ({ params }: { params: { id: string } }) => {
  // Плавний скрол
  useLenis();

  // slider swiper
  
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

  // slider swiper

  const testimonialsRef = useRef(null);
 
  // 

  const projectId = parseInt(params.id, 10);
  const project = dataProjects.find(p => p.id === projectId);

  if (!project) return <p>Project not found</p>;

  return (
    <div className='main'>
        <section className="project-details">
            <div className="container">
              <div className="project-details__inner">
                <div className="project-details__top">
                  <div className="project-details__top--left">
                    <div className="tag">Project details</div>
                    <h1 className="title">{project.title}</h1>
                  </div>
                  <div className="project-details__top--right">
                    <p className="project-details__top--right-text">UX/UI & App Development 2022</p>
                  </div>
                </div>
                <div className="project-details__bottom">
                  <div className="project-details__bottom--img-wrapper">
                   <Image width={1290} height={572} className="project-details__bottom--img" src={project.images.image} alt="" />      
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className="project-info">
            <div className="container">
                <div className="project-info__table">
                    <div className="project-info__table--row">
                     <div className="project-info__table--row-left">
                        <h3 className="project-info__table--title">The client</h3>
                     </div>
                     <div className="project-info__table--row-right">
                        <p className="project-info__table--text">Take a look at some of our proudest moments, where creativity, strategy, and innovation came together to make brands shine in the digital realm. Our success stories are a testament to our dedication and expertise.</p>
                     </div>
                    </div>
                    <div className="project-info__table--row">
                     <div className="project-info__table--row-left">
                        <h3 className="project-info__table--title">Discipline used</h3>
                     </div>
                     <div className="project-info__table--row-right">
                        <ul className="project-info__table--list">
                            <li className="project-info__table--item">UX/UI Design</li>
                            <li className="project-info__table--item">Micro-animations</li>
                            <li className="project-info__table--item">WordPress Development</li>
                            <li className="project-info__table--item">Guttenberg Block Development</li>
                        </ul>
                     </div>
                    </div>
                    <div className="project-info__table--row">
                     <div className="project-info__table--row-left">
                        <h3 className="project-info__table--title">Project type</h3>
                     </div>
                     <div className="project-info__table--row-right">
                        <p className="project-info__table--text">UX/UI & App Development</p>
                     </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="project-characteristics">
          <div className="container">
            <div className="project-characteristics__inner">
              <div className="project-characteristics__top">
                <h3 className="project-characteristics__title">Background</h3>
                <p className="project-characteristics__text">Take a look at some of our proudest moments, where creativity, strategy, and innovation came together to make brands shine in the digital realm. Our success stories are a testament to our dedication and expertise.</p>
              </div>
              <div className="project-characteristics__bottom">
                <div className="project-characteristics__bottom--left">
                 <h3 className="project-characteristics__title">Design process</h3>
                </div>
                <div className="project-characteristics__bottom--right">
                  <ul className="project-characteristics__list">
                    <li className="project-characteristics__item">
                      <h4 className="project-characteristics__item--title">Parallax Scrolling</h4>
                      <p className="project-characteristics__text">Take a look at some of our proudest moments, where creativity, strategy, and innovation came together to make brands shine in the digital realm. Our success stories are a testament to our dedication and expertise.</p>
                    </li>
                    <li className="project-characteristics__item">
                      <h4 className="project-characteristics__item--title">Parallax Scrolling</h4>
                      <p className="project-characteristics__text">Take a look at some of our proudest moments, where creativity, strategy, and innovation came together to make brands shine in the digital realm. Our success stories are a testament to our dedication and expertise.</p>
                    </li>
                    <li className="project-characteristics__item">
                      <h4 className="project-characteristics__item--title">Parallax Scrolling</h4>
                      <p className="project-characteristics__text">Take a look at some of our proudest moments, where creativity, strategy, and innovation came together to make brands shine in the digital realm. Our success stories are a testament to our dedication and expertise.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="project-gallery">
          <div className="container">
            <div className="project-gallery__inner">
              <div className="project-gallery__top">
                <div className="project-gallery__img-lg-wrapper">
                 <Image width={763} height={510} className="project-gallery__img-lg" src={project.images.image2} alt="" />
                </div>
                <div className="project-gallery__img-sm-wrapper">
                 <Image width={501} height={510} className="project-gallery__img-sm" src={project.images.image3} alt="" />
                </div>
              </div>
              <div className="project-gallery__bottom">
                <div className="project-gallery__img-sm-wrapper">
                <Image width={501} height={510} className="project-gallery__img-sm" src={project.images.image4} alt="" />
                </div>
                <div className="project-gallery__img-lg-wrapper">
                  <Image width={763} height={510} className="project-gallery__img-lg" src={project.images.image5} alt="" />
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
                            <Image width={72} height={72} className='testimonials__slide--image' src={testimonial.image} alt={testimonial.name} />
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
        <section className="featured-works">
          <div className="container-lg">
            <div className="featured-works__top">
            <h1 className="title">Other works</h1>
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
                    className="swiper-project"
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
        <section className="magnetize">
            <div className="container-xs">
              <div className="magnetize__wrapper">
                <h1 className="title text-white">Let&apos;s <span className='text-bg'>magnetize</span> your online presence with our creative prowess and expert strategies </h1>
                <Circle>Let&apos;s talk</Circle>
              </div>
            </div>
      </section>
    </div>
  )
}

export default ProjectPage;