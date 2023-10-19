import React, { useState } from "react";

import CarouselOne from "../ProjectSection/CarouselOne";
import CarouselTwo from "../ProjectSection/CarouselTwo";
import CarouselThree from "../ProjectSection/CarouselThree";

const ProjectDisplay = () => {


  return (
    <div className="flex flex-col">
      <div className="border-2 w-full bg-slate-500 p-1 mb-10 mt-10">
        <h1 className="flex justify-center font-mono font-bold text-4xl text-white">
          Projects
        </h1>
      </div>
    </div>
  );
};

export default ProjectDisplay;
