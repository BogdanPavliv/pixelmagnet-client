"use client"
import {useLenis} from "../../hooks/useLenis";
import ProjectPage from "../../components/templates/ProjectPage/ProjectPage"

const Project = ({ params }: { params: { id: string } }) => {
  // Smooth scrolling
  useLenis();

  return <ProjectPage params={params}/>
}

export default Project;