import React from "react";
import { motion, useAnimation } from "framer-motion";
const Box5 = () => {
  const control = useAnimation();
  return (
    <div className="box-container">
      <button
        onClick={() => {
          control.start({ x: 1200, transition: { duration: 2 } });
        }}
      >
        Move Right
      </button>
      <button
        onClick={() => {
          control.start({ x: 0, transition: { duration: 2 } });
        }}
      >
        Move Left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "100%",
            transition: { duration: 0.5 },
          });
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({ borderRadius: 0, transition: { duration: 0.5 } });
        }}
      >
        Square
      </button>
      <button
        onClick={() => {
          control.stop();
        }}
      >
        Stop
      </button>
      <motion.div className="box" animate={control}></motion.div>
    </div>
  );
};

export default Box5;
