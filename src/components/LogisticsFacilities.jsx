import React from 'react';
import {
  FaBuilding,
  FaUtensils,
  FaHeadset,
  FaParking,
  FaHospital,
  FaThLarge,
} from 'react-icons/fa';

const logisticsData = [
  {
    icon: <FaBuilding className="text-[#760a0a] text-2xl" />,
    title: 'Venue & Infrastructure',
    points: [
      'Spacious Exhibition Halls accommodating over 50 employer booths.',
      'Smart Lecture Halls for seminars and panel discussions.',
      'High-Speed Wi-Fi ensuring seamless connectivity.',
      'Dedicated Networking Lounges for informal interactions.',
    ],
  },
  {
    icon: <FaThLarge className="text-[#760a0a] text-2xl" />,
    title: 'Booth & Exhibition Setup',
    points: [
      '10x10 ft. booth space with tables, chairs, and power outlets.',
      'Signage and branding opportunities.',
      'Student volunteer assistance for setup and coordination.',
    ],
  },
  {
    icon: <FaUtensils className="text-[#760a0a] text-2xl" />,
    title: 'Refreshments & Hospitality',
    points: [
      'Complimentary tea, coffee, and snacks.',
      'Lunch for sponsors and participating employers.',
      'Designated rest areas for comfort.',
    ],
  },
  {
    icon: <FaHeadset className="text-[#760a0a] text-2xl" />,
    title: 'Audio-Visual & Technical Support',
    points: [
      'Modern AV systems for presentations.',
      'Technical staff support for equipment and connectivity.',
      'Live streaming for virtual attendees.',
    ],
  },
  {
    icon: <FaParking className="text-[#760a0a] text-2xl" />,
    title: 'Parking & Accessibility',
    points: [
      'Ample parking space at UBIT premises.',
      'Shuttle services from KU entry gates to the venue.',
    ],
  },
  {
    icon: <FaHospital className="text-[#760a0a] text-2xl" />,
    title: 'Health & Safety Measures',
    points: [
      'On-site medical assistance available.',
      'Emergency response teams on standby.',
      'Compliance with current health regulations.',
    ],
  },
];

const LogisticsFacilities = () => {
  return (
    <section className="bg-white text-[#760a0a] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#760a0a] mb-12">
          Logistics & Facilities
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {logisticsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#fef2f2] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#fbe9e9] rounded-full">{item.icon}</div>
                <h3 className="text-xl font-semibold">{`${index + 1}. ${item.title}`}</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 pl-1 text-[#760a0a]/90">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticsFacilities;
