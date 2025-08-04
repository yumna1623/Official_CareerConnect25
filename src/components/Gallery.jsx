import React from 'react';
import Slider from 'react-slick';

// Import images
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpeg';
import img9 from '../assets/img9.jpeg';
import img10 from '../assets/img10.jpeg';
import img11 from '../assets/img11.jpeg';
import img12 from '../assets/img12.jpeg';

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12
];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1, // ✅ only 1 image at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section id="gallery" className="py-30 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#760a0a] mb-4">
          CareerConnect'24 Moments
        </h2>
        <p className="text-gray-600 text-base sm:text-lg font-medium">
          A glimpse into the unforgettable moments from last year’s event.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className="px-2">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={img}
                  alt={`CareerConnect24-${idx + 1}`}
                  className="w-full h-78 sm:h-95 md:h-96 object-cover object-center rounded-xl"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
