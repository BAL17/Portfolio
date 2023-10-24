
const AboutMe = () => {

  return (
    <>
      {/* THIS WILL BE LEFT SIDE DIV FOR INTRO */}
      <div
        id="aboutHeader"
        className="flex flex-col justify-center items-center h-screen w-full bg-black"
      >

          <div id="educationHeader" className="w-full bg-lGrey p-2 mb-10 mt-10">
            <h1 id="About" className="flex ml-2 font-mono font-bold text-4xl text-white bg-slate-300 ">
              About Me
            </h1>
          </div>
        <div className="flex flex-col">
          <div className="flex border-2 border-purple-600">
            <h1 className="text-4xl text-white">
              Hello 🌊, I'm <strong className="text-skyblue">Brandon</strong>
            </h1>
          </div>
          <div className="flex text-white">
            a Full-Stack Developer based in Denton, TX
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
