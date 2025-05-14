import Image from "next/image";

const Empower = () => {
  return (
    <section className="empower">
        <div className="container">
            <div className="empower__inner">
                <div className="empower__top">
                  <div className="empower__top--left">
                    <h3 className="tag">Service</h3>
                    <h1 className="title-secondary">
                      empower your brand to shine in the digital realm
                    </h1>
                  </div>
                  <div className="empower__top--right">
                    <p className="empower__top--right-text">
                      Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.
                    </p>
                  </div>
                </div>
                <div className="empower__bottom">
                  <div className="empower__bottom--items">
                    <div className="empower__bottom--item-bg">
                      <div className="empower__bottom--item-bg-wrapper">
                        <Image className="empower__bottom--item-bg-img" width={174} height={64} src="/img/section-empower/technologies.png" alt="" />
                        <div className="empower__bottom--item-bg-title">1200+</div>
                        <div className="empower__bottom--item-bg-text">Projects</div>
                      </div>
                    </div>
                    <div className="empower__bottom-bottom">
                      <div className="empower__bottom--item-grid">
                        <div className="empower__bottom--item-grid-img-wrapper">
                          <Image width={238} height={238} className="empower__bottom--item-grid-img" src="/img/section-empower/section-empower-img-1.jpg" alt="" />
                        </div>
                        <div className="empower__bottom--item-grid-img-wrapper">
                          <Image width={238} height={238} className="empower__bottom--item-grid-img" src="/img/section-empower/section-empower-img-2.jpg" alt="" />
                        </div>
                        <div className="empower__bottom--item-grid-img-wrapper">
                          <Image width={238} height={238} className="empower__bottom--item-grid-img" src="/img/section-empower/section-empower-img-3.jpg" alt="" />
                        </div>
                        <div className="empower__bottom--item-grid-img-wrapper">
                          <Image width={238} height={238} className="empower__bottom--item-grid-img" src="/img/section-empower/section-empower-img-4.jpg" alt="" />
                        </div>
                      </div>
                      <div className="empower__bottom--item-bg-sm">
                        <ul className="empower__bottom--item-bg-sm-list">
                          <li className="empower__bottom--item-bg-sm-item">Branding</li>
                          <li className="empower__bottom--item-bg-sm-item">UX/UI Design </li>
                          <li className="empower__bottom--item-bg-sm-item">App Development</li>
                          <li className="empower__bottom--item-bg-sm-item">Web Development</li>
                          <li className="empower__bottom--item-bg-sm-item">Digital Transformation</li>
                          <li className="empower__bottom--item-bg-sm-item">Technological Advancement</li>
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