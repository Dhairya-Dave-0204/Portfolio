import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Disable scroll when navbar is open (mobile)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean-up when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop */}
      <nav id="nav" className="flex items-center px-10 py-6 md:justify-center">
        <menu className="hidden text-xl gap-x-24 md:flex">
          <Link
            to={"/"}
            className="transition duration-500 hover:text-secondary hover:scale-110"
          >
            Home
          </Link>
          <a
            href="#skill"
            className="transition duration-500 hover:text-secondary hover:scale-110"
          >
            Skills
          </a>
          <a
            href="#project"
            className="transition duration-500 hover:text-secondary hover:scale-110"
          >
            Projects
          </a>
          <a
            href="#about"
            className="transition duration-500 hover:text-secondary hover:scale-110"
          >
            About
          </a>
          <a
            href="#contact"
            className="transition duration-500 hover:text-secondary hover:scale-110"
          >
            Contact
          </a>
        </menu>

        <div onClick={toggleMenu} className={`md:hidden`}>
          <i className="text-3xl ri-menu-5-line"></i>
        </div>
      </nav>

      {/* Mobile */}
      <nav id="nav" 
        className={`absolute top-0 left-0 flex flex-col h-screen gap-8 px-10 py-6 bg-black w-full z-40 sm:w-[60%] transform transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div onClick={toggleMenu}>
          <i className="text-3xl ri-close-line"></i>
        </div>
        <menu className="flex flex-col gap-10 text-2xl">
          <Link
            to={"/"}
            onClick={toggleMenu}
            className="transition duration-500 hover:text-secondary hover:scale-110"
          >
            Home
          </Link>
          <a
            href="#skill"
            onClick={toggleMenu}
            className="transition duration-500 hover:text-secondary hover:scale-110"
          >
            Skills
          </a>
          <a
            href="#project"
            onClick={toggleMenu}
            className="transition duration-500 hover:text-secondary hover:scale-110"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className="transition duration-500 hover:text-secondary hover:scale-110"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="transition duration-500 hover:text-secondary hover:scale-110"
          >
            Contact
          </a>
        </menu>
      </nav>

      {/* Overlay for mobile menu */}
      <div
        onClick={toggleMenu}
        className={`fixed inset-0 z-30 transition duration-700 ${isOpen ? "bg-black/60 backdrop-blur-md" : "hidden"}`}
      ></div>
    </>
  );
}

export default Navbar;
