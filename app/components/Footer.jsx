'use client'
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (<footer>
      <div className="text-center">
        <Link to={"top"} smooth={true} duration={300}  className="cursor-pointer">
          <p className="text-sm text-gray-500 ">@anwar</p>
        </Link>
        
      </div>
    </footer>
  );
};

export default Footer;
