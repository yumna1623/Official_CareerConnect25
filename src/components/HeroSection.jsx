import React, { useState, useEffect } from "react";
import UbitImage from "../assets/ubit.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/register");

  const eventDate = new Date("2025-09-30T09:00:00+05:00").getTime();

  const calculateTimeLeft = () => {
    const difference = eventDate - new Date().getTime();
    if (difference <= 0) return {};
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isEventOver, setIsEventOver] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (Object.keys(newTimeLeft).length === 0) {
        setIsEventOver(true);
        clearInterval(timer);
      }
      setTimeLeft(newTimeLeft);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <span
      key={interval}
      className="mx-1 sm:mx-2 text-xl sm:text-2xl md:text-4xl font-bold text-white animate-pulse"
    >
      {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
      <div className="text-xs sm:text-sm text-red-200 uppercase">
        {interval}
      </div>
    </span>
  ));

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-center px-10 sm:px-8"
      style={{ backgroundImage: `url(${UbitImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#760a0a]/20 backdrop-brightness-90 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl w-full pt-24 sm:pt-28">
        <h2 className="text-lg sm:text-lg md:text-xl text-[#760a0a] mb-1 font-bold sm:font-medium">
          UBIT Presents
        </h2>
        <h1 className="text-5xl sm:text-6xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-xl">
          Career Fest'25
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-red-100 mb-4 font-semibold">
  “Empowering Futures through Opportunity, Innovation, and Collaboration”
</p>

        <p className="text-sm sm:text-base md:text-lg  text-red-100 mb-6 font-medium">
          Organized by the Department of Computer Science,
          <br />
          University of Karachi
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-8 px-2">
          <button
            onClick={handleNavigate}
            className="bg-[#760a0a] hover:bg-red-800 px-6 py-2 rounded-lg text-sm sm:text-base font-semibold transition transform hover:scale-105"
          >
            Register Now
          </button>
          <button
            onClick={() => handleScroll("agenda")}
            className="border border-white px-6 py-2 rounded-lg text-sm sm:text-base font-semibold hover:bg-white hover:text-[#760a0a] transition transform hover:scale-105"
          >
            View Agenda
          </button>
        </div>

        {/* Countdown Timer */}
        {!isEventOver && (
          <div className="flex justify-center gap-2 sm:gap-4 mt-4">
            {timerComponents}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
