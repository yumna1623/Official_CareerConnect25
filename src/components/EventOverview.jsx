import React from "react";
import { FaLightbulb } from "react-icons/fa";
import G01 from "../assets/G01.jpeg";
import G1 from "../assets/G1.jpg";
import G2 from "../assets/G2.jpg";

const EventOverview = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-10 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold flex justify-center items-center gap-4 text-[#760a0a]">
            <FaLightbulb className="text-[#760a0a] text-4xl animate-pulse" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-red-800">
              Event Overview
            </h2>
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Connecting talent, innovation, and opportunity for a brighter
            future.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Description */}
          <div className="w-full lg:w-3/5 space-y-8 text-lg leading-relaxed text-gray-800">
            <p>
              Over the past several years, the{" "}
              <strong>Department of Computer Science (UBIT)</strong> at the
              University of Karachi has established its annual{" "}
              <strong>Career Fest</strong> as a premier platform for connecting
              students, alumni, and industry leaders. These events have
              consistently provided invaluable opportunities for participants to
              engage in recruitment activities, knowledge sharing, and
              professional networking, fostering a vibrant ecosystem for tech
              talent.
            </p>

            <p>
              In <strong>2023</strong>, the Career Fest was notably inaugurated
              by Vice Chancellor Professor Dr. Khalid Mahmood Iraqi, who
              emphasized the critical importance of IT proficiency and the vast,
              ever-expanding opportunities available in the global job market.
              The event saw active participation from numerous leading software
              houses and IT companies, who conducted on-the-spot interviews for
              both internships and full-time positions, leading to successful
              placements for many deserving students.
            </p>

            <p>
              The <strong className="text-[#760a0a]">2024</strong> edition,
              rebranded as{" "}
              <strong className="text-[#760a0a]">Career Connect'24</strong>,
              continued this proud tradition by bringing together esteemed
              industry professionals, groundbreaking innovators, and eager
              students. Companies such as <strong>Impetus Systems</strong>
              and <strong>Avialdo Solutions</strong> were key participants,
              offering profound insights into emerging industry trends and
              crucial job market demands. The event effectively facilitated
              valuable networking opportunities and provided essential exposure
              to innovative solutions and cutting-edge technologies that are
              shaping the future.
            </p>

            <p>
              Building upon the resounding successes of previous years,{" "}
              <strong className="text-[#760a0a]">Career Fest 2025</strong> aims
              to significantly further enhance these experiences by introducing
              new, dynamic features and substantially expanding its reach. The
              event will continue to serve as a vital bridge between academia
              and industry, actively fostering collaborations and providing a
              robust platform for students to exceptionally showcase their
              talents to potential employers and industry stalwarts.
            </p>

            <p>
              With an unwavering focus on{" "}
              <strong>
                innovation, professional development, and community engagement
              </strong>
              , Career Fest 2025 is poised to be a landmark event that
              contributes profoundly to the sustainable growth and progressive
              advancement of the tech ecosystem in Pakistan, driving forward the
              next generation of IT professionals.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="w-full lg:w-2/5 mt-12 lg:mt-0">
            <h3 className="text-2xl font-bold text-[#760a0a] text-center mb-8">
              <span className="pb-2 border-b-4 border-[#760a0a]">
                Glimpses from Past Events
              </span>
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {[G01, G1, G2].map((img, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <img
                    src={img}
                    alt={`Event Highlight ${idx + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#760a0a]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-lg font-semibold">
                      {idx === 0 && "Networking Success"}
                      {idx === 1 && "Keynote Insights"}
                      {idx === 2 && "Innovation Showcase"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOverview;
