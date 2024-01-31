import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <>
      <div className="h-10 w-full sm:h-10 md:h-10 lg:hidden font-heading bg-black text-white fixed  shadow-lg transition-transform transform duration-300 ease-in-out border-b-2">
        <div className="flex items-center justify-around  p-2 ">
          <Link to="About" spy={true} smooth={true} offset={0} duration={500}>
            <div className="flex h-10 w-full text-md xs:text-md sm:text-lg hover:text-accent">
              <h1>About</h1>
            </div>
          </Link>

          <Link
            to="Experience"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            <div
              id="experience"
              className=" flex h-10 w-full text-md xs:text-md sm:text-lg hover:text-accent "
            >
              <h1>Experience</h1>
            </div>
          </Link>

          <Link
            to="Projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div
              id="projects"
              className=" flex h-10 w-full text-md xs:text-md sm:text-lg hover:text-accent "
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

          <Link to="Skills" spy={true} smooth={true} offset={0} duration={500}>
            <div
              id="skills"
              className="flex h-10 w-full text-md xs:text-md sm:text-lg hover:text-accent"
            >
              <h1>Skills</h1>
            </div>
          </Link>
          <Link
            to="Education"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div
              id="education"
              className="flex h-10 w-full text-md xs:text-md sm:text-lg hover:text-accent"
            >
              <h1>Education</h1>
            </div>
          </Link>
          <Link to="Contact" spy={true} smooth={true} offset={0} duration={500}>
            <div
              id="contact"
              className="flex h-10 w-full text-md xs:text-md sm:text-lg hover:text-accent "
            >
              <h1>Contact</h1>
            </div>
          </Link>

          <a
            href="https://docs.google.com/document/d/11NlK3ZPJ6uN3rgGu3ggHgnbb8wjB96Io/edit?usp=sharing&ouid=116552306286835136419&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
          >
            <div
              id="resume"
              className="flex h-10 w-full text-md xs:text-md sm:text-lg hover:text-accent"
            >
              <h1>Resume</h1>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
