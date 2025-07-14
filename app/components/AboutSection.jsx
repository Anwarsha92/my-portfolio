"use client";
import React, { useEffect, useState } from "react";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [hydrated, setHydrated] = useState(false);
  const [rerenderKey, setRerenderKey] = useState(0);

  useEffect(() => {
    // Force hydration and re-render
    setHydrated(true);

    // Gmail WebView specific bug fix — force layout refresh
    setTimeout(() => {
      setRerenderKey((prev) => prev + 1);
    }, 200); // Enough time for WebView to fully render
  }, []);

  const handleTabChange = (id) => {
    setTab(id);
  };

  const renderContent = () => {
    switch (tab) {
      case "skills":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
            <ul className="list-disc pl-2">
              <li>React</li>
              <li>Node.js</li>
              <li>Flutter</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        );
      case "education":
        return (
          <ul className="list-disc pl-2">
            <li>
              B.Tech, St.Thomas College Of Engineering and Technology,
              Chengannur, Kerala.
            </li>
          </ul>
        );
      case "certifications":
        return (
          <ul className="list-disc pl-2">
            <li>
              MERN Stack Developer, National Council for Technology and
              Training.
            </li>
          </ul>
        );
      case "experience":
        return (
          <ul className="list-disc pl-2">
            <li>
              Software Engineer, Grand Reves Technologies, Kakkanadu, Kerala.
            </li>
            <li>
              MERN Stack Developer, Luminar Technolab, Kakkanadu, Kerala.
            </li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="pt-10">
      <div className="md:grid md:grid-cols-1 gap-8 items-start px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a dedicated Full Stack Web Developer with expertise in React,
            Node.js, and MySQL, creating dynamic and responsive web
            applications. Additionally, I have experience in developing
            cross-platform mobile apps using Flutter. I thrive on solving
            complex problems and building seamless user experiences across both
            web and mobile platforms. Let's connect to explore how we can
            collaborate on innovative projects.
          </p>
          <div className="flex flex-row flex-wrap mt-8 justify-start">
            <TabButton
              selecTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selecTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selecTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
            <TabButton
              selecTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>

          <div className="mt-8" key={rerenderKey}>
            {hydrated ? renderContent() : (
              <p className="text-white text-sm">Loading tab content...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
