import React from "react";
import { useNavigate } from "react-router-dom";
import { SplineComputer } from "../component_index";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="flex mb-16 md:mb-28 flex-col-reverse items-center h-auto px-6 gap-x-5 gap-y-10 lg:flex-row lg:h-[90vh] md:px-12 lg:px-24">
      {/* Text Content */}
      <div className="w-full text-center lg:w-2/5 lg:text-left">
        <h1 className="text-3xl font-semibold  font-rose md:text-4xl lg:text-5xl xl:text-6xl">
          Hello!
        </h1>

        <h1 className="mb-5 text-4xl font-bold font-rose md:text-5xl lg:text-6xl xl:text-7xl text-primary">
          I am Dhairya Dave
        </h1>

        <p className="max-w-xl mx-auto mb-6 text-sm text-gray-600 sm:text-base md:text-lg lg:text-xl xl:text-2xl lg:mx-0">
          Web developer, hackathon finalist, and tech enthusiast blending
          creativity with code. On a journey from MERN stack mastery to
          advancing AI-powered solutions.
        </p>

        <button
          onClick={() => navigate("/about")}
          className="relative px-6 py-3 overflow-hidden text-sm font-semibold text-black rounded-md cursor-pointer sm:text-base md:text-lg bg-frost group"
        >
          <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out transform -translate-x-full bg-primary group-hover:translate-x-0" />
          <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-frost">
            Know More!
          </span>
        </button>
      </div>

      {/* 3D Model Section - Wider & Taller */}
      <div className="items-center justify-center hidden w-full lg:w-3/5 sm:flex">
        <div className="w-[700px] sm:w-[800px] md:w-[900px] lg:w-[1000px] xl:w-[1100px] h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[800px]">
          <SplineComputer />
        </div>
      </div>
    </section>
  );
}

export default Hero;
