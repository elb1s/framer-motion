import React from "react";
import { motion } from "framer-motion";
export default function Box2() {
  return (
    <div className="box-container">
      <motion.div
        initial={{ x: 0, opacity: 0.2 }}
        animate={{ x: 1400, opacity: 1, rotate: 360 }}
        transition={{ type: "spring", stiffness: 30 }}
        drag
        className="box"
      ></motion.div>
    </div>
  );
}
