import React from 'react';
import { FaHouseUser } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const companyName = "Altalance";

  return (
    <footer className="sticky bottom-5 w-full flex justify-center text-white">
      <div className="flex items-center space-x-2">
        <span>&copy; {currentYear} {companyName}</span>
      </div>
    </footer>
  );
};

export default Footer;
