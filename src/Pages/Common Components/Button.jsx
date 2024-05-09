import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, size = "medium" }) => {
  return size === "small" ? (
    <SmallButton text={text} />
  ) : (
    <LargeButton text={text} />
  );
};

export default Button;

const SmallButton = ({ text }) => {
  return (
    <motion.button
      initial={false}
      whileHover={{scale:1.02}}
      whileTap={{scale:0.98}}
      style={{ padding: "1rem 1.5rem", backgroundColor: "#4CAF4F" }}
      className={" rounded-lg text-white font-sans font-medium text-base"}
    >
      {text}
    </motion.button>
  );
};

const LargeButton = ({ text }) => {
  return (
    <motion.button
      initial={false}
      whileHover={{scale:1.02}}
      whileTap={{scale:0.98}}
      style={{ padding: "1.5rem 4rem", backgroundColor: "#4CAF4F" }}
      className={"rounded-lg text-white font-sans font-medium text-xl"}
    >
      {text}
    </motion.button>
  );
};
