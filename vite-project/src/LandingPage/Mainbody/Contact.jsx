import GitHub from "../../assets/DevIcons/icons8-github.svg";
import Gmail from "../../assets/ContactSectionIcons/icons8-gmail.svg";
import LinkedIn from "../../assets/ContactSectionIcons/icons8-linkedin.svg";

const Contact = () => {
  return (
    <>
      <div
        id="contactHeader"
        className="w-full bg-headerbg p-3 mb-10 mt-10 border-2"
      >
        <h1 className="flex ml-2 font-heading font-bold text-4xl text-white ">
          Contact
        </h1>
      </div>

      {/* DIV FOR ICONS */}
      <div className="flex justify-center w-full text-xl font-body">
        <div className="flex flex-col p-3 border-2 shadow-lg rounded-lg bg-secbg gap-8 w-5/6 sm:w-1/2 md:w-1/2 lg:w-1/2 text-text">
          {/* GMAIL */}
          <a
            href="mailto:brandonws20@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              id="emailContact"
              className="flex md:ml-5 lg:ml-5 overflow-clip"
            >
              <span className=" flex items-center gap-2 h-8 w-8 ">
                <img src={Gmail} loading="lazy" alt="Gmail" />
                <h2 className="text-base md:text-lg lg:text-xl">
                  brandonws20@gmail.com
                </h2>
              </span>
            </div>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/BAL17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              id="githubContact"
              className="flex md:ml-5 lg:ml-5 overflow-clip"
            >
              <span className="flex items-center gap-2 h-8 w-8">
                <img src={GitHub} loading="lazy" alt="GitHub" />
                <h2 className=" text-base md:text-lg lg:text-xl">
                  github/BAL17
                </h2>
              </span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/brandonwstegall/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              id="linkedInContact"
              className="flex md:ml-5 lg:ml-5 overflow-clip"
            >
              <span className="flex items-center gap-2 h-8 w-8">
                <img src={LinkedIn} loading="lazy" alt="LinkedIn" />
                <h2 className="text-base md:text-lg lg:text-xl">
                  linkedin/brandonwstegall
                </h2>
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
