"use client";
import React from "react";
import Image from "next/image";
import styles from '../../../styles/begin/index.module.scss';

const Begin = () => {
  return (
    <section className={styles.begin}>
      <div className="container">
        <div className={styles.begin__inner}>
          <div className={styles.begin__top}>
            <div className={styles.begin__top__left}>
              <h1 className="title ellipse">Begin your Digital Odyssey</h1>
              <p className={styles.begin__text}>
                We&apos;re the explorers of the digital frontier. Join us on an
                epic odyssey to discover the uncharted territories of online
                success.
              </p>
            </div>
            <div className={styles.begin__top__right}>
              <div className={styles.our_service}>Our service</div>
              <ul className={styles.begin__list}>
                <li className={styles.begin__item}>Branding</li>
                <li className={styles.begin__item}>UX/UI Design </li>
                <li className={styles.begin__item}>App Development</li>
                <li className={styles.begin__item}>Web Development</li>
                <li className={styles.begin__item}>Digital Transformation</li>
              </ul>
              <button className="add" type="button">
                Explore more
              </button>
            </div>
          </div>
          <div className={styles.begin__bottom}>
            <div className={styles.begin__bottom__wrapper}>
              <div className={styles.begin__image__wrapper}>
                <Image
                  className={styles.begin__image}
                  src="/img/section-begin/section-begin-img.jpg"
                  width={1376}
                  height={424}
                  alt="begin"
                />
              </div>

              <div className={styles.compaties_helped}>
                <div className={styles.compaties_helped__digit}>1200+</div>
                <p className={styles.compaties_helped__text}>Companies were helped</p>
              </div>
              <div className={styles.quote}>
                <p className={styles.quote__text}>
                  PixelMagnet has earned its place as a digital marketing
                  frontrunner. Their innovative strategies and creative prowess
                  make them a force to be reckoned with in the industry.
                </p>
                <div className={styles.quote__author}>
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
