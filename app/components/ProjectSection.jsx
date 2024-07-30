"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Photography Website",
    description: "Photography Website Description",
    image: "images/projects/capture-hub.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    priviewUrl: "/",
  },
  {
    id: 1,
    title: "Blood Donation Website",
    description: "Blood Donation Website Description",
    image: "images/projects/blood-bank.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    priviewUrl: "/",
  },
  {
    id: 1,
    title: "Students Portal Website",
    description: "Students Portal Website Description",
    image: "images/projects/student.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    priviewUrl: "/",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold mt-0 mb-4">My Projects</h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration:0.3,delay:index*0.4}}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.priviewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
