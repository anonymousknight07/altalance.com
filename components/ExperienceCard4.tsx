import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

export default function ExperienceCard4({}:Props){
    return( 
    <article className="flex flx-col rounded-lg items-center space-y-7 flex-shrink-0 first-letter
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
        object-center"
        src="https://cdn.sanity.io/images/12w2r3bf/production/61511e2ab80b0cd29a0c5cbfb5d094e4030295e7-1896x1897.png?w=2000&fit=max&auto=format"
        alt=""
        
        />
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">E-CELL IARE</h4>
            <p className="font-bold text-2xl mt-1">Head of Public Relations</p>
            <div className="flex space-x-2 my-2">
                
            </div>

            <p className="uppercase py-5 text-gray-300 ">Started work... -Ended...</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
            

        </div>
        
         
        
    </article>
    )
}