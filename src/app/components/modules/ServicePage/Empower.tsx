import Image from "next/image";
import styles from '../../../styles/empower/index.module.scss';

const Empower = () => {
  return (
    <section className={styles.empower}>
        <div className="container">
            <div className={styles.empower__inner}>
                <div className={styles.empower__top}>
                  <div className={styles.empower__top__left}>
                    <h3 className={styles.tag}>Service</h3>
                    <h1 className={`title-secondary ${styles.empower__title_secondary}`}>
                      empower your brand to shine in the digital realm
                    </h1>
                  </div>
                  <div className={styles.empower__top__right}>
                    <p className={styles.empower__top__right_text}>
                      Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.
                    </p>
                  </div>
                </div>
                <div className={styles.empower__bottom}>
                  <div className={styles.empower__bottom__items}>
                    <div className={styles.empower__bottom__item_bg}>
                      <div className={styles.empower__bottom__item_bg_wrapper}>
                        <Image className={styles.empower__bottom__item_bg_img} width={174} height={64} src="/img/section-empower/technologies.png" alt="" />
                        <div className={styles.empower__bottom__item_bg_title}>1200+</div>
                        <div className={styles.empower__bottom__item_bg_text}>Projects</div>
                      </div>
                    </div>
                    <div className={styles.empower__bottom_bottom}>
                      <div className={styles.empower__bottom__item_grid}>
                        <div className={styles.empower__bottom__item_grid_img_wrapper}>
                          <Image width={238} height={238} className={styles.empower__bottom__item_grid_img} src="/img/section-empower/section-empower-img-1.jpg" alt="" />
                        </div>
                        <div className={styles.empower__bottom__item_grid_img_wrapper}>
                          <Image width={238} height={238} className={styles.empower__bottom__item_grid_img} src="/img/section-empower/section-empower-img-2.jpg" alt="" />
                        </div>
                        <div className={styles.empower__bottom__item_grid_img_wrapper}>
                          <Image width={238} height={238} className={styles.empower__bottom__item_grid_img} src="/img/section-empower/section-empower-img-3.jpg" alt="" />
                        </div>
                        <div className={styles.empower__bottom__item_grid_img_wrapper}>
                          <Image width={238} height={238} className={styles.empower__bottom__item_grid_img} src="/img/section-empower/section-empower-img-4.jpg" alt="" />
                        </div>
                      </div>
                      <div className={styles.empower__bottom__item_bg_sm}>
                        <ul className={styles.empower__bottom__item_bg_sm_list}>
                          <li className={styles.empower__bottom__item_bg_sm_item}>Branding</li>
                          <li className={styles.empower__bottom__item_bg_sm_item}>UX/UI Design </li>
                          <li className={styles.empower__bottom__item_bg_sm_item}>App Development</li>
                          <li className={styles.empower__bottom__item_bg_sm_item}>Web Development</li>
                          <li className={styles.empower__bottom__item_bg_sm_item}>Digital Transformation</li>
                          <li className={styles.empower__bottom__item_bg_sm_item}>Technological Advancement</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Empower