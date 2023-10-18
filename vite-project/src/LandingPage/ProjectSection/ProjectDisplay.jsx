import React, { useState } from "react";

import CarouselOne from "./CarouselOne";
import CarouselTwo from "./CarouselTwo";
import CarouselThree from "./CarouselThree";


const ProjectDisplay = () => {
  const containerStyles = {
    // width: "300px",
    height: "300px",
      margin: "0 auto",
  };

  return (
    <div className="flex flex-col gap-0 p-2 ">
      <div
        className="flex w-1/2 border-2 border-emerald-200"
        style={containerStyles}
      >
        <h1 className="text-mono">Insight LMS</h1>
        <CarouselOne />
      </div>
      <div className="flex border-2 w-1/3  border-red-200" style={containerStyles}>
        <CarouselTwo />
      </div>

      <div className="flex border-2 w-1/3  border-blue-700" style={containerStyles}>
        <CarouselThree />
      </div>
    </div>
  );
};

export default ProjectDisplay;
