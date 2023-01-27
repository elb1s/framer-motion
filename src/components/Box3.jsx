import React from "react";
import { motion } from "framer-motion";

const Box3 = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { delay: 0.5, when: "beforeChildren", staggerChildren: 0.3 },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="box-container">
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        className="box"
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li variants={listVariant} className="boxItem">
              {" "}
            </motion.li>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Box3;
