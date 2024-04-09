import React from 'react';
import {motion} from "framer-motion";
type Props = {} 

function Projects({}: Props) {
  const projects=[1,2];
  return (
    <motion.div 
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:1.5}}
      className="h-screen relative flex overflow-hidden flex-col
    text-left md:flex-row max-w-full justify-evenly mx-auto
    items-center z-0 ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40">
        {projects.map((project,i)=>(
          <div className="w-screen flex-shrink-0 snap-center flex flex-col 
          space-y-5 items-center justify-center p-20 md:p-44 h-screen"> 
            <motion.img 
            initial={{
              y:-300,
              opacity:0
            }}
            transition={{duration:1.2}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            src="https://cdn.sanity.io/images/12w2r3bf/production/14d18d1733f1a44d994a123e10576395918c691d-470x277.png?w=2000&fit=max&auto=format" 
            alt=""
            
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i+1} of {projects.length}:
                  </span>{" "}
                  Vocal
                  </h4>
                  <p className="text-lg text-center md:text-left">
                    Vocal is a music player. It is created for all platforms and includes
                    features like skipping the current song , pausing and playing the song.
                    It also has sections to view the Top Artists, and the popular songs around you.
                    The app is just a prototype.
                    </p>
              </div>
          
          </div>
        
          
        ))}
        </div>

       
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] 
      -skew-y-12" />

      

    </motion.div>
  );
};

export default Projects