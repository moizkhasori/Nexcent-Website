import React from "react";
import Button from "../../Common Components/Button";

const var1 = {
  title: "The unseen of spending three years at Pixelgrade",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
  buttontxt: "Learn More",
  imgurl: "cs1.png",
};

const var2 = {
  title: "How to design your site footer like we did",
  desc: "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.",
  buttontxt: "Learn More",
  imgurl: "cs2.png",
};

const CommonSection = ({ variant }) => {
  const CSObj = variant === "v1" ? { ...var1 } : { ...var2 };

  return (
    <section className="w-full min-h-[80vh] relative z-10">
      <div className={`w-[80%] min-h-[80vh] py-16 mx-auto flex md:items-center flex-col gap-24 md:gap-12  item-center ${variant === "v1" ? "md:flex-row" : "md:flex-row-reverse"}`}>
        <div className="img-div md:w-2/5 h-full flex justify-center items-center ">
          <img src={CSObj.imgurl} alt="" />
        </div>

        <div className="content-div md:w-3/5 h-full  flex flex-col item-start justify-center gap-10 md:pl-10">
          <h1 className="font-sans text-6xl font-semibold leading-[120%] text-center md:text-left text-grayc">
            {CSObj.title}
          </h1>

          <p className="font-sans text-lg font-regular  text-gray-600 leading-[160%] text-center md:text-left">
            {CSObj.desc}
          </p>

          <div className=" flex justify-center md:justify-start">
            <Button text={CSObj.buttontxt} type={"medium"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonSection;
