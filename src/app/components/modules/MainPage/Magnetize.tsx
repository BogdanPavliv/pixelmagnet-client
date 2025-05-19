import React from 'react'
import Circle from '../../../components/UI/Circle';
import "../../../globalStyles/globals.scss";
import styles from '../../../styles/magnetize/index.module.scss';

const Magnetize = () => {
  return (
    <section className={styles.magnetize}>
        <div className="container-xs">
            <div className={styles.magnetize__wrapper}>
                <h1 className={`${styles.magnetize__title} ${"title text-white"}`}>Let&apos;s <span className='text-bg'>magnetize</span> your online presence with our creative prowess and expert strategies </h1>
                <Circle>Let&apos;s talk</Circle>
            </div>
        </div>
    </section>
  )
}

export default Magnetize