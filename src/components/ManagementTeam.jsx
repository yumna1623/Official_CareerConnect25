import React from "react";
import { FaEnvelope, FaPhoneAlt, FaUserTie, FaUsers } from "react-icons/fa";

const ManagementTeam = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#760a0a] mb-12 flex justify-center items-center gap-3">
          {/* <FaUsers className="text-[#760a0a]" /> */}
          Event Management Team
        </h2>

        {/* Chairman */}
        <div className="bg-white shadow-md rounded-xl p-6 sm:p-8 mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#760a0a] mb-2 flex items-center justify-center gap-2">
            <FaUserTie className="text-[#760a0a]" />
            Chairman
          </h3>
          <p className="text-base sm:text-lg text-gray-700 font-medium">
            Dr. Sadiq Ali Khan
          </p>
        </div>

        {/* Coordinators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Dr. Humera */}
          <div className="bg-white shadow-md rounded-xl p-6 sm:p-8">
            <h4 className="text-lg sm:text-xl font-semibold text-[#760a0a] mb-2">
              Dr. Humera Azam
            </h4>
            <p className="text-gray-700 flex items-start gap-2 text-sm sm:text-base break-words">
              <FaEnvelope className="text-[#760a0a] mt-1" />
              <a
                href="mailto:humera.azam@uok.edu.pk"
                className="text-[#760a0a] hover:underline"
              >
                humera.azam@uok.edu.pk
              </a>
            </p>
          </div>

          {/* Dr. Khalid */}
          <div className="bg-white shadow-md rounded-xl p-6 sm:p-8">
            <h4 className="text-lg sm:text-xl font-semibold text-[#760a0a] mb-2">
              Dr. S. M. Khalid
            </h4>
            <p className="text-gray-700 flex items-start gap-2 text-sm sm:text-base break-words">
              <FaPhoneAlt className="text-[#760a0a] mt-1" />
              WhatsApp (Text Only):{" "}
              <span className="text-[#760a0a]">0333-2178423</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
