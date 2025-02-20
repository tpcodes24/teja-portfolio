"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLightbulb, FaCode, FaUsers } from "react-icons/fa"; // Import icons

const photos = {
  image: "/assets/HEADSHOT.png",
};

// Icon animation effect
const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Photo = () => {
  return (
    <div className="w-full h-full flex justify-center relative">
      {/* Innovation Icon (Top-Right) */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={iconVariants}
        className="absolute top-4 right-8 border-2 border-accent text-accent p-3 rounded-full shadow-lg flex items-center justify-center w-12 h-12"
      >
        <FaLightbulb className="text-2xl" />
      </motion.div>

      {/* Tech Icon (Left-Middle) */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={iconVariants}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 border-2 border-accent text-accent p-3 rounded-full shadow-lg flex items-center justify-center w-12 h-12"
      >
        <FaCode className="text-2xl" />
      </motion.div>

      {/* Community Icon (Bottom-Right) */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={iconVariants}
        className="absolute bottom-4 right-8 border-2 border-accent text-accent p-3 rounded-full shadow-lg flex items-center justify-center w-12 h-12"
      >
        <FaUsers className="text-2xl" />
      </motion.div>

      {/* Profile Picture with Zoom-in Effect */}
      <motion.div
        initial={{ scale: 0.8 }} // Starts smaller
        animate={{ scale: 1 }} // Smoothly zooms in
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] 
                   border-4 border-accent rounded-full shadow-lg p-1"
      >
        <Image
          src={photos.image}
          priority
          quality={100}
          fill
          alt="Profile Picture"
          className="object-contain rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default Photo;
