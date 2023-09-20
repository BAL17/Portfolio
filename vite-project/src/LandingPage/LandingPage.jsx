import React from "react";
import Header from "./Header/Header";
import Footer  from "./Footer/Footer";
const LandingPage = () => {
  return (
    <>
      <div className="flex-col justify-center bg-Nero max-w-screen h-screen">

        <div className="">
        <Header />
        </div>
        
        <div className="">
        <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
