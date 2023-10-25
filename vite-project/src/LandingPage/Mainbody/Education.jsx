import React from "react";
import CCU from "../../assets/Colorado_Christian_University.svg.png";
import Gal from "../../assets/galvanize_logomark.png";

const Education = () => {
  const logoStyling = {
    height: "50px", 
    width: "50px",
  }
  return (
    <>
      <div id="educationHeader" className="w-full bg-headerbg p-3 mb-10 mt-10">
        <h1 className="flex ml-2 font-mono font-bold text-4xl text-white ">
          Education
        </h1>
      </div>

      <div
        id="educationCardContainers"
        className="flex justify-evenly  mx-5 p-2"
      >
        {/* CCU CARD  */}
        <div
          id="CCUCard"
          className="flex flex-col w-2/5 h-fit border-2 rounded-lg shadow-lg bg-secbg overflow-hidden text-text"
        >
          <div
            id="ccuCardHeader"
            className="w-full border-b-2 border-borderbot flex justify-between items-center p-2"
          >
            <div className="flex items-center gap-2 p-1">
              <img src={CCU} style={logoStyling}></img>
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

          <div id="CCUFooter" className="w-full h-fit bg-cardbg mt-3 p-3">
            <h1> June 2020 - May 2025 | Remote, USA </h1>
          </div>
        </div>

        {/* GALVANIZE OPERATION LEVEL UP */}
        <div
          id="GalvanizeCard"
          className="flex flex-col w-2/5 h-fit border-2 rounded-lg shadow-lg bg-secbg overflow-hidden text-text"
        >
          <div
            id="galvanizeHeader"
            className="w-full border-b-2 border-borderbot flex justify-between items-center p-2"
          >
            <div className="flex items-center gap-2 p-1">
              <img src={Gal} style={logoStyling}></img>
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

          <div id="cardOneFooter" className="w-full h-fit bg-cardbg mt-3 p-3">
            <h1>May 2023 - Aug 2023 | Remote, USA </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
