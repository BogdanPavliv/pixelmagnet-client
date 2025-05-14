import Image from "next/image";

type Props = {};

const ProjectsSection = (props: Props) => {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects__inner">
          <div className="projects__top">
            <div className="projects__top--left">
              <div className="title">Projects</div>
              <div className="projects__quantity">1200+</div>
            </div>
            <div className="projects__top--right">
              <p className="projects__top--right-text">
                Take a look at some of our proudest moments, where creativity,
                strategy, and innovation came together to make brands shine in
                the digital realm. Our success stories are a testament to our
                dedication and expertise.
              </p>
            </div>
          </div>
          <div className="projects__bottom">
            <div className="projects__bottom-items">
              <div className="projects__bottom-left">
                <div className="projects__bottom-left-img-wrapper-xl">
                  <Image
                    width={501}
                    height={375}
                    className="projects__bottom-left-img-xl"
                    src="/img/section-projects/section-projects-img-1.jpg"
                    alt=""
                  />
                </div>
                <div className="projects__bottom-left-img-wrapper-md">
                  <Image
                    width={238}
                    height={375}
                    className="projects__bottom-left-img-md"
                    src="/img/section-projects/section-projects-img-2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="projects__bottom-right">
                <div className="projects__bottom-right-top">
                  <div className="projects__bottom-right-img-wrapper-sm">
                    <Image
                      width={239}
                      height={176}
                      className="projects__bottom-right-img-sm"
                      src="/img/section-projects/section-projects-img-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="projects__bottom-right-img-wrapper-sm">
                    <Image
                      width={239}
                      height={176}
                      className="projects__bottom-right-img-sm"
                      src="/img/section-projects/section-projects-img-4.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="projects__bottom-right-bottom">
                  <div className="projects__bottom-right-img-wrapper-wide">
                    <Image
                      width={501}
                      height={176}
                      className="projects__bottom-right-img-wide"
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
