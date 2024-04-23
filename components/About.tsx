/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";

import { urlFor } from '../sanity';


const About=() =>{
  return (
    <motion.div
    initial={{ opacity:0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
    className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className='absolute top-7 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
        </h3>

        <motion.img
        initial={{
          x:-200,
          opacity:0,
        }}
        transition={{
          duration:1.2,
        }}
        whileInView={{ opacity:1, x: 0}}
        // viewport={{ once:true}}
        src="https://cdn.sanity.io/images/rh8hx4sn/production/f2570bec60241acd57e3ffeb241a08a68765fa27-561x642.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] "
        />
 
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">Here is a{" "} 
           <span className="underline decoration-[#03abfff7] ">little</span>{" "}background</h4>
           <p className="text-base">
           Welcome to Altalance, your premier destination for freelance services with a difference. At Altalance, we're not just connecting you with individual freelancers; we're revolutionizing the freelance experience altogether. Our mission is simple yet transformative: to bridge the gap between clients and freelancers by establishing a "safe-harbour" that ensures accountability, reliability, and unparalleled quality in every project.   Unlike traditional freelance platforms where clients often navigate through a sea of individual freelancers, at  Altalance, you interact directly with our company. This unique approach ensures that every project is managed with meticulous attention to detail and accountability from start to fin.
           </p>

        </div>


      </motion.div>
  );
}

export default dynamic (() => Promise.resolve(About), {ssr: false})
