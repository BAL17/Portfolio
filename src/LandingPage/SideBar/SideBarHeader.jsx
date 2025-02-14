import { Link } from "react-scroll";

const SideBarHeader = () => {
  return (
    <>
      <Link to="Top" spy={true} smooth={true} offset={0} duration={500}>
        <div className="flex flex-col items-center justify-center ">
    

          <div className="flex">
            <h1 className="text-3xl">
              <strong className="text-accent"> Brandon </strong>
            </h1>
          </div>
          <div className="flex">
            <h1 className="text-3xl">
              <strong className="text-accent"> Stegall </strong>
            </h1>
          </div>
          <div className="flex">
            <h1 className="text-md "> Full-Stack Developer </h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SideBarHeader;
