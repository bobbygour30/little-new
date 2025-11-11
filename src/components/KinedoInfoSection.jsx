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
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-[70vh] p-8">
      
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl mb-16">
        <h2 className="text-[#4764c7] font-extrabold text-4xl sm:text-5xl text-center mb-8">
          Know More About Kinedo
        </h2>
        {faqs.map((faq, i) => (
          <motion.div key={i} className="mb-4">
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left bg-orange-100 rounded-xl hover:bg-orange-200 transition duration-300"
            >
              <span className="font-bold text-black text-lg sm:text-xl">{faq.q}</span>
              <span className="ml-auto text-2xl font-bold">{activeFAQ === i ? "−" : "+"}</span>
            </button>
            {activeFAQ === i && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="px-6 py-4 text-black bg-orange-50 rounded-b-xl font-medium text-base sm:text-lg leading-relaxed"
              >
                {faq.a}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Circular Photo Section */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <div className="relative w-[380px] h-[190px] md:w-[460px] md:h-[230px] bg-yellow-200 rounded-br-[80px] rounded-tl-[120px] rounded-tr-full rounded-bl-full shadow-2xl overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-500 border-4 border-white">
          <img
            src="https://www.parents.com/thmb/595334Wl0HQnRAxfMv6Fy7bf9ME=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_172261862-2--d36510500ca044e1bd9bb51f798b3141.jpg"
            alt="Children playing"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>
    </div>
  );
}