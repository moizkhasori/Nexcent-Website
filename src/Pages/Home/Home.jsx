import React, { useEffect } from 'react';
import Hero from './Sections/Hero';
import OurClients from './Sections/OurClients';
import ManageCommunity from './Sections/ManageCommunity';
import CommonSection from './Sections/CommonSection';
import HelpingLocal from './Sections/HelpingLocal';
import Footer from './Sections/Footer';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <OurClients />
      <ManageCommunity />
      <CommonSection variant={"v1"}  />
      <HelpingLocal />
      <CommonSection variant={"v2"}  />
      <Footer />
    </div>
  )
}

export default Home