import React from 'react'

const WhoWeAre = () => {
  return (
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
  )
}

export default WhoWeAre