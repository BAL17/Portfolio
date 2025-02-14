import React from "react";

const HomeLab = () => {
  return (
    <>
      <div
        id="homelabHeader"
        className="w-full bg-headerbg p-3 mb-10 mt-10 border-2"
      >
        <h1 className="flex ml-2 font-mono font-bold text-4xl text-white ">
          Professional Development
        </h1>
      </div>
      <div id="homelabCardContainers" className="flex justify-evenly mx-5 p-2">
        {/* filecloud CARD  */}
        <div
          id="filecloudCard"
          className="flex flex-col w-2/5 h-fit border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
        >
          <div
            id="filecloudHeader"
            className="w-full border-b-2 border-borderbot flex justify-between items-center p-2"
          >
            <div className="flex justify-center items-center gap-2 p-1">
              <span className="text-xl">
                Building My Own Cloud In The Cloud
              </span>
            </div>
            <div id="filecloudDate" className="flex">
              <h1 className="text-text text-xl"> Oct 2023 </h1>
            </div>
          </div>

          <div id="filecloudCardDesc" className="flex justify-center w-full h-fit mt-3">
            <div className="flex mb-3 ">
              
              Using File Cloud and AWS in order to replace my personal Google
              Drive storage solution for better security and customization.                
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLab;
