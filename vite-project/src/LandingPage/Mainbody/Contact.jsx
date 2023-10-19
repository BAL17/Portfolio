import React from "react";
import GitHub from "../../assets/github.svg";
import Gmail from "../../assets/gmail.svg";
import LinkedIn from "../../assets/linkedin.svg";

const Contact = () => {
  return (
    <>
      <div id="contactHeader" className="border-2 w-full bg-slate-500 p-2 mb-10">
        <h1 className="flex ml-2 font-mono font-bold text-4xl text-white ">
          Contact
        </h1>
      </div>

      {/* DIV FOR ICONS */}
      <div className="flex flex-col justify-center gap-1 opacity-60">
        <div id="emailContact" className="flex justify-center">
          <a
            href="mailto:brandonws20@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className=" flex h-8 w-8">
              <img src={Gmail} loading="lazy" alt="Gmail" />
            </span>
          </a>
        </div>

        <div id="githubContact" className="flex justify-center">
          <a
            href="https://github.com/BAL17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex h-8 w-8">
              <img src={GitHub} loading="lazy" alt="GitHub" />
            </span>
          </a>
        </div>

        <div id="linkedInContact" className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/brandonstegall817/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex h-8 w-8">
              <img src={LinkedIn} loading="lazy" alt="LinkedIn" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
