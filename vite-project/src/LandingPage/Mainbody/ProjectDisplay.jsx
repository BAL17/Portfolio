import React, { useState } from "react";

import sourceCode from "../../assets/icons8-code-50.png"

import CarouselOne from "../ProjectSection/CarouselOne";
import CarouselTwo from "../ProjectSection/CarouselTwo";
import CarouselThree from "../ProjectSection/CarouselThree";

const ProjectDisplay = () => {
  const iconStyling = {
    height: "2rem",
    width: "2rem",
    
}

  return (
    <div className="flex flex-col">
      <div className="border-2 w-full bg-headerbg p-3 mb-10 mt-10">
        <h1 className="flex ml-2 font-mono font-bold text-4xl text-white">
          Projects
        </h1>
      </div>

      <div
        id="projectCardContainers"
        className="flex justify-evenly gap-2 mx-2 p-2"
      >
        {/* INSIGHT CARD  */}
        <div
          id="insightCard"
          className="flex flex-col w-2/5 h-1/4 border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
        >
          <div className="w-full border-b-2 border-slate-300 flex justify-center items-center p-2">
            <div>
              <CarouselOne />
            </div>
          </div>

          <div className="flex flex-col w-full mt-2 p-1">
            <div className="flex justify-center">
              <span className="text-xl ">
                Insight Learning Management System
              </span>
            </div>

            <div
              id="insightDesc"
              className="flex justify-center w-full h-fit mt-3 "
            >
              <li className="text-md ml-3 mb-3">
                A web-based virtual learning environment and learning management
                system.
              </li>
            </div>
          </div>

          <div
            id="insightFooter"
            className="flex items-center justify-between w-full h-fit bg-cardbg mt-3 p-3"
          >
            <h1> Aug 2023 </h1>
            <a
              href="https://github.com/gschool-blue-ocean/insight"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex gap-2 items-center">
                <h3>Source Code</h3>
                <img src={sourceCode} style={iconStyling}></img>
              </div>
            </a>
          </div>
        </div>

        {/* nvidia CARD  */}
        <div
          id="nvidiaCard"
          className="flex flex-col w-2/5 h-1/4 border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
        >
          <div className="w-full border-b-2 border-slate-300 flex justify-center items-center p-2">
            <div>
              <CarouselTwo />
            </div>
          </div>

          <div className="flex flex-col w-full  mt-2  p-1">
            <div className="flex justify-center">
              <span className="text-xl">Nvidia Product Page</span>
            </div>

            <div
              id="nvidiaDesc"
              className="flex justify-center w-full h-fit mt-3 "
            >
              <li className="text-md ml-3 mb-3">
                Pixel-perfect replica of Nvidia's RTX 4060 graphic card product
                page.
              </li>
            </div>
          </div>

          <div
            id="nvidiaFooter"
            className=" flex justify-between w-full h-fit  bg-cardbg mt-3 p-3"
          >
            <h1> July 2023 </h1>
            <a
              href="https://github.com/NVIDIA-Clone/VIDIA-RTX-40-product-detail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex gap-2 items-center">
                <h3>Source Code</h3>
                <img src={sourceCode} style={iconStyling}></img>
              </div>
            </a>
          </div>
        </div>

        {/* REI CARD  */}
        <div
          id="reiCard"
          className="flex flex-col w-2/5 h-1/4 border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
        >
          <div className="w-full border-b-2 border-slate-300 flex justify-center items-center p-2">
            <div>
              <CarouselThree />
            </div>
          </div>

          <div className="flex flex-col w-full  mt-2 p-1">
            <div className="flex justify-center">
              <span className="text-xl">REI Product Page</span>
            </div>

            <div
              id="reiDesc"
              className="flex justify-center w-full h-fit mt-3 "
            >
              <li className="text-md ml-3 mb-3">
                Pixel-perfect replica of REI's Timbuk2 Muttmover Luxe Pack
                product page.
              </li>
            </div>
          </div>

          <div
            id="reiFooter"
            className=" flex justify-between w-full h-fit bg-cardbg mt-3 p-3"
          >
            <h1> June 2023 </h1>
            <a
              href="https://gitlab.com/Sonapanic/rei-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex gap-2 items-center">
                <h3>Source Code</h3>
                <img src={sourceCode} style={iconStyling}></img>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
