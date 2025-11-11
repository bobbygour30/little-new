"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  GiWorld,
  GiTeacher,
  GiMagnifyingGlass,
  GiLightBulb,
  GiCycle,
  GiTrophy,
  GiMagicLamp,
  GiButterfly,
  GiSparkles,
  GiStarShuriken,
  GiFlowerPot,
  GiBubbles,
  GiFeather,
} from "react-icons/gi";

const stages = [
  { num: "01", title: "The Environment", desc: "The engaging materials in the lab trigger the child.", color: "from-cyan-400 to-blue-500", icon: <GiWorld /> },
  { num: "02", title: "The Teacher", desc: "The teacher initiates the learning for the child.", color: "from-pink-400 to-rose-500", icon: <GiTeacher /> },
  { num: "03", title: "Explore", desc: "The child has the liberty to explore in the school environment.", color: "from-green-400 to-emerald-500", icon: <GiMagnifyingGlass /> },
  { num: "04", title: "Discover", desc: "When the child explores the classroom, they discover new learnings.", color: "from-orange-400 to-amber-500", icon: <GiLightBulb /> },
  { num: "05", title: "Practice", desc: "The child has the liberty to practise and play.", color: "from-indigo-400 to-blue-600", icon: <GiCycle /> },
  { num: "06", title: "Master", desc: "With more practice and play, they master the skill.", color: "from-yellow-400 to-orange-500", icon: <GiTrophy /> },
];

const Card = ({ stage, angle, radius, isMobile }) => {
  const x = radius * Math.cos((angle * Math.PI) / 180);
  const y = radius * Math.sin((angle * Math.PI) / 180);

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className={`w-full max-w-xs mx-auto rounded-3xl p-6 bg-gradient-to-br ${stage.color} shadow-2xl text-white border-4 border-white/40 backdrop-blur-sm`}
      >
        <div className="text-5xl mb-4">{stage.icon}</div>
        <h3 className="text-2xl font-bold mb-2">{stage.title}</h3>
        <p className="text-sm opacity-90 leading-relaxed">{stage.desc}</p>
        <div className="mt-5 w-12 h-12 bg-white/30 backdrop-blur rounded-full flex items-center justify-center font-bold text-xl border-2 border-white">
          {stage.num}
        </div>
      </motion.div>
    );
  }

  return (
    <div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: `translate(-50%, -50%) rotate(${-angle}deg)`,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.15 }}
        className={`w-48 h-56 rounded-3xl p-5 bg-gradient-to-br ${stage.color} shadow-2xl text-white text-center border-4 border-white/40 flex flex-col justify-center items-center`}
      >
        <div className="text-3xl mb-3">{stage.icon}</div>
        <h3 className="text-xl font-bold">{stage.title}</h3>
        <p className="text-sm mt-2 px-3 leading-tight">{stage.desc}</p>
        <div className="mt-4 w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold text-xl">
          {stage.num}
        </div>
      </motion.div>
    </div>
  );
};

export default function LearningProcess() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const radius = isMobile ? 0 : 250;

  return (
    <section className="relative min-h-screen flex flex-col items-center bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 overflow-hidden py-16 px-4">
      
      {/* === ENHANCED: Full Magical Side Decorations (12 elements) === */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {/* LEFT SIDE */}
        <motion.div animate={{ y: [0, -80, 0], rotate: [0, 20, 0] }} transition={{ duration: 22, repeat: Infinity }} className="absolute left-4 top-20 text-purple-300 opacity-40"><GiButterfly className="text-9xl" /></motion.div>
        <motion.div animate={{ y: [0, 100, 0], rotate: [0, -25, 0] }} transition={{ duration: 28, repeat: Infinity }} className="absolute left-12 top-96 text-pink-300 opacity-30"><GiSparkles className="text-8xl" /></motion.div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute left-8 top-64 text-yellow-200 opacity-25"><GiStarShuriken className="text-7xl" /></motion.div>
        <motion.div animate={{ y: [0, -60, 0] }} transition={{ duration: 18, repeat: Infinity }} className="absolute left-16 bottom-32 text-cyan-200 opacity-20"><GiBubbles className="text-10xl" /></motion.div>
        <motion.div animate={{ y: [0, 70, 0], rotate: [0, 15, 0] }} transition={{ duration: 25, repeat: Infinity }} className="absolute left-6 top-1/2 text-green-200 opacity-25"><GiFlowerPot className="text-8xl" /></motion.div>
        <motion.div animate={{ x: [-20, 20, -20] }} transition={{ duration: 30, repeat: Infinity }} className="absolute left-20 bottom-96 text-purple-200 opacity-15"><GiFeather className="text-9xl rotate-12" /></motion.div>

        {/* RIGHT SIDE */}
        <motion.div animate={{ y: [0, -100, 0], rotate: [0, -20, 0] }} transition={{ duration: 26, repeat: Infinity }} className="absolute right-6 top-32 text-pink-300 opacity-40"><GiButterfly className="text-9xl scale-x-[-1]" /></motion.div>
        <motion.div animate={{ y: [0, 80, 0], rotate: [0, 25, 0] }} transition={{ duration: 30, repeat: Infinity }} className="absolute right-16 top-80 text-purple-300 opacity-30"><GiSparkles className="text-8xl" /></motion.div>
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }} className="absolute right-12 top-96 text-yellow-200 opacity-25"><GiStarShuriken className="text-7xl" /></motion.div>
        <motion.div animate={{ y: [0, -70, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute right-20 bottom-48 text-orange-200 opacity-20"><GiBubbles className="text-10xl" /></motion.div>
        <motion.div animate={{ y: [0, 90, 0], rotate: [0, -15, 0] }} transition={{ duration: 24, repeat: Infinity }} className="absolute right-8 top-1/3 text-indigo-200 opacity-25"><GiFlowerPot className="text-8xl" /></motion.div>
        <motion.div animate={{ x: [20, -20, 20] }} transition={{ duration: 32, repeat: Infinity }} className="absolute right-24 top-96 text-pink-200 opacity-15"><GiFeather className="text-9xl -rotate-12" /></motion.div>
      </div>

      <h1 className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-16 text-center leading-tight">
        Learning Process
      </h1>

      {/* === VISUAL SECTION (100% UNCHANGED) === */}
      {isMobile ? (
        <div className="w-full max-w-md space-y-8">
          {stages.map((stage, i) => (
            <Card key={i} stage={stage} angle={0} radius={0} isMobile={true} />
          ))}
        </div>
      ) : (
        <div className="relative w-full max-w-3xl aspect-square flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            {stages.map((stage, i) => {
              const angle = (i * 360) / stages.length;
              return <Card key={i} stage={stage} angle={angle} radius={radius} isMobile={false} />;
            })}
          </motion.div>

          <div className="absolute w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex flex-col items-center justify-center shadow-2xl text-white border-8 border-white/50 z-10">
            <GiMagicLamp className="text-7xl mb-3 text-yellow-300 animate-pulse" />
            <h2 className="text-3xl font-bold">LEARNING</h2>
            <p className="text-2xl font-bold">PROCESS</p>
          </div>
        </div>
      )}

      {isMobile && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 text-center text-gray-600 font-medium text-lg px-6"
        >
          Swipe up to explore the full learning journey
        </motion.p>
      )}

      {/* === FULL DETAILED CONTENT BELOW (UNCHANGED) === */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mt-24 px-6 sm:px-10 lg:px-16"
      >
        <h2 className="text-4xl sm:text-5xl font-black text-center text-transparent bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text mb-10">
          The Little Canvas Learning Process: Six Stages of Mastery
        </h2>

        <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-center mb-16 max-w-3xl mx-auto">
          The learning process at <span className="font-bold text-purple-700">Little Canvas</span> is a continuous, six-stage cycle designed to foster independence and deep conceptual understanding, moving the child toward mastery of a skill.
        </p>

        <div className="grid gap-10 md:gap-12">
          {[
            { num: "1", title: "The Environment (Trigger)", desc: "The process begins with the physical space. The engaging materials in the Canvas lab act as a trigger, sparking the child's natural curiosity and desire to interact. The classrooms are carefully designed to help children learn by doing." },
            { num: "2", title: "Explore", desc: "Once the environment is set, the child is given the liberty to explore the school environment. This stage supports the natural desire in every child to learn through doing and exploring." },
            { num: "3", title: "Discover", desc: "As the child interacts with the materials and the classroom, they can discover new learnings. This is where the child's mind makes the connections on its own, initiating a deeper level of engagement." },
            { num: "4", title: "The Teacher (Initiation)", desc: "At the appropriate point, the teacher steps in to initiate the learning for the child. The teacher acts as a guide, observing the child's progress daily and interfering only when it is needed to provide support or introduce the next step." },
            { num: "5", title: "Practice", desc: "The child is then given the liberty to practice and play with the learning tools. The activities are built to help children spot and correct their own mistakes, fostering independence and self-reliance during this crucial repetition stage." },
            { num: "6", title: "Master", desc: "The final stage is the achievement of the objective. With more practice and play, the child will master the skill. This process ensures the child achieves the end outcome defined by the curriculum and is ready to progress to the next concept." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-xl border-4 border-white/50">
                  {item.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}