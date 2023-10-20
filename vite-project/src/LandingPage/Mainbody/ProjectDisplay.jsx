import React, { useState } from "react";

import CarouselOne from "../ProjectSection/CarouselOne";
import CarouselTwo from "../ProjectSection/CarouselTwo";
import CarouselThree from "../ProjectSection/CarouselThree";

const ProjectDisplay = () => {
  return (
    <div className="flex flex-col">
      <div className="border-2 w-full bg-slate-500 p-1 mb-10 mt-10">
        <h1 className="flex ml-2 font-mono font-bold text-4xl text-white">
          Projects
        </h1>
      </div>

      <div
        id="educationCardContainers"
        className="flex justify-evenly  mx-5 p-2"
      >
        {/* CCU CARD  */}
        <div
          id="CCUCard"
          className="flex flex-col w-2/5 h-fit border-2 shadow-lg bg-white"
        >
          <div
            id=""
            className="w-full border-b-2 border-slate-300 flex justify-between items-center p-2"
          >
            <div className="flex items-center gap-2 p-1">
              {/* <img src={CCU} style={logoStyling}></img> */}
              <span className="text-xl">Colorado Christian University</span>
            </div>
          </div>

          <div id="CCUCardDesc" className="w-full h-fit mt-3 ">
            <li className="text-md ml-2 mb-3">
              Bachelor of Science in Information Systems Management: System
              Analyst
            </li>

            {/* <li className="ml-5"></li>
            <li className="ml-5"></li> */}
          </div>

          <div id="CCUFooter" className="w-full h-fit bg-slate-50 mt-3 p-3">
            <h1> June 2020 - May 2025 | Remote, USA </h1>
          </div>
        </div>

        {/* GALVANIZE OPERATION LEVEL UP */}
        <div
          id="GalvanizeCard"
          className="flex flex-col w-2/5 h-fit border-2 shadow-lg bg-white"
        >
          <div
            id=""
            className="w-full border-b-2 border-slate-300 flex justify-between items-center p-2"
          >
            <div className="flex items-center gap-2 p-1">
              {/* <img src={Gal} style={logoStyling}></img> */}
              <span className="text-xl">Galvanize Inc.</span>
            </div>
          </div>

          <div id="GalvanizeDesc" className="w-full h-fit mt-3 ">
            <li className="text-md ml-2 mb-3">
              Operation Level-Up: Advanced Software Engineering Immersive
              Program
            </li>

            {/* <li className="ml-3 text-sm">
              18-week software engineering immersive program with over 1000+
              hours of programming
            </li>
            <li className="ml-3 text-sm">
              Developed expertise in Full-Stack development, primarily utilizing
              JavaScript, React, Express, and PostgreSQL in an agile environment
            </li> */}
          </div>

          <div id="cardOneFooter" className="w-full h-fit bg-slate-50 mt-3 p-3">
            <h1>May 2023 - Aug 2023 | Remote, USA </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
