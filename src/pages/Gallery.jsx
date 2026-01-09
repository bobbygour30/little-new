import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const API_URL = import.meta.env.VITE_API_URL;


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
        <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img._id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: index * 0.08 }}
              onClick={() => setActiveImage(img)}
              className="group relative cursor-pointer rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <motion.img
                src={img.url}
                alt={img.title}
                className="w-full h-72 object-fill transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 flex items-end">
                <p className="text-white text-lg font-bold p-5 translate-y-6 group-hover:translate-y-0 transition duration-500">
                  {img.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative max-w-6xl w-full bg-white rounded-3xl shadow-2xl"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full hover:bg-white transition"
              >
                <X className="w-6 h-6 text-black" />
              </button>

              {/* IMAGE */}
              <div className="flex items-center justify-center bg-black max-h-[85vh]">
                <img
                  src={activeImage.url}
                  alt={activeImage.title}
                  className="max-h-[85vh] w-auto object-contain"
                />
              </div>

              {/* TITLE */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-extrabold text-[#4764c7]">
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
