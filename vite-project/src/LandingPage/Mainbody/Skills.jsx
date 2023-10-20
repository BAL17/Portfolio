import ReactIcon from "../../assets/DevIcons/icons8-react.svg";
import JS from "../../assets/DevIcons/icons8-javascript.svg";
import CSS from "../../assets/DevIcons/icons8-css.svg";
import HTML from "../../assets/DevIcons/icons8-html.svg";
import JIRA from "../../assets/DevIcons/icons8-jira.svg";
import GIT from "../../assets/DevIcons/icons8-git.svg";
import JQUERY from "../../assets/DevIcons/icons8-jquery.svg";
import GITLAB from "../../assets/DevIcons/icons8-gitlab.svg";
import LINUX from "../../assets/DevIcons/icons8-linux-48.png";
import WINDOWS from "../../assets/DevIcons/icons8-windows.svg";
import MACOS from "../../assets/DevIcons/icons8-macos.svg";
import DOCKER from "../../assets/DevIcons/icons8-docker.svg";
import PSQL from "../../assets/DevIcons/icons8-postgresql.svg";
import MGDB from "../../assets/DevIcons/icons8-mongodb.svg";
import TLWIND from "../../assets/DevIcons/icons8-tailwind-css.svg";
import FIGMA from "../../assets/DevIcons/icons8-figma.svg";
import NODE from "../../assets/DevIcons/icons8-nodejs.svg";
import EXP from "../../assets/DevIcons/icons8-express-js.svg";
import SLACK from "../../assets/DevIcons/icons8-slack.svg";
import VITEST from "../../assets/DevIcons/vitest.svg"
import WP from "../../assets/DevIcons/icons8-webpack.svg"
import GITHUB from "../../assets/DevIcons/icons8-github.svg"

const Skills = () => {
  return (
    <>
      <div id="skillsHeader" className="w-full bg-slate-500 p-2 mb-10">
        <h1 className="flex ml-2 font-mono font-bold text-4xl text-white ">
          Skills
        </h1>
      </div>

      {/* DIV THAT HOLDS ALL THE CARDS  */}
      <div className="flex flex-col w-full items-center gap-10">
        {/* FRONT END */}
        <div
          id="frontEnd"
          className="w-3/5 flex flex-col p-2 border-2 shadow-lg bg-white "
        >
          <div className="flex justify-center w-full text-xl border-b-2 border-slate-300">
            <h1 className="flex text-2xl p-2">FRONTEND</h1>
          </div>

          <div className="flex justify-center gap-10 mt-3">
            <img src={ReactIcon}></img>
            <img src={JS}></img>
            <img src={CSS}></img>
            <img src={HTML}></img>
            <img src={JQUERY}></img>
            <img src={TLWIND}></img>
            <img src={FIGMA}></img>
          </div>
        </div>

        {/* BACKEND */}
        <div
          id="backEnd"
          className="w-3/5 flex flex-col p-2 border-2 shadow-lg bg-white"
        >
          <div className="flex justify-center w-full border-b-2 border-slate-300">
            <h1 className="flex text-2xl p-2">BACKEND</h1>
          </div>

          <div className="flex justify-center gap-10 mt-3 p-2">
            <img src={NODE}></img>
            <img src={EXP}></img>
            <img src={MGDB}></img>
            <img src={PSQL}></img>
          </div>
        </div>

        {/* TESTING/DEPLOYMENT */}
        <div
          id="testing"
          className="w-3/5 flex flex-col p-2 border-2 shadow-lg bg-white"
        >
          <div className="flex justify-center w-full text-xl border-b-2 border-slate-300">
            <h1 className="flex text-2xl p-2">TESTING/DEPLOYMENT</h1>
          </div>

          <div className="flex justify-center gap-10 mt-3">
            <img src={DOCKER}></img>
            <img src={VITEST}></img>
            <img src={WP}></img>
          </div>
        </div>
        {/* PROJECT MANAGEMENT */}
        <div
          id="projectManagement"
          className="w-3/5 flex flex-col p-2 border-2 shadow-lg bg-white"
        >
          <div className="flex justify-center w-full text-xl border-b-2 border-slate-300">
            <h1 className="flex text-2xl p-2 ">PROJECT MANAGEMENT</h1>
          </div>

          <div className="flex justify-center gap-10 mt-3">
            <img src={GITLAB}></img>
            <img src={JIRA}></img>
            <img src={SLACK}></img>
          </div>
        </div>

        {/* Other */}
        <div
          id="other"
          className="w-3/5 flex flex-col p-2 border-2 shadow-lg bg-white"
        >
          <div className="flex justify-center w-full text-xl border-b-2 border-slate-300">
            <h1 className="flex text-2xl p-2 ">OTHER</h1>
          </div>

          <div className="flex justify-center gap-10 mt-3">
            <img src={MACOS}></img>
            <img src={LINUX}></img>
            <img src={WINDOWS}></img>
            <img src={GIT}></img>
            <img src={GITHUB}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
