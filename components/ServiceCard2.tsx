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
          src="https://cdn.sanity.io/images/rh8hx4sn/production/5d7ce8d5c8caf1152b9f10aeb81579b161d0e315-1200x800.jpg"
          alt=""
        />
        <h4 className="text-4xl font-bold mt-4 text-center">2. Web Development</h4> {/* Center aligned title */}
      </div>
      {/* Conditionally render the description based on screen size */}
      <div className="px-0 md:px-10">
        {/* Description visible on medium screens and above (md) */}
        <p className="pt-2 text-1xl mt-1 hidden sm:block md:block">
        Our responsive web designs ensure seamless user experience across devices, bolstered by e-commerce solutions and effective SEO strategies.
        </p>
        {/* Render the detailed services list only on larger screens (md and above) */}
        <ul className="list-disc space-y-4 ml-5 text-lg hidden md:block">
                <li>Responsive design</li>
                <li>Cross-platform compatibility</li>
                <li>Proficiency in frameworks</li>
                <li>E-commerce solutions</li>
                <li>SEO strategies</li>
                <li>User-friendly CMS</li>

        </ul>
      </div>
    </article>
  );
};

export default ServiceCard;
