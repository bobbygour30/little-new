// ChildCareSlider.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBrain, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import PopupForm from "./PopupForm";

const BACKGROUND_IMAGE = assets.banner;

const ChildCareSlider = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center px-4 md:px-8 py-16 md:py-24 overflow-hidden mt-16"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Floating Blobs */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-400 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Content Wrapper (NOT overlay) */}
        <div className="relative z-10 max-w-6xl mx-auto text-center w-full px-4">
          <div className="inline-block rounded-3xl px-6 sm:px-10 py-10 sm:py-14 bg-white/15 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#2B1E1E] mb-6 leading-tight
              drop-shadow-[0_6px_20px_rgba(255,255,255,0.6)]"
            >
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
                Little Canvas Pre-School
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-[#3A2A2A] mb-10 max-w-4xl mx-auto leading-relaxed font-semibold
              drop-shadow-[0_3px_10px_rgba(255,255,255,0.7)]"
            >
              Little hands. Bright beginnings. Big discoveries. Through
              thoughtfully designed, activity-based learning, we nurture curious
              minds, confident hearts, and joyful learners—helping every child
              color their own story.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/learning-process">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  Discover Our Scientific Curriculum
                </button>
              </Link>

              <button
                onClick={openPopup}
                className="px-8 py-4 border-2 border-[#2B1E1E] text-[#2B1E1E] font-bold text-lg rounded-full
                hover:bg-[#2B1E1E]/10 transition-all duration-300 w-full sm:w-auto"
              >
                Admission Enquiry
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute top-1/4 left-4 md:left-10 text-orange-400 text-5xl md:text-6xl opacity-90 drop-shadow-lg"
        >
          <FaBrain />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 5, delay: 1 }}
          className="absolute bottom-1/3 right-4 md:right-10 text-purple-400 text-4xl md:text-5xl opacity-90 drop-shadow-lg"
        >
          <FaBookOpen />
        </motion.div>
      </section>

      {/* Popup */}
      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default ChildCareSlider;
