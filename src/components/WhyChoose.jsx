import React from "react";
import { motion } from "framer-motion";
import { GiDiamondHard, GiBrain, GiHeartInside } from "react-icons/gi";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

// High-quality, royalty-free images (replace with your own if needed)
const IMAGES = [
  assets.why1, // Curriculum
  assets.why4, // 6T Tech
  assets.why3, // Child-Centric
];

const sections = [
  {
    num: "01",
    icon: <GiDiamondHard />,
    title: "Superior, Outcome-Driven Curriculum",
    desc: "Our curriculum is designed to go beyond simple play, focusing on delivering measurable academic outcomes:",
    points: [
      "Montessori-Inspired & Modernized: We follow the Montessori way with modern updates to provide a scientifically backed learning environment.",
      "Structured Excellence: We go beyond nursery rhymes and toy play by using a full, well-planned program for development where all materials match our clear educational goals.",
      "Optimal Learning Ratio (1:15): We maintain a low 1:15 teacher-student ratio to ensure personalized attention, care, and quality educational guidance for every child.",
      "Future Readiness: We aim to raise children who are academically equipped and socially adaptive for the future, committed to preparing them to educate themselves throughout their lives."
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    num: "02",
    icon: <GiBrain />,
    title: "Integrated Methodology: The 6T Approach & Mobile App",
    desc: "Our systematic 6T approach ensures consistent growth and skill mastery through the effective use of technology:",
    points: [
      "The 6T System: Our 6T Learning Approach uses play to teach big ideas and includes rigorous Training for our teachers.",
      "Digital Skill Building: The 6T model integrates Technology through the Mobile App. This app helps children aged 2–6 build crucial skills in mathematics, reading, writing, phonics, and thinking, making daily learning fun and simple.",
      "Traceable Growth: We use smart ways to track how children grow through daily observation and short assessments, ensuring progress is tracked consistently and accurately."
    ],
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    num: "03",
    icon: <GiHeartInside />,
    title: "Child-Centric Development",
    desc: "We put the child at the center of the learning process, maximizing development during the critical early years:",
    points: [
      "Focus on the Child: We consciously focus on the child, not just the teacher, recognizing that the capacity to learn is highest between ages 2 to 6.",
      "Independence and Confidence: Children learn to work hard with joy and purpose by being encouraged to explore and develop independence.",
      "Character: We foster individuality and holistic growth, aspiring to empower every child with confidence and kindness."
    ],
    gradient: "from-pink-500 to-rose-600"
  }
];

export default function WhyChoose() {
  return (
    <section className="relative bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 py-24 px-4 overflow-hidden">
      {/* Floating Magic Dust */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -60, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-3 h-3 bg-yellow-300 rounded-full blur-md"
            style={{
              top: `${15 + i * 10}%`,
              left: `${10 + (i % 2) * 80}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-rose-700 bg-clip-text leading-tight">
            Why Choose Little Canvas Pre-School?
          </h2>
          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-black font-semibold max-w-5xl mx-auto leading-relaxed px-4">
            Choosing Little Canvas means investing in a structured, future-focused educational foundation built on a proven philosophy and integrated with modern technology.
          </p>
        </motion.div>

        {/* Responsive Cards with Images & Icons */}
        <div className="grid gap-12 md:gap-16">
          {sections.map((sec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-4 border-white/60 overflow-hidden"
            >
              <div className={`grid md:grid-cols-2 ${idx === 1 ? "md:grid-cols-2-reverse" : ""}`}>
                {/* Conditionally swap order: Image on right only for 2nd card (idx === 1) */}
                {idx === 1 ? (
                  <>
                    {/* Content (Left) */}
                    <div className="p-6 sm:p-8 flex flex-col justify-center order-1 md:order-1">
                      {/* Header with Icon */}
                      <div className={`p-5 rounded-2xl bg-gradient-to-r ${sec.gradient} text-white shadow-xl mb-6 inline-block w-fit`}>
                        <div className="flex items-center gap-4">
                          <div className="text-5xl animate-pulse">{sec.icon}</div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold leading-tight">{sec.title}</h3>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                        {sec.desc}
                      </p>

                      {/* Points */}
                      <div className="space-y-4">
                        {sec.points.map((point, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 + i * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <span className="text-xl mt-0.5 text-purple-600">✦</span>
                            <p className="text-base text-gray-700 leading-relaxed flex-1">
                              {point}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Image (Right) */}
                    <div className="relative h-64 md:h-full overflow-hidden order-2 md:order-2">
                      <img
                        src={IMAGES[idx]}
                        alt={sec.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="text-5xl font-black drop-shadow-lg">{sec.num}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image (Left) */}
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <img
                        src={IMAGES[idx]}
                        alt={sec.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="text-5xl font-black drop-shadow-lg">{sec.num}</span>
                      </div>
                    </div>

                    {/* Content (Right) */}
                    <div className="p-6 sm:p-8 flex flex-col justify-center">
                      {/* Header with Icon */}
                      <div className={`p-5 rounded-2xl bg-gradient-to-r ${sec.gradient} text-white shadow-xl mb-6 inline-block w-fit`}>
                        <div className="flex items-center gap-4">
                          <div className="text-5xl animate-pulse">{sec.icon}</div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold leading-tight">{sec.title}</h3>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                        {sec.desc}
                      </p>

                      {/* Points */}
                      <div className="space-y-4">
                        {sec.points.map((point, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 + i * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <span className="text-xl mt-0.5 text-purple-600">✦</span>
                            <p className="text-base text-gray-700 leading-relaxed flex-1">
                              {point}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-24"
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
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}