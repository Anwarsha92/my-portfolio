"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Photography Website",
    description: " This is photography platform using React and Node.js. In this project, users can register and upload their captured images, creating a vibrant gallery of photographs. Other users can browse these images and contact the photographers directly through the platform. This project aims to connect photographers with potential clients or enthusiasts, fostering a community of creativity and collaboration.",
    image: "images/projects/capture-hub.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    priviewUrl: "/",
  },
  {
    id: 1,
    title: "Blood Donation Website",
    description: " This is blood donation platform using React and Node.js. This project allows users to register their details as donors or seekers, creating a robust database of blood donors. Users can easily search and find registered users, facilitating quick and efficient blood donation connections. This platform aims to streamline the process of finding blood donors, ultimately saving lives through improved accessibility and communication.",
    image: "images/projects/blood-bank.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    priviewUrl: "/",
  },
  {
    id: 1,
    title: "Students Portal Website",
    description: " This is student portal using React and Node.js. This project features an admin interface where administrators can manage student records efficiently. Admins can add, edit, delete, and search for users, ensuring accurate and up-to-date student information. This portal is designed to streamline student management processes, making it easier for educational institutions to maintain and organize student data. ",
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
    <section id="projects" className="pt-20">
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
