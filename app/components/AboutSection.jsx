"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAb_DATA=[
  {
    title:"Skills",
    id:"skills",
    content:(
      <ul className="list-disc pl-2">
        <li>Ract,</li>
        <li>Node.js</li>
        <li>Flutter</li>
        <li>MySql</li>
        <li>MongoDb</li>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    )
  },
  {
    title:"Education",
    id:"education",
    content:(
      <ul className="list-disc pl-2">
        <li>B.Tech, St.Thomas College Of Engineering and Technology, Chengannur, Kerala</li>
        
      </ul>
    )
  },
  {
    title:"Certifications",
    id:"certifications",
    content:(
      <ul className="list-disc pl-2">
        <li>MERN Stack Developer</li>
        
      </ul>
    )
  },
  {
    title:"Experience",
    id:"experience",
    content:(
      <ul className="list-disc pl-2">
        <li>Software Engineer, Grand Reves Technologies</li>
      </ul>
    )
  }
]
const AboutSection = () => {
    const [tab,setTab]=useState("skills");
    const [isPending,startTransition]=useTransition(); //for low priority state updates

    const handleTabChange=(id)=>{
        startTransition(()=>{
            setTab(id);
        })
        
    }
  return (
    <section id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="mt-16" width={500} height={500} src={"/images/about-image.jpg"} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a dedicated Full Stack Web Developer with expertise in React,
            Node.js, and MySQL, creating dynamic and responsive web
            applications. Additionally, I have experience in developing
            cross-platform mobile apps using Flutter. I thrive on solving
            complex problems and building seamless user experiences across both
            web and mobile platforms. Let's connect to explore how we can
            collaborate on innovative projects. Excited to contribute to
            challenging projects and grow within a collaborative and innovative
            team.
          </p>
          <div className="flex flex-row mt-8 justify-start">
            <TabButton selecTab={()=>handleTabChange("skills")} active={tab==="skills"}>Skills</TabButton>
            <TabButton selecTab={()=>handleTabChange("education")} active={tab==="education"}>Education</TabButton>
            <TabButton selecTab={()=>handleTabChange("certifications")} active={tab==="certifications"}>Certifications</TabButton>
            <TabButton selecTab={()=>handleTabChange("experience")} active={tab==="experience"}>Experience</TabButton>
            
          </div>
          <div className="mt-8">
            {TAb_DATA.find((t)=>t.id===tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
