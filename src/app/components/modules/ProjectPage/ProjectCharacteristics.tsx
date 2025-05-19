import styles from '../../../styles/project-characteristics/index.module.scss';
const ProjectCharacteristics = () => {
  return (
    <section className={styles.project_characteristics}>
      <div className="container">
        <div className={styles.project_characteristics__inner}>
          <div className={styles.project_characteristics__top}>
            <h3 className={styles.project_characteristics__title}>Background</h3>
            <p className={styles.project_characteristics__text}>
              Take a look at some of our proudest moments, where creativity,
              strategy, and innovation came together to make brands shine in the
              digital realm. Our success stories are a testament to our
              dedication and expertise.
            </p>
          </div>
          <div className={styles.project_characteristics__bottom}>
            <div className={styles.project_characteristics__bottom__left}>
              <h3 className={styles.project_characteristics__title}>Design process</h3>
            </div>
            <div className={styles.project_characteristics__bottom__right}>
              <ul className={styles.project_characteristics__list}>
                <li className={styles.project_characteristics__item}>
                  <h4 className={styles.project_characteristics__item__title}>
                    Parallax Scrolling
                  </h4>
                  <p className={styles.project_characteristics__text}>
                    Take a look at some of our proudest moments, where
                    creativity, strategy, and innovation came together to make
                    brands shine in the digital realm. Our success stories are a
                    testament to our dedication and expertise.
                  </p>
                </li>
                <li className={styles.project_characteristics__item}>
                  <h4 className={styles.project_characteristics__item__title}>
                    Parallax Scrolling
                  </h4>
                  <p className={styles.project_characteristics__text}>
                    Take a look at some of our proudest moments, where
                    creativity, strategy, and innovation came together to make
                    brands shine in the digital realm. Our success stories are a
                    testament to our dedication and expertise.
                  </p>
                </li>
                <li className={styles.project_characteristics__item}>
                  <h4 className={styles.project_characteristics__item__title}>
                    Parallax Scrolling
                  </h4>
                  <p className={styles.project_characteristics__text}>
                    Take a look at some of our proudest moments, where
                    creativity, strategy, and innovation came together to make
                    brands shine in the digital realm. Our success stories are a
                    testament to our dedication and expertise.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCharacteristics;
