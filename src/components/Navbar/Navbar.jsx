import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="flex md:py-10 md:justify-center md:items-center">
        <menu className="gap-32 text-xl font-medium md:flex max-md:hidden">
          <Link
            to="/"
            className="transition duration-500 hover:text-primary hover:scale-110"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="transition duration-500 hover:text-primary hover:scale-110"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="transition duration-500 hover:text-primary hover:scale-110"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="transition duration-500 hover:text-primary hover:scale-110"
          >
            Contact
          </Link>
        </menu>
      </nav>

      {/* Mobile Navbar */}
      <nav className={`md:hidden transition-colors duration-700 ${isOpen ? "bg-black" : "bg-transparent"}`}>
        {/* Menu Icon */}
        <div className="p-6">
          {/* Menu Icon */}
          <i
            className={`absolute top-5 left-5 text-3xl text-white transition-all duration-300 transform ${
              isOpen
                ? "opacity-0 scale-75 rotate-45"
                : "opacity-100 scale-100 rotate-0"
            }`}
            onClick={toggleMenu}
            style={{ pointerEvents: isOpen ? "none" : "auto" }}
            title="Open Menu"
          >
            <i className="ri-menu-5-line"></i>
          </i>

          {/* Close Icon */}
          <i
            className={`absolute top-5 left-5 text-3xl text-white transition-all duration-300 transform ${
              isOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 -rotate-45"
            }`}
            onClick={toggleMenu}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
            title="Close Menu"
          >
            <i className="ri-close-line"></i>
          </i>
        </div>

        {/* Sliding Menu */}
        <menu
          className={`h-screen max-sm:w-[75%] md:w-[40%] transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <menu className="flex flex-col gap-10 p-6 text-2xl">
            <Link
              to="/"
              onClick={toggleMenu}
              className="transition duration-500 hover:text-primary hover:scale-110"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="transition duration-500 hover:text-primary hover:scale-110"
            >
              About
            </Link>
            <Link
              to="/projects"
              onClick={toggleMenu}
              className="transition duration-500 hover:text-primary hover:scale-110"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="transition duration-500 hover:text-primary hover:scale-110"
            >
              Contact
            </Link>
          </menu>
        </menu>
      </nav>
    </>
  );
}

export default Navbar;
