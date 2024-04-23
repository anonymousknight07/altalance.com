import React from 'react';
import { motion } from "framer-motion";
import Skill from './Skill';
import dynamic from "next/dynamic";
import { Skill as SkillType } from "../typings";

type Props = {
  skills?: SkillType[];
}

const Skills = ({ skills }: Props) => {
  // Check if skills array is undefined or null, and handle accordingly
  if (!skills || skills.length === 0) {
    return null; // Render nothing if skills array is undefined, null, or empty
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3>
      <div className="grid grid-cols-6 gap-5">
        {/* Render each skill component */}
        {skills.map((skill, index) => (
          <Skill key={skill._id} skill={skill} directionLeft={index >= skills.length / 2} />
        ))}
      </div>
    </motion.div>
  );
}

export default dynamic(() => Promise.resolve(Skills), { ssr: false });
