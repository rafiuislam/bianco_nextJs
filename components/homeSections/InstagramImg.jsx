import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramImg = ({ socialImg }) => {
  return (
    <div className="relative">
      <Image
        src={socialImg}
        alt="/"
        className="w-full h-full transition-transform duration-300 transform-gpu hover:scale-105"
        width={500}
        height={500}
      />
      {/* Overlay */}
      <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-secondary/50 group">
        <div className="text-bg-h hidden group-hover:block">
          <div className="text-center items-center flex justify-center">
            <FaInstagram size={30} className="z-10" />
          </div>

          <div>
            <Image
              src="/img/Bianco-w-Logo-1.png"
              alt="Logo"
              width={100}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramImg;
