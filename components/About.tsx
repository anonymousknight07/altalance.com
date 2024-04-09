import React from 'react'
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";
type Props = {}

const About=({}: Props) =>{
  return (
    <motion.div
    initial={{ opacity:0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
    className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
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
        src="https://cdn.sanity.io/images/12w2r3bf/production/f669e95d5ce7f6a079dd6ec68193732c3c7b218e-960x1280.jpg?w=2000&fit=max&auto=format"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] "
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">Here is a{" "} 
           <span className="underline decoration-[#03abfff7] ">little</span>{" "}background</h4>
           <p className="text-base">
           Hello viewers, I am Akshat , pursuing my B.Tech in the field of Computer Science and Engineering. Currently Working as a PR Head for E-Cell (IARE). My hobbies include 
           Sketching , Playing guitar. I have expertise in C++, Python and am a fresher in the field of web development and Ethical Hacking.I love to explore and learn about new domains and 
           connect with new people.
           </p>

        </div>


      </motion.div>
  );
}

export default dynamic (() => Promise.resolve(About), {ssr: false})
