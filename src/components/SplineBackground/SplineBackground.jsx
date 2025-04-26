import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

function SplineBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5}}
      className="absolute inset-0 w-full h-full -z-10"
    >
      <Spline
        className="w-full h-full"
        scene="https://prod.spline.design/EX8pdK-q3Q6PPfl9/scene.splinecode"
      />
    </motion.div>
  );
}

export default SplineBackground;
