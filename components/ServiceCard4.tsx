import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const ServiceCard = ({}: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 first-letter w-[450px] md:w-[550px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full"> {/* Container for vertical alignment */}
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
          src="https://cdn.sanity.io/images/rh8hx4sn/production/e2112e15f42367dd4ec9b01806d122a9cc9bb9d3-1024x1024.jpg"
          alt=""
        />
        <h2 className="text-4xl font-bold mt-4 text-center">4. Product modelling</h2> {/* Center aligned title */}
      </div>
      {/* Conditionally render the description based on screen size */}
      <div className="px-0 md:px-10">
        {/* Description visible on medium screens and above (md) */}
        <p className="pt-2 text-1xl mt-1 hidden sm:block md:block">
        From precise 2D drafts to detailed 3D models, our customized solutions are optimized for manufacturing, presentations, or marketing.
        </p>
        {/* Render the detailed services list only on larger screens (md and above) */}
        <ul className="list-disc space-y-4 ml-5 text-lg hidden md:block">
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
  );
};

export default ServiceCard;
