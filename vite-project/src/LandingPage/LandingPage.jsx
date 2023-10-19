import React from "react";
import SideBar from "./SideBar/SideBar.jsx";
import AboutMe from "./Mainbody/AboutMe.jsx";
import Experience from "./Mainbody/Experience.jsx";
import Skills from "./Mainbody/Skills.jsx";
import ProjectDisplay from "./Mainbody/ProjectDisplay.jsx";
import Contact from "./Mainbody/Contact.jsx";
import Footer from "./Footer/Footer.jsx";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col h-screen ">
        <div className="flex-1 flex bg-[#DDE6ED]">
          <SideBar />

          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col border-2 h-fit w-full ">
              <AboutMe />
            </div>

            <div className="flex flex-col justify-center border-emerald-100">
              <Experience />
            </div>

            <div className="flex flex-col justify-center w-full border-orange-300">
              <Skills />
            </div>

            <div className="flex flex-col justify-center w-full">
              <ProjectDisplay />
            </div>

            <div className="flex flex-col justify-center border-2 w-full">
              <Contact />
            </div>

            <div></div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

// const LandingPage = () => {
//   return (
//     <>
//       {/* FULL LANDING PAGE DIV */}
//       <div className="bg-white max-w-screen h-screen flex flex-col">
//         {/* HEADER SECTION */}
//         <div
//           id="HeaderSection"
//           className="flex flex-nowrap justify-end h-fit p-2"
//         >
//           <Header />
//         </div>

//         <div className="flex">

//         {/* SIDE BAR SECTION */}
//         <div id="SideBarSection" className="max-w-fit">
//           <div
//             id="SidebarComponentContainers"
//             className="relative border-2 border-black h-screen w-44"
//           >
//             <SideBar />
//           </div>
//         </div>

//         <div className="flex">
//           <div className="flex flex-nowrap w-1/2 ">
//             {/* MAIN BODY CARD */}
//             <div id="mainbodydiv" className="flex-col flex w-screen h-3/4">
//               <div className="flex border-2 h-1/3 w-screen ">
//                 <MainBody />
//               </div>
//             </div>
//           </div>
//         </div>
// </div>

//         <div id="SectionTwo" className="flex">
//           <div className="flex flex-col">
//             <ProjectDisplay />
//           </div>
//         </div>
//       </div>

//       <div className="flex-col border-2 h-fit">
//         <Footer />
//       </div>
//     </>
//   );
// };

export default LandingPage;
