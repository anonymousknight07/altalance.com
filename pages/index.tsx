/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TeamMembers from "../components/TeamMembers";
import Skills from "../components/Skills";

import ServicesO from "../components/ServicesO";


const Home=( )=>{ 
  return (
    <div className=" bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#03abfff7]/80">
      <Head>
        <title>Altalance</title>
       
      </Head>

      
      <Header/>

     
      <section id="hero" className="snap-start">
        <Hero />

      </section>

      
      <section id="about" className="snap-center">
        <About />
      </section>

    
      <section id="services" className="snap-center">
        <ServicesO  />
      </section>

      <section id="skills" className="snap-start">
        <Skills  />
      </section>
      
      <section id='team' className="snap-start">
     <TeamMembers/>
     
      </section>

       <section id='contact' className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer flex justify-center">
  <img
    className="h-8 w-8 rounded-full border-2 border-white filter grayscale hover:grayscale-0 cursor-pointer"
    src="https://cdn.sanity.io/images/rh8hx4sn/production/cd1b3ecd79cef58af7832b6a3d34491c3bf3f54b-512x487.png"
    alt=""
  />
</footer>

      
      </Link> 


    </div>
  )
};

export default Home;

