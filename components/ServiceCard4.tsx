import { motion } from 'framer-motion';
import React from 'react'
import dynamic from "next/dynamic";

type Props = {}

const ServiceCard=({}:Props)=>{
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
        src="https://cdn.sanity.io/images/rh8hx4sn/production/e2112e15f42367dd4ec9b01806d122a9cc9bb9d3-1024x1024.jpg"
        alt=""
        
        />
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-bold">4. Product modeling</h4>
            <p className=" pt-2 text-1xl mt-1">From precise 2D drafts to detailed 3D models, our customized solutions are optimized for manufacturing, presentations, or marketing.</p>
            <div className="flex space-x-2 my-2">
                
            </div>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>2D drafting with AutoCAD</li>
                <li>Detailed 3D modeling</li>
                <li>Customized solutions</li>
                <li>Full-stack development</li>
                <li>High-quality renderings</li>
                <li>Collaborative approach</li>
                <li>Optimized deliverables</li>
            </ul>
            

        </div>
        
         
        
    </article>
    )
}
export default dynamic (() => Promise.resolve(ServiceCard

), {ssr: false})