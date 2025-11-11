import React, { useState, useRef, useEffect } from "react";
import {
  FaClock,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTwitter,
  FaVimeoV,
  FaWifi,
  FaUser,
  FaBook,
  FaPenNib,
  FaLayerGroup,
  FaSearch,
  FaShoppingBasket,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef(null);

  // Detect screen size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => setIsMenuOpen(false);

  // Toggle About dropdown (for mobile)
  const toggleAbout = (e) => {
    if (isMobile) {
      e.preventDefault(); // Prevent navigation on first tap
      setIsAboutOpen(!isAboutOpen);
    }
  };

  // Hover handlers (desktop only)
  const handleMouseEnter = () => {
    if (!isMobile && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (!isMobile) setIsAboutOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsAboutOpen(false);
      }, 200);
    }
  };

  return (
    <div className="w-full">
      {/* ======= Main Navbar ======= */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="flex justify-between items-center px-4 md:px-8 py-3 max-w-7xl mx-auto">
          {/* ======= Logo ======= */}
          <div className="flex items-center">
            <Link to="/">
              <img src={assets.logo} alt="logo" className="w-50 sm:w-82 sm:h-20" />
            </Link>
          </div>

          {/* ======= Hamburger (Mobile) ======= */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-purple-700 text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* ======= Nav Links ======= */}
          <div
            className={`${
              isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } md:max-h-full md:opacity-100 overflow-hidden md:overflow-visible transition-all duration-500 ease-in-out flex flex-col md:flex-row md:items-center md:space-x-8 absolute md:static left-0 top-full w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-40`}
          >
            <div className="flex flex-col md:flex-row md:space-x-8 items-start md:items-center px-6 md:px-0 py-4 md:py-0 space-y-3 md:space-y-0">
              
              {/* HOME */}
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="flex items-center text-green-500 hover:underline transition"
              >
                <svg className="inline mr-1" width="18" height="18" viewBox="0 0 20 20">
                  <path fill="currentColor" d="M10 20l-6-6h3V8h6v6h3l-6 6z" />
                </svg>
                HOME
              </Link>

              {/* ABOUT with Dropdown */}
              <div
                className="relative w-full md:w-auto"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  onClick={toggleAbout}
                  className="flex items-center text-purple-700 hover:underline transition cursor-pointer w-full"
                >
                  <FaUser className="mr-1" /> ABOUT
                  <span
                    className={`ml-1 transition-transform duration-300 ${
                      isAboutOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>

                {/* Dropdown Menu */}
                <div
                  className={`${
                    isMobile
                      ? isAboutOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                      : isAboutOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } md:absolute md:left-0 md:top-full md:mt-2 w-full md:w-48 bg-white md:rounded-md md:shadow-lg overflow-hidden transition-all duration-300 ease-in-out`}
                  style={{ transition: "max-height 0.3s ease, opacity 0.3s ease" }}
                >
                  <Link
                    to="/about-us"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/learning-process"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                  >
                    Learning Process
                  </Link>
                  <Link
                    to="/why"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
                  >
                    Why Choose Us
                  </Link>
                </div>
              </div>

              {/* PROGRAMS */}
              <Link
                to="/programs"
                onClick={closeMobileMenu}
                className="flex items-center text-blue-400 hover:underline transition"
              >
                <FaPenNib className="mr-1" /> Programs
              </Link>

              {/* CONTACT */}
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="flex items-center text-blue-900 hover:underline transition"
              >
                <FaMapMarkerAlt className="mr-1" /> CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;