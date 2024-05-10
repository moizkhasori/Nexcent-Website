import React from "react";
import { IoIosSend } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import {motion} from "framer-motion"

const footerLinks = [
  {
    text: "Company",
    linksArr: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"],
  },
  {
    text: "Services",
    linksArr: [
      "Help center",
      "Terms of service",
      "Legal",
      "Privacy Policy",
      "Status",
    ],
  },
];

const iconsArray = [
  <FaInstagram size={20} color="white" />,
  <FaFacebookF size={20} color="white" />,
  <FaXTwitter size={20} color="white" />,
  <FaYoutube size={20} color="white" />,
];

const Footer = () => {
  return (
    <div className="w-full min-h-[50vh] bg-gray-800 flex justify-center items-center py-10 relative z-10">
      <div className="w-[80%] flex flex-col lg:flex-row gap-20 sm:gap-10 lg:gap-0">
        <div className="flex-[3] flex flex-col  justify-around items-center lg:items-start gap-6 lg:gap-10">
          <div className="flex items-center gap-4">
            <img src="nexcant.png" alt="" />
            <h3 className="font-sans text-4xl font-bold text-neutral">
              Nexcent
            </h3>
          </div>
          <div>
            <p className="text-center lg:text-start text-gray-400">
              Copyright © 2020 Nexcent ltd.
            </p>
            <p className="text-center lg:text-start text-gray-400">
              All rights reserved
            </p>
          </div>
          <div className="flex gap-8 items-center justify-center">
            {iconsArray.map((item,i) => (
              <IndividualIcon key={i} icon={item} />
            ))}
          </div>
        </div>

        {footerLinks.map((item, i) => (
          <LinksDiv key={i} text={item.text} linksArr={item.linksArr} />
        ))}

        <div className="flex-[2] flex flex-col items-center lg:items-start gap-6 lg:gap-10">
          <h3 className="font-sans text-3xl font-semibold text-white">
            Stay up to date
          </h3>
          <div className="flex gap-4 w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="placeholder-gray-400 text-neutral w-full px-6 py-4 rounded-md bg-gray-700 focus:outline-none"
            />
            <motion.button
            style={{backgroundColor:"#374151"}}
            whileHover={{backgroundColor:"#4CAF4F", scale:1.02}}
            whileTap={{scale:0.98}}
            className="px-6 py-4 rounded-md inline-block text-white">
              <IoIosSend size={20} />
            </motion.button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const LinksDiv = ({ text, linksArr }) => {
  return (
    <div className="flex-[1] flex flex-col justify-around items-center lg:items-start gap-4 lg:gap-10">
      <h3 className="font-sans text-3xl font-semibold text-neutral text-center lg:text-left">
        {text}
      </h3>
      <div className="flex flex-col items-center lg:items-start gap-1 lg:gap-2">
        {linksArr.map((item, i) => (
          <a
            className="text-base text-gray-400 hover:text-white transition-colors ease-linear duration-300"
            key={i}
            href="#feature-yet-to-implement"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

const IndividualIcon = ({ icon }) => {
  return (
    <motion.div
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        className="circle w-12 h-12 rounded-full bg-gray-700 flex justify-center items-center cursor-pointer"
    >
      {icon}
    </motion.div>
  );
};
