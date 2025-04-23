import React from "react";
import { SplineComputer } from "../component_index";

function ShortAbout() {
  return (
    <>
      <section className="px-6 mt-28 lg:px-40">
        <h2 className="mb-12 text-5xl font-bold text-center text-primary font-rose lg:text-6xl">
          About Me
        </h2>

        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Left Box (Image/Visual) */}
          <div className="w-full lg:w-1/2 h-[670px]">
            <SplineComputer />
          </div>

          {/* Right Box (Text Content) */}
          <div className="w-full lg:w-1/2">
            <h3 className="mb-4 text-3xl font-medium lg:text-4xl">
              I'm <span className="font-bold text-secondary">Dhairya Dave</span>
              , A Full Stack Developer
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-gray-300">
              I'm an I.T. undergraduate with a passion for building impactful
              digital solutions that combine innovation, functionality, and
              great user experience. With hands-on experience in full-stack
              development using the MERN stack, I've led and contributed to
              multiple real-world projects—from a secure blockchain-based
              ticketing platform to an AI-powered hospital management system.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              My technical foundation spans across web technologies, API
              integrations, database management, and emerging areas like AI/ML
              and blockchain. I'm also a national-level hackathon finalist and
              have continually refined my skills through freelancing,
              certifications, and collaborative tech challenges.
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 sm:text-lg">
              <div>
                <p className="font-semibold">Name :</p>
                <p>Dhairya Dave</p>
              </div>
              <div>
                <p className="font-semibold">Email :</p>
                <p>dhairyadave.work@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">Phone :</p>
                <p>+91 7567039503</p>
              </div>
              <div>
                <p className="font-semibold">Location :</p>
                <p>Bhavnagar, Gujarat, India</p>
              </div>
            </div>

            {/* Download Button */}
            <a href="./DHAIRYA_DAVE_RESUME.pdf" download>
              <button className="relative flex items-center gap-2 px-6 py-2 overflow-hidden text-lg font-medium rounded-md cursor-pointer bg-frost text-background group">
                <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out transform -translate-x-full bg-primary group-hover:translate-x-0" />
                <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-frost">
                  Download Resume{" "}<i className="text-xl ri-download-line"></i>
                </span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShortAbout;
