import React from "react";
import GitHub from "../../assets/DevIcons/icons8-github.svg";
import Gmail from "../../assets/ContactSectionIcons/icons8-gmail.svg";
import LinkedIn from "../../assets/ContactSectionIcons/icons8-linkedin.svg";

const Contact = () => {
  return (
    <>
      <div id="contactHeader" className="w-full bg-HeaderBG p-2 mb-10 mt-10">
        <h1 className="flex ml-2 font-mono font-bold text-4xl text-white ">
          Contact
        </h1>
      </div>

      {/* DIV FOR ICONS */}
      <div className="flex justify-center w-full text-xl ">
        <div className="w-3/5 flex flex-col p-3 border-2 shadow-lg bg-white gap-8">
          {/* GMAIL */}
          <a
            href="mailto:brandonws20@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="emailContact" className="flex ml-5">
              <span className=" flex items-center gap-2 h-8 w-8">
                <img src={Gmail} loading="lazy" alt="Gmail" />
                <h2> brandonws20@gmail.com </h2>
              </span>
            </div>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/BAL17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="githubContact" className="flex ml-5">
              <span className="flex items-center gap-2 h-8 w-8">
                <img src={GitHub} loading="lazy" alt="GitHub" />
                <h2>github.com/BAL17</h2>
              </span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/brandonstegall817/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="linkedInContact" className="flex ml-5 ">
              <span className="flex items-center gap-2 h-8 w-8">
                <img src={LinkedIn} loading="lazy" alt="LinkedIn" />
                <h2>linkedin.com/in/brandonstegall817</h2>
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
