import React from "react";
import { assets } from "../../assets/assets";

function ProjectBento() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-medium text-center underline mb-14 decoration-primary underline-offset-8 font-rose text-frost md:text-5xl lg:text-6xl xl:text-7xl">
          Projects
        </h1>
      </div>

      <div className="grid mb-10 md:mb-28 grid-cols-1 gap-2 max-md:gap-6 px-6 md:px-12 lg:px-24 md:grid-cols-8 md:grid-rows-6 md:gap-4 max-w-[110rem] mx-auto max-h-[800px] overflow-hidden">
        <div className="h-52 md:col-span-3 md:row-span-6 md:h-full transition-all duration-500 hover:bg-gradient-to-br p-[2px] from-[#ff6b96] via-[#9aa7ac] to-[#f7e8e8] cursor-pointer hover:scale-[97%]">
          <img
            src={assets.header1}
            alt="12"
            className="object-cover w-full h-full rounded-md"
          />
        </div>

        <div className="h-52 md:col-span-5 md:row-span-2 md:col-start-4 md:h-full transition-all duration-500 hover:bg-gradient-to-br p-[2px] from-[#ff6b96] via-[#9aa7ac] to-[#f7e8e8] cursor-pointer hover:scale-[97%]">
          <img
            src={assets.header2}
            alt="13"
            className="object-cover w-full h-full rounded-md"
          />
        </div>

        <div className="h-52 md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-3 md:h-full transition-all duration-500 hover:bg-gradient-to-br p-[2px] from-[#ff6b96] via-[#9aa7ac] to-[#f7e8e8] cursor-pointer hover:scale-[97%]">
          <img
            src={assets.header3}
            alt="15"
            className="object-cover w-full h-full rounded-md"
          />
        </div>

        <div className="h-52 md:col-span-2 md:row-span-2 md:col-start-7 md:row-start-3 md:h-full transition-all duration-500 hover:bg-gradient-to-br p-[2px] from-[#ff6b96] via-[#9aa7ac] to-[#f7e8e8] cursor-pointer hover:scale-[97%]">
          <img
            src={assets.header4}
            alt="14"
            className="object-cover w-full h-full rounded-md"
          />
        </div>

        <div className="h-52 md:col-span-5 md:row-span-2 md:col-start-4 md:row-start-5 md:h-full transition-all duration-500 hover:bg-gradient-to-br p-[2px] from-[#ff6b96] via-[#9aa7ac] to-[#f7e8e8] cursor-pointer hover:scale-[97%]">
          <img
            src={assets.header5}
            alt="16"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </div>
    </>
  );
}

export default ProjectBento;
