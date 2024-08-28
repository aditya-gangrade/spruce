"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  // State for image index and form input
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const img = [
    {
      id: 1,
      src: "/mobile.png",
    },
    {
      id: 2,
      src: "/animatedmobileimage.jpeg",
    },
  ];

  
  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
    try {
      const response = await fetch("/api/save-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful submission (e.g., clear input or show a success message)
        console.log(data.message);
        setInput(""); // Clear input field after successful submission
      } else {
        // Handle error
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      // Reset submitted state after a short delay to hide animation
      setTimeout(() => setSubmitted(false), 1000); // 1 second delay
    }
  }

  useEffect(() => {
    // Function to update the image index periodically
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % img.length);
    }, 2000); // Change image every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [img.length]);

  return (
    <div className="flex flex-col lg:flex-row items-center mt-5 justify-between px-6 lg:px-16 py-12 lg:py-24 bg-white">
      {/* Left Side: Text and Input Section */}
      <div className="lg:w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          All-in-one <br /> healthcare <br /> communication
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Whether it's upgrading your patient experience or modernizing your
          communication toolkit, see why Spruce is the leading platform for
          HIPAA-compliant healthcare communication.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row md:space-x-4"
        >
          <motion.input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter your email..."
            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm mb-4 md:mb-0 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            // Animation properties
            initial={{ scale: 1 }}
            animate={{ scale: submitted ? 0.9 : 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
          <motion.button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            // Animation properties
            initial={{ opacity: 1 }}
            animate={{ opacity: submitted ? 0.7 : 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            Get Started for Free
          </motion.button>
        </form>

        {/* Demo Link */}
        <div className="mt-4">
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            See a demo
          </a>
        </div>
      </div>

      {/* Right Side: Images */}
      <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex items-center justify-center">
        {/* Desktop Image */}
        <div className="relative w-4/5 lg:w-3/4 h-auto">
          <Image
            src="/desktop.png" // Replace with the correct path to your desktop image
            layout="responsive"
            width={800}
            height={450}
            alt="Desktop"
          />
        </div>

        {/* Mobile Image */}
        <div className="absolute -left-12 top-12 w-1/3 lg:w-1/4 h-auto">
          <Image
            key={img[currentImageIndex].id}
            src={img[currentImageIndex].src}
            layout="responsive"
            width={244}
            height={122}
            alt="Mobile"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
