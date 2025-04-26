import React from "react";
import { Link } from "react-router-dom";
import { projects } from "./data";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProjectBento() {
  return (
    <>
      <section
        id="project"
        className="w-full px-6 py-8 mt-28 md:px-28 lg:px-40"
      >
        <h1 className="mb-6 text-5xl font-bold text-center text-primary md:text-6xl font-rose">
          My Projects
        </h1>
        <p className="max-w-3xl mx-auto mb-16 text-center text-gray-300 md:text-lg">
          I have worked on a variety of projects that showcase my skills and
          creativity. Here are some of my favorite projects that I have worked
          on.
        </p>

        <div className="relative swiper-container-custom">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              // When screen width is >= 640px (sm)
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // When screen width is >= 768px (md)
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              // When screen width is >= 1024px (lg)
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            loop={true}
            className="swiper-custom"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="h-full cursor-grab ">
                <div className="flex flex-col h-full transition-all duration-300 border border-gray-800 rounded-lg shadow-lg bg-background hover:shadow-xl hover:-translate-y-1 hover:border-purple-500/70">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="flex-grow p-6 bg-black/70">
                    <h3 className="mb-2 text-3xl font-bold text-secondary">
                      {project.title}
                    </h3>
                    <p className="mb-4">{project.description}</p>
                    <div className="mt-auto">
                      <p className="mb-4 text-sm text-gray-300">
                        {project.tech}
                      </p>
                      <div className="flex items-center mt-4 gap-x-4">
                        <Link
                          to={project.github}
                          className="inline-block px-2 py-1 font-medium transition-colors rounded cursor-pointer bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 hover:from-pink-600 hover:via-purple-600 hover:to-blue-500"
                        >
                          <button className="text-2xl cursor-pointer">
                            <i class="ri-github-fill"></i>
                          </button>
                        </Link>

                        <Link
                          to={project.demo}
                          className="inline-block px-2 py-1 font-medium transition-colors rounded cursor-pointer bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 hover:from-pink-600 hover:via-purple-600 hover:to-blue-500"
                        >
                          <button className="text-2xl cursor-pointer">
                            <i class="ri-global-fill"></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default ProjectBento;
