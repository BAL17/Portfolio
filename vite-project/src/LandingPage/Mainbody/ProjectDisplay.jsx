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

      <div id="projectCardContainers" className="flex justify-evenly  mx-5 p-2">
        {/* INSIGHT CARD  */}
        <div
          id="insightCard"
          className="flex flex-col w-2/5 h-fit border-2 shadow-lg bg-white"
        >
          <div className="w-full border-b-2 border-slate-300 flex justify-between items-center p-2">
            <div>
              <CarouselOne />
            </div>
          </div>

          <div className="flex items-center gap-2 p-1">
            {/* <img src={CCU} style={logoStyling}></img> */}
            <span className="text-xl">Insight Learning Management System</span>
          </div>

          <div id="insightDesc" className="w-full h-fit mt-3 ">
            <span className="text-md ml-2 mb-3">
              a web-based virtual learning environment and learning management
              system
            </span>
          </div>

          <div id="insightFooter" className="w-full h-fit bg-slate-50 mt-3 p-3">
            <h1> June 2023 </h1>
            <img></img>
            <img></img>
          </div>
        </div>
        
        {/* nvidia CARD  */}
        <div
          id="nvidiaCard"
          className="flex flex-col w-2/5 h-fit border-2 shadow-lg bg-white"
        >
          <div className="w-full border-b-2 border-slate-300 flex justify-between items-center p-2">
            <div>
              <CarouselTwo />
            </div>
          </div>

          <div className="flex items-center gap-2 p-1">
            {/* <img src={CCU} style={logoStyling}></img> */}
            <span className="text-xl">NVIDA Product Page</span>
          </div>

          <div id="nvidiaDesc" className="w-full h-fit mt-3 ">
            <span className="text-md ml-2 mb-3">
              a web-based virtual learning environment and learning management
              system
            </span>
          </div>

          <div id="nvidiaFooter" className="w-full h-fit bg-slate-50 mt-3 p-3">
            <h1> June 2023 </h1>
            <img></img>
            <img></img>
          </div>
        </div>

        {/* REI CARD  */}
        <div
          id="reiCard"
          className="flex flex-col w-2/5 h-fit border-2 shadow-lg bg-white"
        >
          <div className="w-full border-b-2 border-slate-300 flex justify-between items-center p-2">
            <div>
              <CarouselThree />
            </div>
          </div>

          <div className="flex items-center gap-2 p-1">
            {/* <img src={CCU} style={logoStyling}></img> */}
            <span className="text-xl">Insight Learning Management System</span>
          </div>

          <div id="reiDesc" className="w-full h-fit mt-3 ">
            <span className="text-md ml-2 mb-3">
              a web-based virtual learning environment and learning management
              system
            </span>
          </div>

          <div id="reiFooter" className="w-full h-fit bg-slate-50 mt-3 p-3">
            <h1> June 2023 </h1>
            <img></img>
            <img></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
