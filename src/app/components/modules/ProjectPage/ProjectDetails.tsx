"use client";
import React from "react";
import Image from "next/image";
import styles from "../../../styles/project-details/index.module.scss";
import { dataProjects } from "../../../utils/data";

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  const projectId = parseInt(params.id, 10);
  const project = dataProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <section className="loader_section">
        <div className="container">
          <div className="loader"></div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.project_details}>
      <div className="container">
        <div className={styles.project_details__inner}>
          <div className={styles.project_details__top}>
            <div className={styles.project_details__top__left}>
              <div className={styles.tag}>Project details</div>
              <h1 className="title">{project.title}</h1>
            </div>
            <div className={styles.project_details__top__right}>
              <p className={styles.project_details__top__right_text}>
                UX/UI & App Development 2022
              </p>
            </div>
          </div>
          <div className={styles.project_details__bottom}>
            <div className={styles.project_details__bottom__img_wrapper}>
              <Image
                width={1290}
                height={572}
                className={styles.project_details__bottom__img}
                src={project.images.image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
