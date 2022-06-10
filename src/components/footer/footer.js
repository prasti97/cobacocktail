import './footer.css';
import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#4a0513"
          fill-opacity="1"
          d="M0,32L60,64C120,96,240,160,360,160C480,160,600,96,720,69.3C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <p>
        CopyRight <FaRegCopyright /> 2022 Design by Dian Prasti M
      </p>
    </div>
  );
};

export default Footer;
