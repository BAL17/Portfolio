import ME from "../../assets/DSC_9918.jpg";
import ME2 from "../../assets/Brandon-Stegall-11182022-1.jpg";
import ME3 from "../../assets/IMG_4141.jpg";
import ME4 from "../../assets/IMG_4141-2.jpg";
import ME5 from "../../assets/IMG_4141-3.jpg";
import ME6 from "../../assets/IMG_4141-4.jpg";

const AboutMe = () => {
  return (
    <>
      <div
        id="Top"
        className="flex  items-center h-screen w-full bg-black
        p-2"
      >
        <div className=" flex items-center justify-center w-1/2 h-full p-2">
          <div className="flex  flex-col object-center object-cover w-full max-h-screen border-2 border-borderbot ">
            <img src={ME3} className="w-full h-1/2"></img>
          </div>
        </div>
        <div className="flex flex-col w-1/2 h-full justify-center gap-8 items-center">
          <div className="flex ">
            <span className="italic text-accent text-2xl "> About</span>
          </div>
          <div className="flex justify-center items-center  ">
            <div className=" flex border-l-4 border-accent w-5 h-16"></div>
            <div className="flex max-h-fit max-w-fit flex-col">
              <span className="text-3xl text-white">
                Husband, father, and full-stack developer
              </span>
              <span className="text-3xl text-white">
                with a passion for development workflows,
              </span>
              <span className="text-3xl text-white">
                continuous learning, and teaching.
              </span>
            </div>
          </div>
          {/* <div className="flex justify-center">
            <button className="text-accent text-lg">Read More...</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
