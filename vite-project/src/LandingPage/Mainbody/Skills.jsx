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
  const deviconStyling = {
    height: '50px',
    width: '50px'
  }

  return (
    <>
      <div
        id="skillsHeader"
        className="w-full bg-headerbg p-3 mb-10 mt-10 border-2 "
      >
        <h1 className="flex ml-2 font-heading font-bold text-4xl text-white ">
          Skills
        </h1>
      </div>

      {/* DIV THAT HOLDS ALL THE CARDS  */}
      <div className="flex flex-col w-full items-center gap-6 md:gap-6 lg:gap-10 ">
        {/* FRONT END */}
        <div
          id="frontEnd"
          className="w-5/6 md:w-5/6 lg:w-4/6 flex flex-col p-1 md:p-2 lg:p-2 border-2 shadow-lg bg-secbg overflow-hidden rounded-lg"
        >
          <div className="flex justify-center w-full text-xl border-b-2 border-borderbot">
            <h1 className="flex text-2xl lg:p-2 text-text font-heading">
              FRONTEND
            </h1>
          </div>

          <div className="flex justify-center items-center gap-2 md:gap-8 lg:gap-12 mt-3 font-body shrink">
            <div className="flex flex-col items-center">
              <img
                src={ReactIcon}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">
                React
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={JS}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">
                JavaScript ES6+
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={CSS}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">
                CSS3
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={HTML}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">
                HTML5
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={JQUERY}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">
                JQuery
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={TLWIND}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">
                TailwindCSS
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={FIGMA}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">
                Figma
              </h3>
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div
          id="backEnd"
          className="w-5/6 md:w-5/6 lg:w-4/6 flex flex-col p-1 md:p-2 lg:p-2 border-2 shadow-lg bg-secbg overflow-hidden rounded-lg"
        >
          <div className="flex justify-center w-full border-b-2 border-borderbot">
            <h1 className="flex text-2xl p-2 text-text font-heading">
              BACKEND
            </h1>
          </div>

          <div className="flex justify-center items-center gap-2 md:gap-8 lg:gap-12 mt-3 font-body shrink">
            <div className="flex flex-col items-center">
              <img
                src={NODE}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">NodeJS</h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={EXP}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">ExpressJS</h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={PSQL}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">PostgresSQL</h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={MGDB}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">MongoDB</h3>
            </div>
          </div>
        </div>

        {/* TESTING/DEPLOYMENT */}
        <div
          id="testing"
          className="w-5/6 md:w-5/6 lg:w-4/6 flex flex-col p-1 md:p-2 lg:p-2 border-2 shadow-lg bg-secbg overflow-hidden rounded-lg"
        >
          <div className="flex justify-center w-full text-xl border-b-2 border-borderbot">
            <h1 className="flex text-2xl p-2 text-text font-heading">
              TESTING/DEPLOYMENT
            </h1>
          </div>

          <div className="flex justify-center items-center gap-2 md:gap-8 lg:gap-12 mt-3 font-body shrink">
            <div className="flex flex-col items-center">
              <img
                src={DOCKER}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">Docker</h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={VITEST}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">Vitest</h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={WP}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">Webpack</h3>
            </div>
          </div>
        </div>
        {/* PROJECT MANAGEMENT */}
        <div
          id="projectManagement"
          className="w-5/6 md:w-5/6 lg:w-4/6 flex flex-col p-1 md:p-2 lg:p-2 border-2 shadow-lg bg-secbg overflow-hidden rounded-lg"
        >
          <div className="flex justify-center w-full text-xl border-b-2 border-borderbot">
            <h1 className="flex text-2xl p-2 text-text font-heading">
              PROJECT MANAGEMENT
            </h1>
          </div>

          <div className="flex justify-center items-center gap-2 md:gap-8 lg:gap-12 mt-3 font-body shrink">
            <div className="flex flex-col items-center">
              <img
                src={GITLAB}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">GitLab</h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={JIRA}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">Jira</h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={SLACK}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">Slack</h3>
            </div>
          </div>
        </div>

        {/* Other */}
        <div
          id="other"
          className="w-5/6 md:w-5/6 lg:w-4/6 flex flex-col p-1 md:p-2 lg:p-2 border-2 shadow-lg bg-secbg overflow-hidden rounded-lg"
        >
          <div className="flex justify-center w-full text-xl border-b-2 border-borderbot">
            <h1 className="flex text-2xl p-2 text-text font-heading">OTHER</h1>
          </div>

          <div className="flex justify-center items-center gap-2 md:gap-8 lg:gap-12 mt-3 font-body shrink">
            <div className="flex flex-col items-center">
              <img
                src={MACOS}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">MacOS</h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={LINUX}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">Linux</h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={WINDOWS}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">Windows</h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={GIT}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">GIT</h3>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={GITHUB}
                className="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 object-scale-down"
              ></img>
              <h3 className="text-text text-[7px] md:text-lg lg:text-xl">Github</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
