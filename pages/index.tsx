// pages/index.tsx

import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TeamMembers from '../components/TeamMembers';
import ServicesO from '../components/ServicesO';
import Skillextra from '../components/Skillextra';
import Footer from '../components/Footer';
import Recruit from './recruit';

const Home: React.FC = () => {
  const seoTitle = "Altalance - Freelance Software, App, Web Development, Design, Marketing";
  const seoDescription = "Altalance offers top-notch freelance services in software, app, and web development, product design, and marketing to boost your business.";
  const seoKeywords = "freelancer, software development, app development, web development, product designing, marketing, digital services";
  const seoUrl = "https://www.altalance.com";
  const seoImage = "https://cdn.sanity.io/images/rh8hx4sn/production/cd1b3ecd79cef58af7832b6a3d34491c3bf3f54b-512x487.png"; 
  useEffect(() => {
    // Scroll to the Hero section on initial load
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []) 
 
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#03abfff7]/80">
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={seoUrl} />
        <meta property="og:image" content={seoImage} />
        <meta property="twitter:title" content={seoTitle} />
        <meta property="twitter:description" content={seoDescription} />
        <meta property="twitter:image" content={seoImage} />
        <meta property="twitter:card" content="summary_large_image" />
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

      <section id="team" className="snap-start">
        <TeamMembers />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="snap-start bottom-5 w-full cursor-pointer flex justify-center">
          <Footer />
        </footer>
      </Link>
    </div>
  );
};

export default Home;
