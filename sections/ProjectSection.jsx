import ProjectCard from "components/ProjectCard";

const ProjectSection = ({}) => {
  return (
    <div className="py-10">
      <hr className="py-2" />
      <div className="text-2xl md:text-5xl flex justify-center content-center tracking-wider py-3 font-serif">
        Projects
      </div>
      <hr className="w-5 md:w-10 mx-auto border-1 border-black" />
      <div className="grid lg:grid-cols-2 my-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectSection;
