import React from "react";
import { projects } from "./data";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProjectBento() {
  return (
    <>
    <div className="w-full px-6 py-8 mt-28 md:px-28 lg:px-40">
      <h1 className="mb-6 text-5xl font-bold text-center md:text-6xl font-rose">
        My Projects
      </h1>
      <p className="max-w-3xl mx-auto mb-16 text-center text-gray-300 md:text-lg">
        I have worked on a variety of projects that showcase my skills and
        creativity. Here are some of my favorite projects that I have worked
        on.
      </p>

      <div className="relative swiper-container-custom">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
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
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          loop={true}
          className="px-4 py-8 swiper-custom"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="h-full">
              <div className="flex flex-col h-full overflow-hidden transition-transform duration-300 bg-black border border-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-purple-500/50">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="flex-grow p-6 bg-black/90">
                  <h3 className="mb-2 text-xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-300">{project.description}</p>
                  <div className="mt-auto">
                    <p className="mb-4 text-sm text-gray-400">
                      {project.tech}
                    </p>
                    <a
                      href={project.link}
                      className="inline-block px-4 py-2 text-white transition-colors rounded bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 hover:from-pink-600 hover:via-purple-600 hover:to-blue-500"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

    {/* Add this CSS to your component or in a style tag */}
    <style jsx>{`
      /* Custom styling for Swiper navigation buttons */
      :global(.swiper-button-prev),
      :global(.swiper-button-next) {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #374151;
        transition: all 0.3s ease;
      }

      :global(.swiper-button-prev:hover),
      :global(.swiper-button-next:hover) {
        background-color: rgba(139, 92, 246, 0.2);
        border-color: rgba(167, 139, 250, 0.7);
      }

      :global(.swiper-button-prev:after),
      :global(.swiper-button-next:after) {
        font-size: 16px;
        color: #d1d5db;
        font-weight: bold;
      }

      /* Enhanced pagination styling */
      :global(.swiper-pagination) {
        bottom: 0px !important;
        padding-bottom: 8px;
      }

      :global(.swiper-pagination-bullet) {
        width: 8px;
        height: 8px;
        background: rgba(209, 213, 219, 0.3);
        opacity: 0.6;
        transition: all 0.3s ease;
      }

      :global(.swiper-pagination-bullet-active) {
        width: 24px;
        border-radius: 4px;
        background: linear-gradient(to right, #ec4899, #a855f7, #60a5fa);
        opacity: 1;
      }

      :global(.swiper-pagination-bullet:hover) {
        background: rgba(236, 72, 153, 0.6);
      }

      /* For dynamic bullets */
      :global(.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main) {
        transform: scale(1);
        width: 24px;
        border-radius: 4px;
        background: linear-gradient(to right, #ec4899, #a855f7, #60a5fa);
      }

      :global(.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev),
      :global(.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next) {
        transform: scale(0.8);
      }

      :global(.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev),
      :global(.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next) {
        transform: scale(0.6);
      }
    `}</style>
  </>
  );
}

export default ProjectBento;
