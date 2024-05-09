import React from "react";
import { NavLink } from "react-router-dom";

const Fourofour = () => {
  return (
    <div className="w-full h-calc bg-neutral flex flex-col gap-6 justify-center items-center">
      <h1 className="font-sans text-4xl text-grayc font-semibold">
        404 Not Found
      </h1>
      <p className="font-sans text-base text-grayc font-regular">
        Return Back to <NavLink className={"text-primary font-semibold "} to={'/'}>homepage</NavLink>
      </p>
    </div>
  );
};

export default Fourofour;
