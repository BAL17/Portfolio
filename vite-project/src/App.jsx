import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage.Jsx";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes> */}
          <LandingPage/>
        {/* </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App
