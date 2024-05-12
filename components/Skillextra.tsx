import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants/skills';

const Skillextra: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex flex-col items-center justify-center bg-gray'
    >
      <h2 className='absolute top-10 left-9 right-0 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>
        Skills
      </h2>

      <div className='flex flex-wrap gap-8 justify-center'>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className='relative rounded-full border border-gray-500 overflow-hidden w-20 h-20 md:w-22 md:h-22 xl:w-29 xl:h-29 filter group-hover:grayscale transition duration-300 ease-in-out'
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className={`w-full h-full object-cover`}
            />
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                hoveredSkill === skill.name
                  ? 'opacity-100 bg-gray-900 bg-opacity-75 text-white font-semibold'
                  : 'opacity-0'
              }`}
            >
              <p className='text-sm'>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skillextra;
