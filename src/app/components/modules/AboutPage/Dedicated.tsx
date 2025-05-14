"use client"
import React, { useState } from "react";
import Image from 'next/image';
import FsLightbox from "fslightbox-react";
import CountUp from "react-countup";

const Dedicated = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);
  return (
    <section className="dedicated">
        <div className="container">
            <div className="dedicated__inner">
              <div className='dedicated__top'>
                <div className="dedicated__top--left">
                  <h3 className="tag">About</h3>
                  <h1 className="title-secondary">
                    dedicated to helping your brand thrive in the ever-evolving digital landscape.
                  </h1>
                </div>
                <div className="dedicated__top--right">
                  <div className="dedicated__video--wrapper video">
                    <Image width={501} height={281} className="video__img" src="/img/section-about/section-about-img.png" alt="" />
                    <a className="video__link" href="#" onClick={() => setToggler(!toggler)}>
                    <Image width={56} height={56} className="play-btn" src="/img/section-about/play-circle.svg" alt="" />
                    </a>
                    <FsLightbox
                      toggler={toggler}
                      sources={[
                        'https://www.youtube.com/watch?v=F6CJtIk457g',
                      ]}
                    />
                  </div>
                  <p className="dedicated__top--right-text">
                  Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.
                </p>
                </div>
              </div>
              <div className='dedicated__bottom'>
                <ul className="dedicated__list">
                  <li className="dedicated__item">
                    <div className="dedicated__item--left">
                      <CountUp start={1195} end={1200} separator="" className="dedicated__item--title" />
                      <span>+</span>
                    </div>
                    <div className="dedicated__item--right">
                      <p className="dedicated__item--text">Companies <br /> were helped</p>
                    </div>
                  </li>
                  <li className="dedicated__item">
                    <div className="dedicated__item--left">
                      <CountUp start={350} end={400} className="dedicated__item--title" />
                      <span>+</span>
                    </div>
                    <div className="dedicated__item--right">
                      <p className="dedicated__item--text">International <br /> clients</p>
                    </div>
                  </li>
                  <li className="dedicated__item">
                    <div className="dedicated__item--left">
                      <CountUp start={100} end={150} className="dedicated__item--title" />
                      <span>+</span>
                    </div>
                    <div className="dedicated__item--right">
                      <p className="dedicated__item--text">Team <br /> members</p>
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