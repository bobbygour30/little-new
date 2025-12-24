import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaChild,
  FaStar,
  FaUsers,
  FaBrain,
  FaHandsHelping,
} from "react-icons/fa";
import assets from "../assets/assets";



const timeline = [
  {
    year: "2018",
    title: "The First Stroke",
    desc: "Little Canvas began with 15 children and a vision to revolutionize early education through scientific, structured joy.",
  },
  {
    year: "2020",
    title: "NEP 2020 Alignment",
    desc: "Redesigned curriculum to fully embrace India's new education policy, becoming one of the first preschools to implement the Foundational Stage vision.",
  },
  {
    year: "2022",
    title: "Montessori Certification",
    desc: "All guides completed AMI/IMA Montessori training with specialization in 0-6 development.",
  },
  {
    year: "2025",
    title: "850+ Masterpieces Created",
    desc: "Celebrating over 850 confident, self-reliant graduates ready to paint their own bright futures!",
  },
];

const team = [
  {
    name: "Mrs. Anjali Sharma",
    role: "Founder & Head Guide",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "The purpose of education is to prepare the young to educate themselves throughout their lives.",
  },
  {
    name: "Dr. Neha Verma",
    role: "Curriculum Director & Montessori Expert",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "We don't just teach — we activate the child's natural desire to learn through purpose and structure.",
  },
  {
    name: "Ms. Sarika Reddy",
    role: "Child Development Specialist",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "Every activity has a purpose. Every material tells a story. Every child writes their own masterpiece.",
  },
];

const nepTableData = [
  {
    area: "Physical & Motor",
    provide: "Activities that encourage gross and fine motor skill development, promoting strength, fitness, and essential coordination.",
    goal: "Developing a good physique and basic motor skills.",
  },
  {
    area: "Cognitive Development",
    provide: "Materials and lessons that cultivate critical thinking, observation, experimentation, and moving the child towards an intellectual curiosity and ability to reason.",
    goal: "Nurturing problem-solving, puzzles, logical thinking, and analytical ability.",
  },
  {
    area: "Socio-Emotional & Ethical",
    provide: "We foster essential life skills, emotional intelligence, and social skills, teaching children to engage the world with confidence and kindness, and to correct their own mistakes.",
    goal: "Emphasizing good behavior, ethics, teamwork, and resilience.",
  },
  {
    area: "Language, Literacy & Numeracy (FLN)",
    provide: "A strong, systematic base for reading, writing, and early math. Children are encouraged to express themselves freely and are taught to achieve the learning outcomes for vocabulary, letter sounds, and number sequence.",
    goal: "The core mission of developing Foundational Literacy and Numeracy.",
  },
  {
    area: "Cultural & Artistic",
    provide: "We integrate arts, music, movement, and play to ensure a joyful, purpose-driven learning environment.",
    goal: "Promoting creative, cultural, and aesthetic development.",
  },
];



export default function AboutUs() {

  const [philosophyRef, philosophyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [curriculumRef, curriculumInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="overflow-hidden">

      {/* ==================== HERO BANNER - ABOUT US ==================== */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-gradient-to-b from-gray-900 to-gray-700 mt-20">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src={assets.about}
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
            About us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/90 text-sm sm:text-base md:text-lg max-w-3xl font-medium"
          >
          </motion.p>
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

      {/* Our Philosophy & NEP 2020 */}
      <section ref={philosophyRef} className="py-20 md:py-24 bg-gradient-to-b from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={philosophyInView ? { opacity: 1 } : {}}
            className="text-[#4764c7] font-extrabold text-4xl sm:text-5xl md:text-6xl text-center mb-10 md:mb-12"
          >
            Our Philosophy: Activating Lifetime Potential
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 lg:p-14 text-center"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed max-w-5xl mx-auto font-semibold">
              At <strong>Little Canvas</strong>, we recognize that the journey to lifelong success begins in the early years. 
              The <strong>National Education Policy (NEP) 2020</strong> affirms that over <strong>85% of a child's critical brain development</strong> occurs before age six.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#4764c7] mt-6 md:mt-8 italic">
              "The purpose of education is to prepare the young to educate themselves throughout their lives."
            </p>
            <p className="text-lg md:text-xl text-black mt-6 md:mt-7 font-medium">
              We don't just teach — we <strong>activate this incredible potential</strong> through a comprehensive, structured, and joyful Foundational Stage education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scientific Curriculum */}
      <section ref={curriculumRef} className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
            className="text-[#4764c7] font-extrabold text-4xl sm:text-5xl md:text-6xl text-center mb-12 md:mb-16"
          >
            Our Scientific Curriculum: Beyond Play
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-14 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={curriculumInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 md:p-10 shadow-xl order-2 md:order-1"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#4764c7] mb-5 md:mb-6">A Systematic Learning Journey</h3>
              <ul className="space-y-4 text-black text-lg font-medium">
                <li className="flex items-start gap-4">
                  <FaStar className="text-orange-500 mt-1.5 flex-shrink-0 text-xl" />
                  <span><strong>Roadmap to Mastery:</strong> Clear learning outcomes for every level</span>
                </li>
                <li className="flex items-start gap-4">
                  <FaHandsHelping className="text-purple-500 mt-1.5 flex-shrink-0 text-xl" />
                  <span><strong>Concrete to Conceptual:</strong> Hands-on materials before abstract thinking</span>
                </li>
                <li className="flex items-start gap-4">
                  <FaBrain className="text-pink-500 mt-1.5 flex-shrink-0 text-xl" />
                  <span><strong>Natural Learning Cycle:</strong> Explore to Lesson to Practice to Mastery</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={curriculumInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-orange-100 to-purple-100 rounded-3xl p-8 md:p-10 shadow-xl order-1 md:order-2"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#4764c7] mb-5 md:mb-6">100% Aligned with NEP 2020</h3>
              <p className="text-black text-lg leading-relaxed mb-6 md:mb-7 font-medium">
                We guarantee holistic development across all 5 foundational domains through flexible, multi-level, 
                play-based, inquiry-driven learning — exactly as NEP envisions.
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4 text-sm md:text-base">
                <div className="bg-white rounded-xl p-3 md:p-4 text-center shadow font-bold">
                  Physical & Motor
                </div>
                <div className="bg-white rounded-xl p-3 md:p-4 text-center shadow font-bold">
                  Cognitive
                </div>
                <div className="bg-white rounded-xl p-3 md:p-4 text-center shadow font-bold">
                  Socio-Emotional
                </div>
                <div className="bg-white rounded-xl p-3 md:p-4 text-center shadow font-bold">
                  Language & Literacy
                </div>
              </div>
            </motion.div>
          </div>

          {/* NEP 2020 Table (Desktop) / Cards (Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="w-full"
          >
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto rounded-3xl shadow-2xl border border-gray-200">
              <table className="min-w-full bg-white">
                <thead className="bg-gradient-to-r from-orange-500 to-purple-600 text-white">
                  <tr>
                    <th className="px-7 py-5 text-left text-base font-extrabold uppercase tracking-wider">
                      Area of Development
                    </th>
                    <th className="px-7 py-5 text-left text-base font-extrabold uppercase tracking-wider">
                      What We Provide
                    </th>
                    <th className="px-7 py-5 text-left text-base font-extrabold uppercase tracking-wider">
                      Aligns with NEP 2020 Goal
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {nepTableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition">
                      <td className="px-7 py-5 whitespace-nowrap text-lg font-bold text-black">
                        {row.area}
                      </td>
                      <td className="px-7 py-5 text-lg text-black font-medium">
                        {row.provide}
                      </td>
                      <td className="px-7 py-5 text-lg text-black italic font-medium">
                        {row.goal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-7">
              {nepTableData.map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + idx * 0.2 }}
                  className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200"
                >
                  <h4 className="text-xl font-extrabold text-[#4764c7] mb-3">{row.area}</h4>
                  <p className="text-base text-black mb-4 font-medium">
                    <strong>What We Provide:</strong> {row.provide}
                  </p>
                  <p className="text-base text-black italic font-medium">
                    <strong>NEP 2020 Goal:</strong> {row.goal}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={curriculumInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-full origin-left mt-10"
          />
        </div>
      </section>

      

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-[#4764c7] to-purple-700 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-4 md:px-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200">
            Ready to Paint a Bright Future?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 md:mb-12 max-w-4xl mx-auto px-2 font-semibold">
            Join Little Canvas Pre-School and give your child the scientific, joyful foundation 
            they deserve — aligned with NEP 2020 and proven by 850+ success stories.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 md:px-14 py-5 md:py-6 bg-white text-[#4764c7] font-bold text-lg md:text-xl rounded-full shadow-2xl hover:shadow-3xl transition"
          >
            Enroll Now – Limited Seats!
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}