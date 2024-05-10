import React from 'react'

const helpingLocalData = [
  {
    number1: "2,245,341",
    number2: "46,328",
    desc1: "Members",
    desc2: "Clubs",
    img1: "h1.png",
    img2: "h2.png"
  },
  {
    number1: "828,867",
    number2: "1,926,436",
    desc1: "Event Bookings",
    desc2: "Payments",
    img1: "h3.png",
    img2: "h4.png"
  }

]

const HelpingLocal = () => {
  return (
    <div className='w-full min-h-[50vh]  flex justify-center items-center bg-neutral py-10 md:py-20 relative z-10'>
        <div className='w-[80%] h-full  mx-auto flex items-center flex-col lg:flex-row gap-8 lg:gap-0'>

            <div className="left 0 h-full w-full flex flex-col justify-center gap-4 ">
                <h1 className='font-sans text-4xl md:text-6xl font-semibold leading-[120%] text-grayc text-center lg:text-left'>Helping a local business reinvent itself</h1>
                <p className='"font-sans text-base md:text-lg font-regular  text-gray-600 leading-[160%] text-center lg:text-left'>We reached here with our hard work and dedication</p>
            </div>

            <div className="right h-full w-full flex flex-col lg:flex-row gap-8 lg:gap-0 justify-around items-center ">

             {helpingLocalData.map((item,i) => (
              <SingleColumn key={i} number1={item.number1} number2={item.number2} desc1={item.desc1} desc2={item.desc2} img1={item.img1} img2={item.img2}/>
             ))}
              
            </div>

        </div>
    </div>
  )
}

export default HelpingLocal


const IndividualTag = ({number, desc, imgurl}) => {
  return(
    <div className='flex items-center gap-6'>
      <div className="imgdiv">
        <img src={imgurl} alt="" />
      </div>
      <div className="text-div">
        <h3 className='font-sans text-3xl font-bold leading-[120%] text-grayc'>{number}</h3>
        <p className='font-sans text-lg font-regular text-gray-500'>{desc}</p>
      </div>
    </div>
  )
}

const SingleColumn = ({number1,number2, desc1, desc2, img1, img2}) => {
  return (
    <div className="flex flex-col gap-8 lg:gap-16">
      <IndividualTag number={number1} desc={desc1} imgurl={img1}/>
      <IndividualTag number={number2} desc={desc2} imgurl={img2} />
    </div>
  );
};