"use client";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <section className="get-in-touch">
      <div className="container">
        <div className="get-in-touch__inner">
          <div className="get-in-touch__left">
            <h3 className="tag">Get in touch</h3>
            <h1 className="title ellipse">
              Ready to take your digital presence to the next level?
            </h1>
            <p className="get-in-touch__text">
              Whether you have questions, want to discuss your project, or
              simply want to say hello, we&apos;d love to hear from you. Contact
              our team of experts today, and let&apos;s start crafting your
              digital success story.
            </p>
          </div>
          <div className="get-in-touch__right">
            <div className="get-in-touch__img--wrapper">
              <Image
                width={501}
                height={416}
                className="get-in-touch__img"
                src="/img/section-get-in-touch/section-get-in-touch-img.png"
                alt=""
              />
            </div>
            <ul className="get-in-touch__contacts-list">
              <li className="get-in-touch__contacts-item">
                <h4 className="get-in-touch__contacts-item-title">
                  JAKARTA, id
                </h4>
                <p className="get-in-touch__contacts-item-text">
                  Jl.Jend Soedirman
                </p>
                <p className="get-in-touch__contacts-item-text">
                  blok 1 kav 2. 11220
                </p>
              </li>
              <li className="get-in-touch__contacts-item">
                <h4 className="get-in-touch__contacts-item-title">
                  Contact information
                </h4>
                <p className="get-in-touch__contacts-item-text">
                  INFO@PIXELMAGNET.COM
                </p>
                <p className="get-in-touch__contacts-item-text">011-123-456</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
