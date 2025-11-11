"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  GiBabyFace,
  GiBookAura,
  GiPencilBrush,
  GiRocket,
  GiHeartInside,
  GiBrain,
  GiPaintBrush,
  GiPublicSpeaker,
  GiWorld,
  GiLotus,
  GiSparkles,
  GiButterfly,
} from "react-icons/gi";
import assets from "../assets/assets";

/* ---------- SCROLL TO HASH FIX ---------- */
const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return null;
};

/* ---------- Floating Sparkles ---------- */
const FloatingSparkles = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {[...Array(16)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-yellow-400 opacity-70"
        initial={{ y: -100, x: `${Math.random() * 100}%` }}
        animate={{ y: "120vh", x: `${Math.random() * 100}%`, rotate: 360 }}
        transition={{
          duration: 12 + Math.random() * 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <GiSparkles className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-lg" />
      </motion.div>
    ))}
  </div>
);

/* ---------- Program Data ---------- */
const programs = [
  {
    level: "Level 0",
    title: "Play Group",
    age: "Typically 1.5 - 2.5 Years",
    icon: <GiBabyFace className="w-14 h-14 sm:w-20 sm:h-20 text-white drop-shadow-md" />,
    gradient: "from-pink-300 to-rose-400",
    bg: "bg-pink-50",
    foundation: "The Foundation of Learning: Sensory Exploration and Gross Motor Control",
    physical: "Exhibits muscle control. Develops fine motor control and demonstrates precision in pincer grip.",
    socioEmotional: "Learns to follow set routines. Begins identifying self (boy/girl, name, family).",
    cognitive: [
      { icon: <GiBrain className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />, title: "Sensorial", text: "Identifies and sorts objects by basic texture, size, shape, and primary color." },
      { icon: <GiPaintBrush className="w-8 h-8 sm:w-10 sm:h-10 text-pink-600" />, title: "Math", text: "Identifying number 0-10." },
      { icon: <GiPublicSpeaker className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />, title: "Vocabulary", text: "Naming objects around the house, food, animals, vehicles, and plants." },
      { icon: <GiPencilBrush className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />, title: "Art & Craft", text: "Tracing & Drawing, Coloring." },
    ],
    language: "Listening to stories and recognizing sounds of letters. Follows 2-step instructions and speaks in short phrases.",
  },
  {
    level: "Level 1",
    title: "Nursery",
    age: "Typically 2.5 – 3.5 Years",
    icon: <GiBookAura className="w-14 h-14 sm:w-20 sm:h-20" />,
    gradient: "from-purple-300 to-indigo-400",
    bg: "bg-purple-50",
    foundation: "Building Independence and Focused Concentration",
    physical: "Balances and moves in restricted spaces. Demonstrates eye-hand coordination to catch and throw objects.",
    socioEmotional: "Maintains attention span and focus for more than 15 minutes. Learns to negotiate solutions to problems and cooperates with peers.",
    cognitive: [
      { icon: <GiBrain className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />, title: "Sensorial", text: "Differentiates between 2D and 3D shapes. Completes complex jigsaw puzzles (with 8 to 10 pieces)." },
      { icon: <GiPaintBrush className="w-8 h-8 sm:w-10 sm:h-10 text-pink-600" />, title: "Math", text: "Verbally count and write numbers in sequence up to 20. Understands the concept of Order and Comparison of numbers." },
      { icon: <GiWorld className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />, title: "Environment & Culture (EVS)", text: "States basic facts about parts of a body, fruits, animals, and transport." },
    ],
    language: "Reads and writes CVC words (3-letter blend words) and writes phrases. Can narrate personal experiences to peers.",
  },
  {
    level: "Level 2",
    title: "LKG",
    age: "Typically 3.5-4.5 Years",
    icon: <GiPencilBrush className="w-14 h-14 sm:w-20 sm:h-20" />,
    gradient: "from-orange-300 to-amber-400",
    bg: "bg-amber-50",
    foundation: "Mastering Early Literacy and Foundational Arithmetic",
    physical: "Performs complex tasks that involve crossing the mid-line (like lacing/tying). Demonstrates controlled pencil movements while writing.",
    socioEmotional: "Shows a strong desire to be independent. Begins to be aware of different people and their roles.",
    cognitive: [
      { icon: <GiBrain className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />, title: "Sensorial", text: "Understands that when two shapes combine a third meaningful shape can be obtained. Begins to create patterns." },
      { icon: <GiPaintBrush className="w-8 h-8 sm:w-10 sm:h-10 text-pink-600" />, title: "Math", text: "Counting to three-digit numbers. Understands the concepts of Addition and Multiplication." },
      { icon: <GiWorld className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />, title: "Environment & Culture (EVS)", text: "Knows facts about transportation, food, and nature. Recognizes flags of a few countries." },
    ],
    language: "Reads and writes sight words and blend words. Speaks in grammatically correct sentences.",
    hindi: "Identifies Hindi alphabet and Writes Hindi alphabet.",
  },
  {
    level: "Level 3",
    title: "UKG",
    age: "Typically 4.5-5.5 Years",
    icon: <GiRocket className="w-14 h-14 sm:w-20 sm:h-20" />,
    gradient: "from-sky-300 to-cyan-400",
    bg: "bg-cyan-50",
    foundation: "Primary School Readiness: Abstract Reasoning and Application",
    physical: "Focuses on highly coordinated movements and complex physical tasks.",
    socioEmotional: "Discussing feelings, good/bad habits, and safe/unsafe scenarios. Discussing self, family members and friends.",
    cognitive: [
      { icon: <GiBrain className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />, title: "Sensorial", text: "Identifying mirror image and what is missing. Identifying odd one out and what comes next." },
      { icon: <GiPaintBrush className="w-8 h-8 sm:w-10 sm:h-10 text-pink-600" />, title: "Math", text: "Counting and writing numbers 1-1000. Solves simple word math problems. Performs addition and subtraction with and without borrowing/carryover for double digits." },
      { icon: <GiWorld className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />, title: "Environment & Culture (EVS)", text: "Identifies continents and oceans. Discusses physical features of Earth and natural landforms." },
    ],
    language: "Reading and writing short and long vowel words. Reading and writing words with phonogram/homophone complexities. Introduction to nouns and verbs.",
    hindi: "Expected to achieve reading and writing fluency based on the strong foundation laid in LKG (Level 2)",
  },
];

/* ---------- Program Section ---------- */
const ProgramSection = ({ prog, idx }) => {
  const sectionId = prog.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      id={sectionId}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
      className={`rounded-3xl ${prog.bg} p-6 sm:p-10 shadow-2xl border-4 border-white mb-10 sm:mb-12`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
          <div className={`bg-gradient-to-r ${prog.gradient} p-4 sm:p-6 rounded-full shadow-lg`}>
            {prog.icon}
          </div>
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">{prog.title}</h2>
            <p className="text-lg sm:text-xl font-semibold text-purple-600">{prog.level}</p>
            <p className="text-base sm:text-lg text-gray-600">({prog.age})</p>
          </div>
        </div>
      </div>

      {/* Foundation */}
      <div className="bg-white bg-opacity-80 rounded-3xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-inner">
        <p className="text-base sm:text-lg font-medium text-gray-700 leading-relaxed">
          {prog.foundation}
        </p>
      </div>

      {/* Physical */}
      <div className="bg-pink-50 rounded-3xl p-4 sm:p-6 mb-5 sm:mb-6 flex gap-3 sm:gap-4">
        <GiHeartInside className="w-10 h-10 sm:w-12 sm:h-12 text-pink-600 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-pink-600 text-lg sm:text-xl mb-2">Physical (Gross & Fine Motor)</h4>
          <p className="text-gray-700 text-sm sm:text-base">{prog.physical}</p>
        </div>
      </div>

      {/* Socio-Emotional */}
      <div className="bg-purple-50 rounded-3xl p-4 sm:p-6 mb-5 sm:mb-6 flex gap-3 sm:gap-4">
        <GiHeartInside className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-purple-600 text-lg sm:text-xl mb-2">Socio-Emotional</h4>
          <p className="text-gray-700 text-sm sm:text-base">{prog.socioEmotional}</p>
        </div>
      </div>

      {/* Cognitive */}
      <div className="bg-blue-50 rounded-3xl p-4 sm:p-6 mb-5 sm:mb-6">
        <h4 className="font-bold text-blue-600 text-lg sm:text-xl mb-3 sm:mb-4">
          Cognitive (Sensorial, Math, Creative, Environment)
        </h4>
        <div className="space-y-3 sm:space-y-4">
          {prog.cognitive.map((c, i) => (
            <div key={i} className="flex gap-3 sm:gap-4 items-start">
              {c.icon}
              <div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base">{c.title}:</p>
                <p className="text-gray-700 text-xs sm:text-sm">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Language */}
      <div className="bg-green-50 rounded-3xl p-4 sm:p-6 mb-5 sm:mb-6 flex gap-3 sm:gap-4">
        <GiPublicSpeaker className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-green-600 text-lg sm:text-xl mb-2">Language (English)</h4>
          <p className="text-gray-700 text-sm sm:text-base">{prog.language}</p>
        </div>
      </div>

      {/* Hindi */}
      {prog.hindi && (
        <div className="bg-orange-50 rounded-3xl p-4 sm:p-6 flex gap-3 sm:gap-4">
          <GiLotus className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-orange-600 text-lg sm:text-xl mb-2">Hindi Language</h4>
            <p className="text-gray-700 text-sm sm:text-base">{prog.hindi}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

/* ---------- Main Component ---------- */
export default function Programs() {
  return (
    <div className="overflow-hidden">

      {/* ==================== HERO BANNER - PROGRAMS ==================== */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-gradient-to-b from-gray-900 to-gray-700">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src={assets.programs}
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
            Programs
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

      {/* Main Content */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-yellow-50 via-pink-50 to-cyan-50 relative overflow-hidden">
        <ScrollToHashElement />
        <FloatingSparkles />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <motion.div className="text-center mb-12 sm:mb-16">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
            >
              Our Magical Programs
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl text-gray-700 mt-3 sm:mt-4 font-medium max-w-2xl mx-auto px-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Full curriculum details – every milestone, every skill
            </motion.p>

            <motion.div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 flex-wrap">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                >
                  <GiButterfly className="w-10 h-10 sm:w-12 sm:h-12 text-pink-400" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* All Programs */}
          <div className="space-y-10 sm:space-y-12">
            {programs.map((prog, idx) => (
              <ProgramSection key={prog.title} prog={prog} idx={idx} />
            ))}
          </div>

          {/* Enroll Button */}
          <motion.div className="text-center mt-16 sm:mt-20">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 sm:px-14 py-4 sm:py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg sm:text-2xl rounded-full shadow-2xl flex items-center gap-3 sm:gap-4 mx-auto hover:shadow-pink-400/50"
            >
              <GiRocket className="w-8 h-8 sm:w-10 sm:h-10" />
              Enroll Now & Spark Joy!
              <GiSparkles className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}