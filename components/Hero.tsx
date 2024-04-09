import Link from 'next/link';
import React from 'react';
import { Cursor , useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import dynamic from "next/dynamic";



type Props = {}

const Hero=({}: Props)=> {
  const [text,count]=useTypewriter({
    words:["Welcome,to E-CELL IARE",
   "Helping to build and grow Entrepreneurs",
   "<NEW INDIA />",
   
  ],
  loop:true,
  delaySpeed:2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 
    items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img 
      className="relative rounded-full h-32 w-32 mx-auto object-cover"
      src="https://cdn.sanity.io/images/12w2r3bf/production/6754baf53b739fc8116dfad0d5d59a136c803d21-768x768.jpg?w=2000&fit=max&auto=format"
      alt=""/>
      <div className="z-20">
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
       Student in Computer Science & Engineering 
      </h2>

      <h1 className="text-5xl lg:text-6xl font-semibold px-10">
      <span className="mr-3">{text}</span>
      <Cursor cursorColor="#F7AB0A"/>
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
export default dynamic (() => Promise.resolve(Hero), {ssr: false})