import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBrain,
  FaBookOpen,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ChildCareSlider = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF6F2] via-indigo-50 to-purple-50 px-4 md:px-6 py-12 md:py-20"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-300 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center z-10 w-full">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black mb-5 md:mb-7 leading-tight"
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
            className="text-lg sm:text-xl md:text-2xl text-black mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed font-semibold px-2"
          >
            We are absolutely thrilled to welcome you to our school, where we believe that the journey to lifelong success begins in the earliest years. Recognizing that a child's brain does over 85% of its development before age six, our mission is to lay the most powerful foundation possible. We achieve this through a unique, high-quality educational experience that perfectly balances the time-tested self-discovery of the Montessori method with a structured, goal-driven curriculum. Here, your child won't just play; they will actively learn, develop true academic mastery, build confidence, and become a self-reliant, joyful learner ready for their future. We are excited to partner with you in coloring your child's own bright story!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 w-full px-2"
          >
            <Link to="/learning-process"><button className="px-6 md:px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transition transform hover:scale-105 w-full sm:w-auto">
              Discover Our Scientific Curriculum
            </button></Link>
            <Link to="/contact"><button className="px-6 md:px-8 py-4 border-2 border-[#4764c7] text-[#4764c7] font-semibold text-lg rounded-full hover:bg-purple-50 transition w-full sm:w-auto">
              Book a Campus Tour
            </button></Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute top-1/4 left-4 md:left-10 text-orange-400 text-5xl md:text-6xl opacity-70"
        >
          <FaBrain />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 5, delay: 1 }}
          className="absolute bottom-1/3 right-4 md:right-10 text-purple-500 text-4xl md:text-5xl opacity-70"
        >
          <FaBookOpen />
        </motion.div>
      </section>
    </div>
  )
}

export default ChildCareSlider