import Image from "next/image";
import { dataProjects } from "../../../utils/data";

const ProjectGallery = ({ params }: { params: { id: string } }) => {
  const projectId = parseInt(params.id, 10);
  const project = dataProjects.find((p) => p.id === projectId);

  if (!project) return <p>Project not found</p>;

  return (
    <section className="project-gallery">
      <div className="container">
        <div className="project-gallery__inner">
          <div className="project-gallery__top">
            <div className="project-gallery__img-lg-wrapper">
              <Image
                width={763}
                height={510}
                className="project-gallery__img-lg"
                src={project.images.image2}
                alt=""
              />
            </div>
            <div className="project-gallery__img-sm-wrapper">
              <Image
                width={501}
                height={510}
                className="project-gallery__img-sm"
                src={project.images.image3}
                alt=""
              />
            </div>
          </div>
          <div className="project-gallery__bottom">
            <div className="project-gallery__img-sm-wrapper">
              <Image
                width={501}
                height={510}
                className="project-gallery__img-sm"
                src={project.images.image4}
                alt=""
              />
            </div>
            <div className="project-gallery__img-lg-wrapper">
              <Image
                width={763}
                height={510}
                className="project-gallery__img-lg"
                src={project.images.image5}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
