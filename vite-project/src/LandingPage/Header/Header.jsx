import React from "react";
import GitHub from "../../assets/github.svg";
import Gmail from "../../assets/gmail.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Doc from "../../assets/document-text-outline.svg";
const Header = () => {
  return (
    <>
      {/* DIV FOR ICONS */}
      <div className="flex gap-6 opacity-60">
        <a
          href="mailto:brandonws20@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className=" flex h-8 w-8">
            <img src={Gmail} loading="lazy" alt="Gmail" />
          </span>
        </a>
        <a
          href="https://github.com/BAL17"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex h-8 w-8">
            <img src={GitHub} loading="lazy" alt="GitHub" />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/brandonstegall817/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex h-8 w-8">
            <img src={LinkedIn} loading="lazy" alt="LinkedIn" />
          </span>
        </a>
          {/* <span className="flex h-8 w-8">
            <img src={Doc} loading="lazy" alt="Resume" />
          </span> */}
      </div>
    </>
  );
};

export default Header;
