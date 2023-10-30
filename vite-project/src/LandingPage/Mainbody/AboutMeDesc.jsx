import React from "react";
const AboutMeDesc = () => {
  return (
    <>
      <div id="About" className="w-full bg-headerbg p-3 mb-10 border-2 ">
        <h1 className="flex ml-2 font-mono font-bold text-4xl text-white ">
          About
        </h1>
      </div>

      <div className="flex flex-col p-2 w-full justify-center items-center gap-5">
        <div className="flex justify-center items-center ">
          <div className="border-l-4 border-borderbot flex w-5 h-16"></div>
          <span className="text-2xl">
            Husband, father, and full-stack developer with a passion for
            development workflows, continuous learning, and teaching.
          </span>
        </div>
        <div className="flex justify-center">
          <p>
           
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMeDesc;
