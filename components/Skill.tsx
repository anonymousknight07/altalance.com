import React from 'react'
import {motion} from "framer-motion"
type Props = {
    directionLeft?:boolean;
}

function Skill({ directionLeft}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
        initial={{
            x:directionLeft? -200:200,
            opacity:0
            }}
            transition={{duration :1}}
            whileInView={{opacity: 1,x:0}}
            src=" https://images.prismic.io/boringowl/a1d3a150-b473-42d5-89bf-6eb3e6f4f4c2_sanity+headless+CMS+urza%CC%A8dzen%CC%81+i+produkto%CC%81w+cyfrowych.jpeg?auto=compress,format"
            className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-22 md:h-22 xl:w-29
            xl:h-29 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-20 h-20 md:w-22 md:h-22 xl:w-29
            xl:h-29 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">100%</p>
              </div>
            </div>
        
    </div>
  );
}

export default Skill