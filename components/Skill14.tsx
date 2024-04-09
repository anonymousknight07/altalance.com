import React from 'react'
import {motion} from "framer-motion"
type Props = {
    directionLeft?:boolean;
}

function Skill14({ directionLeft}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
        initial={{
            x:directionLeft? -200:200,
            opacity:0
            }}
            transition={{duration :1}}
            whileInView={{opacity: 1,x:0}}
            src="https://w7.pngwing.com/pngs/719/831/png-transparent-adobe-creative-cloud-computer-icons-editing-shop-icon-blue-text-trademark-thumbnail.png"
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

export default Skill14