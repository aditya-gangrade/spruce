import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center p-6 md:p-12 lg:p-24">
      {/* Text Container */}
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span>All-in-one</span> <span>healthcare</span> <span>communication</span>
        </p>
        <p className="mt-4 text-base md:text-lg lg:text-xl">
          Whether it's upgrading your patient experience or modernizing your
          communication toolkit, see why Spruce is the leading platform for
          HIPAA-compliant healthcare communication.
        </p>
        <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Enter your text here"
            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Get Started for Free
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative flex justify-center items-center w-full md:w-1/2 p-5">
        {/* Desktop Image */}
        <div className="hidden md:block relative w-full h-auto">
          <Image src="/desktop.png" layout="responsive" width={566} height={233} alt="Desktop" />
        </div>
        {/* Mobile Image */}
        <div className="block md:hidden absolute top-0 left-0 w-full h-auto">
          <Image src="/mobile.png" layout="responsive" width={244} height={122} alt="Mobile" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
