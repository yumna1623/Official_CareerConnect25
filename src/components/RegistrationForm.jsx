import React from "react";

const RegistrationForm = () => {
  return (
    <section className="bg-red-100 px-4 py-34" id="register">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#760a0a] text-center mb-8">
          Join the CareerFest 2025 Team
        </h2>

        <div className="w-full overflow-hidden rounded shadow-md">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScdOsK2xnfzDTlnCBLtJCm-kiAWO0yvmPo1ZlGd0_Ns14vfPQ/viewform?embedded=true"
            className="w-full min-h-[1800px] sm:min-h-[1500px] md:min-h-[1600px] lg:min-h-[1800px] border-0"
            title="CareerConnect Registration"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
