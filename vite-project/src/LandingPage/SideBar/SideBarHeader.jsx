import ME from "../../assets/Brandon-Stegall-11182022-1.jpg";
const SideBarHeader = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-2">
        {/* <div className="flex object-fill">
        <img src={ME} className="border-1 "></img>
        </div> */}

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
        <div className="flex ">
          <h2 className="text-md"> Full-Stack Developer </h2>
        </div>
      </div>
    </>
  );
};

export default SideBarHeader;
