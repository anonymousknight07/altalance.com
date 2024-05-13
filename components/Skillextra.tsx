import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants/skills';
import { SkillCategory } from '../constants/skillCategories';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const Skillextra: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>(SkillCategory.Frontend);
  const [hoveredSkills, setHoveredSkills] = useState<string[]>([]); // State for hovered skills

  const filteredSkills = skills.filter(skill => skill.type === selectedCategory);

  const handleTagHover = (category: SkillCategory) => {
    const skillsToShow = skills.filter(skill => skill.type === category).map(skill => skill.name);
    setHoveredSkills(skillsToShow);
  };

  const handleClearHover = () => {
    setHoveredSkills([]);
  };

  return (
    <section className='h-screen relative flex flex-col items-center justify-center bg-gray'>
      <h2 className='absolute top-10 left-9 right-0 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>
        Skills
      </h2>
      <h3 className="absolute top-24 uppercase text-center tracking-[3px] text-gray-500 text-sm">
      Our team excels in the following skill sets
      </h3>

      {/* Category Selector */}
      <div className='flex flex-wrap justify-center gap-3'>
        {Object.values(SkillCategory).map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            onMouseEnter={() => handleTagHover(category)}
            onMouseLeave={handleClearHover}
            style={{
              minWidth: '120px', // Set a fixed minimum width for consistent button size
              height: '40px', // Set a fixed height for consistent button size
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <HoverBorderGradient>
              <span>{category}</span>
            </HoverBorderGradient>
          </button>
        ))}
      </div>

      {/* Display Skills */}
      <div className='flex flex-wrap gap-8 justify-center mt-8'>
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className='relative rounded-full border border-gray-500 overflow-hidden w-20 h-20 md:w-22 md:h-22 xl:w-29 xl:h-29 filter group-hover:grayscale transition duration-300 ease-in-out'
            onMouseEnter={() => setHoveredSkills([skill.name])}
            onMouseLeave={handleClearHover}
          >
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className='w-full h-full object-cover'
            />
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                hoveredSkills.includes(skill.name)
                  ? 'opacity-100 bg-gray-900 bg-opacity-75 text-white font-semibold'
                  : 'opacity-0'
              }`}
            >
              <p className='text-sm'>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skillextra;
