import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

const borderColors = [
  "border-pink-400",
  "border-yellow-400",
  "border-green-400",
  "border-blue-400",
  "border-purple-400",
  "border-orange-400",
];

/* 🌈 Skeleton Loader */
const SkeletonCard = ({ borderColor }) => (
  <div
    className={`border-4 border-dashed ${borderColor} rounded-2xl p-4 bg-white shadow-lg w-[340px] sm:w-[400px] animate-pulse`}
  >
    <div className="rounded-xl w-full h-[220px] sm:h-[260px] bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"></div>
    <div className="h-6 w-3/4 mx-auto mt-6 bg-gray-200 rounded"></div>
  </div>
);

export default function GalleryOfClasses() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/gallery`)
      .then((res) => {
        setImages(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const nextSlide = () =>
    setIndex((prev) => (prev + 2) % images.length);

  const prevSlide = () =>
    setIndex((prev) => (prev - 2 + images.length) % images.length);

  const visibleImages = images.length
    ? [images[index], images[(index + 1) % images.length]]
    : [];

  return (
    <section className="py-20 bg-[#FFFDF7] text-center">
      <h2 className="text-[#4764c7] font-extrabold text-5xl sm:text-6xl mb-6">
        Gallery of Our Classes
      </h2>

      <p className="text-xl sm:text-2xl text-black mb-12 max-w-3xl mx-auto font-semibold">
        Explore our colorful classrooms where learning meets creativity, fun,
        and imagination!
      </p>

      {/* SLIDER */}
      <div className="flex justify-center gap-10 flex-wrap md:flex-nowrap mb-12">
        <AnimatePresence mode="wait">
          {loading &&
            [0, 1].map((i) => (
              <SkeletonCard
                key={i}
                borderColor={borderColors[i % borderColors.length]}
              />
            ))}

          {!loading &&
            visibleImages.map((img, i) => {
              const borderColor =
                borderColors[(index + i) % borderColors.length];

              return (
                <motion.div
                  key={img._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className={`border-4 border-dashed ${borderColor} rounded-2xl p-1 bg-white shadow-lg w-[340px] sm:w-[400px]`}
                >
                  <motion.img
                    src={img.url}
                    alt={img.title}
                    loading="lazy"
                    decoding="async"
                    className="rounded-xl w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-300 hover:scale-105 hover:rotate-1"
                  />

                  <h3 className="mt-1 text-xl sm:text-2xl font-bold text-black">
                    {img.title}
                  </h3>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>

      {/* CONTROLS */}
      {!loading && images.length > 2 && (
        <>
          <div className="flex items-center justify-center space-x-12">
            <button
              onClick={prevSlide}
              className="relative w-16 h-16 rounded-full flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-yellow-200 rounded-full rotate-6 group-hover:rotate-12 transition border-4 border-dashed border-yellow-400"></div>
              <div className="absolute inset-0 bg-pink-200 rounded-full -rotate-6 group-hover:-rotate-12 transition border-4 border-dashed border-pink-400 opacity-60"></div>
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
              <div className="absolute inset-0 bg-green-200 rounded-full -rotate-6 group-hover:-rotate-12 transition border-4 border-dashed border-green-400"></div>
              <div className="absolute inset-0 bg-blue-200 rounded-full rotate-6 group-hover:rotate-12 transition border-4 border-dashed border-blue-400 opacity-60"></div>
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

          {/* DOTS */}
          <div className="flex justify-center mt-10 space-x-3">
            {Array.from({ length: Math.ceil(images.length / 2) }).map(
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i * 2)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    Math.floor(index / 2) === i
                      ? "bg-[#4764c7] scale-125"
                      : "bg-gray-300"
                  }`}
                />
              )
            )}
          </div>
        </>
      )}
    </section>
  );
}
