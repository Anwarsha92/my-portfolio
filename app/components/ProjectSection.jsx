import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Photography Website",
    description: "Photography Website Description",
    image: "images/projects/capture-hub.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    priviewUrl:"/"
  },
  {
    id: 1,
    title: "Blood Donation Website",
    description: "Blood Donation Website Description",
    image: "images/projects/blood-bank.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    priviewUrl:"/"
  },
  {
    id: 1,
    title: "Students Portal Website",
    description: "Students Portal Website Description",
    image: "images/projects/student.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    priviewUrl:"/"
  },
];

const ProjectSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold mt-4 mb-4">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project)=>(
            <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.priviewUrl}/>
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
