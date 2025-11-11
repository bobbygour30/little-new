import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GiBabyBottle,
  GiBookshelf,
  GiPencilRuler,
  GiGraduateCap,
} from "react-icons/gi";

const programs = [
  {
    color: "from-pink-400 to-rose-500",
    icon: <GiBabyBottle className="text-6xl text-white" />,
    title: "Play Group",
    subtitle: "(Level 0)",
    age: "1.5 - 2.5 Years",
    text: "This foundational stage builds physical and sensory coordination through exploration, establishing the critical independence and vocabulary needed to begin formal learning.",
  },
  {
    color: "from-purple-400 to-indigo-500",
    icon: <GiBookshelf className="text-6xl text-white" />,
    title: "Nursery",
    subtitle: "(Level 1)",
    age: "2.5 – 3.5 Years",
    text: "This level is dedicated to focused concentration, hands-on numeracy & introduction of CVC words. Students develop a sustained attention span, master counting and quantity association up to 20, and fluently read CVC English words.",
  },
  {
    color: "from-orange-400 to-amber-500",
    icon: <GiPencilRuler className="text-6xl text-white" />,
    title: "LKG",
    subtitle: "(Level 2)",
    age: "3.5-4.5 Years",
    text: "LKG is the launchpad for literacy and arithmetic fluency, where children achieve controlled writing, counting and number writing up to 100, understanding Place Value, Addition and Multiplication, alongside reading and writing the Hindi Alphabets.",
  },
  {
    color: "from-sky-400 to-cyan-500",
    icon: <GiGraduateCap className="text-6xl text-white" />,
    title: "UKG",
    subtitle: "(Level 3)",
    age: "4.5-5.5 Years",
    text: "As the ultimate primary school readiness level, UKG students conquer abstract reasoning, counting to 1000, the concept of Subtraction, mastering global awareness and achieving fluent bilingual literacy (English and Hindi).",
  },
];

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
});

const AboutPrograms = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF6F2] to-[#ffe8de] overflow-hidden">
      <div className="max-w-5xl mx-auto text-center px-6">
        <motion.h2
          className="text-[#4764c7] font-extrabold text-4xl sm:text-5xl mb-3"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp(0)}
          viewport={{ once: true }}
        >
          Our Programs
        </motion.h2>
        <motion.p
          className="text-black mb-14 text-base sm:text-lg font-semibold"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp(0.1)}
          viewport={{ once: true }}
        >
          Discover our nurturing and creative learning programs designed for every stage of early childhood.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
          {programs.map((prog, idx) => {
            const sectionId = prog.title.toLowerCase().replace(/\s+/g, "-");

            return (
              <motion.div
                key={prog.title}
                className="relative w-full bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-3 group"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp(idx * 0.15)}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`w-24 h-24 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-r ${prog.color} shadow-lg transition-transform duration-500`}
                  whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
                >
                  {prog.icon}
                </motion.div>

                <h3 className="text-2xl font-extrabold text-black mb-1">{prog.title}</h3>
                <p className="text-base font-semibold text-black mb-2">{prog.subtitle}</p>
                <p className="text-sm font-bold text-black mb-5">{prog.age}</p>
                <p className="text-black text-base leading-relaxed mb-7 font-medium">{prog.text}</p>

                <Link to={`/programs#${sectionId}`} className="mt-auto">
                  <motion.button
                    className="relative px-7 py-3.5 bg-gradient-to-r from-[#4764c7] to-[#6a8eff] text-white font-semibold text-base rounded-full shadow-md overflow-hidden group flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Read More</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{ transform: "skewX(-20deg)" }}
                    />
                  </motion.button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutPrograms;