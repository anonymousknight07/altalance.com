import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../constants/skills';

const Skillextra: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation once
    threshold: 0.5, // Trigger animation when 50% of the section is in view
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initial animation state (hidden below)
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animation when section is in view
      transition={{ duration: 0.8, ease: 'easeOut' }} // Animation duration and easing
      className='h-screen relative flex flex-col items-center justify-center bg-gray'
    >
      <h2 className='absolute top-9 left-9 right-0 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>
        Skills
      </h2>

      <div className='flex flex-wrap gap-8 justify-center'>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className='relative w-20 h-20 rounded-lg shadow-xl overflow-hidden'
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className={`w-full h-full object-contain transition-opacity duration-300 ${
                hoveredSkill === skill.name ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                hoveredSkill === skill.name
                  ? 'opacity-100 bg-custom-bg border-2 border-custom-outline'
                  : 'opacity-0'
              }`}
            >
              <p className='text-sm font-semibold text-white'>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skillextra;
