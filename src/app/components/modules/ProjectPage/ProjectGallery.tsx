import Image from "next/image";
import styles from '../../../styles/project-gallery/index.module.scss';
import { dataProjects } from "../../../utils/data";

const ProjectGallery = ({ params }: { params: { id: string } }) => {
  const projectId = parseInt(params.id, 10);
  const project = dataProjects.find((p) => p.id === projectId);

  if (!project) return <p>Project not found</p>;

  return (
    <section className={styles.project_gallery}>
      <div className="container">
        <div className={styles.project_gallery__inner}>
          <div className={styles.project_gallery__top}>
            <div className={styles.project_gallery__img_lg_wrapper}>
              <Image
                width={763}
                height={510}
                className={styles.project_gallery__img_lg}
                src={project.images.image2}
                alt=""
              />
            </div>
            <div className={styles.project_gallery__img_sm_wrapper}>
              <Image
                width={501}
                height={510}
                className={styles.project_gallery__img_sm}
                src={project.images.image3}
                alt=""
              />
            </div>
          </div>
          <div className={styles.project_gallery__bottom}>
            <div className={styles.project_gallery__img_sm_wrapper}>
              <Image
                width={501}
                height={510}
                className={styles.project_gallery__img_sm}
                src={project.images.image4}
                alt=""
              />
            </div>
            <div className={styles.project_gallery__img_lg_wrapper}>
              <Image
                width={763}
                height={510}
                className={styles.project_gallery__img_lg}
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
