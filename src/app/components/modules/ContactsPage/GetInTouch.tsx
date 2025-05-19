import Image from "next/image";
import styles from '../../../styles/get-in-touch/index.module.scss';

const GetInTouch = () => {
  return (
    <section className="get_in_touch">
      <div className="container">
        <div className={styles.get_in_touch__inner}>
          <div className={styles.get_in_touch__left}>
            <h3 className="tag">Get in touch</h3>
            <h1 className="title ellipse">
              Ready to take your digital presence to the next level?
            </h1>
            <p className={styles.get_in_touch__text}>
              Whether you have questions, want to discuss your project, or
              simply want to say hello, we&apos;d love to hear from you. Contact
              our team of experts today, and let&apos;s start crafting your
              digital success story.
            </p>
          </div>
          <div className={styles.get_in_touch__right}>
            <div className={styles.get_in_touch__img__wrapper}>
              <Image
                width={501}
                height={416}
                className={styles.get_in_touch__img}
                src="/img/section-get-in-touch/section-get-in-touch-img.png"
                alt=""
              />
            </div>
            <ul className={styles.get_in_touch__contacts_list}>
              <li className={styles.get_in_touch__contacts_item}>
                <h4 className={styles.get_in_touch__contacts_item_title}>
                  JAKARTA, id
                </h4>
                <p className={styles.get_in_touch__contacts_item_text}>
                  Jl.Jend Soedirman
                </p>
                <p className={styles.get_in_touch__contacts_item_text}>
                  blok 1 kav 2. 11220
                </p>
              </li>
              <li className={styles.get_in_touch__contacts_item}>
                <h4 className={styles.get_in_touch__contacts_item_title}>
                  Contact information
                </h4>
                <p className={styles.get_in_touch__contacts_item_text}>
                  INFO@PIXELMAGNET.COM
                </p>
                <p className={styles.get_in_touch__contacts_item_text}>011-123-456</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
