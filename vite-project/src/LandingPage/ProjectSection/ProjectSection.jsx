const ProjectSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-1/2 gap-1 border-green-700 border-2">
        <div>
          <h1 className="text-black font-mono font-bold text-3xl">Projects</h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className=" text-brownish font-mono font-bold text-2xl">
            <span className="border-b-2 border-skyblue ">Insight LMS</span>
          </div>
          <div className="text-brownish font-mono font-bold text-2xl">
            <span className="border-b-2 border-skyblue ">REI Product Page</span>
          </div>
          <div className="text-brownish font-mono font-bold text-2xl">
            <span className="border-b-2 border-skyblue">
              Nvidia Product Page
            </span>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default ProjectSection;