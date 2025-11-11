import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Nurturing the Whole Child (Holistic Growth)",
    text: "We commit to a full, well-planned program designed to ensure the child’s overall development is met. This holistic focus cultivates essential life skills, critical thinking, and social skills.",
    color: "from-red-400 to-red-600",
  },
  {
    number: "02",
    title: "Joyful Exploration & Discovery",
    text: "Our environment is a joyful and stimulating space where children have the liberty to explore the school and discover new learnings. We support the natural desire in every child to learn by doing and actively exploring the engaging materials.",
    color: "from-pink-400 to-pink-600",
  },
  {
    number: "03",
    title: "Independent Mastery",
    text: "Our goal is to ensure the child masters the skill through consistent practice and play. We prioritize self-reliance by building activities that help children spot and correct their own mistakes, allowing them to work independently without always relying on adults.",
    color: "from-green-400 to-green-600",
  },
  {
    number: "04",
    title: "Child-Centric Learning",
    text: 'We operate on the principle: "We focus on the child, not just the teacher". Teachers act as skilled guides who are well-trained to meet each child\'s specific learning needs. They observe children daily, take notes, and ensure every child receives enough care and attention.',
    color: "from-purple-400 to-purple-600",
  },
  {
    number: "05",
    title: "Confidence and Individuality",
    text: "We celebrate the unique individuality of every child, prioritizing the development of their unique talents and interests. This personalized approach empowers them to reach their full potential with both confidence and kindness.",
    color: "from-orange-400 to-orange-600",
  },
  {
    number: "06",
    title: "Academic Preparedness (Future Readiness)",
    text: "Our education is structured with clear goals to raise children who are academically equipped and socially adaptive for the future. We ensure learning is a means to prepare them for success throughout their lives.",
    color: "from-blue-400 to-blue-600",
  },
];

export default function ValuesAndMotto() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#FFF6F2] to-[#ffe8de] flex flex-col items-center">
      <h2 className="text-[#4764c7] font-extrabold text-5xl sm:text-6xl text-center mb-14">
        Our Values & Motto
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {values.map((item, idx) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 14px 32px rgba(0,0,0,0.18)" }}
            className="relative flex flex-col items-start p-7 rounded-3xl bg-white shadow-lg overflow-hidden transition-all duration-500 border border-gray-100"
          >
            {/* Circular Number Badge */}
            <div
              className={`flex items-center justify-center w-14 h-14 rounded-full mb-5 bg-gradient-to-br ${item.color} text-white font-bold text-xl shadow-lg`}
            >
              {item.number}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-extrabold text-black mb-3">{item.title}</h3>

            {/* Description */}
            <p className="text-black text-base leading-relaxed font-medium">{item.text}</p>

            {/* Gradient Glow on Hover */}
            <motion.div
              className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 bg-gradient-to-br ${item.color} pointer-events-none transition-opacity`}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.2 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}