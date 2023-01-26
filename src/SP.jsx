import React from "react";
import { motion } from "framer-motion";

const SP = () => {
  return (
    <>
      <motion.div
        className="flex mx-auto items-center  justify-center bg-gray-400 max-w-md h-40"
        initial={{ x: -200, opacity: 0.1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        THIS IS A DIV!
      </motion.div>

      <motion.div
        initial={{ scale: 0.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-orange-400 max-w-md mx-auto mt-20 items-center flex justify-center h-40"
      >
        THIS IS A DIV!
      </motion.div>
      <motion.div
        initial={{ scale: 0.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-orange-400 max-w-md mx-auto mt-20 items-center flex justify-center h-40"
      >
        THIS IS A DIV!
      </motion.div>
    </>
  );
};

export default SP;
