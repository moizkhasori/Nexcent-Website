import React from "react";
import Button from "../../Common Components/Button";
import {motion} from "framer-motion"

const leftVariants = {
  
}

const Hero = () => {
  return (
    <section className="w-full min-h-[70vh] bg-neutral">
      <div className="w-[80%] min-h-[70vh] py-16 mx-auto flex md:items-center flex-col-reverse gap-12 md:flex-row item-center relative z-10">

        <motion.div
        initial={{x:"-100%"}}
        whileInView={{x:0 ,transition:{duration:0.4, ease:"linear", staggerChildren:0.3}}}
        viewport={{once:true}}
        className="content-div md:w-3/5 h-full  flex flex-col item-start justify-center gap-10">

          <h1 className="font-sans text-6xl font-semibold leading-[120%] text-center md:text-left text-grayc">
            Lessons and insights <br />{" "}
            <span className="text-primary">from 8 years</span>{" "}
          </h1>

          <p className="font-sans text-lg font-regular md:w-2/3 text-gray-600 leading-[160%] text-center md:text-left">
            What's the best place to expand your photography business: Website
            or Social media? Let <b>Nexcent</b> help you make the right choice.
          </p>

          <div className=" flex justify-center md:justify-start">
            <Button text={"Register"} type={"medium"} />
          </div>

        </motion.div>

        <motion.div
        initial={{x:"100%"}}
        whileInView={{x:0 ,transition:{duration:0.4, ease:"linear", staggerChildren:0.3}}}
        viewport={{once:true}}
        className="img-div md:w-2/5 h-full flex justify-center items-center">
          <img src="HeroImage.png" alt="" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
