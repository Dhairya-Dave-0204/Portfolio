import React from "react";
import Spline from "@splinetool/react-spline";

function SplineBackground() {
  return (
    <div

      className="absolute inset-0 w-full h-full -z-10"
    >
      <Spline
        className="w-full h-full"
        scene="https://prod.spline.design/EX8pdK-q3Q6PPfl9/scene.splinecode"
      />
    </div>
  );
}

export default SplineBackground;
