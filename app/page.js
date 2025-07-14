"use client";

import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Loader from "./components/loader";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure this component only renders on the client
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Loader/>; // Optional: add a loading spinner or skeleton here

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className="container mx-auto py-4 px-6 sm:px-12 mt-24">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
