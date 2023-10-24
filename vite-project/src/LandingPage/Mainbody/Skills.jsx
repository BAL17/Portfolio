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
import VITEST from "../../assets/DevIcons/vitest.svg";
import WP from "../../assets/DevIcons/icons8-webpack.svg";
import GITHUB from "../../assets/DevIcons/icons8-github.svg";

const Skills = () => {
  return (
    <>
      <div id="skillsHeader" className="w-full bg-HeaderBG p-2 mb-10 mt-10">
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

          <div className="flex justify-center items-center gap-10 mt-3">
            <div className="flex flex-col items-center">
              <img src={ReactIcon}></img>
              <h3>React</h3>
            </div>

            <div className="flex flex-col items-center">
              <img src={JS}></img>
              <h3>JavaScript ES6+</h3>
            </div>

            <div className="flex flex-col items-center">
              <img src={CSS}></img>
              <h3>CSS3</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={HTML}></img>
              <h3>HTML5</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={JQUERY}></img>
              <h3>JQuery</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={TLWIND}></img>
              <h3>TailwindCSS</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={FIGMA}></img>
              <h3>Figma</h3>
            </div>
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

          <div className="flex justify-center items-center gap-10 mt-3 p-2">
            <div className="flex flex-col items-center">
              <img src={NODE}></img>
              <h3>NodeJS</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={EXP}></img>
              <h3>ExpressJS</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={PSQL}></img>
              <h3>PostgresSQL</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={MGDB}></img>
              <h3>MongoDB</h3>
            </div>
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

          <div className="flex justify-center items-center gap-10 mt-3">
            <div className="flex flex-col items-center">
              <img src={DOCKER}></img>
              <h3>Docker</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={VITEST}></img>
              <h3>Vitest</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={WP}></img>
              <h3>Webpack</h3>
            </div>
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

          <div className="flex justify-center items-center gap-10 mt-3">
            <div className="flex flex-col items-center">
              <img src={GITLAB}></img>
              <h3>GitLab</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={JIRA}></img>
              <h3>Jira</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={SLACK}></img>
              <h3>Slack</h3>
            </div>
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

          <div className="flex justify-center items-center gap-10 mt-3">
            <div className="flex flex-col items-center">
              <img src={MACOS}></img>
              <h3>MacOS</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={LINUX}></img>
              <h3>Linux</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={WINDOWS}></img>
              <h3>Windows</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={GIT}></img>
              <h3>GIT</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={GITHUB}></img>
              <h3>Github</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
