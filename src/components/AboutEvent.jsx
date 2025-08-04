import React from "react";
import ubitImage from "../assets/UBIT2.jpg"; // Confirm the path is correct

const AboutEvent = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#760a0a] to-[#4d0505] min-h-screen flex items-center px-6 md:px-10 py-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Text Section */}
        <div className="md:w-1/2 text-left border-l-4 border-red-400 pl-6">
          <h2 className="text-4xl font-bold mb-6 text-white">
            About The Host Institution
          </h2>
          <p className="text-red-100 text-base md:text-lg leading-relaxed mb-4">
            Established in 1984, the Department of Computer Science at the
            University of Karachi (UBIT) is a premier hub for computing
            education, research, and innovation in Pakistan. Located in a
            purpose-built, multi-level complex, UBIT offers cutting-edge
            programs at undergraduate, graduate, and doctoral levels including
            BS (CS, SE, AI), MS (CS), and PhD in all domains.
          </p>
          <p className="text-red-100 text-base md:text-lg leading-relaxed mb-4">
            With internationally benchmarked curricula and a strong focus on
            industrial relevance, students engage in capstone projects,
            specializations, and cross-disciplinary research in areas like AI,
            ML, Cybersecurity, Data Science, and Blockchain.
          </p>
          <p className="text-red-100 text-base md:text-lg leading-relaxed mb-4">
            The department maintains strong industry linkages with Microsoft,
            IBM, GDG, and national incubators, enabling hands-on learning and
            startup incubation. Events like hackathons, expos, and challenges
            support career growth and industry engagement.
          </p>
          <p className="text-red-100 text-base md:text-lg leading-relaxed">
            UBIT’s alumni network of over 15,000 professionals drives impact
            globally across tech, academia, and entrepreneurship. With a mission
            to produce ethical, industry-ready, and globally competitive
            graduates, UBIT continues to lead as a beacon of excellence in
            computing education.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <img
            src={ubitImage}
            alt="UBIT"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;
