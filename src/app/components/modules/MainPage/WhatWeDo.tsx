import React from 'react'
import Image from "next/image";

const WhatWeDo = () => {
  return (
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
  )
}

export default WhatWeDo