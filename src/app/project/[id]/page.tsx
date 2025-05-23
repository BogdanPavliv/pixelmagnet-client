"use client"
import ProjectPage from "../../components/templates/ProjectPage/ProjectPage"

const Project = ({ params }: { params: { id: string } }) => {
  return <ProjectPage params={params}/>
}

export default Project;