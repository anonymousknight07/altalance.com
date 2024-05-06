import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center px-6 md:px-4 py-2"> {/* Added padding around the header */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className="flex flex-row items-center space-x-4"> {/* Used space-x-4 for spacing between icons */}
        
        {/* LinkedIn icon */}
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-1 rounded-full hover:bg-gray-200">
          <FaLinkedinIn size={28} color="gray" />
        </a>

        {/* GitHub icon */}
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-1 rounded-full hover:bg-gray-200">
          <FaGithub size={28} color="gray" />
        </a>

      </motion.div>

      {/* Mail icon */}
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5
          }}
          className="flex items-center p-1 rounded-full hover:bg-gray-200 cursor-pointer">
          <FaEnvelope size={28} color="gray" className="mr-2" /> {/* Added margin to the right of the icon */}
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in Touch</p>
        </motion.div>
      </Link>
      
    </header>
  );
}

export default Header;
