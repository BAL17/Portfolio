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
      <div id="skillsHeader" className="w-full bg-headerbg p-3 mb-10 mt-10 border-2 ">
        <h1 className="flex ml-2 font-mono font-bold text-4xl text-white ">
          Skills
        </h1>
      </div>

      {/* DIV THAT HOLDS ALL THE CARDS  */}
      <div className="flex flex-col w-full items-center gap-10">
        {/* FRONT END */}
        <div
          id="frontEnd"
          className="w-3/5 flex flex-col p-2 border-2 shadow-lg bg-secbg overflow-hidden rounded-lg"
        >
          <div className="flex justify-center w-full text-xl border-b-2 border-borderbot">
            <h1 className="flex text-2xl p-2 text-text">FRONTEND</h1>
          </div>

          <div className="flex justify-center items-center gap-10 mt-3">
            <div className="flex flex-col items-center">
              <img src={ReactIcon}></img>
              <h3 className="text-text">React</h3>
            </div>

            <div className="flex flex-col items-center">
              <img src={JS}></img>
              <h3 className="text-text">JavaScript ES6+</h3>
            </div>

            <div className="flex flex-col items-center">
              <img src={CSS}></img>
              <h3 className="text-text">CSS3</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={HTML}></img>
              <h3 className="text-text">HTML5</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={JQUERY}></img>
              <h3 className="text-text">JQuery</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={TLWIND}></img>
              <h3 className="text-text">TailwindCSS</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={FIGMA}></img>
              <h3 className="text-text">Figma</h3>
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div
          id="backEnd"
          className="w-3/5 flex flex-col p-2 border-2 shadow-lg bg-secbg overflow-hidden rounded-lg"
        >
          <div className="flex justify-center w-full border-b-2 border-borderbot">
            <h1 className="flex text-2xl p-2 text-text">BACKEND</h1>
          </div>

          <div className="flex justify-center items-center gap-10 mt-3 p-2">
            <div className="flex flex-col items-center">
              <img src={NODE}></img>
              <h3 className="text-text">NodeJS</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={EXP}></img>
              <h3 className="text-text">ExpressJS</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={PSQL}></img>
              <h3 className="text-text">PostgresSQL</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={MGDB}></img>
              <h3 className="text-text">MongoDB</h3>
            </div>
          </div>
        </div>

        {/* TESTING/DEPLOYMENT */}
        <div
          id="testing"
          className="w-3/5 flex flex-col p-2 border-2 shadow-lg bg-secbg overflow-hidden rounded-lg"
        >
          <div className="flex justify-center w-full text-xl border-b-2 border-borderbot">
            <h1 className="flex text-2xl p-2 text-text">TESTING/DEPLOYMENT</h1>
          </div>

          <div className="flex justify-center items-center gap-10 mt-3">
            <div className="flex flex-col items-center">
              <img src={DOCKER}></img>
              <h3 className="text-text">Docker</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={VITEST}></img>
              <h3 className="text-text">Vitest</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={WP}></img>
              <h3 className="text-text">Webpack</h3>
            </div>
          </div>
        </div>
        {/* PROJECT MANAGEMENT */}
        <div
          id="projectManagement"
          className="w-3/5 flex flex-col p-2 border-2 shadow-lg bg-secbg overflow-hidden rounded-lg"
        >
          <div className="flex justify-center w-full text-xl border-b-2 border-borderbot">
            <h1 className="flex text-2xl p-2 text-text">PROJECT MANAGEMENT</h1>
          </div>

          <div className="flex justify-center items-center gap-10 mt-3">
            <div className="flex flex-col items-center">
              <img src={GITLAB}></img>
              <h3 className="text-text">GitLab</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={JIRA}></img>
              <h3 className="text-text">Jira</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={SLACK}></img>
              <h3 className="text-text">Slack</h3>
            </div>
          </div>
        </div>

        {/* Other */}
        <div
          id="other"
          className="w-3/5 flex flex-col p-2 border-2 shadow-lg bg-secbg overflow-hidden rounded-lg"
        >
          <div className="flex justify-center w-full text-xl border-b-2 border-borderbot">
            <h1 className="flex text-2xl p-2 text-text">OTHER</h1>
          </div>

          <div className="flex justify-center items-center gap-10 mt-3">
            <div className="flex flex-col items-center">
              <img src={MACOS}></img>
              <h3 className="text-text">MacOS</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={LINUX}></img>
              <h3 className="text-text">Linux</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={WINDOWS}></img>
              <h3 className="text-text">Windows</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={GIT}></img>
              <h3 className="text-text">GIT</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src={GITHUB}></img>
              <h3 className="text-text">Github</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
