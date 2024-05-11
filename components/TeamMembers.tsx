import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const TeamMembers = () => {
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with 0

  useEffect(() => {
    // Function to update window width state
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Update window width state when component mounts
    updateWindowWidth();

    // Add event listener to update window width state on resize
    window.addEventListener('resize', updateWindowWidth);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []); // Empty dependency array to run only once on mount

  const isLargeScreen = windowWidth >= 768;

  const teamMembers = [
    {
      name: "Akshat Pandey",
      imageSrc: "https://cdn.sanity.io/images/rh8hx4sn/production/f669e95d5ce7f6a079dd6ec68193732c3c7b218e-960x1280.jpg",
      description: "Akshat is a seasoned full stack developer and a natural leader. With his expertise, he can bring your app ideas to life efficiently and effectively, managing both front-end and back-end development with precision.",
      linkedIn: "https://www.linkedin.com/in/akshat-pandey-5a2107228/"
    },
    {
      name: "Manish Sagar Ramarapu",
      imageSrc: "https://cdn.sanity.io/images/rh8hx4sn/production/c4f71e0a6c6e22033fdb64e886780daf19cf92b5-300x300.jpg",
      description: "Meet Manish, the digital marketing whiz. With a knack for online trends and a strategic approach, he crafts captivating campaigns that drive results. From SEO to social media, Manish's expertise elevates brands in the digital sphere, making him a formidable force in the industry.",
      linkedIn: "https://www.linkedin.com/in/manishramarapu/"
    },
    {
      name: "Yuvraj K",
      imageSrc: "https://cdn.sanity.io/images/rh8hx4sn/production/120970d762eb676c17635c35576d7c7285aada59-1136x1548.jpg",
      description: "Yuvraj, a Mechanical Engineer by trade, embodies the spirit of entrepreneurship with a flair for design. Beyond his technical prowess, he thrives on creative challenges, excelling in tasks that demand innovation and attention to detail. With Yuvraj on your team, expect not only precision in engineering but also a touch of artistic ingenuity.",
      linkedIn: "https://www.linkedin.com/in/kyuvraj/"
    },
    {
      name: "Gaurang Ratnaparkhi",
      imageSrc: "https://cdn.sanity.io/images/rh8hx4sn/production/6b8d1faf57b728bec75ea4e77ebe63b113982000-3200x3200.jpg",
      description: "Gaurang is a software engineer and a fullstack developer. He can help you turn your ideas into production ready full stack applications. Gaurang navigates the complexities of coding with ease. His expertise spans across front-end and back-end technologies, ensuring seamless integration and robust functionality. Whether it's crafting intuitive user interfaces or optimizing database performance, Gaurang's dedication to excellence drives him to deliver solutions that exceed expectations.",
      linkedIn: "https://www.linkedin.com/in/gaurangratnaparkhi/"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-center md:text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-5 left-9 right-0 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        Team Members
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#03abfff7]/40 hide-scrollbar">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen relative"
          >
            {/* Arrow indicating other cards */}
            {index !== teamMembers.length - 1 && (
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2 animate-bounce text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            )}
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={member.imageSrc}
              height={250}
              width={250}
              alt={member.name}
            />
            {isLargeScreen ? (
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#03abfff7]/50">{member.name}</span>
                </h4>
                <p className="text-lg text-center md:text-left">{member.description}</p>
                <div className="flex items-center space-x-2 justify-center">
                  <p>Reach out on :</p>
                  <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-5 text-center">
                <h4 className="text-2xl font-semibold">
                  <span className="underline decoration-[#03abfff7]/50">{member.name}</span>
                </h4>
                <div>
                <p>Reach out on :</p>
                  <a href={member.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '10px' }} >
                    <FaLinkedin size={24}  />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Background element */}
      <div className="w-full absolute top-[30%] bg-[#03abfff7]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default TeamMembers;
