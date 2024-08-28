"use client";

import { motion } from "framer-motion";
import React from "react";
import { useInView } from "@/hooks/useInView";

const Cards = () => {
  // Custom hook for each card
  const [ref1, isInView1] = useInView();
  const [ref2, isInView2] = useInView();
  const [ref3, isInView3] = useInView();
  const [ref4, isInView4] = useInView();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-8">
      {/* Card 1 */}
      <motion.div
        ref={ref1}
        initial={{ y: 20, opacity: 0 }}
        animate={isInView1 ? { y: 0, opacity: 1 } : {}}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-bold mb-4">Card 1</h3>
          <p className="text-gray-600 mb-4">This is the content of card 1.</p>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
              <img src="/womenprofile.png" alt="Image 1" className="w-full h-full object-cover" />
            </div>
            <p className="ml-4 text-gray-600">Text beside the image.</p>
          </div>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        ref={ref2}
        initial={{ y: 20, opacity: 0 }}
        animate={isInView2 ? { y: 0, opacity: 1 } : {}}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-bold mb-4">Card 2</h3>
          <p className="text-gray-600 mb-4">This is the content of card 2.</p>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
              <img src="/manprofile.png" alt="Image 2" className="w-full h-full object-cover" />
            </div>
            <p className="ml-4 text-gray-600">Text beside the image.</p>
          </div>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        ref={ref3}
        initial={{ y: 20, opacity: 0 }}
        animate={isInView3 ? { y: 0, opacity: 1 } : {}}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-bold mb-4">Card 3</h3>
          <p className="text-gray-600 mb-4">This is the content of card 3.</p>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
              <img src="/womenprofile.png" alt="Image 3" className="w-full h-full object-cover" />
            </div>
            <p className="ml-4 text-gray-600">Text beside the image.</p>
          </div>
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        ref={ref4}
        initial={{ y: 20, opacity: 0 }}
        animate={isInView4 ? { y: 0, opacity: 1 } : {}}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-bold mb-4">Card 4</h3>
          <p className="text-gray-600 mb-4">This is the content of card 4.</p>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
              <img src="/manprofile.png" alt="Image 4" className="w-full h-full object-cover" />
            </div>
            <p className="ml-4 text-gray-600">Text beside the image.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cards;
