// src/components/PopupForm.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { createPortal } from "react-dom";

const PopupForm = ({ isOpen, onClose }) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop with blur */}
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ backdropFilter: "blur(8px)" }}
          />

          {/* Compact Modal – All Fields Kept */}
          <motion.div
            className="relative bg-gradient-to-br from-[#FFDEE9] to-[#B5FFFC] p-5 md:p-6 rounded-3xl shadow-2xl w-full max-w-sm mx-auto border border-white/30"
            initial={{ scale: 0.8, y: 60, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 60, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl transition-transform hover:scale-110"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            {/* Header */}
            <h2 className="text-center text-xl md:text-2xl font-bold text-[#002B5B] mb-4 leading-tight">
              Get in Touch <br />
              <span className="text-pink-600 text-lg">Reply in 24 hrs</span>
            </h2>

            {/* Form – All 6 fields + consent + submit */}
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              {/* Name */}
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none text-sm"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none text-sm"
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Number"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none text-sm"
              />

              {/* State */}
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none text-sm">
                <option>Select State</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Kolkata</option>
              </select>

              {/* Category */}
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none text-sm">
                <option>Category</option>
                <option>Nursery</option>
                <option>Kindergarten</option>
                <option>Primary</option>
                <option>After School</option>
              </select>

              {/* Message */}
              <textarea
                placeholder="Message"
                rows="2"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none text-sm resize-none"
              />

              {/* Consent */}
              <div className="flex items-center space-x-2 mt-2">
                <input
                  type="checkbox"
                  id="consent"
                  className="accent-pink-500"
                  defaultChecked
                />
                <label htmlFor="consent" className="text-xs text-gray-600">
                  Contact me via WhatsApp, SMS, Phone, Email
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-2.5 rounded-lg shadow-md hover:shadow-lg hover:from-pink-600 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-200 text-sm"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default PopupForm;