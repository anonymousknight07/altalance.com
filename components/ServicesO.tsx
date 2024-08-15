import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import ServiceCard1 from './ServiceCard';
import ServiceCard2 from './ServiceCard2';
import ServiceCard3 from './ServiceCard3';
import ServiceCard4 from './ServiceCard4';
import ServiceCard5 from './ServiceCard5';
import { set } from 'react-hook-form';

type Props = {};

function ServicesO({}: Props) {
  const [index, setIndex] = React.useState<number>(0);
  const services: { [key: number]: JSX.Element } = {
    0: <ServiceCard1 />,
    1: <ServiceCard2 />,
    2: <ServiceCard3 />,
    3: <ServiceCard4 />,
    4: <ServiceCard5 />,
  };
  
  const handleRightScrollClick = (index: number) => {
    if (index < 4) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  const handleLeftScrollClick = (index: number) => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(4);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <div className='flex auto flex-col justify-center items-center'>
        <div className="absolute top-8 uppercase tracking-[15px] text-gray-500 text-2xl md:text-center w-full">
          <h3
            style={{ textAlign: 'center' }}
            >
            Service Offered
          </h3>
        </div>
        
        <div className='container flex flex-col justify-center items-center'>
          <div className="flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen relative h-[100px] md:h-[100px]">
            {services[index]}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => handleRightScrollClick(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-500 hover:text-[#03abfff7]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => handleLeftScrollClick(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-500 hover:text-[#03abfff7]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </motion.div>
          </div>
        </div>

      </div>
   </motion.div>
  );
}

export default ServicesO;
