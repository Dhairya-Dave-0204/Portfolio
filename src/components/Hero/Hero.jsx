import React from "react";
import { SplineBackground } from "../../components/component_index";
import { motion } from "framer-motion";
//
function Hero() {
  return (
    <>
      <div className="relative flex items-center justify-center w-full min-h-[70vh] sm:min-h-[70vh] md:min-h-[90vh] px-6 py-24 md:py-32 overflow-hidden">
        <SplineBackground />

        <div className="z-20 flex flex-col items-center justify-center space-y-6 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#ff6ec7] via-[#ff4fa3] via-[#907dff] to-[#34e2ff] bg-clip-text text-transparent animate-gradient"
          >
            Hello! I am Dhairya Dave
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.5 }}
            className="max-w-xl mx-auto text-gray-300 md:text-xl lg:text-2xl"
          >
            Web developer, national level hackathon finalist, and tech
            enthusiast blending creativity with code.
            <span className="block mt-2 sm:hidden">
              On a journey from MERN stack mastery to advancing AI-powered
              solutions.
            </span>
          </motion.p>
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
