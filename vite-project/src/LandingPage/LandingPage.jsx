import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainBody from "./Mainbody/MainBody";
import ProjectDisplay from "./ProjectSection/ProjectDisplay";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <>
      {/* FULL LANDING PAGE DIV */}
      <div className=" bg-white max-w-screen h-screen  ">
          <div className="flex flex-nowrap justify-end h-fit  p-2">
            <Header />
        </div>
        
        {/* MAIN BODY CARD */}
        <div id="mainbodydiv" className="flex-col flex w-screen h-3/4">
          

          <div className="flex border-2 h-1/3 ">
            <MainBody />
          </div>

          <ProjectDisplay />

          <div className="flex-col border-2 h-fit">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
