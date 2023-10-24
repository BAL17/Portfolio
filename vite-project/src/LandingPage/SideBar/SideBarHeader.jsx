import ME from "../../assets/Brandon-Stegall-11182022-1.jpg";
const SideBarHeader = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center border-b-2 p-2">
        <div className="flex object-fill">
        <img src={ME} className="border-1 "></img>
        </div>
        <div className="flex">
        <h1 className="text-1xl">
          <strong className="text-skyblue"> Brandon Stegall </strong>
        </h1>

        </div>
      <div className="flex ">
        <h2 className="text-xs"> Full-Stack Developer </h2>
      </div>
      </div>

    </>
  );
};

export default SideBarHeader;
