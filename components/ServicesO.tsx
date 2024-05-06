import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import ServiceCard from './ServiceCard';
import ServiceCard2 from './ServiceCard2';
import ServiceCard3 from './ServiceCard3';
import ServiceCard4 from './ServiceCard4';
import ServiceCard5 from './ServiceCard5';

type Props = {};

function ServicesO({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-8 uppercase tracking-[15px] text-gray-500 text-2xl md:text-center w-full"
        style={{ textAlign: 'center' }}
      >
        Service Offered
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#03abfff7]/40">
        <ServiceCard />
        <ServiceCard2 />
        <ServiceCard3 />
        <ServiceCard4 />
        <ServiceCard5 />
      </div>
    </motion.div>
  );
}

export default ServicesO;
