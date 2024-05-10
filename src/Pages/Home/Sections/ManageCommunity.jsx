import React from "react";
import {motion} from "framer-motion"

const CommunityCards = [
  {
    id: 1,
    title: "Membership Organisations",
    desc: "Our membership management software provides full automation of membership renewals and payments",
    url: "people.png",
  },
  {
    id: 2,
    title: "National Associations",
    desc: "Our membership management software provides full automation of membership renewals and payments",
    url: "building.png",
  },
  {
    id: 3,
    title: "Clubs And Groups",
    desc: "Our membership management software provides full automation of membership renewals and payments",
    url: "hand.png",
  },
];

const ManageCommunity = () => {
  return (
    <div className="w-full min-h-[60vh] flex justify-center items-center py-10 ">
      <div className="w-[80%] h-full mx-auto flex flex-col justify-center gap-10 lg:gap-16">
        <div className="text-div flex flex-col gap-5 lg:gap-8">
          <h3 className="font-sans text-3xl sm:text-5xl font-semibold text-center lg:w-2/3 xl:w-1/2 mx-auto text-grayc">
            Manage your entire community in a single system
          </h3>
          <p className="font-sans text-base md:text-xl font-regular text-center text-gray-500">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-10">
          {CommunityCards.map((item) => (
            <CommunityCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              imgurl={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageCommunity;

const CommunityCard = ({ title, desc, imgurl }) => {
  return (
    <motion.div
    style={{backgroundColor:"#fff", boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}
    whileHover={{backgroundColor:"#F5F7FA", scale:1.02}}
    className="flex flex-col justify-center items-center gap-8 px-8 py-12 sm:px-32 sm:py-14 2xl:py-20 rounded-md relative z-10">


      <div className="imgdiv flex justify-center relative">
        <div className="bg-primaryt5 w-full h-full absolute top-2 left-6 rounded-md rounded-br-3xl"></div>
        <img
          className="w-full h-full object-cover relative"
          src={imgurl}
          alt=""
        />
      </div>
      <h2 className="font-sans font-bold text-3xl text-center text-grayc">{title}</h2>
      <p className="font-sans font-regular text-base sm:text-lg text-center text-gray-500">
        {desc}
      </p>
    </motion.div>
  );
};
