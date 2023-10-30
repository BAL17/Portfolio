import USArmy from "../../assets/ExperienceSectionIcons/us-army.svg";
import Tangs from "../../assets/ExperienceSectionIcons/tangs-logo.svg";

const Experience = () => {
  return (
    <>
      <div
        id="experienceHeader"
        className="w-full bg-headerbg p-3 mb-10 mt-10 border-2"
      >
        <h1 className="flex ml-2 font-mono font-bold text-4xl text-white ">
          Experience
        </h1>
      </div>

      <div className="flex flex-col items-center gap-10 h-fit w-full">
        {/* ENGINEERING MANAGER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <div
          id="armyCardOne"
          className="flex flex-col justify-center w-1/2 h-fit border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
        >
          <div
            id="armyCardOneHeader"
            className="w-full border-b-2 border-borderbot flex justify-between items-center p-2 text-text"
          >
            <div className="flex items-center gap-2">
              <img src={USArmy}></img>
              <span className="text-xl text-text">U.S. Army</span>
            </div>

            <div className="flex mr-2">
              <span className="text-xl text-text">Engineering Manager</span>
            </div>
          </div>

          <div id="cardOneDesc" className="w-full h-fit mt-3 ">
            <li className="ml-5 text-text">
              Managed over 10 engineer teams, leading the design and
              implementation of an efficient training program, supervising
              project completion, and cultivating a culture of productivity and
              employee satisfaction.
            </li>
          </div>

          <div
            id="cardOneFooter"
            className="w-full h-fit bg-cardbg mt-3 p-3 flex justify-between"
          >
            <div className="flex ">
              <h1>May 2019 - September 2023</h1>
            </div>
            <div className="flex">
              <h1> Fort Carson, CO - Fort Hood, TX</h1>
            </div>
          </div>
        </div>

        {/* TEAM LEADER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <div
          id="armyCardTwo"
          className="flex flex-col justify-center w-1/2 h-fit border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
        >
          <div
            id="armyCardTwoHeader"
            className="w-full border-b-2 border-borderbot flex justify-between items-center p-2"
          >
            <div className="flex items-center gap-2">
              <img src={USArmy}></img>
              <span className="text-xl">U.S. Army</span>
            </div>

            <div className="flex">
              <span className="text-xl mr-2">Team Lead</span>
            </div>
          </div>

          <div id="cardTwoDesc" className="w-full h-fit mt-3 ">
            <li className="ml-5">
              Led and mentored more than 5 engineer teams, conducted
              comprehensive technical training sessions, fostered effective
              communication, and drove significant operational efficiency
              improvements.
            </li>
          </div>

          <div
            id="cardTwoFooter"
            className="w-full h-fit bg-cardbg mt-3 p-3 flex justify-between"
          >
            <div className="flex">
              <h1>January 2017 - May 2019</h1>
            </div>
            <div className="flex">
              <h1> Fort Polk, LA </h1>
            </div>
          </div>
        </div>

        {/* COMBAT ENGINEER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <div
          id="combatEngineerCard"
          className="flex flex-col justify-center w-1/2 h-fit border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
        >
          <div
            id="combatEngineerHeader"
            className="w-full border-b-2 border-borderbot flex justify-between items-center p-2"
          >
            <div className="flex items-center gap-2">
              <img src={USArmy}></img>
              <span className="text-xl text-text">U.S. Army</span>
            </div>

            <div className="flex">
              <span className="text-xl mr-2">Combat Engineer</span>
            </div>
          </div>

          <div id="combatEngineerDesc" className="w-full h-fit mt-3 ">
            <li className="ml-5 text-text ">
              Enhanced technical engineering proficiency through the application
              of advanced calculations, resulting in improved fortifications,
              the design of field structures, and the production of precise
              topographic maps vital for construction projects.
            </li>
          </div>

          <div
            id="combatEngineerFooter"
            className="w-full h-fit bg-cardbg mt-3 p-3 flex justify-between"
          >
            <div className="flex">
              <h1> January 2016 - January 2017</h1>
            </div>
            <div className="flex">
              <h1> Fort Polk, LA</h1>
            </div>
          </div>
        </div>

        {/* TANGS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
        <div
          id="tangsCard"
          className="flex flex-col justify-center w-1/2 h-fit border-2 rounded-lg shadow-lg bg-secbg overflow-hidden"
        >
          <div
            id="tangsHeader"
            className="w-full border-b-2 border-borderbot flex justify-between items-center p-2"
          >
            <div className="flex items-center gap-3">
              <img src={Tangs} className="ml-2"></img>
              <span className="text-xl">Tang's Pacific Bistro</span>
            </div>

            <div className="flex">
              <span className="text-xl mr-2">Host/Busser</span>
            </div>
          </div>

          <div id="tangsDesc" className="w-full h-fit mt-3 ">
            <li className="ml-5">
              Delivered exceptional customer service while efficiently managing
              restaurant resources, overseeing payment collection, and
              facilitating reservations, ensuring a seamless dining experience
              for patrons.
            </li>
          </div>

          <div
            id="tangsFooter"
            className="w-full h-fit bg-cardbg mt-3 p-3 flex justify-between"
          >
            <div className="flex">
              <h1> July 2014 - November 2015 </h1>
            </div>
            <div className="flex">
              <h1>Fort Worth, TX</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
