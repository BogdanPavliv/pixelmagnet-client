import styles from '../../../styles/project-info/index.module.scss';
const ProjectInfo = () => {
  return (
    <section className={styles.project_info}>
      <div className="container">
        <div className={styles.project_info__table}>
          <div className={styles.project_info__table__row}>
            <div className={styles.project_info__table__row_left}>
              <h3 className={styles.project_info__table__title}>The client</h3>
            </div>
            <div className={styles.project_info__table__row_right}>
              <p className={styles.project_info__table__text}>
                Take a look at some of our proudest moments, where creativity,
                strategy, and innovation came together to make brands shine in
                the digital realm. Our success stories are a testament to our
                dedication and expertise.
              </p>
            </div>
          </div>
          <div className={styles.project_info__table__row}>
            <div className={styles.project_info__table__row_left}>
              <h3 className={styles.project_info__table__title}>Discipline used</h3>
            </div>
            <div className={styles.project_info__table__row_right}>
              <ul className={styles.project_info__table__list}>
                <li className={styles.project_info__table__item}>UX/UI Design</li>
                <li className={styles.project_info__table__item}>Micro-animations</li>
                <li className={styles.project_info__table__item}>
                  WordPress Development
                </li>
                <li className={styles.project_info__table__item}>
                  Guttenberg Block Development
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.project_info__table__row}>
            <div className={styles.project_info__table__row_left}>
              <h3 className={styles.project_info__table__title}>Project type</h3>
            </div>
            <div className={styles.project_info__table__row_right}>
              <p className={styles.project_info__table__text}>
                UX/UI & App Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
