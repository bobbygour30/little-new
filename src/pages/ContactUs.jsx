import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import assets from "../assets/assets";
import PopupForm from "../components/PopupForm";
import emailjs from '@emailjs/browser';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function ContactUs() {
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS Configuration (replace with your actual keys)
    const serviceId = 'service_g19mog5';        // Replace with your EmailJS Service ID
    const templateId = 'template_wbo59ct';      // Replace with your EmailJS Template ID
    const userId = 'iAYRhj4ne16M2tU9H';           // Replace with your EmailJS Public Key

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="overflow-hidden">

      {/* ==================== HERO BANNER - CONTACT US ==================== */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-gradient-to-b from-gray-900 to-gray-700">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src={assets.contact}
            alt="Children learning and playing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3"
          >
            Contact us
          </motion.h1>
        </div>

        {/* Wavy Bottom Shape */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-16 md:h-24 text-white"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C360,100 1080,20 1440,60 L1440,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>
      {/* ================================================================== */}

      {/* Contact Info Cards */}
      <section ref={ref} className="py-16 px-6 bg-gradient-to-b from-[#FFF6F2] to-[#ffe8de]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <FaPhoneAlt />,
                title: "Call Us",
                info: "+91 9311550069",
                sub: "Mon-Fri 9AM-6PM",
                color: "from-green-400 to-emerald-500",
              },
              {
                icon: <FaEnvelope />,
                title: "Email Us",
                info: "info@littlecanvasedu.com",
                sub: "We reply within 24 hrs",
                color: "from-purple-400 to-pink-500",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Visit Us",
                info: "Plot 78, River Heights, Rajnagar Extention,",
                sub: " Ghaziabad, UP, 201017",
                color: "from-blue-400 to-cyan-500",
              },
              {
                icon: <FaClock />,
                title: "Open Hours",
                info: "9:00 AM - 6:00 PM",
                sub: "Weekend Tours Available",
                color: "from-orange-400 to-red-500",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-3xl shadow-xl p-8 text-center border-4 border-dotted border-purple-200"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-3xl shadow-lg bg-gradient-to-br ${item.color}`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-[#4764c7] font-semibold">{item.info}</p>
                <p className="text-sm text-gray-500 mt-1">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 shadow-2xl"
          >
            <h2 className="text-4xl font-bold text-[#4764c7] mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 rounded-full border-2 border-purple-200 focus:border-purple-500 outline-none transition"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="px-6 py-4 rounded-full border-2 border-purple-200 focus:border-purple-500 outline-none transition"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="px-6 py-4 rounded-full border-2 border-purple-200 focus:border-purple-500 outline-none transition"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                rows="5"
                required
                className="w-full px-6 py-4 rounded-3xl border-2 border-purple-200 focus:border-purple-500 outline-none transition resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-[#4764c7] text-white font-bold text-lg rounded-full shadow-lg hover:bg-purple-700 transition flex items-center justify-center gap-3"
              >
                {submitted ? (
                  <>
                    <FaCheckCircle /> Message Sent!
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </motion.button>
            </form>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 font-semibold text-center mt-4"
              >
                Thank you! We'll bloom back to you soon!
              </motion.p>
            )}
          </motion.div>

          {/* Map */}
          {/* Map - FULLY RESPONSIVE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-96 lg:min-h-0"
          >
            {/* Responsive Container with 16:9 aspect ratio on mobile, full height on large screens */}
            <div className="relative w-full h-full pt-[56.25%] lg:pt-0 lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.123456789!2d77.417303!3d28.7024251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRiver%20Heights%2C%20Rajnagar%20Extension%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Plot 78, River Heights Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      
      {/* Social Connect */}
      <section className="py-16 px-6 text-center bg-gradient-to-b from-[#ffe8de] to-[#FFF6F2]">
        <h2 className="text-4xl font-bold text-[#4764c7] mb-8">Follow Our Journey</h2>
        <div className="flex justify-center gap-6">
          {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl text-[#4764c7] shadow-lg hover:shadow-xl border-2 border-purple-200"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
        <p className="mt-8 text-gray-600 text-lg">
          Tag us @Littlecanvas — we love seeing your little ones shine! ✦
        </p>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#4764c7] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Child’s Adventure Begins Here
          </h2>
          <p className="text-xl mb-10">
            Book a FREE tour or virtual meet — spaces fill fast!
          </p>
          <motion.button
            onClick={openPopup}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-[#4764c7] font-bold text-xl rounded-full shadow-xl"
          >
            Book a Tour Now
          </motion.button>
        </motion.div>
      </section>
      {/* Popup Rendered at Root Level via Portal */}
      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}