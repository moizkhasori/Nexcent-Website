import React from "react";
import "./ourclients.css";

const OurClients = () => {
  return (
    <div className="w-full md:h-[50vh] flex justify-center items-center py-10 md:py-0 relative z-10">
      <div className="w-[80%] h-full mx-auto flex flex-col justify-center gap-10 md:gap-20">
        <div className="text-div flex flex-col gap-5">
            <h3 className="font-sans text-3xl md:text-5xl font-semibold text-center text-grayc">
            Our Clients
            </h3>
            <p className="font-sans text-base md:text-xl font-regular text-center text-gray-500">
            We have been working with some Fortune 500+ clients
            </p>
        </div>
        <MovingAnimationDiv />
      </div>
    </div>
  );
};

export default OurClients;


const MovingAnimationDiv = () => {
  return (
    <div className="moving-div relative">

        <div className="left-overlay absolute z-10 w-1/2 left-0 h-full bg-gradient-to-r from-white to-transparent"></div>
        <div className="right-overlay absolute z-10 w-1/2 right-0 h-full bg-gradient-to-l from-white to-transparent"></div>

      {[1, 2, 3].map((i) => (
        <div className="move">
          <img src="1.png" alt="" />
          <img src="2.png" alt="" />
          <img src="3.png" alt="" />
          <img src="4.png" alt="" />
          <img src="5.png" alt="" />
          <img src="6.png" alt="" />
        </div>
      ))}
    </div>
  );
};
