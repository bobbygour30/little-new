"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GiDroplets,
  GiCube,
  GiBookCover,
  GiAbacus,
  GiEarthAfricaEurope,
  GiMagicLamp,
} from "react-icons/gi";
import assets from "../assets/assets";
import PopupForm from "../components/PopupForm";

const HERO_IMAGE = assets.canvasLab || assets.learning;

const areas = [
  {
    icon: <GiDroplets />,
    title: "Exercise of Practical Life (EPL)",
    color: "from-rose-400 to-pink-500",
    desc: "Develops fine motor skills, concentration, coordination, and independence through real-life tasks.",
    examples: "Pouring, scooping, threading, buttoning frames, folding, and polishing activities.",
  },
  {
    icon: <GiCube />,
    title: "Sensorial Materials",
    color: "from-cyan-400 to-blue-500",
    desc: "Refines the five senses and helps children classify and categorize the world around them.",
    examples: "Cylinder Blocks, Pink Tower, Brown Stairs, Color Tablets, Geometric Solids, Sound Boxes.",
  },
  {
    icon: <GiBookCover />,
    title: "Language Materials",
    color: "from-purple-400 to-indigo-500",
    desc: "Builds phonemic awareness, vocabulary, reading, and writing in a natural, sequential way.",
    examples: "Sandpaper Letters, Moveable Alphabet, Object Boxes, Classification Cards, Phonetic Reading.",
  },
  {
    icon: <GiAbacus />,
    title: "Arithmetic (Mathematics)",
    color: "from-amber-400 to-orange-500",
    desc: "Introduces number sense, place value, and operations using concrete, hands-on materials.",
    examples: "Number Rods, Spindle Box, Cards & Counters, Bead Chains, Golden Bead Material, Fraction Insets.",
  },
  {
    icon: <GiEarthAfricaEurope />,
    title: "Cultural Materials",
    color: "from-emerald-400 to-teal-500",
    desc: "Sparks curiosity about the world — geography, science, history, botany, and zoology.",
    examples: "Puzzle Maps, Land & Water Forms, Continent Globes, Botany Puzzles, Life Cycles.",
  },
];

export default function CanvasLab() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Little Canvas Lab" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/60 to-pink-900/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white drop-shadow-2xl leading-tight">
            Welcome to the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              Canvas Lab
            </span>
          </h1>
          <p className="mt-8 text-xl sm:text-2xl md:text-3xl text-white/90 font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            A scientifically prepared environment where children learn through discovery,
            hands-on exploration, and joyful mastery — from concrete to abstract.
          </p>
        </motion.div>

        {/* Floating Magic Icons */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [-100, 100, -100], rotate: [0, 360] }}
              transition={{ duration: 20 + i * 3, repeat: Infinity, ease: "linear" }}
              className="absolute text-yellow-300"
              style={{ top: `${10 + i * 9}%`, left: `${5 + (i % 2 === 0 ? 70 : 10)}%` }}
            >
              <GiMagicLamp className="text-4xl sm:text-6xl drop-shadow-2xl" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-pink-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 mb-8">
            What is the Canvas Lab?
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 leading-relaxed max-w-4xl mx-auto">
            The <span className="font-bold text-purple-700">Canvas Lab</span> is not a traditional classroom — it is a{" "}
            <span className="italic text-pink-600">Prepared Environment</span> designed according to
            Montessori principles and enhanced with modern pedagogy. Here, children aged 2–6 learn
            through purposeful play using beautiful, scientifically crafted materials that lead them naturally from concrete experiences to abstract understanding.
          </p>
        </motion.div>
      </section>

      {/* Core Areas Grid – FIXED ALIGNMENT */}
      <section className="py-24 px-6 bg-gradient-to-b from-pink-50 via-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-20"
          >
            Five Pillars of the Canvas Lab
          </motion.h2>

          <div className="grid gap-12 md:gap-16 lg:grid-cols-2 xl:grid-cols-3">
            {areas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border-4 border-white/60 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                  {/* Colored Header – Perfectly Centered Icon + Title */}
                  <div className={`p-10 bg-gradient-to-br ${area.color} text-white flex flex-col items-center justify-center min-h-56`}>
                    <div className="text-7xl mb-4">{area.icon}</div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-center leading-tight">{area.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">{area.desc}</p>
                    <div>
                      <p className="font-semibold text-purple-700 mb-2">Key Materials Include:</p>
                      <p className="text-gray-600 italic leading-relaxed">{area.examples}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 drop-shadow-lg">
            Experience the Canvas Lab in Person
          </h3>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            See how your child lights up when they discover the joy of learning through their own hands.
          </p>

          <motion.button
            onClick={() => setIsPopupOpen(true)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-white text-purple-700 rounded-full font-bold text-2xl shadow-2xl hover:shadow-3xl transition-all"
          >
            Book a Lab Tour Today
          </motion.button>
        </motion.div>
      </section>

      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}