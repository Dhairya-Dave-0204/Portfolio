import React from "react";
import { skills } from "./data";

function SkillCards() {
  return (
    <>
      <div className="px-6 pt-20 mt-28 md:pt-28 md:px-28 lg:px-40">
        <h1 className="mb-6 text-5xl font-bold text-center md:text-6xl text-primary font-rose">
          My Skills
        </h1>
        <p className="max-w-3xl mx-auto mb-12 text-center text-gray-300 md:text-lg">
          I've Worked With A Variety Of Technologies In The Web Development
          World. Here's A Comprehensive List Of My Technical Skills And
          Expertise.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:h-[500px]">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 transition duration-500 border border-t-2 group hover:border-primary/80 hover:scale-105 border-secondary/20 rounded-2xl"
            >
                <i className={`text-5xl ${skill.color} ${skill.icon}`}></i>
                <h2 className="text-3xl font-semibold">{skill.category}</h2>
              <p className="mb-3 text-sm text-gray-400">
                {skill.count} Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm transition duration-500 bg-gray-700 rounded-full group-hover:bg-background-light hover:bg-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SkillCards;
