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
import { PageInfo, Skill, Social, Team } from "../typings";
import {fetchPageInfo } from "../utils/fetchPageInfo"
import { fetchSkills } from "../utils/fetchSkills";
import { fetchServices } from "../utils/fetchServices";
import { fetchTeam } from "../utils/fetchTeam";
import { fetchSocials } from "../utils/fetchSocials";
import ServicesO from "../components/ServicesO";

type Props={
  pageInfo: PageInfo;
  
  skills:Skill[];
  team: Team[];
  socials: Social[];
}
const Home=({pageInfo,skills,team,socials}:Props)=>{ 
  return (
    <div className=" bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#03abfff7]/80">
      <Head>
        <title>Altalance</title>
       
      </Head>

      
      <Header socials={socials}/>

     
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />

      </section>

      
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

    
      <section id="services" className="snap-center">
        <ServicesO  />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      
      <section id='team' className="snap-start">
     <TeamMembers team={team}/>
     
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

export const getStaticProps :GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo=await fetchPageInfo();
  const skills:Skill[]=await fetchSkills();
  const team:Team[]=await fetchTeam();
  const socials: Social[]=await fetchSocials();

    return{
      props:{
        pageInfo,
        skills,
        team,
        socials,
      },

      revalidate: 10,


    };
};