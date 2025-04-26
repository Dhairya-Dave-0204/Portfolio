import React from "react";
import { SplineComputer } from "../component_index";
import { motion } from "framer-motion";

function ShortAbout() {
  return (
    <>
      <section id="about" className="px-6 mt-28 lg:px-40">
        <motion.h2
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-5xl font-bold text-center text-primary font-rose lg:text-6xl"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Left Box (Image/Visual) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 h-[670px]"
          >
            <SplineComputer />
          </motion.div>

          {/* Right Box (Text Content) */}
          <div className="w-full lg:w-1/2">
            <motion.h3
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="mb-4 text-3xl font-medium lg:text-4xl"
            >
              I'm <span className="font-bold text-secondary">Dhairya Dave</span>
              , A Full Stack Developer
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="mb-4 text-lg leading-relaxed text-gray-300"
            >
              I'm an I.T. undergraduate with a passion for building impactful
              digital solutions that combine innovation, functionality, and
              great user experience. With hands-on experience in full-stack
              development using the MERN stack, I've led and contributed to
              multiple real-world projects—from a secure blockchain-based
              ticketing platform to an AI-powered hospital management system.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-lg leading-relaxed text-gray-300"
            >
              My technical foundation spans across web technologies, API
              integrations, database management, and emerging areas like AI/ML
              and blockchain. I'm also a national-level hackathon finalist and
              have continually refined my skills through freelancing,
              certifications, and collaborative tech challenges.
            </motion.p>

            {/* Contact Info Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 sm:text-lg"
            >
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
            </motion.div>

            {/* Download Button */}
            <motion.a
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              href="./DHAIRYA_DAVE_RESUME.pdf"
              download
            >
              <button className="relative flex items-center gap-2 px-6 py-2 overflow-hidden text-lg font-medium rounded-md cursor-pointer bg-frost text-background group">
                <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out transform -translate-x-full bg-primary group-hover:translate-x-0" />
                <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-frost">
                  Download Resume <i className="text-xl ri-download-line"></i>
                </span>
              </button>
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShortAbout;
