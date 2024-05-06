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
          src="https://cdn.sanity.io/images/rh8hx4sn/production/50c5fb8efa7a22936abb7bec09bb3ba85f82b6e0-640x360.jpg"
          alt=""
        />
        <h4 className="text-4xl font-bold mt-4 text-center">5. Digital Marketing</h4> {/* Center aligned title */}
      </div>
      {/* Conditionally render the description based on screen size */}
      <div className="px-0 md:px-10">
        {/* Description visible on medium screens and above (md) */}
        <p className="pt-2 text-1xl mt-1 hidden sm:block md:block">
        Our digital marketing strategies drive traffic, boost engagement, and increase conversions through SEO, social media, email, and content marketing.
        </p>
        {/* Render the detailed services list only on larger screens (md and above) */}
        <ul className="list-disc space-y-4 ml-5 text-lg hidden md:block">
        <li>SEO to improve website visibility.</li>
                <li>Social media marketing for brand engagement.</li>
                <li>Email marketing campaigns.</li>
                <li>Content marketing strategies.</li>
                <li>Analytics-driven approach for optimization.</li>
                <li>Conversion rate optimization (CRO) techniques.</li>



        </ul>
      </div>
    </article>
  );
};

export default ServiceCard;
