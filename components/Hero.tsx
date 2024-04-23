import Link from 'next/link';
import React from 'react';
import { Cursor , useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import dynamic from "next/dynamic";



const Hero=()=> {
  const [text,count]=useTypewriter({
    words:["Altalance ",
   "Find the right freelancer for your project needs",  
  ],
  loop:true,
  delaySpeed:2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative rounded-full overflow-hidden border-white border-2">
        <img 
          className="h-32 w-32 mx-auto object-cover"
          src="/images/logo5.png"
          alt=""
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Altalance: Freelance Aggregator
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#03abfff7"/>
        </h1>
        <div className="pt-5">
          <Link href="#about">
             <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
             <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
             <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
             <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default dynamic (() => Promise.resolve(Hero), {ssr: false});
