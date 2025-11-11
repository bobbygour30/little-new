'use client';
import React from "react";
import { motion } from "framer-motion";
import { GiDiamondHard, GiBrain, GiHeartInside } from "react-icons/gi";
import { Link } from "react-router-dom";

const whyChooseData = [
  {
    num: "01",
    icon: <GiDiamondHard className="w-16 h-16" />,
    title: "Superior, Outcome-Driven Curriculum",
    desc: "Our curriculum is designed to go beyond simple play, focusing on delivering measurable academic outcomes:",
    points: [
      "Montessori-Inspired & Modernized: Scientifically backed learning environment with modern updates.",
      "Structured Excellence: Full, well-planned program where all materials align with clear educational goals.",
      "Optimal Learning Ratio (1:15): Personalized attention and quality guidance for every child.",
      "Future Readiness: Academically equipped and socially adaptive for a lifetime of self-education."
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    num: "02",
    icon: <GiBrain className="w-16 h-16" />,
    title: "Integrated Methodology: The 6T Approach & Mobile App",
    desc: "Our systematic 6T approach ensures consistent growth and skill mastery through technology:",
    points: [
      "The 6T System: Play-based learning with rigorous teacher training.",
      "Digital Skill Building: Mobile App for ages 2–6 covering math, reading, phonics, and thinking.",
      "Traceable Growth: Daily observation and short assessments to track progress accurately."
    ],
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    num: "03",
    icon: <GiHeartInside className="w-16 h-16" />,
    title: "Child-Centric Development",
    desc: "We put the child at the center of learning during the critical early years:",
    points: [
      "Focus on the Child: Highest learning capacity between ages 2 to 6.",
      "Independence and Confidence: Encouraged to explore and work with joy and purpose.",
      "Character: Fosters individuality, confidence, and kindness."
    ],
    gradient: "from-pink-500 to-rose-600"
  }
];

export default function WhyChoose() {
  return (
    <section className="relative bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 py-24 px-4 overflow-hidden">
      {/* Floating Magic Dust */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -50, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 12 + i, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-4 h-4 bg-yellow-300 rounded-full blur-sm"
            style={{
              top: `${10 + i * 12}%`,
              left: `${10 + (i % 2) * 80}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-rose-700 bg-clip-text leading-tight">
            Why Choose Little Canvas?
          </h2>
          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-black font-semibold max-w-5xl mx-auto leading-relaxed px-4">
            A structured, future-focused foundation blending Montessori philosophy with modern technology — preparing your child not just for school, but for life.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-10">
          {whyChooseData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/75 backdrop-blur-xl rounded-3xl shadow-2xl border-4 border-white/60 overflow-hidden"
            >
              {/* Header */}
              <div className={`p-7 sm:p-9 bg-gradient-to-r ${item.gradient} text-white`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="text-white">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-4xl sm:text-5xl font-black">{item.num}</span>
                      <h3 className="text-2xl sm:text-3xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-base sm:text-lg opacity-95 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>

              {/* Points */}
              <div className="p-7 sm:p-9 bg-white">
                <div className="space-y-5">
                  {item.points.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <span className="text-2xl mt-0.5 text-purple-600">✦</span>
                      <p className="text-base sm:text-lg text-black leading-relaxed flex-1 font-medium">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-block bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-10 shadow-3xl border-8 border-white/70">
            <h4 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
              Ready to Give Your Child the Best Start?
            </h4>
            <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-purple-700 rounded-full font-bold text-xl shadow-2xl"
            >
              Book a Tour Today
            </motion.button></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}