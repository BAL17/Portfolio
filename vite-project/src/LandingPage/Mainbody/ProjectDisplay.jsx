import sourceCode from "../../assets/icons8-code-50.png";
//import carousels
import CarouselOne from "../ProjectSection/CarouselOne";
import CarouselTwo from "../ProjectSection/CarouselTwo";
import CarouselThree from "../ProjectSection/CarouselThree";
import CarouselFour from "../ProjectSection/CarouselFour";
// import CarouselFive from "../ProjectSection/CarouselFive";

const ProjectDisplay = () => {
  const iconStyling = {
    height: "2rem",
    width: "2rem",
  };

  return (
    <div className="flex flex-col">
      <div className="border-2 w-full bg-headerbg p-3 mb-10 mt-10">
        <h1 className="flex ml-2 font-heading font-bold text-4xl text-white">
          Projects
        </h1>
      </div>

      <div
        id="projectCardContainers"
        className="flex flex-col md:flex-col lg:flex-col  md:justify-evenly lg:justify-evenly items-center gap-6 md:gap-2 lg:gap-2 mx-2 p-2"
      >
        <div className="flex flex-col max-w-screen-md md:max-w-screen-lg lg:max-w-screen-2xl max-h-fit items-center  md:flex-col lg:flex-row gap-3">
          {/* INSIGHT CARD  */}
          <div
            id="insightCard"
            className="flex flex-col w-5/6 md:w-3/6 h-3/6 border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
          >
            <div className="w-full border-b-2 border-borderbot flex justify-center items-center p-2">
              <div>
                <CarouselOne />
              </div>
            </div>

            <div className="flex flex-col w-full mt-2 p-1">
              <div className="flex flex-col justify-center items-center mr-5 ml-5">
                <span className="italic text-accent font-bold text-2xl md:text-xl lg:text-xl font-heading break-all">
                  Insight LMS
                </span>
              </div>

              <div
                id="insightDesc"
                className="flex justify-center w-full h-fit mt-3 "
              >
                <li className="text-md ml-3 mb-3 font-body ">
                  Insight is a Learning Management System (LMS). This full-stack
                  web application is built using the PERN stack delivering a
                  seamless and interactive learning experience.
                </li>
              </div>
            </div>

            <div
              id="insightFooter"
              className="flex items-center justify-between w-full h-fit bg-cardbg mt-3 p-3 font-body"
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
            className="flex flex-col w-5/6 md:w-3/6 h-3/6 border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
          >
            <div className="w-full border-b-2 border-borderbot flex justify-center items-center p-2">
              <div>
                <CarouselTwo />
              </div>
            </div>

            <div className="flex flex-col w-full  mt-2  p-1">
              <div className="flex justify-center">
                <span className="italic text-accent font-bold text-2xl md:text-xl lg:text-xl font-heading break-all">
                  Nvidia Product Page
                </span>
              </div>

              <div
                id="nvidiaDesc"
                className="flex justify-center w-full h-fit mt-3 "
              >
                <li className="text-md ml-3 mb-3 font-body">
                  A full stack application including database, API server and
                  website detailing a video card product similar to NVIDIA's
                  RTX-40 series.
                </li>
              </div>
            </div>

            <div
              id="nvidiaFooter"
              className=" flex items-center justify-between w-full h-fit bg-cardbg mt-3 p-3 font-body"
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
            className="flex flex-col w-5/6 md:w-3/6 h-3/6 border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
          >
            <div className="w-full border-b-2 border-borderbot flex justify-center items-center p-2">
              <div>
                <CarouselThree />
              </div>
            </div>

            <div className="flex flex-col w-full  mt-2 p-1">
              <div className="flex justify-center">
                <span className="italic text-accent font-bold text-2xl md:text-xl lg:text-xl font-heading break-all">
                  REI Product Page
                </span>
              </div>

              <div
                id="reiDesc"
                className="flex justify-center w-full h-fit mt-3 "
              >
                <li className="text-md ml-3 mb-3 font-body">
                  A full stack application including database, API server and
                  website detailing a video card product similar to NVIDIA's
                  RTX-40 series.
                </li>
              </div>
            </div>

            <div
              id="reiFooter"
              className=" flex items-center justify-between w-full h-fit bg-cardbg mt-3 p-3 font-body"
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
        {/* Second Row */}

        {/* <div className="flex flex-col max-w-screen-md md:max-w-screen-lg lg:max-w-screen-2xl max-h-fit items-center  md:flex-col lg:flex-row gap-3"> */}
          {/* PearScriptStudio CARD 
          <div
            id="PearScriptCard"
            className="flex flex-col w-5/6  border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
          >
            <div className="w-full border-b-2 border-borderbot flex justify-center items-center p-2">
              <div>
                <CarouselFive />
              </div>
            </div>

            <div className="flex flex-col w-full mt-2 p-1">
              <div className="flex flex-col justify-center items-center mr-5 ml-5">
                <span className="italic text-accent font-bold text-2xl md:text-xl lg:text-xl font-heading break-all">
                  PearScript Studio
                </span>
              </div>
            </div>

            <div
              id="PearScriptDesc"
              className="flex justify-center w-full h-fit mt-3 "
            >
              <li className="text-md ml-3 mb-3 font-body">
                PearScript Studio provides a collaborative platform for coding,
                enabling seamless real-time collaboration on projects using the
                powerful Monaco Editor.
              </li>
            </div>
            <div
              id="PearScriptFooter"
              className="flex items-center justify-between w-full h-fit bg-cardbg mt-3 p-3 font-body"
            >
              <h1> TDB </h1>
              <a
                href="https://github.com/BAL17/PearScriptStudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-2 items-center">
                  <h3>Source Code</h3>
                  <img src={sourceCode} style={iconStyling}></img>
                </div>
              </a>
            </div>
          </div> */}

          {/* {/* PassVault CARD 
          <div
            id="insightCard"
            className="flex flex-col w-5/6  border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
          >
            <div className="w-full border-b-2 border-borderbot flex justify-center items-center p-2">
              <div>
                <CarouselFour />
              </div>
            </div>

            <div className="flex flex-col w-full mt-2 p-1">
              <div className="flex flex-col justify-center items-center mr-5 ml-5">
                <span className="italic text-accent font-bold text-2xl md:text-xl lg:text-xl font-heading break-all">
                  PassVault
                </span>
              </div>

              <div
                id="insightDesc"
                className="flex justify-center w-full h-fit mt-3 "
              >
                <li className="text-md ml-3 mb-3 font-body">
                  Simple Password Manager Application
                </li>
              </div>
            </div>

            <div
              id="PassVaultFooter"
              className="flex items-center justify-between w-full h-fit bg-cardbg mt-3 p-3 font-body"
            >
              <h1> In progess... </h1>
              <a
                href="https://github.com/BAL17/PassVault"
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
        </div> */}
      </div>
    </div>
  );
};

export default ProjectDisplay;
