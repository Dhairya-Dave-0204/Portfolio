import React from "react";
import { SplineBackground } from "../../components/component_index";
//
function Hero() {
  
  return (
    <>
      <div className="relative flex items-center justify-center w-full sm:h-[40vh] md:h-[75vh] max-md:mt-24">
        <SplineBackground />
        <div className="absolute z-20 flex flex-col items-center justify-center w-full h-full text-center max-md:px-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#ff6ec7] via-[#ff4fa3] via-[#907dff] to-[#34e2ff] bg-clip-text text-transparent animate-gradient">
          Hello! I am Dhairya
        </h1>
        <p className="max-w-xl mx-auto mt-4 text-gray-300 md:text-xl lg:text-2xl">
        Web developer, hackathon finalist, and tech enthusiast blending creativity with code.
        </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }
      `}</style>
    </>
  );
}

export default Hero;
