import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { Sparkles, Heart, Shield, Users, Calendar, MessageCircle } from "lucide-react"; // Assuming lucide-react for icons

const faqs = [
  { q: "What makes Little Canvas different from other preschools?", a: "Little Canvas integrates the independence-focused Montessori Curriculum with the structured, hands-on learning of the Little Canvas Lab. This unique combination ensures children move from concrete practice to abstract mastery, delivering deep conceptual understanding far superior to standard rote learning.", icon: <Sparkles className="w-6 h-6" /> },
  { q: "What exactly is the Little Canvas Lab, and how does my child use it?", a: "The Little Canvas Lab is a specialized, hands-on learning zone filled with hundreds of scientifically designed materials. Here, children work independently at their own pace, using the materials to physically discover and master core concepts in math, language, and life skills.", icon: <Heart className="w-6 h-6" /> },
  { q: "What is the fundamental principle of Montessori education?", a: "The core principle of Montessori education, based on the work of Dr. Maria Montessori, is to facilitate the child's natural desire to learn within a \"prepared environment,\" fostering independence, concentration, and self-discipline.", icon: <Shield className="w-6 h-6" /> },
  { q: "Is the Little Canvas curriculum the same as the pure Montessori method?", a: "No. Little Canvas curriculum is Montessori-inspired but is an evolved, practical curriculum. It combines Montessori's independence principles with the structure and assessments needed to align with modern educational standards and ensure seamless readiness for primary school.", icon: <Users className="w-6 h-6" /> },
  { q: "What does a typical day look like?", a: "Our daily routine blends structured classroom work, free play, and a dedicated hour of hands-on Canvas Lab exploration.", icon: <Calendar className="w-6 h-6" /> },
  { q: "How do you handle different learning speeds?", a: "Each child learns at their own pace—we offer individual attention and adapt activities to suit their needs.", icon: <Sparkles className="w-6 h-6" /> },
  { q: "How do you ensure teacher quality?", a: "We select passionate educators who are not only qualified but also genuinely love children and learning. Along with this we provide primary teacher’s training to our teachers.", icon: <Users className="w-6 h-6" /> },
  { q: "What is your teacher–student ratio?", a: "One dedicated teacher guides every 15 students (1:15 ratio), allowing us to closely nurture each child's development.", icon: <Heart className="w-6 h-6" /> },
  { q: "How do you ensure children’s safety?", a: "We have secure entry/exit points, CCTV surveillance, trained staff, and a strict visitor policy.", icon: <Shield className="w-6 h-6" /> },
  { q: "How do you communicate with parents?", a: "We share regular updates, photos, and progress reports through our parent app and WhatsApp groups.", icon: <MessageCircle className="w-6 h-6" /> },
  { q: "Can parents visit the school anytime?", a: "Yes, visits are welcome but scheduled to avoid classroom disruption and maintain safety.", icon: <Calendar className="w-6 h-6" /> },
  { q: "Do you celebrate festivals and special events?", a: "Yes! We celebrate cultural festivals, birthdays, theme days, and events to build social awareness and joy.", icon: <Sparkles className="w-6 h-6" /> },
  { q: "When do admissions open?", a: "Admissions are open year-round, subject to seat availability.", icon: <Calendar className="w-6 h-6" /> },
  { q: "What is your fee structure?", a: "Our fees vary by program; details are shared during your campus visit.", icon: <Heart className="w-6 h-6" /> },
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
                <div className="flex items-center gap-4">
                  <div className="text-[#4764c7]">
                    {faq.icon}
                  </div>
                  <span className="font-bold text-black text-lg sm:text-xl">
                    {faq.q}
                  </span>
                </div>
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
                <div className="px-5 py-4 pl-14 text-black bg-gradient-to-r from-orange-50 to-pink-50 rounded-b-2xl font-medium text-base sm:text-lg leading-relaxed border border-t-0 border-white/50 backdrop-blur-sm">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Beautiful Read More Button */}
        <div className="flex justify-center mt-10">
          <Link to="/faq">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Read More FAQs
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </Link>
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