"use client"
import ProjectsSection from "../../../components/modules/ProjectsPage/ProjectsSection";
import Categories from "../../../components/modules/ProjectsPage/Categories";
import Magnetize from "../../../components/modules/MainPage/Magnetize";

const ProjectsPage = () => {
  return (
    <div className='main'>
      <ProjectsSection />
      <Categories />
      <Magnetize />
    </div>
  )
}

export default ProjectsPage