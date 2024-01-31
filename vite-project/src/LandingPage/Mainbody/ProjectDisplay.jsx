// import sourceCode from "../../assets/icons8-code-50.png";
import sourceCode2 from "../../assets/icons8-source-code-50.png";
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
        className="flex flex-col sm:flex-col md:flex-col lg:flex-col  md:justify-evenly lg:justify-evenly items-center mx-2 p-2"
      >
        <div className="flex flex-col w-full h-1/2 items-center md:flex-col lg:flex-col gap-10 md:gap-10 lg:gap-10">
          {/* first row */}
          <div className="flex flex-col sm:flex-col max-w-screen-2xl md:max-w-screen-2xl lg:w-full min-h-fit items-center justify-evenly md:flex-col lg:flex-row gap-10 ">
            {/* INSIGHT CARD  */}
            <div
              id="insightCard"
              className="flex flex-col justify-between max-w-xl md:max-w-md min-h-[30rem]  border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
            >
              <div className="w-full border-b-2 border-borderbot flex justify-center items-center p-2">
                <div>
                  <CarouselOne />
                </div>
              </div>

              <div className="flex flex-col w-full  p-1">
                <div className="flex flex-col justify-center items-center mr-5 ml-5">
                  <span className="italic text-accent font-bold text-2xl md:text-xl lg:text-xl font-heading break-all">
                    Insight LMS
                  </span>
                </div>

                <div
                  id="insightDesc"
                  className="flex justify-center w-full h-fit mt-3 "
                >
                  <span className="flex items-center text-md ml-3 mb-3 font-body text-text text-balance ">
                    Insight is a Learning Management System (LMS). This
                    full-stack web application is built using the PERN stack
                    delivering a seamless and interactive learning experience.
                  </span>
                </div>
              </div>

              <div
                id="insightFooter"
                className="flex items-center justify-between w-full h-fit bg-cardbg mt-3 p-3 font-body text-text"
              >
                <h1> Aug 2023 </h1>
                <a
                  href="https://github.com/gschool-blue-ocean/insight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-2 items-center">
                    <h3>Source Code</h3>
                    <img src={sourceCode2} style={iconStyling}></img>
                  </div>
                </a>
              </div>
            </div>

            {/* nvidia CARD  */}
            <div
              id="nvidiaCard"
              className="flex flex-col justify-between max-w-xl md:max-w-md min-h-[30rem]  border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
            >
              <div className="w-full border-b-2 border-borderbot flex justify-center items-center p-2">
                <div>
                  <CarouselTwo />
                </div>
              </div>

              <div className="flex flex-col w-full  p-1">
                <div className="flex flex-col justify-center items-center mr-5 ml-5">
                  <span className="italic text-accent font-bold text-2xl md:text-xl lg:text-xl font-heading break-all">
                    Nvidia Product Page
                  </span>
                </div>

                <div
                  id="nvidiaDesc"
                  className="flex justify-center items-center w-full h-fit mt-3 "
                >
                  <span className="text-md ml-3 mb-3 font-body text-text text-balance">
                    A full stack application including database, API server and
                    website detailing a video card product similar to NVIDIA's
                    RTX-40 series.
                  </span>
                </div>
              </div>

              <div
                id="nvidiaFooter"
                className=" flex items-center justify-between w-full h-fit bg-cardbg mt-3 p-3 font-body text-text"
              >
                <h1> July 2023 </h1>
                <a
                  href="https://github.com/NVIDIA-Clone/VIDIA-RTX-40-product-detail"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-2 items-center">
                    <h3>Source Code</h3>
                    <img src={sourceCode2} style={iconStyling}></img>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="flex flex-col sm:flex-col max-w-screen-2xl md:max-w-screen-2xl lg:w-full h-1/2 items-center justify-evenly md:flex-col lg:flex-row gap-10">
            {/* REI CARD  */}
            <div
              id="reiCard"
              className="flex flex-col justify-between max-w-xl md:max-w-md min-h-[30rem]  border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
            >
              <div className="w-full border-b-2 border-borderbot flex justify-center items-center p-2">
                <div>
                  <CarouselThree />
                </div>
              </div>

              <div className="flex flex-col w-full  p-1">
                <div className="flex flex-col justify-center items-center mr-5 ml-5">
                  <span className="italic text-accent font-bold text-2xl md:text-xl lg:text-xl font-heading break-all">
                    REI Product Page
                  </span>
                </div>

                <div
                  id="reiDesc"
                  className="flex justify-center w-full h-fit mt-3 "
                >
                  <span className="text-md ml-3 mb-3 font-body text-text">
                    A full-stack application that replicates the functionality
                    of REI's product page. This project encompasses a database,
                    API server, and website, providing a comprehensive showcase
                    of outdoor products akin to REI's offerings.
                  </span>
                </div>
              </div>

              <div
                id="reiFooter"
                className=" text-text flex items-center justify-between w-full h-fit bg-cardbg mt-3 p-3 font-body"
              >
                <h1> June 2023 </h1>
                <a
                  href="https://gitlab.com/Sonapanic/rei-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-2 items-center">
                    <h3>Source Code</h3>
                    <img src={sourceCode2} style={iconStyling}></img>
                  </div>
                </a>
              </div>
            </div>
            {/* PassVault CARD  */}
            <div
              id="PassVaultCard"
              className="flex flex-col justify-between max-w-xl md:max-w-md min-h-[30rem]  border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
            >
              <div className="w-full border-b-2 border-borderbot flex justify-center items-center p-2">
                <div>
                  <CarouselFour />
                </div>
              </div>

              <div className="flex flex-col w-full  p-1">
                <div className="flex flex-col justify-center items-center mr-5 ml-5">
                  <span className="italic text-accent font-bold text-2xl md:text-xl lg:text-xl font-heading break-all ">
                    PassVault
                  </span>
                </div>

                <div
                  id="PassVaultDesc"
                  className="flex justify-center w-full h-fit mt-3 "
                >
                  <span className="text-md ml-3 mb-3 font-body text-text">
                    A secure and user-friendly password manager application
                    developed using Electron for cross-platform compatibility.
                    PassVault aims to simplify password management, providing a
                    reliable solution for organizing and storing passwords with
                    a focus on user privacy and ease of use.
                  </span>
                </div>
              </div>

              <div
                id="PassVaultFooter"
                className="text-text flex items-center justify-between w-full h-fit bg-cardbg mt-3 p-3 font-body"
              >
                <h1> In progess... </h1>
                <a
                  href="https://github.com/BAL17/PassVault"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-2 items-center">
                    <h3>Source Code</h3>
                    <img src={sourceCode2} style={iconStyling}></img>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ProjectDisplay;
