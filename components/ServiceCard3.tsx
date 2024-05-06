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
          src="https://cdn.sanity.io/images/rh8hx4sn/production/4ffee22b87f49d139af4b3a07cef2016e68ede8d-602x468.jpg"
          alt=""
        />
        <h4 className="text-4xl font-bold mt-4 text-center">3. App development</h4> {/* Center aligned title */}
      </div>
      {/* Conditionally render the description based on screen size */}
      <div className="px-0 md:px-10">
        {/* Description visible on medium screens and above (md) */}
        <p className="pt-2 text-1xl mt-1 hidden sm:block md:block">
        Crafting native and cross-platform apps with intuitive designs, advanced features, and rigorous testing for security and performance.
        </p>
        {/* Render the detailed services list only on larger screens (md and above) */}
        <ul className="list-disc space-y-4 ml-5 text-lg hidden md:block">
                <li>Native & cross-platform apps</li>
                <li>User-centric design</li>
                <li>Advanced feature integration</li>
                <li>Thorough testing</li>
                <li>Security adherence</li>
                <li>Regular updates</li>


        </ul>
      </div>
    </article>
  );
};

export default ServiceCard;
