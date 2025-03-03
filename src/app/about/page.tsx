"use client"

import React, { useState } from "react";
import Image from 'next/image';

import {useLenis} from "../hooks/useLenis";

import FsLightbox from "fslightbox-react";
import CountUp from "react-countup";
import Circle from '../components/UI/Circle';
import { dataTeam } from "../utils/data";

type Props = {}

const AboutPage = (props: Props) => {
  // Плавний скрол
  useLenis();
  
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);

  return (
    <div className="main">
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
      <section className="mission">
        <div className="container">
          <div className="mission__wrapper">
            <h1 className="title text-white">Our <br /> mission</h1>
            <p className="mission__text">We are committed to delivering exceptional results for our clients through a combination of creativity, data-driven strategies, and unwavering dedication.</p>
          </div>
        </div>
      </section>
      <section className="who-we-are">
        <div className="container">
          <div className="who-we-are__inner">
            <div className="who-we-are__top">
                <div className="who-we-are__top--left">
                  <h3 className="who-we-are__title">Who we are</h3>
                </div>
                <div className="who-we-are__top--right">
                  <p className="who-we-are__text marginBottom">Our journey began with a simple idea: to make the digital world accessible and profitable for businesses of all sizes. Founded in [Year of Establishment], we set out to bridge the gap between creativity and strategy, between technology and human connection.
                  </p>
                  <p className="who-we-are__text">
                   Over the years, we&apos;ve grown from a small team with big dreams to a dynamic agency that&apos;s making waves in the industry.
                  </p>
                </div>
            </div>
            <div className="who-we-are__bottom">
              <div className="who-we-are__title--wrapper">
               <h3 className="who-we-are__title">Our principles</h3>
              </div>
              <ul className="who-we-are__list">
                <li className="who-we-are__item">
                  <h4 className="who-we-are__item--title">Creativity unleashed</h4>
                  <p className="who-we-are__text">We believe in the limitless power of creativity to transform brands and captivate audiences. Our work is a testament to pushing boundaries and thinking beyond the conventional.
                  </p>
                </li>
                <li className="who-we-are__item">
                  <h4 className="who-we-are__item--title">Client-Centric Approach</h4>
                  <p className="who-we-are__text">Your success is our top priority. We listen, we adapt, and we deliver tailored solutions that align with your goals and aspirations.
                  </p>
                </li>
                <li className="who-we-are__item">
                  <h4 className="who-we-are__item--title">Transparency and Integrity</h4>
                  <p className="who-we-are__text">We uphold the highest standards of integrity and transparency in everything we do, ensuring trust and accountability in every client relationship.
                  </p>
                </li>
                <li className="who-we-are__item">
                  <h4 className="who-we-are__item--title">Continuous Learning</h4>
                  <p className="who-we-are__text">In the dynamic world of digital, knowledge is power. We&apos;re committed to staying at the forefront of industry trends and technologies, so you can benefit from the latest innovations.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="meet-team">
        <div className="container">
          <div className="meet-team__inner">
            <div className="meet-team__top">
              <h1 className="title">meet Our core team</h1>
            </div>
            <div className="meet-team__bottom">
              <div className="meet-team__bottom--top">
               <Image width={1290} height={377} className="meet-team__image" src="/img/section-meet-team/section-meet-team-img.jpg" alt="" />
              </div>
              <div className="meet-team__bottom--bottom">
                <ul className="meet-team__list">
                  {dataTeam.map((item) => (
                    <li className="meet-team__item" key={item.id}>
                      <Image width={298} height={298} className="meet-team__item-image" src={item.image} alt={item.name} />
                      <h4 className="meet-team__item-name">{item.name}</h4>
                      <p className="meet-team__item-role">{item.role}</p>
                    </li>
                  ))}
                </ul>
              </div>
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

export default AboutPage;