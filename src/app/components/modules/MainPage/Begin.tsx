"use client";
import React from "react";
import Image from "next/image";

const Begin = () => {
  return (
    <section className="begin">
      <div className="container">
        <div className="begin__inner">
          <div className="begin__top">
            <div className="begin__top__left">
              <h1 className="title ellipse">Begin your Digital Odyssey</h1>
              <p className="begin__text">
                We&apos;re the explorers of the digital frontier. Join us on an
                epic odyssey to discover the uncharted territories of online
                success.
              </p>
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
              <button className="add" type="button">
                Explore more
              </button>
            </div>
          </div>
          <div className="begin__bottom">
            <div className="begin__bottom__wrapper">
              <div className="begin__image__wrapper">
                <Image
                  className="begin__image"
                  src="/img/section-begin/section-begin-img.jpg"
                  width={1376}
                  height={424}
                  alt="begin"
                />
              </div>

              <div className="compaties_helped">
                <div className="compaties_helped__digit">1200+</div>
                <p className="compaties_helped__text">Companies were helped</p>
              </div>
              <div className="quote">
                <p className="quote__text">
                  PixelMagnet has earned its place as a digital marketing
                  frontrunner. Their innovative strategies and creative prowess
                  make them a force to be reckoned with in the industry.
                </p>
                <div className="quote__author">
                  - Digital Marketing Magazine
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Begin;
