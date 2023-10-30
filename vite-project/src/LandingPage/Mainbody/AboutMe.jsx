import ME from "../../assets/DSC_9918.jpg";
import ME2 from "../../assets/Brandon-Stegall-11182022-1.jpg";
import ME3 from "../../assets/IMG_4141.jpg";
import ME4 from "../../assets/IMG_4141-2.jpg";
import ME5 from "../../assets/IMG_4141-3.jpg";
const AboutMe = () => {

  return (
    <>
      <div
        id="Top"
        className="flex flex-col justify-start items-center h-screen w-full bg-black "
      >
        <div className="object-cover max-w-full min-h-screen ">
          <img
            src={ME3}
            className="max-w-screen min-h-full opacity-60"
          ></img>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
