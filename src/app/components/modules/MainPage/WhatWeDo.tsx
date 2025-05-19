import React from 'react'
import Image from "next/image";
import styles from '../../../styles/what-we-do/index.module.scss';

const WhatWeDo = () => {
  return (
    <section className={styles.what_we_do}>
        <div className="container">
            <div className={styles.what_we_do__top}>
            <h1 className={`title ${styles.what_we_do__title}`}>What we do</h1>
            <a className="top--link" href="">
                Learn more
                <Image className="link-img" src="/img/section-featured-works/arrow-right.svg" width={36} height={36} alt="arrow right"/>
            </a>
            </div>
            <div className={styles.what_we_do__bottom}>
            <div className={styles.what_we_do__bottom_top}>
                <div className={styles.what_we_do__img_wrapper}>
                <Image width={461} height={303} className={styles.what_we_do__img} src="/img/section-what-we-do/what-we-do-img.png" alt="What we do" /> 
                </div>
                <h3 className={styles.what_we_do__text}>We&apos;re not your average marketing agency. We&apos;re a bunch of digital nomads on a mission to make your brand shine.</h3>
            </div>
            <div className={styles.what_we_do__bottom_bottom}>
                <div className={styles.what_we_do__grid}>
                <div className={styles.what_we_do__grid_item}>Branding <br /> design</div>
                <div className={styles.what_we_do__grid_item}>UX/UI <br /> design</div>
                <div className={styles.what_we_do__grid_item}>App <br /> development</div>
                <div className={styles.what_we_do__grid_item}>WEB <br /> development</div>
                <div className={styles.what_we_do__grid_item}>Digital <br /> transformation</div>
                <div className={styles.what_we_do__grid_item}>Technological <br /> Advancement</div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default WhatWeDo