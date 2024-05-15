// pages/index.tsx

import React, { useEffect, useRef } from 'react';
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

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the hero section when the component mounts
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const seoTitle = "Altalance - Freelancer Software Development, App Development, Web Development, Product Designing, Marketing";
  const seoDescription = "Altalance provides exceptional freelancer services in software development, app development, web development, product designing, and marketing to elevate your business.";
  const seoKeywords = "freelancer, software development, app development, web development, product designing, marketing, digital services";
  const seoUrl = "https://www.altalance.com";
  const seoImage = "https://cdn.sanity.io/images/rh8hx4sn/production/cd1b3ecd79cef58af7832b6a3d34491c3bf3f54b-512x487.png";

  return (
    <div className="bg-[rgb(36,36,36)] text-white overflow-hidden">
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

      <main>
        <section id="hero" ref={heroRef}>
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <ServicesO />
        </section>

        <section id="skills">
          <Skillextra />
        </section>

        <section id="team">
          <TeamMembers />
        </section>

        <section id="contact">
          <ContactMe />
        </section>
      </main>

      <footer>
        <Link href="#hero">
          <span className="cursor-pointer block text-center py-4 bg-gray-800 text-white">Back to Top</span>
        </Link>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
