import React from "react";

import SideBar from "./SideBar/SideBar.jsx";
import AboutMe from "./Mainbody/AboutMe.jsx";
import Experience from "./Mainbody/Experience.jsx";
import Skills from "./Mainbody/Skills.jsx";
import ProjectDisplay from "./Mainbody/ProjectDisplay.jsx";
import Contact from "./Mainbody/Contact.jsx";
import Footer from "./Footer/Footer.jsx";
import HomeLab from "./Mainbody/HomeLab.jsx";
import Education from "./Mainbody/Education.jsx";
import "./LandingPage.css";
import AboutMeDesc from "./Mainbody/AboutMeDesc.jsx";
import NavBar from "./Navbar/Navbar.jsx";

const LandingPage = () => {
  return (
    <>
          <NavBar />
      <div className="flex flex-col h-screen ">
        
        
        
        <div className="flex-1 flex bg-background">
          <SideBar />

          <div className="flex-1 overflow-y-auto mb-10 ">
            <div id="About" className="flex flex-col h-fit w-full ">
              <AboutMe />
            </div>

            {/* <div className="flex flex-col h-fit w-full ">
              <AboutMeDesc />
            </div> */}

            <div
              id="Experience"
              className="flex flex-col justify-center w-full"
            >
              <Experience />
            </div>

            <div id="Projects" className="flex flex-col justify-center w-full">
              <ProjectDisplay />
            </div>

            {/* <div id="Homelab" className="flex flex-col justify-center w-full">
              <HomeLab />
            </div> */}

            <div id="Skills" className="flex flex-col justify-center w-full">
              <Skills />
            </div>

            <div id="Education" className="flex flex-col justify-center w-full">
              <Education />
            </div>

            <div id="Contact" className="flex flex-col justify-center w-full">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
