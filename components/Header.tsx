import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from "next/dynamic";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center px-6 md:px-0"> {/* Added padding for smaller screens */}
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
        className="flex flex-row items-center">
        
          {/* LinkedIn icon */}
          <div className="mr-4">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={28} color="gray" />
            </a>
          </div>

          {/* GitHub icon */}
          <div>
            <a href="https://github.com/Altalance/" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} color="gray" />
            </a>
          </div>
        
      </motion.div>
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
          className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in Touch</p>
        </motion.div>
      </Link>
    </header>
  );
}

export default dynamic(() => Promise.resolve(Header), { ssr: false });
