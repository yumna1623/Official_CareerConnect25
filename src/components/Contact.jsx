import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-white py-20 px-6 text-[#760a0a]"
    id='contact'
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#760a0a] mb-4">Contact & Registration</h2>
          <p className="text-gray-700 text-lg">
            Reach out to us or explore registration details for students, employers, and alumni.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-[#fef2f2] p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-[#760a0a] mb-2">Department of Computer Science (UBIT)</h3>
          <p>University of Karachi</p>
          <p>Karachi-75270, Pakistan</p>
          <div className="mt-4 space-y-2">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#760a0a]" /> +92-21-99261300-06 Ext: 2462
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#760a0a]" />
              <a href="mailto:dcs@uok.edu.pk" className="text-[#760a0a] hover:underline">
                dcs@uok.edu.pk
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaGlobe className="text-[#760a0a]" />
              <a
                href="https://uok.edu.pk/faculties/computerscience/contact.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#760a0a] hover:underline"
              >
                Visit Website
              </a>
            </p>
          </div>
        </div>

        {/* Registration Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#760a0a]">For Students:</h4>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>Fill out the online student registration form.</li>
              <li>Include your name, student ID, program, and contact details.</li>
              <li>Submit before the deadline to reserve your spot.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#760a0a]">For Employers & Industry Representatives:</h4>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>Contact event coordinators to express interest.</li>
              <li>
                You'll receive sponsorship & participation details including booth info and speaking
                opportunities.
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#760a0a]">For Alumni:</h4>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>Register using the online alumni form.</li>
              <li>Stay updated via UBIT’s social channels.</li>
              <li>Contact coordinators to join networking or as speakers.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#760a0a]">Important Dates:</h4>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>Registration Opens: <span className="italic text-gray-500">[Insert Date]</span></li>
              <li>Registration Closes: <span className="italic text-gray-500">[Insert Date]</span></li>
              <li>Event Date: <span className="italic text-gray-500">[Insert Date]</span></li>
            </ul>
            <p className="italic text-sm text-gray-600">* Early registration is advised. Limited slots.</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">Follow us on social media for real-time updates:</p>
          <div className="flex justify-center gap-6 text-[#760a0a] text-2xl">
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
            {/* <a
              href="https://www.facebook.com/share/16K6qb8Fe9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#520707] hover:scale-110 transition-transform"
            >
              <FaLinkedinIn />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
