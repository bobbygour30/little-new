"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Sparkles, Heart, Shield, Users, Calendar, MessageCircle } from "lucide-react";
import PopupForm from "../components/PopupForm";

const faqs = [ /* your faq data remains exactly the same */ 
  { q: "What makes Little Canvas different from other preschools?", a: "Little Canvas integrates the independence-focused Montessori Curriculum with the structured, hands-on learning of the Little Canvas Lab. This unique combination ensures children move from concrete practice to abstract mastery, delivering deep conceptual understanding far superior to standard rote learning.", icon: <Sparkles /> },
  { q: "What exactly is the Little Canvas Lab, and how does my child use it?", a: "The Little Canvas Lab is a specialized, hands-on learning zone filled with hundreds of scientifically designed materials. Here, children work independently at their own pace, using the materials to physically discover and master core concepts in math, language, and life skills.", icon: <Heart /> },
  { q: "What is the fundamental principle of Montessori education?", a: "The core principle of Montessori education, based on the work of Dr. Maria Montessori, is to facilitate the child's natural desire to learn within a \"prepared environment,\" fostering independence, concentration, and self-discipline.", icon: <Shield /> },
  { q: "Is the Little Canvas curriculum the same as the pure Montessori method?", a: "No. Little Canvas curriculum is Montessori-inspired but is an evolved, practical curriculum. It combines Montessori's independence principles with the structure and assessments needed to align with modern educational standards and ensure seamless readiness for primary school.", icon: <Users /> },
  { q: "What does a typical day look like?", a: "Our daily routine blends structured classroom work, free play, and a dedicated hour of hands-on Canvas Lab exploration.", icon: <Calendar /> },
  { q: "How do you handle different learning speeds?", a: "Each child learns at their own pace—we offer individual attention and adapt activities to suit their needs.", icon: <Sparkles /> },
  { q: "How do you ensure teacher quality?", a: "We select passionate educators who are not only qualified but also genuinely love children and learning. Along with this we provide primary teacher’s training to our teachers.", icon: <Users /> },
  { q: "What is your teacher–student ratio?", a: "One dedicated teacher guides every 15 students (1:15 ratio), allowing us to closely nurture each child's development.", icon: <Heart /> },
  { q: "How do you ensure children’s safety?", a: "We have secure entry/exit points, CCTV surveillance, trained staff, and a strict visitor policy.", icon: <Shield /> },
  { q: "How do you communicate with parents?", a: "We share regular updates, photos, and progress reports through our parent app and WhatsApp groups.", icon: <MessageCircle /> },
  { q: "Can parents visit the school anytime?", a: "Yes, visits are welcome but scheduled to avoid classroom disruption and maintain safety.", icon: <Calendar /> },
  { q: "Do you celebrate festivals and special events?", a: "Yes! We celebrate cultural festivals, birthdays, theme days, and events to build social awareness and joy.", icon: <Sparkles /> },
  { q: "When do admissions open?", a: "Admissions are open year-round, subject to seat availability.", icon: <Calendar /> },
  { q: "What is your fee structure?", a: "Our fees vary by program; details are shared during your campus visit.", icon: <Heart /> },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 py-16 px-4 sm:px-6 overflow-hidden">
        {/* Floating Magic Dust */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -80, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 18 + i * 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-yellow-300 rounded-full blur-md"
              style={{ top: `${10 + i * 8}%`, left: `${5 + (i % 2 === 0 ? 70 : 20)}%` }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-rose-700 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-800 font-medium max-w-3xl mx-auto px-4">
              Everything parents want to know about Little Canvas Preschool
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-5 sm:space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-4 border-white/60 overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full px-5 sm:px-8 py-5 sm:py-6 flex items-start sm:items-center justify-between text-left hover:bg-purple-50/60 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 sm:gap-5">
                    <div className="mt-0.5 text-purple-600 flex-shrink-0">
                      {React.cloneElement(faq.icon, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 leading-tight pr-4">
                      {faq.q}
                    </h3>
                  </div>

                  <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {openIndex === i ? (
                      <ChevronUp className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600 flex-shrink-0" />
                    )}
                  </motion.div>
                </button>

                {/* Answer */}
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-5 sm:px-8 pb-6 sm:pb-8"
                  >
                    <div className="pl-10 sm:pl-14 pr-4 sm:pr-12">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20 sm:mt-24"
          >
            <div className="inline-block bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 shadow-3xl border-8 border-white/70">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6">
                Still Have Questions?
              </h3>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl mx-auto px-4">
                We’re here to help! Book a tour or speak with our team today.
              </p>
              <motion.button
                onClick={() => setIsPopupOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 sm:px-12 sm:py-6 bg-white text-purple-700 rounded-full font-bold text-xl sm:text-2xl shadow-2xl"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}