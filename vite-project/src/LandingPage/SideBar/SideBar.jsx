
import SideBarHeader from "./SideBarHeader.jsx";

const SideBar = () => {
  return (
    <>
      <div className="flex flex-col w-44">
        <aside className="fixed h-full w-44 overflow-y-auto bg-[#f1f1f1] ">
          <div className="flex flex-col justify-center items-center border-b-4 h-32 p-1 cursor-pointer hover:border-x-4 border-x-slate-50">
            <SideBarHeader />
          </div>
          <div
            id="about"
            className="flex justify-center items-center h-24 w-full text-xl cursor-pointer hover:border-x-4 border-indigo-500"
          >
            <h1>About</h1>
          </div>
          <div
            id="experience"
            className=" flex justify-center items-center  h-24 w-full text-xl cursor-pointer hover:border-x-4 border-indigo-500"
          >
            <h1>Experience</h1>
          </div>
          <div
            id="projects"
            className=" flex justify-center items-center  h-24 w-full text-xl cursor-pointer hover:border-x-4 border-indigo-500"
          >
            <h1>Projects</h1>
          </div>
          <div
            id="skills"
            className="flex justify-center items-center  h-24 w-full text-xl cursor-pointer hover:border-x-4 border-indigo-500"
          >
            <h1>Skills</h1>
          </div>
          <div
            id="education"
            className="flex justify-center items-center  h-24 w-full text-xl cursor-pointer hover:border-x-4 border-indigo-500"
          >
            <h1>Education</h1>
          </div>
          <div
            id="contact"
            className="flex justify-center items-center  h-24 w-full text-xl cursor-pointer hover:border-x-4 border-indigo-500"
          >
            <h1>Contact</h1>
          </div>
          <div
            id="resume"
            className="flex justify-center items-center  h-24 w-full text-xl cursor-pointer hover:border-x-4 border-indigo-500"
          >
            <h1>Resume</h1>
          </div>
        </aside>
      </div>
    </>
  );
};

export default SideBar;
