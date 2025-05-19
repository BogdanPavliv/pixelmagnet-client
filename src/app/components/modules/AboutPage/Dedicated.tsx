"use client"
import React, { useState } from "react";
import Image from 'next/image';
import FsLightbox from "fslightbox-react";
import CountUp from "react-countup";
import styles from '../../../styles/dedicated/index.module.scss';

const Dedicated = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);
  return (
    <section className={styles.dedicated}>
        <div className="container">
            <div className={styles.dedicated__inner}>
              <div className={styles.dedicated__top}>
                <div className={styles.dedicated__top__left}>
                  <h3 className={styles.tag}>About</h3>
                  <h1 className="title-secondary">
                    dedicated to helping your brand thrive in the ever-evolving digital landscape.
                  </h1>
                </div>
                <div className={styles.dedicated__top__right}>
                  <div className={`${styles.dedicated__video__wrapper} ${styles.video}`}>
                    <Image width={501} height={281} className={styles.video__img} src="/img/section-about/section-about-img.png" alt="" />
                    <a className={styles.video__link} href="#" onClick={() => setToggler(!toggler)}>
                    <Image width={56} height={56} className="play-btn" src="/img/section-about/play-circle.svg" alt="" />
                    </a>
                    <FsLightbox
                      toggler={toggler}
                      sources={[
                        'https://www.youtube.com/watch?v=F6CJtIk457g',
                      ]}
                    />
                  </div>
                  <p className={styles.dedicated__top__right_text}>
                  Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.
                </p>
                </div>
              </div>
              <div className={styles.dedicated__bottom}>
                <ul className={styles.dedicated__list}>
                  <li className={styles.dedicated__item}>
                    <div className={styles.dedicated__item__left}>
                      <CountUp start={1195} end={1200} separator="" className={styles.dedicated__item__title} />
                      <span>+</span>
                    </div>
                    <div className={styles.dedicated__item__right}>
                      <p className={styles.dedicated__item__text}>Companies <br /> were helped</p>
                    </div>
                  </li>
                  <li className={styles.dedicated__item}>
                    <div className={styles.dedicated__item__left}>
                      <CountUp start={350} end={400} className={styles.dedicated__item__title} />
                      <span>+</span>
                    </div>
                    <div className={styles.dedicated__item__right}>
                      <p className={styles.dedicated__item__text}>International <br /> clients</p>
                    </div>
                  </li>
                  <li className={styles.dedicated__item}>
                    <div className={styles.dedicated__item__left}>
                      <CountUp start={100} end={150} className={styles.dedicated__item__title} />
                      <span>+</span>
                    </div>
                    <div className={styles.dedicated__item__right}>
                      <p className={styles.dedicated__item__text}>Team <br /> members</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </section>
  )
}

export default Dedicated