import React, {useContext} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectProvider } from "./LandingPage/ProjectSection/ProjectContext.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
        <ProjectProvider>
        {/* <Routes> */}
          <LandingPage/>
        {/* </Routes> */}
      </ProjectProvider>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App
