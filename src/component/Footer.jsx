import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-footer p-14 font-serif text-white">
      <div className="flex space-x-20">
        <div>
          <Image src="/nobglogo.png" width={222} height={122} alt="Logo" />
        </div>
        <div>
          <ul className="flex flex-col">
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col">
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col">
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 p-4 text-gray-400 text-lg  ">
        &#169; {new Date().getFullYear()}
        <a
          href="https://www.linkedin.com/in/aditya-gangrade-689177220"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline text-gray-400 text-lg"
        >
          Aditya
        </a>
      </div>
    </footer>
  );
};

export default Footer;
