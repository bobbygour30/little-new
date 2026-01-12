import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const API_URL = import.meta.env.VITE_API_URL;

// Color palette matching the style of your first component
const borderColors = [
  "border-pink-400",
  "border-yellow-400",
  "border-green-400",
  "border-blue-400",
  "border-purple-400",
  "border-orange-400",
  "border-red-400",
  "border-teal-400",
  "border-indigo-400",
];

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/gallery`)
      .then((res) => setGalleryImages(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* HEADER */}
      <section className="py-24 bg-gradient-to-b from-[#FFF6F2] to-[#FFE8DE] text-center mt-20">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-[#4764c7] font-extrabold text-4xl sm:text-5xl mb-4"
        >
          Our Gallery
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-black max-w-3xl mx-auto text-lg font-semibold px-6"
        >
          A glimpse into our joyful classrooms, creative activities, and happy
          learning moments that shape young minds every day.
        </motion.p>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryImages.map((img, index) => {
            // Cycle through colors
            const borderColor = borderColors[index % borderColors.length];

            return (
              <motion.div
                key={img._id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.06 }}
                onClick={() => setActiveImage(img)}
                className={`group relative cursor-pointer rounded-2xl overflow-hidden 
                  border-4 border-dashed ${borderColor} 
                  p-4 bg-white shadow-lg hover:shadow-2xl 
                  transition-all duration-400`}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <motion.img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 
                      group-hover:scale-105 group-hover:rotate-[1.5deg]"
                  />

                  {/* Centered title overlay - always visible, semi-transparent bg */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 
                    group-hover:bg-black/35 transition duration-400">
                    <h3
                      className="text-white text-xl sm:text-2xl font-bold text-center 
                      px-5 py-3 bg-black/40 rounded-xl backdrop-blur-[2px]
                      transform group-hover:scale-105 transition duration-400"
                    >
                      {img.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* IMAGE MODAL - kept mostly the same, just minor visual tweaks */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`relative max-w-5xl w-full bg-white rounded-3xl shadow-2xl 
                border-4 border-dashed ${borderColors[Math.floor(Math.random() * borderColors.length)]}`}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 p-3 rounded-full hover:bg-gray-100 transition"
              >
                <X className="w-7 h-7 text-[#4764c7]" />
              </button>

              {/* IMAGE */}
              <div className="flex items-center justify-center bg-gradient-to-b from-gray-950 to-black max-h-[82vh] rounded-t-3xl">
                <img
                  src={activeImage.url}
                  alt={activeImage.title}
                  className="max-h-[82vh] w-auto object-contain"
                />
              </div>

              {/* TITLE */}
              <div className="p-6 text-center bg-gradient-to-r from-[#4764c7]/5 to-[#4764c7]/10 rounded-b-3xl">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#4764c7]">
                  {activeImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}