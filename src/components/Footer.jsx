import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-linear-to-t from-green-200 to-green-300 pt-12 pb-8 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-green-100 opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-green-100 opacity-20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 mb-10">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start gap-3"
          >
            <div className="flex items-center gap-2">
              <img
                src={assets.logo2}
                alt="Logo"
                className="w-80  rounded"
              />
            </div>
            <span className="text-green-800 font-medium text-sm text-center lg:text-left">
              Nurturing minds. Inspiring smiles.
            </span>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-2 text-center lg:text-left"
          >
            <span className="font-semibold text-green-900 mb-2">Quick Links</span>
            <Link to="/programs" className="hover:underline text-green-900 transition">Programs</Link>
            <Link to="/curriculum" className="hover:underline text-green-900 transition">Curriculum</Link>
            <Link to="/contact" className="hover:underline text-green-900 transition">Contact Us</Link>
            <Link to="/about-us" className="hover:underline text-green-900 transition">About Us</Link>
          </motion.div>

          
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-green-400 opacity-50" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4"
          >
            <a
              href="https://www.instagram.com/littlecanvasschool?igsh=MWE5NmplNzQyN3JndQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 hover:text-blue-500 transition transform hover:scale-110"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/share/1X6MwmwmHZ/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 hover:text-blue-500 transition transform hover:scale-110"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://www.youtube.com/@LittleCanvasSchool"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 hover:text-blue-500 transition transform hover:scale-110"
            >
              <FaYoutube size={22} />
            </a>
            <a
              href="https://www.linkedin.com/company/littlecanvasschool/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 hover:text-blue-500 transition transform hover:scale-110"
            >
              <FaLinkedinIn size={22} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-green-800 text-sm text-center"
          >
            © {new Date().getFullYear()} Little Canvas. All rights reserved.
          </motion.div>
        </div>

        
      </div>
    </footer>
  );
}