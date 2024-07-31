"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div initial={{opacity:0,scale:0.5}} 
        animate={{opacity:1,scale:1}}
        transition={{duration:0.5}}
        className="col-span-7 place-self-center lg:place-self-start text-center sm:text-left h-full flex flex-col ">
          <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal justify-self-start font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {" "}
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Anwar",
                1000, 
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                // "UI/UX Designer",
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* <p className="text-[#ADB7BE] text-base  sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quis
            obcaecati rerum, nulla deleniti dignissimos minima corrupti iure
            delectus vel minus quae, veritatis quos rem voluptates saepe
            ratione, neque tempora?
          </p> */}
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3 ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center lg:place-self-end mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-72 h-72 lg:w-96 lg:h-96 relative">
            {" "}
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
              src="/images/hero-image.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
