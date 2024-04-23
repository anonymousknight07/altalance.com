import React from 'react'
import {motion} from "framer-motion"
import dynamic from "next/dynamic";

type Props = {
    directionLeft?:boolean;
}

function Skill1({ directionLeft}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
        initial={{
            x:directionLeft? -200:200,
            opacity:0
            }}
            transition={{duration :1}}
            whileInView={{opacity: 1,x:0}}
            src=" https://cdn.sanity.io/images/rh8hx4sn/production/9b8fe06d00a6a7292934f246d1a8c04a64739136-316x267.jpg"
            className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-22 md:h-22 xl:w-29
            xl:h-29 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-20 h-20 md:w-22 md:h-22 xl:w-29
            xl:h-29 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">95%</p>
              </div>
            </div>
        
    </div>
  );
}

export default Skill1