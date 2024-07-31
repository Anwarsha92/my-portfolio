'use client'
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (<footer className="border-t z-10 border-t-[#33353F] ">
      <div className=" p-5 flex justify-between items-end">
        <Link to={"top"} smooth={true} duration={300}  className="text-2xl md:text-5xl font-semibold cursor-pointer">
          <Image width={100}
              height={100}
              src="/images/logo3.png"/>
        </Link>
        <p className="text-slate-700">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
