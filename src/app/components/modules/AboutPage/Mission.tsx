import "../../../globalStyles/globals.scss";
import styles from '../../../styles/mission/index.module.scss';

const Mission = () => {
  return (
    <section className={styles.mission}>
        <div className="container">
          <div className={styles.mission__wrapper}>
            <h1 className={`title ${styles.text_white}`}>Our <br /> mission</h1>
            <p className={styles.mission__text}>We are committed to delivering exceptional results for our clients through a combination of creativity, data-driven strategies, and unwavering dedication.</p>
          </div>
        </div>
    </section>
  )
}

export default Mission