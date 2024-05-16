/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import dynamic from "next/dynamic";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Altalance ", "Find the right freelancer for your project needs"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-4 lg:space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative rounded-full overflow-hidden border-white border-2">
        <img
          className="h-24 lg:h-32 w-24 lg:w-32 mx-auto object-cover"
          src="/images/logo5.png"
          alt=""
        />
      </div>
      <div className="z-20">
        <h2 className="text-xs lg:text-sm uppercase text-gray-500 pb-2 lg:tracking-[10px]">
          Altalance: Freelance Aggregator
        </h2>
        <h1 className="text-3xl lg:text-5xl font-semibold px-6 lg:px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#03abfff7" />
        </h1>
        <div className="pt-3 lg:pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#services">
            <button className="heroButton">Services Offered</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#team">
            <button className="heroButton">Team Members</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Hero), { ssr: false });
