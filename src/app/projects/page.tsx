"use client"
import {useLenis} from "../hooks/useLenis";
import ProjectsPage from "../components/templates/ProjectsPage/ProjectsPage"

const Projects = () => {
  // Плавний скрол
  useLenis();

  return <ProjectsPage />
}

export default Projects;
