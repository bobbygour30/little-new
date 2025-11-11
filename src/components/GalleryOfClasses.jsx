import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "https://www.piggyride.com/blog/wp-content/uploads/2020/09/Untitled-design-2020-09-30T173432.196.png",
    title: "Creative Art Class",
    borderColor: "border-pink-400",
  },
  {
    src: "https://t4.ftcdn.net/jpg/07/82/28/13/360_F_782281321_XUZmEpMTQmypzuD9gPva8fsp09Sc9uD7.jpg",
    title: "Music and Rhythm",
    borderColor: "border-yellow-400",
  },
  {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    title: "Science Experiments",
    borderColor: "border-green-400",
  },
  {
    src: "https://media.istockphoto.com/id/1458807880/photo/learning-through-play.jpg?s=612x612&w=0&k=20&c=W6mHfbgZXfGF4UbYn3FqP4BN_347dLD5Q9RvB6Yx1SQ=",
    title: "Play and Learn",
    borderColor: "border-blue-400",
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7T6oCU6PStH5QgPIuxBXZyYa_iaWNPJnGzklTvHYu8lNIyatUwEwpcSnAfyQBN2Brk2sdSwKD2-ev6i0CctPpCnidWH0OVzfcqYJUXteFxicOmo6kj1VZuR0wPngYtw6rHHR3Gt33W6fk/s1600/DSC03484.JPG",
    title: "Team Activities",
    borderColor: "border-purple-400",
  },
  {
    src: "https://www.shutterstock.com/image-photo/male-teacher-reading-book-students-600nw-2491116327.jpg",
    title: "Story Time",
    borderColor: "border-orange-400",
  },
];

export default function GalleryOfClasses() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 2) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 2 + images.length) % images.length);

  const visibleImages = [
    images[index],
    images[(index + 1) % images.length],
  ];

  return (
    <section className="py-20 bg-[#FFFDF7] text-center">
      <h2 className="text-[#4764c7] font-extrabold text-5xl sm:text-6xl mb-6">
        Gallery of Our Classes
      </h2>
      <p className="text-xl sm:text-2xl text-black mb-12 max-w-3xl mx-auto font-semibold">
        Explore our colorful classrooms where learning meets creativity, fun, and imagination!
      </p>

      <div className="flex justify-center gap-10 flex-wrap md:flex-nowrap mb-12">
        <AnimatePresence mode="wait">
          {visibleImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`border-4 border-dashed ${img.borderColor} rounded-2xl p-4 bg-white shadow-lg w-[340px] sm:w-[400px]`}
            >
              <motion.img
                src={img.src}
                alt={img.title}
                className="rounded-xl w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-1"
              />
              <h3 className="mt-5 text-xl sm:text-2xl font-bold text-black">
                {img.title}
              </h3>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center space-x-12">
        <button
          onClick={prevSlide}
          className="relative w-16 h-16 rounded-full flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-yellow-200 rounded-full transform rotate-6 group-hover:rotate-12 transition duration-300 border-4 border-dashed border-yellow-400"></div>
          <div className="absolute inset-0 bg-pink-200 rounded-full transform -rotate-6 group-hover:-rotate-12 transition duration-300 border-4 border-dashed border-pink-400 opacity-60"></div>
          <svg
            width="30"
            height="30"
            className="text-[#4764c7] relative z-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="relative w-16 h-16 rounded-full flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-green-200 rounded-full transform -rotate-6 group-hover:-rotate-12 transition duration-300 border-4 border-dashed border-green-400"></div>
          <div className="absolute inset-0 bg-blue-200 rounded-full transform rotate-6 group-hover:rotate-12 transition duration-300 border-4 border-dashed border-blue-400 opacity-60"></div>
          <svg
            width="30"
            height="30"
            className="text-[#4764c7] relative z-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-10 space-x-3">
        {Array.from({ length: Math.ceil(images.length / 2) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i * 2)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              Math.floor(index / 2) === i
                ? "bg-[#4764c7] scale-125"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}