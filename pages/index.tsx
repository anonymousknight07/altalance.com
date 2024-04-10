import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TeamMembers from "../components/TeamMembers";
import Skills from "../components/Skills";
import Workexperience from "../components/Workexperience";
const Home:NextPage=()=>{
  return (
    <div className=" bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#03abfff7]/80">
      <Head>
        <title>placeholder_name</title>
       
      </Head>

      
      <Header />

     
      <section id="hero" className="snap-start">
        <Hero/>

      </section>

      
      <section id="about" className="snap-center">
        <About />
      </section>

    
      <section id="experience" className="snap-center">
        <Workexperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>
      
      <section id='teammembers' className="snap-start">
     <TeamMembers/>
     
      </section>

       <section id='contact' className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img 
          className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0
          cursor-pointer"
          src="https://w7.pngwing.com/pngs/567/773/png-transparent-computer-icons-home-black-home-icon-miscellaneous-angle-black-thumbnail.png" alt=""
          />
          </div>
      </footer>
      
      </Link> 


    </div>
  )
};

export default Home;
