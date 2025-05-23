"use client";
import React, { useRef } from 'react';
import Image from "next/image";

import SlideNavigation from "../../../components/UI/SlideNavigation";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';

import {dataTestimonials} from "../../../utils/data";
import {sliderTestimonialsSettings} from "../../../utils/common";

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
  const testimonialsRef = useRef(null);
  return (
    <section className="testimonials">
        <div className="container">
          <div className="testimonials--wrapper">
            <div className="testimonials__slider--wrapper">
              <Swiper 
                {...sliderTestimonialsSettings}
                className='slider-testimonials'
                direction={"vertical"} 
                pagination={{
                  el: '.custom-pagination', 
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
  )
}

export default Testimonials