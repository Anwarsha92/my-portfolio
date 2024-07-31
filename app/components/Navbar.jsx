"use client";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { Link, ScrollLink } from "react-scroll";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "about",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
   <section id="top">
      <nav id="nav" className="fixed mx-auto border border-[#3335] top-0 left-0 right-0 z-10 bg-black bg-opacity-100">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
          <Link to={"top"} smooth={true} duration={300}  className="text-2xl md:text-5xl font-semibold cursor-pointer">
            <Image width={100}
                height={100}
                src="/images/logo3.png"/>
          </Link>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button onClick={()=>setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button onClick={()=>setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((navLinks, index) => (
                <li key={index}>
                  <NavLink href={navLinks.path} title={navLinks.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen?<MenuOverlay links={navLinks}/>:null}
      </nav>
   </section>
  );
};

export default Navbar;
