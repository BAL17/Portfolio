import React from "react";
import GitHub from "../../assets/github.svg";
import Gmail from "../../assets/gmail.svg";
import LinkedIn from "../../assets/linkedin.svg";



const Header = () => {
    return (
      <>
        <div className="flex justify-center text-[1.5rem] text-GainsBoro">
          <span className=" flex h-3 w-3">
            <img src={Gmail} loading="lazy" alt="Gmail" />
            <a href=""></a>
          </span>
          <span className="flex h-3 w-3">
            <img src={GitHub} loading="lazy" alt="GitHub" />
            <a href=""></a>
          </span>
          <span className="flex h-3 w-3">
            <img src={LinkedIn} loading="lazy" alt="LinkedIn" />
            <a href=""></a>
          </span>
          HEADER
        </div>
      </>
    );
}

export default Header