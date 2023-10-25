import React from "react";

const HomeLab = () => {
  return (
    <>
      <div id="educationHeader" className="w-full bg-lGrey p-3 mb-10 mt-10">
        <h1 className="flex ml-2 font-mono font-bold text-4xl text-white ">
          Professional Development
        </h1>
      </div>
      <div
        id="homelabCardContainers"
        className="flex justify-evenly mx-5 p-2"
      >
        {/* filecloud CARD  */}
        <div
          id="filecloudCard"
          className="flex flex-col w-2/5 h-fit border-2 shadow-lg bg-secbg"
        >
          <div
            id="filecloudHeader"
            className="w-full border-b-2 border-borderbot flex justify-between items-center p-2"
          >
            <div className="flex items-center gap-2 p-1">
              <span className="text-xl">Building Own Cloud</span>
            </div>
          </div>

          <div id="filecloudCardDesc" className="w-full h-fit mt-3 ">
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
      </div>
    </>
  );
};

export default HomeLab;
