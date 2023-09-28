import React, { useState } from "react";
import CarouselOne from "./CarouselOne";


const ProjectDisplay = () => {

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
    
  return (
    <div>
      <h1 className="text-mono">Insight LMS</h1>
      <div className="flex " style={containerStyles}>
        <CarouselOne />
      </div>
    </div>
  );
};

export default ProjectDisplay;
