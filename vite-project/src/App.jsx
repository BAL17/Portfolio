import React, {useContext} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage.jsx";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
        {/* <Routes> */}
          <LandingPage/>
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App
