const SideBar = () => {
  return (
    <>
      <div className="flex flex-col w-32">
        <aside className="fixed h-full w-32 overflow-y-auto">
          <div
            id="about"
            className="flex justify-center items-center border-2 h-32 w-full "
          >
            <h1>About</h1>
          </div>
          <div
            id="projects"
            className=" flex justify-center items-center border-2 h-[7.5rem] w-full"
          >
            <h1>Projects</h1>
          </div>
          <div
            id="skills"
            className="flex justify-center items-center border-2 h-[7.5rem] w-full"
          >
            <h1>Skills</h1>
          </div>
          <div
            id="education"
            className="flex justify-center items-center border-2 h-[7.5rem] w-full"
          >
            <h1>Education</h1>
          </div>
          <div
            id="contact"
            className="flex justify-center items-center border-2 h-[7.5rem] w-full"
          >
            <h1>Contact</h1>
          </div>
          <div
            id="resume"
            className="flex justify-center items-center border-2 h-[7.5rem] w-full"
          >
            <h1>Resume</h1>
          </div>
        </aside>
      </div>
    </>
  );
};

export default SideBar;
