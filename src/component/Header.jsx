'use client'
import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const Header = () => {
  const [dropdownHealthcareOpen, setDropdownHealthcareOpen] = useState(false);
  const [dropdownMoreOpen, setDropdownMoreOpen] = useState(false);

  // Refs for handling click outside
  const moreRef = useRef(null);
  const healthcareRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (healthcareRef.current && !healthcareRef.current.contains(event.target)) {
        setDropdownHealthcareOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setDropdownMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href={'/'}>
          <Image src={"/logo.jpg"} width={120} height={220} alt="logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6">
        {/* Dropdown for Healthcare Professionals */}
        <div className="relative" ref={healthcareRef}>
          <button
            className="flex items-center hover:text-blue-500"
            onClick={() => setDropdownHealthcareOpen(!dropdownHealthcareOpen)}
          >
            Healthcare Professionals
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {/* Dropdown Menu */}
          {dropdownHealthcareOpen && (
            <ul className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href={"/primary-care"}>Primary Care</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href={"/mental-health"}>Mental Health</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href={"/other-specialties"}>Other Specialties</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Dropdown for More */}
        <button className="hover:text-blue-500">Plans & Pricing</button>
        <button className="hover:text-blue-500">Patients</button>
        <div className="relative" ref={moreRef}>
          <button
            className="flex items-center hover:text-blue-500"
            onClick={() => setDropdownMoreOpen(!dropdownMoreOpen)}
          >
            More
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {/* Dropdown Menu */}
          {dropdownMoreOpen && (
            <ul className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">About Us</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">Blog</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#">Help Center</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

      {/* Action Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          See a Demo
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Get Started for Free
        </button>
       
        <button className="text-blue-500 hover:text-blue-700"> <Link href={'/login'}>Log In</Link></button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden">
        {/* Hamburger Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </header>
  );
};

export default Header;
