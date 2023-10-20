import React from "react";
import SideBar from "./SideBar/SideBar.jsx";
import AboutMe from "./Mainbody/AboutMe.jsx";
import Experience from "./Mainbody/Experience.jsx";
import Skills from "./Mainbody/Skills.jsx";
import ProjectDisplay from "./Mainbody/ProjectDisplay.jsx";
import Contact from "./Mainbody/Contact.jsx";
import Footer from "./Footer/Footer.jsx";
import "./LandingPage.css";
import Education from "./Mainbody/Education.jsx";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col h-screen ">
        <div className="flex-1 flex bg-[#DDE6ED]">
          <SideBar />

          <div className="flex-1 overflow-y-auto mb-10">
            <div className="flex flex-col border-2 h-fit w-full ">
              <AboutMe />
            </div>

            <div className="flex flex-col justify-center w-full">
              <Experience />
            </div>

            <div className="flex flex-col justify-center w-full">
              <ProjectDisplay />
            </div>

            <div className="flex flex-col justify-center w-full">
              <Skills />
            </div>

            <div className="flex flex-col justify-center w-full">
              <Education />
            </div>

            <div className="flex flex-col justify-center w-full">
              <Contact />
            </div>

          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default LandingPage;
