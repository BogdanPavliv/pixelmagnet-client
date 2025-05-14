"use client";
import React from "react";
import Image from "next/image";
import { dataProjects } from "../../../utils/data";

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  const projectId = parseInt(params.id, 10);
  const project = dataProjects.find((p) => p.id === projectId);

  if (!project) return <p>Project not found</p>;

  return (
    <section className="project-details">
      <div className="container">
        <div className="project-details__inner">
          <div className="project-details__top">
            <div className="project-details__top--left">
              <div className="tag">Project details</div>
              <h1 className="title">{project.title}</h1>
            </div>
            <div className="project-details__top--right">
              <p className="project-details__top--right-text">
                UX/UI & App Development 2022
              </p>
            </div>
          </div>
          <div className="project-details__bottom">
            <div className="project-details__bottom--img-wrapper">
              <Image
                width={1290}
                height={572}
                className="project-details__bottom--img"
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
