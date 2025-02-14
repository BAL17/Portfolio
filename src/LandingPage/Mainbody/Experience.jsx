import USArmy from "../../assets/ExperienceSectionIcons/us-army.svg";
import Tangs from "../../assets/ExperienceSectionIcons/tangs-logo.svg";

const Experience = () => {
  return (
    <>
      <div
        id="experienceHeader"
        className="w-full bg-headerbg p-3 mb-10 border-2"
      >
        <h1 className="flex ml-2 font-heading font-bold text-4xl text-white ">
          Experience
        </h1>
      </div>

      <div className="flex flex-col items-center gap-10 h-fit w-full">
        {/* ENGINEERING MANAGER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <div
          id="armyCardOne"
          className="flex flex-col justify-center w-11/12 md:w-4/6 lg:w-1/2 h-fit border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
        >
          <div
            id="armyCardOneHeader"
            className="w-full border-b-2 border-borderbot flex justify-between items-center p-2 text-text font-heading"
          >
            <div className="flex items-center gap-2 ">
              <img src={USArmy}></img>
              <span className="text-xl text-text">U.S. Army</span>
            </div>

            <div className="flex mr-2">
              <span className="text-xl text-accent font-bold">
                Engineering Manager
              </span>
            </div>
          </div>

          <div id="cardOneDesc" className="w-full h-fit mt-3 ">
            <li className="ml-5 text-text font-body">
              Managed over 10 engineer teams, leading the design and
              implementation of an efficient training program, supervising
              project completion, and cultivating a culture of productivity and
              employee satisfaction.
            </li>
          </div>

          <div
            id="cardOneFooter"
            className="w-full h-fit bg-cardbg mt-3 p-3 flex justify-between font-body text-text"
          >
            <div className="flex overflow-clip">
              <h1 className="text-sm md:text-md lg:text-base">
                May 2019 - September 2023
              </h1>
            </div>
            <div className="flex overflow-clip">
              <h1 className="text-sm md:text-md lg:text-base">
                Fort Carson, CO - Fort Cavazos, TX
              </h1>
            </div>
          </div>
        </div>

        {/* TEAM LEADER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <div
          id="armyCardTwo"
          className="flex flex-col justify-center w-11/12 md:w-4/6 lg:w-1/2 h-fit border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
        >
          <div
            id="armyCardTwoHeader"
            className="w-full border-b-2 border-borderbot flex justify-between items-center p-2 font-heading"
          >
            <div className="flex items-center gap-2 ">
              <img src={USArmy}></img>
              <span className="text-xl text-text">U.S. Army</span>
            </div>

            <div className="flex">
              <span className="text-xl mr-2 text-accent font-bold">
                Team Lead
              </span>
            </div>
          </div>

          <div id="cardTwoDesc" className="w-full h-fit mt-3 ">
            <li className="ml-5 text-text font-body">
              Led and mentored more than 5 engineer teams, conducted
              comprehensive technical training sessions, fostered effective
              communication, and drove significant operational efficiency
              improvements.
            </li>
          </div>

          <div
            id="cardTwoFooter"
            className="w-full h-fit bg-cardbg mt-3 p-3 flex justify-between font-body text-text"
          >
            <div className="flex">
              <h1 className="text-sm md:text-md lg:text-base">
                January 2017 - May 2019
              </h1>
            </div>
            <div className="flex">
              <h1 className="text-sm md:text-md lg:text-base">
                {" "}
                Fort Johnson, LA{" "}
              </h1>
            </div>
          </div>
        </div>

        {/* COMBAT ENGINEER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <div
          id="combatEngineerCard"
          className="flex flex-col justify-center w-11/12 md:w-4/6 lg:w-1/2 h-fit border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
        >
          <div
            id="combatEngineerHeader"
            className="w-full border-b-2 border-borderbot flex justify-between items-center p-2 font-heading"
          >
            <div className="flex items-center gap-2 ">
              <img src={USArmy}></img>
              <span className="text-xl text-text">U.S. Army</span>
            </div>

            <div className="flex">
              <span className="text-xl mr-2 text-accent font-bold">
                Operations Associate
              </span>
            </div>
          </div>

          <div id="combatEngineerDesc" className="w-full h-fit mt-3 ">
            <li className="ml-5 text-text font-body ">
              Administered and maintained information and training records for
              120+ employees using proprietary software. Coordinated travel
              logistics for training events and executed various administrative
              actions, optimizing processes and promoting efficiency.
            </li>
          </div>

          <div
            id="combatEngineerFooter"
            className="w-full h-fit bg-cardbg mt-3 p-3 flex justify-between font-body text-text"
          >
            <div className="flex">
              <h1 className="text-sm md:text-md lg:text-base">
                January 2016 - January 2017
              </h1>
            </div>
            <div className="flex">
              <h1 className="text-sm md:text-md lg:text-base">
                Fort Johnson, LA
              </h1>
            </div>
          </div>
        </div>

        {/* TANGS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <div
          id="tangsCard"
          className="flex flex-col justify-center w-11/12 md:w-4/6 lg:w-1/2 h-fit border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
        >
          <div
            id="tangsHeader"
            className="w-full border-b-2 border-borderbot flex justify-between items-center p-2 font-heading"
          >
            <div className="flex items-center gap-3">
              <img src={Tangs} className="ml-2"></img>
              <span className="text-xl text-text">Tang's Pacific Bistro</span>
            </div>

            <div className="flex">
              <span className="text-xl mr-2 text-accent font-bold ">
                Host/Busser
              </span>
            </div>
          </div>

          <div id="tangsDesc" className="w-full h-fit mt-3 ">
            <li className=" text-text ml-5 font-body">
              Delivered exceptional customer service while efficiently managing
              restaurant resources, overseeing payment collection, and
              facilitating reservations, ensuring a seamless dining experience
              for patrons.
            </li>
          </div>

          <div
            id="tangsFooter"
            className="w-full h-fit bg-cardbg mt-3 p-3 flex justify-between font-body text-text"
          >
            <div className="flex">
              <h1 className="text-sm md:text-md lg:text-base">
                July 2014 - November 2015
              </h1>
            </div>
            <div className="flex">
              <h1 className="text-sm md:text-md lg:text-base">
                Fort Worth, TX
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
