import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TeamMembers from '../components/TeamMembers';
import ServicesO from '../components/ServicesO';
import { FaHouseUser } from 'react-icons/fa';
import Skillextra from '../components/Skillextra';
import dynamic from 'next/dynamic';

const Home: React.FC = () => {
  useEffect(() => {
    // Scroll to the Hero section on initial load
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#03abfff7]/80">
      <Head>
        <title>Altalance</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="services" className="snap-center">
        <ServicesO />
      </section>

      <section id="skills" className="snap-start">
        <Skillextra />
      </section>

      <section id='team' className="snap-start">
        <TeamMembers />
      </section>

      <section id='contact' className="snap-start">
        <ContactMe />
      </section>

      {/* Footer with link to Hero section */}
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer flex justify-center">
          <FaHouseUser size={23} />
        </footer>
      </Link>
    </div>
  );
};


export default dynamic(() => Promise.resolve(Home), { ssr: false });