"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [flapZIndex, setFlapZIndex] = useState(40);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setFlapZIndex(5);
    }, 1200); // Wait for flap to finish opening before dropping z-index
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setFlapZIndex(40);
    }, 1200); // Wait for letter to finish sliding down before raising z-index
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3eaf5] p-4 font-sans overflow-hidden">
      {/* Envelope Container */}
      <div className="relative w-[280px] h-[190px] sm:w-[360px] sm:h-[240px] mt-10 sm:mt-30">

        {/* Back of Envelope */}
        <div className="absolute inset-0 bg-[#e0635c] rounded-md shadow-lg"></div>

        {/* The Letter / Card */}
        <motion.div
          className="absolute left-3 right-3 sm:left-4 sm:right-4 bg-white p-3 sm:p-4 shadow-sm flex flex-col items-center text-center justify-between z-10"
          initial={{ y: "0%" }}
          animate={{
            y: isOpen ? "-50%" : "0%", // Card pops up a bit lower and is responsive
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            delay: isOpen ? 1.2 : 0 // Wait 1.2s for flap to fully open before sliding up
          }}
          style={{
            height: "95%",
            bottom: "2%"
          }}
        >
          <div className="w-full text-left">
            <span className="bg-pink-100 text-pink-800 text-[10px] sm:text-xs px-2 py-1 rounded-sm font-semibold font-serif">
              Dear Friend
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center mt-1 sm:mt-2">
            <p className="text-gray-800 font-medium italic text-sm sm:text-lg leading-relaxed font-serif">
              Cheers to another year of friendship, laughter, <br />
              and unforgettable moments. Happy Birthday! <br />
              May all your dreams come true. 🎂🥳
            </p>

          </div>
          <div className="flex gap-1.5 sm:gap-2 text-pink-500 mb-1 sm:mb-2">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
            <Heart className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
            <Heart className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
          </div>
        </motion.div>

        {/* Front Left Flap */}
        <div
          className="absolute inset-0 z-20 pointer-events-none drop-shadow-sm"
          style={{
            clipPath: "polygon(0 0, 50% 50%, 0 100%)",
            backgroundColor: "#eb726d",
          }}
        ></div>

        {/* Front Right Flap */}
        <div
          className="absolute inset-0 z-20 pointer-events-none drop-shadow-sm"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
            backgroundColor: "#f07c79",
          }}
        ></div>

        {/* Front Bottom Flap */}
        <div
          className="absolute inset-0 z-30 pointer-events-none drop-shadow-md"
          style={{
            clipPath: "polygon(0 100%, 50% 50%, 100% 100%)",
            backgroundColor: "#fc6e68",
          }}
        ></div>

        {/* Top Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full origin-top pointer-events-none"
          initial={{ rotateX: 0 }}
          animate={{
            rotateX: isOpen ? 180 : 0
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            delay: isOpen ? 0 : 1.2
          }}
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 55%)",
            backgroundColor: "#f48c89",
            zIndex: flapZIndex,
          }}
        >
        </motion.div>
      </div>

      {/* Buttons */}
      <div className="mt-20 sm:mt-20 flex gap-3 sm:gap-4 z-50">
        <button
          onClick={handleOpen}
          className={`px-6 py-2 sm:px-8 text-sm sm:text-base rounded-md font-bold transition-colors ${isOpen
            ? "bg-[#e0635c] text-white border-2 border-[#e0635c]"
            : "bg-transparent text-[#e0635c] border-2 border-[#e0635c] hover:bg-[#e0635c] hover:text-white"
            }`}
        >
          OPEN
        </button>
        <button
          onClick={handleClose}
          className={`px-6 py-2 sm:px-8 text-sm sm:text-base rounded-md font-bold transition-colors ${!isOpen
            ? "bg-[#e0635c] text-white border-2 border-[#e0635c]"
            : "bg-transparent text-[#e0635c] border-2 border-[#e0635c] hover:bg-[#e0635c] hover:text-white"
            }`}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
