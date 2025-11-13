import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "What Is The Best Age To Start Kindergarten?",
    a: "The ideal age to start kindergarten is usually between 4-6 years. Early learning helps children develop social, cognitive, and motor skills."
  },
  {
    q: "Which Is The Best Preschool For Your Child?",
    a: "Look for schools that offer a child-friendly environment, qualified staff, balanced curriculum, and interactive play-based learning."
  },
  {
    q: "What Is The Tuition Fee On First Year?",
    a: "Tuition fees vary depending on the program and facilities offered. Our school offers affordable plans to suit every family."
  },
  {
    q: "How Do You Ensure Child Safety?",
    a: "We implement biometric attendance, CCTV monitoring, child-safe classrooms, and trained staff to ensure children are safe at all times."
  },
  {
    q: "Do You Involve Parents in Learning?",
    a: "Yes! Monthly parent-teacher meetings and regular updates keep parents actively involved in their child's growth."
  },
];

export default function KinedoInfoSection() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 min-h-screen p-6 md:p-12 overflow-hidden">
      
      {/* FAQ Section - Glassmorphism Cards */}
      <div className="max-w-4xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[#4764c7] font-extrabold text-4xl sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Know More About Little Canvas
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className={`
                  w-full flex items-center justify-between p-5 text-left
                  rounded-2xl transition-all duration-300
                  bg-white/70 backdrop-blur-xl border border-white/50
                  shadow-lg hover:shadow-2xl hover:scale-[1.01]
                  ${activeFAQ === i ? "rounded-b-none border-b-0" : ""}
                `}
              >
                <span className="font-bold text-black text-lg sm:text-xl pr-4">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: activeFAQ === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl font-bold text-[#4764c7]"
                >
                  {activeFAQ === i ? "−" : "+"}
                </motion.span>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: activeFAQ === i ? "auto" : 0,
                  opacity: activeFAQ === i ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 py-4 text-black bg-gradient-to-r from-orange-50 to-pink-50 rounded-b-2xl font-medium text-base sm:text-lg leading-relaxed border border-t-0 border-white/50 backdrop-blur-sm">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === ANIMATED CIRCULAR IMAGE === */}
      <div className="flex justify-center items-center -mt-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Outer Glow Ring */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 0 0 rgba(255, 165, 0, 0)",
                "0 0 0 20px rgba(255, 165, 0, 0.3)",
                "0 0 0 0 rgba(255, 165, 0, 0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
          />

          {/* Floating Container */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            }}
            className="relative p-3 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 rounded-full shadow-2xl"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.2))",
            }}
          >
            {/* Inner Border */}
            <div className="p-1 bg-white rounded-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-full"
                style={{
                  width: "320px",
                  height: "320px",
                }}
              >
                <img
                  src="https://thumbs.dreamstime.com/b/playground-colorful-fun-exciting-machine-small-kids-children-school-play-area-backyard-green-grass-filed-city-playground-371448200.jpg"
                  alt="Happy children playing"
                  className="w-full h-full object-cover rounded-full"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-full" />

                {/* Sparkles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                      style={{
                        top: "10%",
                        left: `${15 + i * 15}%`,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg"
          >
            Joyful Learning Every Day
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}