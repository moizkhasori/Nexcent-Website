import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useGetScreenDiamensions from "../../../../utils.js";
import { NavLink } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5"; 
const NavLinks = [
  { id: 1, link: "Home", path: "/" },
  { id: 2, link: "Services", path: "/services" },
  { id: 3, link: "Feature", path: "/featured" },
  { id: 4, link: "Product", path: "/product" },
  { id: 5, link: "Testimonial", path: "/testimonial" },
];

const Sidebar = ({ onClickFn, isOpened }) => {
  const { width, height } = useGetScreenDiamensions();

  const sidebarVariants = {
    closed: {
      top: "-100%",
      transition: {
        duration: 0.3,
        ease: "linear",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    opened: {
      top: "0%",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        ease: "linear",
        staggerChildren: 0.1,
      },
    },
  };

  const outerFixedDivVariant = {
    closed: {
      top: "-100%",
      display: "none",
      transition: {
        when: "afterChidlren",
      },
    },
    opened: {
      top: "0%",
      display:"block",
      transition: {
        when: "beforeChildren",
      },
    },
  };

  return (
    <motion.div
      style={{ width, height: "100vh" }}
      className={`fixed top-0 overflow-hidden `}
      animate={isOpened ? "opened" : "closed"}
      variants={outerFixedDivVariant}
    >
      <motion.div
        initial={false}
        variants={sidebarVariants}
        className="main-div absolute bg-neutral w-full h-full flex justify-center items-center flex-col text-5xl gap-8 z-10"
      >
        {NavLinks.map((navlink) => (
          <IndividualNavLink
            onClickFn={onClickFn}
            key={navlink.id}
            text={navlink.link}
            path={navlink.path}
          />
        ))}

        <CloseButton onClickFn={onClickFn} isOpened={isOpened} />
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;

const IndividualNavLink = ({ text, path, onClickFn }) => {
  const linkVariants = {
    opened: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 10,
      opacity: 0,
    },
  };

  return (
    <motion.span
      onClick={onClickFn}
      whileHover={{
        scale: 1.1,
        transition: {
          ease: "easeOut",
          duration: 0.125,
        },
      }}
      whileTap={{ scale: 0.9 }}
      variants={linkVariants}
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? `text-primary` : `text-black`
        }
      >
        {text}
      </NavLink>
    </motion.span>
  );
};

const CloseButton = ({ onClickFn, isOpened }) => {
  const CloseButtonVariants = {
    closed: {
      opacity: 0,
      transition: {
        when: "afterChidlren",
      },
    },
    opened: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
      },
    },
  };

  return (
    <motion.div
      onClick={onClickFn}
      whileHover={{ scale: 1.1, transition: { ease: "easeOut" } }}
      whileTap={{ scale: 0.9, transition: { ease: "easeOut" } }}
      animate={isOpened ? "opened" : "closed"}
      variants={CloseButtonVariants}
      className="cross-icon-div w-24 h-24 bg-primary absolute right-10 top-10 flex justify-center items-center rounded-full"
    >
      <IoCloseOutline />
    </motion.div>
  );
};
