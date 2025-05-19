"use client"
import ProjectDetails from "../../../components/modules/ProjectPage/ProjectDetails";
import ProjectInfo from "../../../components/modules/ProjectPage/ProjectInfo";
import ProjectCharacteristics from "../../../components/modules/ProjectPage/ProjectCharacteristics";
import ProjectGallery from "../../../components/modules/ProjectPage/ProjectGallery";
import Testimonials from "../../../components/modules/MainPage/Testimonials";
import FeaturedWorks from "../../../components/modules/MainPage/FeaturedWorks";
import Magnetize from "../../../components/modules/MainPage/Magnetize";

const ProjectPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="main">
      <ProjectDetails params={params} />
      <ProjectInfo />
      <ProjectCharacteristics />
      <ProjectGallery params={params} />
      <Testimonials />
      <FeaturedWorks />
      <Magnetize />
    </div>
  );
};

export default ProjectPage;
