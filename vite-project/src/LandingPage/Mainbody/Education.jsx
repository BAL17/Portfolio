import CCU from "../../assets/EducationIcons/Colorado_Christian_University.svg.png";
import Gal from "../../assets/EducationIcons/galvanize_logomark.png";

const Education = () => {
  return (
    <>
      <div
        id="educationHeader"
        className="w-full bg-headerbg p-3 mb-10 mt-10 border-2"
      >
        <h1 className="flex ml-2 font-heading font-bold text-4xl text-white ">
          Education
        </h1>
      </div>

      <div
        id="educationCardContainers"
        className="flex flex-col sm:flex-row md:flex-row lg:flex-row md:justify-evenly lg:justify-evenly items-center gap-6 md:gap-6 lg:gap-6 mx-5 sm:mx-0 md:mx-0 lg:mx-0 p-2 "
      >
        {/* CCU CARD  */}
        <div
          id="CCUCard"
          className="flex flex-col justify-between w-11/12 h-[13.5rem] md:h-[12rem] lg:h-[13rem]  md:max-w-sm lg:max-w-md  border-2 rounded-lg shadow-lg bg-secbg overflow-hidden text-text"
        >
          <div
            id="ccuCardHeader"
            className="w-full border-b-2 border-borderbot flex justify-between items-center p-2"
          >
            <div className="flex items-center gap-2 p-1">
              <img src={CCU} className="w-8 h-8 lg:w-12 lg:h-12"></img>
              <span className="text-lg sm:text-base md:text-xl lg:text-xl font-heading">
                Colorado Christian University
              </span>
            </div>
          </div>

          <div id="CCUCardDesc" className="flex w-full h-fit mt-3  font-body ">
            <span className="flex text-md ml-5 mb-3">
              Bachelor of Science in Computer Science
            </span>
          </div>

          <div
            id="CCUFooter"
            className="flex justify-between w-full h-fit bg-cardbg mt-3 p-3 font-body"
          >
            <div className="flex">
              <h1> July 2020 - Dec 2025 </h1>
            </div>
            <div className="flex">
              <h1> Remote, USA </h1>
            </div>
          </div>
        </div>

        {/* GALVANIZE OPERATION LEVEL UP */}
        <div
          id="GalvanizeCard"
          className="flex flex-col justify-between  w-11/12 h-[13.5rem] md:h-[12rem] lg:h-[13rem]  md:max-w-sm lg:max-w-md  border-2 rounded-lg shadow-lg bg-secbg overflow-hidden text-text"
        >
          <div
            id="galvanizeHeader"
            className="w-full border-b-2 border-borderbot flex justify-between items-center p-2"
          >
            <div className="flex items-center gap-2 p-1">
              <img src={Gal} className="w-8 h-8 lg:w-12 lg:h-12"></img>
              <span className="text-lg sm:text-base md:text-xl lg:text-xl font-heading">
                Galvanize Inc.
              </span>
            </div>
          </div>

          <div
            id="GalvanizeDesc"
            className="flex justify-center w-full h-fit mt-3 font-body "
          >
            <span className="flex text-md ml-5 mb-3">
              Operation Level-Up: Advanced Software Engineering Immersive
              Program
            </span>
          </div>

          <div
            id="galvanizeFooter"
            className="flex justify-between w-full h-fit bg-cardbg mt-3 p-3 font-body"
          >
            <div className="flex">
              <h1>May 2023 - Aug 2023 </h1>
            </div>
            <div className="flex">
              <h1>Remote, USA</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
