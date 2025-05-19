import Image from "next/image";
import styles from '../../../styles/projects/index.module.scss';

const ProjectsSection = () => {
  return (
    <section className={styles.projects}>
      <div className="container">
        <div className={styles.projects__inner}>
          <div className={styles.projects__top}>
            <div className={styles.projects__top__left}>
              <div className="title">Projects</div>
              <div className={styles.projects__quantity}>1200+</div>
            </div>
            <div className={styles.projects__top__right}>
              <p className={styles.projects__top__right_text}>
                Take a look at some of our proudest moments, where creativity,
                strategy, and innovation came together to make brands shine in
                the digital realm. Our success stories are a testament to our
                dedication and expertise.
              </p>
            </div>
          </div>
          <div className={styles.projects__bottom}>
            <div className={styles.projects__bottom_items}>
              <div className={styles.projects__bottom_left}>
                <div className={styles.projects__bottom_left_img_wrapper_xl}>
                  <Image
                    width={501}
                    height={375}
                    className={styles.projects__bottom_left_img_xl}
                    src="/img/section-projects/section-projects-img-1.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.projects__bottom_left_img_wrapper_md}>
                  <Image
                    width={238}
                    height={375}
                    className={styles.projects__bottom_left_img_md}
                    src="/img/section-projects/section-projects-img-2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.projects__bottom_right}>
                <div className={styles.projects__bottom_right_top}>
                  <div className={styles.projects__bottom_right_img_wrapper_sm}>
                    <Image
                      width={239}
                      height={176}
                      className={styles.projects__bottom_right_img_sm}
                      src="/img/section-projects/section-projects-img-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className={styles.projects__bottom_right_img_wrapper_sm}>
                    <Image
                      width={239}
                      height={176}
                      className={styles.projects__bottom_right_img_sm}
                      src="/img/section-projects/section-projects-img-4.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className={styles.projects__bottom_right_bottom}>
                  <div className={styles.projects__bottom_right_img_wrapper_wide}>
                    <Image
                      width={501}
                      height={176}
                      className={styles.projects__bottom_right_img_wide}
                      src="/img/section-projects/section-projects-img-5.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
