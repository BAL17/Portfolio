import USArmy from "../../assets/us-army.svg";
import Tangs from "../../assets/tangs-logo.svg"

const Experience = () => {
    return (
      <>
        <div
          id="experienceHeader"
          className="border-2 w-full bg-slate-500 p-2 mb-10"
        >
          <h1 className="flex ml-2 font-mono font-bold text-4xl text-white ">
            Experience
          </h1>
        </div>

        <div className="flex flex-col items-center gap-10 h-fit w-full">
          {/* ENGINEERING MANAGER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
          <div
            id="armyCardOne"
            className="flex flex-col justify-center w-1/2 h-fit border-2 shadow-lg bg-white"
          >
            <div
              id="armyCardOneHeader"
              className="w-full border-b-2 border-slate-300 flex justify-between items-center p-2"
            >
              <div className="flex items-center gap-2">
                <img src={USArmy}></img>
                <span className="text-xl">U.S. Army</span>
              </div>

              <div className="flex mr-2">
                <span className="text-xl">Engineering Manager</span>
              </div>
            </div>

            <div id="cardOneDesc" className="w-full h-fit mt-3 ">
              <h1 className="text-1xl ml-2">
                hello world lorem ipsum somenfgjkakdflkjas
              </h1>

              <li className="ml-5">did something here</li>
              <li className="ml-5"></li>
              <li className="ml-5"></li>
              <li className="ml-5"></li>
            </div>

            <div
              id="cardOneFooter"
              className="w-full h-fit bg-slate-50 mt-3 p-3"
            >
              <h1>Aug 2018 - Sept 2023 | Fort Carson, CO - Fort Hood, TX </h1>
            </div>
          </div>

          {/* TEAM LEADER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
          <div
            id="armyCardTwo"
            className="flex flex-col justify-center w-1/2 h-fit border-2 shadow-lg bg-white"
          >
            <div
              id="armyCardTwoHeader"
              className="w-full border-b-2 border-slate-300 flex justify-between items-center p-2"
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
              <h1 className="text-1xl ml-2">
                hello world lorem ipsum somenfgjkakdflkjas
              </h1>

              <li className="ml-5">did something here</li>
              <li className="ml-5"></li>
              <li className="ml-5"></li>
              <li className="ml-5"></li>
            </div>

            <div
              id="cardTwoFooter"
              className="w-full h-fit bg-slate-50 mt-3 p-3"
            >
              <h1> Januray 2017 - Aug 2018 | Fort Polk, LA </h1>
            </div>
          </div>

          {/* COMBAT ENGINEER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
          <div
            id="combatEngineerCard"
            className="flex flex-col justify-center w-1/2 h-fit border-2 shadow-lg bg-white"
          >
            <div
              id="combatEngineerHeader"
              className="w-full border-b-2 border-slate-300 flex justify-between items-center p-2"
            >
              <div className="flex items-center gap-2">
                <img src={USArmy}></img>
                <span className="text-xl">U.S. Army</span>
              </div>

              <div className="flex">
                <span className="text-xl mr-2">Combat Engineer</span>
              </div>
            </div>

            <div id="combatEngineerDesc" className="w-full h-fit mt-3 ">
              <h1 className="text-1xl ml-2">
                hello world lorem ipsum somenfgjkakdflkjas
              </h1>

              <li className="ml-5">did something here</li>
              <li className="ml-5"></li>
              <li className="ml-5"></li>
              <li className="ml-5"></li>
            </div>

            <div
              id="combatEngineerFooter"
              className="w-full h-fit bg-slate-50 mt-3 p-3"
            >
              <h1> Jan 2016 - Jan 2017 | Fort Polk, LA </h1>
            </div>
          </div>

          {/* TANGS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
          <div
            id="tangsCard"
            className="flex flex-col justify-center w-1/2 h-fit border-2 shadow-lg bg-white"
          >
            <div
              id="tangsHeader"
              className="w-full border-b-2 border-slate-300 flex justify-between items-center p-2"
            >
              <div className="flex items-center gap-2">
                <img src={Tangs} className="ml-2"></img>
                <span className="text-xl">Tang's Pacific Bistro</span>
              </div>

              <div className="flex">
                <span className="text-xl mr-2">Engineering Manager</span>
              </div>
            </div>

            <div id="tangsDesc" className="w-full h-fit mt-3 ">
              <h1 className="text-1xl ml-2">
                hello world lorem ipsum somenfgjkakdflkjas
              </h1>

              <li className="ml-5">did something here</li>
              <li className="ml-5"></li>
              <li className="ml-5"></li>
              <li className="ml-5"></li>
            </div>

            <div id="tangsFooter" className="w-full h-fit bg-slate-50 mt-3 p-3">
              <h1> xxx xxxx - xxx xxxx | Fort Worth, TX </h1>
            </div>
          </div>
        </div>
      </>
    );
};

export default Experience;
