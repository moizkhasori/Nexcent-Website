import { useEffect, useState } from "react";
import NavCenter from "./Components/NavCenter";
import Sidebar from "./Components/Sidebar";
import useGetScreenDiamensions from "../../../utils";
import { IoMenu } from "react-icons/io5";

import { motion } from "framer-motion";
import Button from "../Common Components/Button";

const Navbar = () => {
  const { width, height } = useGetScreenDiamensions();
  const [isSideBarOpened, setIsSideBarOpened] = useState(false)

  const handleCloseSideBar = () => {
    setIsSideBarOpened(false)
    alert("close")
  }

  const handleOpenSideBar = () => {
    setIsSideBarOpened(true)
    alert("open")
  }

  return (
    <div className="bg-neutral relative z-40">
      <nav className={`flex items-center justify-between w-[90%] mx-auto h-[100px]`}>
        <NavLogo />
        <NavCenter />
        <NavButtons />
        <NavHamBurger onClickFn={handleOpenSideBar} />
      </nav>

      {(width <= 1024) && <Sidebar onClickFn={handleCloseSideBar} isOpened={isSideBarOpened} />}
    </div>
  );
};

export default Navbar;

const NavLogo = () => {
  return (
    <div className="flex items-center gap-4">
      <img src="nexcant.png" alt="" />
      <h3 className="font-sans text-3xl font-bold">Nexcent</h3>
    </div>
  );
};

const NavButtons = () => {
  return (
    <div className="hidden lg:flex gap-6 items-center">
      <motion.button whileHover={{scale:1.08}} whileTap={{scale:0.98}} className="px-6 py-4 rounded-lg text-primary font-sans font-medium">
        Login
      </motion.button>
      <Button text="Sign up" size="small" />
    </div>
  );
};

const NavHamBurger = ({onClickFn}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { ease: "easeOut" } }}
      whileTap={{ scale: 0.9, transition: { ease: "easeOut" } }}
      className="block lg:hidden relative z-40"
      onClick={onClickFn}
    >
      <IoMenu size={28} />
    </motion.div>
  );
};
