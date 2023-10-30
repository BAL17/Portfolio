import { Link } from "react-scroll";
import SideBarHeader from "./SideBarHeader.jsx";

const SideBar = () => {
  return (
    <>
      <div className="flex flex-col w-48">
        <aside className="fixed h-full w-48 overflow-y-auto bg-secbg text-text ">
          <div className="flex flex-col justify-center items-center h-40 p-1 cursor-pointer border-b-2 border-white hover:border-x-4 border-x-accent">
            <SideBarHeader />
          </div>
          <Link to="About" spy={true} smooth={true} offset={900} duration={500}>
            <div className="flex justify-center items-center h-24 w-full text-xl cursor-pointer hover:border-l-4 border-accent">
              <h1>About</h1>
            </div>
          </Link>

          <Link
            to="Experience"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            <div
              id="experience"
              className=" flex justify-center items-center  h-24 w-full text-xl cursor-pointer hover:border-l-4 border-accent"
            >
              <h1>Experience</h1>
            </div>
          </Link>

          <Link
            to="Projects"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            <div
              id="projects"
              className=" flex justify-center items-center  h-24 w-full text-xl cursor-pointer hover:border-l-4
              border-accent"
            >
              <h1>Projects</h1>
            </div>
          </Link>

          {/* <Link
            to="Homelab"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            <div
              id="homelab"
              className=" flex justify-center items-center  h-24 w-full text-xl cursor-pointer hover:border-l-4
              border-accent"
            >
              <h1>Home Lab</h1>
            </div>
          </Link> */}

          <Link to="Skills" spy={true} smooth={true} offset={10} duration={500}>
            <div
              id="skills"
              className="flex justify-center items-center  h-24 w-full text-xl cursor-pointer hover:border-l-4 border-accent"
            >
              <h1>Skills</h1>
            </div>
          </Link>
          <Link
            to="Education"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <div
              id="education"
              className="flex justify-center items-center  h-24 w-full text-xl cursor-pointer hover:border-l-4 border-accent"
            >
              <h1>Education</h1>
            </div>
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <div
              id="contact"
              className="flex justify-center items-center  h-24 w-full text-xl cursor-pointer hover:border-l-4 border-accent"
            >
              <h1>Contact</h1>
            </div>
          </Link>

          <a
            href="https://docs.google.com/document/d/11NlK3ZPJ6uN3rgGu3ggHgnbb8wjB96Io/edit?usp=sharing&ouid=116552306286835136419&rtpof=true&sd=true"
            target="_blank"
          >
            <div
              id="resume"
              className="flex justify-center items-center  h-24 w-full text-xl cursor-pointer hover:border-l-4 border-accent"
            >
              <h1>Resume</h1>
            </div>
          </a>
        </aside>
      </div>
    </>
  );
};

export default SideBar;
