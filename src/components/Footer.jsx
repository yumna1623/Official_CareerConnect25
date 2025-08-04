import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollOrNavigate = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="text-white bg-[#760a0a] px-4 sm:px-6 pt-12 pb-6 border-t border-[#760a0a]/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About Section */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-xl font-bold text-white">Career Fest 2025</h3>
          <p className="text-sm italic text-white">
            “Empowering Futures through Opportunity, Innovation, and Collaboration”
          </p>
          <p className="text-xs text-[#760a0a]/70">
            Organized by Department of Computer Science, University of Karachi
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center space-y-3">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><span onClick={() => handleScrollOrNavigate('home')} className="cursor-pointer hover:text-black transition">Home</span></li>
            <li><span onClick={() => handleScrollOrNavigate('about')} className="cursor-pointer hover:text-black transition">About Us</span></li>
            <li><span onClick={() => handleScrollOrNavigate('sponsors')} className="cursor-pointer hover:text-black transition">Sponsors</span></li>
            <li><span onClick={() => handleScrollOrNavigate('registration')} className="cursor-pointer hover:text-black transition">Register</span></li>
            <li><span onClick={() => handleScrollOrNavigate('contact')} className="cursor-pointer hover:text-black transition">Contact</span></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="text-center md:text-right space-y-3">
          <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
          <div className="flex justify-center md:justify-end gap-4 text-xl">
            <a
                         href="https://www.facebook.com/DCS.UBIT/"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="hover:text-[#520707] hover:scale-110 transition-transform"
                       >
                         <FaFacebookF />
                       </a>
                       <a
                         href="https://www.instagram.com/dcs_ubit_media_society?utm_source=ig_web_button_share_sheet&igsh=azZ6NnV1YWRibTBv"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="hover:text-[#520707] hover:scale-110 transition-transform"
                       >
                         <FaInstagram />
                       </a>
            {/* <a href="https://www.linkedin.com/school/university-of-karachi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-black transition">
              <FaLinkedinIn />
            </a> */}
            
          </div>
        </div>
      </div>

      <hr className="my-6 border-white" />

      <p className="text-center text-xs text-white">
        © 2025 CareerConnect, UBIT — All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
