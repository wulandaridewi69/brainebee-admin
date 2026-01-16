import Hero from "@/components/Hero";
import StatisticSec from "@/components/sections/Statistic";
import WhatWeCreate from "@/components/sections/WhatWeCreate";
import HowItWorks from "@/components/sections/HowItWorks";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";


const homePage = () => {
  return (
    <>
    <Hero/>
      <StatisticSec/>
      <WhatWeCreate/>
      <HowItWorks/>
      <Testimonials/>
            <CTA/>


      
          
    
    </>
  );
}

export default homePage;