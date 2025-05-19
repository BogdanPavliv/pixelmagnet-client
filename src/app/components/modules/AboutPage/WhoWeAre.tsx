import styles from '../../../styles/who-we-are/index.module.scss';

const WhoWeAre = () => {
  return (
    <section className={styles.who_we_are}>
        <div className="container">
          <div className={styles.who_we_are__inner}>
            <div className={styles.who_we_are__top}>
                <div className={styles.who_we_are__top__left}>
                  <h3 className={styles.who_we_are__title}>Who we are</h3>
                </div>
                <div className={styles.who_we_are__top__right}>
                  <p className={`${styles.who_we_are__text} ${styles.marginBottom}`}>Our journey began with a simple idea: to make the digital world accessible and profitable for businesses of all sizes. Founded in [Year of Establishment], we set out to bridge the gap between creativity and strategy, between technology and human connection.
                  </p>
                  <p className={styles.who_we_are__text}>
                   Over the years, we&apos;ve grown from a small team with big dreams to a dynamic agency that&apos;s making waves in the industry.
                  </p>
                </div>
            </div>
            <div className={styles.who_we_are__bottom}>
              <div className={styles.who_we_are__title__wrapper}>
               <h3 className={styles.who_we_are__title}>Our principles</h3>
              </div>
              <ul className={styles.who_we_are__list}>
                <li className={styles.who_we_are__item}>
                  <h4 className={styles.who_we_are__item__title}>Creativity unleashed</h4>
                  <p className={styles.who_we_are__text}>We believe in the limitless power of creativity to transform brands and captivate audiences. Our work is a testament to pushing boundaries and thinking beyond the conventional.
                  </p>
                </li>
                <li className={styles.who_we_are__item}>
                  <h4 className={styles.who_we_are__item__title}>Client-Centric Approach</h4>
                  <p className={styles.who_we_are__text}>Your success is our top priority. We listen, we adapt, and we deliver tailored solutions that align with your goals and aspirations.
                  </p>
                </li>
                <li className={styles.who_we_are__item}>
                  <h4 className={styles.who_we_are__item__title}>Transparency and Integrity</h4>
                  <p className={styles.who_we_are__text}>We uphold the highest standards of integrity and transparency in everything we do, ensuring trust and accountability in every client relationship.
                  </p>
                </li>
                <li className={styles.who_we_are__item}>
                  <h4 className={styles.who_we_are__item__title}>Continuous Learning</h4>
                  <p className={styles.who_we_are__text}>In the dynamic world of digital, knowledge is power. We&apos;re committed to staying at the forefront of industry trends and technologies, so you can benefit from the latest innovations.
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