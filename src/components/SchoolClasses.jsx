import { motion } from "framer-motion";

const classes = [
  {
    title: "Art & Color Management",
    teacher: "Joly Smith",
    teacherImg: "https://randomuser.me/api/portraits/women/44.jpg",
    price: "$12.99",
    classSize: "20 - 25",
    time: "9:30 AM - 11:30 AM",
    age: "5 - 7",
    img: "https://www.shutterstock.com/image-photo/little-girl-playing-wooden-shape-600nw-2222993165.jpg",
  },
  {
    title: "Music & Performance",
    teacher: "Mrs. Labonno",
    teacherImg: "https://randomuser.me/api/portraits/women/68.jpg",
    price: "$14.50",
    classSize: "18 - 22",
    time: "10:00 AM - 12:00 PM",
    age: "6 - 8",
    img: "https://media.istockphoto.com/id/1010538272/photo/preschool-child.jpg?s=612x612&w=0&k=20&c=dt6y5iWBz0SI15ZnPLapJ4VGWRJKNTQT4bwtbETpg2o=",
  },
  {
    title: "History & Culture",
    teacher: "Robert Smith",
    teacherImg: "https://randomuser.me/api/portraits/men/55.jpg",
    price: "$13.25",
    classSize: "22 - 28",
    time: "11:30 AM - 1:30 PM",
    age: "7 - 9",
    img: "https://media.istockphoto.com/id/538358346/photo/pupils-and-teacher-on-school-field-trip-to-museum.jpg?s=612x612&w=0&k=20&c=_Qf78xQ8Ce_Oyb9_CFJt5NEXIvl3kvhz1CILxSvOG1g=",
  },
];

export default function SchoolClasses() {
  return (
    <section className="min-h-screen bg-linear-to-b from-[#FFF7EC] to-white flex flex-col items-center py-20 px-5">
      {/* Header */}
      <div className="mb-12 text-center">
        <motion.h4
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg md:text-xl text-[#9F51B6] font-semibold mb-3 uppercase tracking-wide"
        >
          Our School Classes
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-[#223467]"
        >
          Most Popular School Programs
        </motion.h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {classes.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, type: "spring", stiffness: 70 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden group">
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-sm font-semibold bg-[#9F51B6]/90 px-3 py-1 rounded-full inline-block">
                  {item.age} yrs
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-[#223467] mb-3 hover:text-[#9F51B6] transition-colors">
                {item.title}
              </h3>

              <div className="flex items-center mb-4">
                <img
                  src={item.teacherImg}
                  alt={item.teacher}
                  className="w-9 h-9 rounded-full mr-3 border-2 border-[#9F51B6]"
                />
                <div>
                  <p className="text-sm font-semibold text-[#223467]">
                    {item.teacher}
                  </p>
                  <p className="text-xs text-gray-500">Instructor</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-[#f76819] font-bold text-base">
                    {item.price}
                  </p>
                  <p className="text-xs text-gray-400">Per Month</p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 my-3"></div>

              {/* Class Info — FIXED layout */}
              <div className="flex items-center justify-between text-center text-sm gap-3 flex-wrap">
                <div className="flex-1 min-w-20">
                  <p className="text-[#72b23f] font-bold whitespace-nowrap">
                    {item.classSize}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Class Size</p>
                </div>

                <div className="w-px h-8 bg-gray-200 hidden md:block"></div>

                <div className="flex-1 min-w-[110px]">
                  <p className="text-[#9F51B6] font-bold whitespace-nowrap text-[13px]">
                    {item.time}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Class Time</p>
                </div>

                <div className="w-px h-8 bg-gray-200 hidden md:block"></div>

                <div className="flex-1 min-w-20">
                  <p className="text-[#f76819] font-bold whitespace-nowrap">
                    {item.age}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Age Group</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.07 }}
        className="mt-14 px-10 py-4 bg-[#9F51B6] hover:bg-[#823E99] text-white font-bold text-lg rounded-full shadow-md transition-all duration-300"
      >
        Get Started Now
      </motion.button>
    </section>
  );
}
