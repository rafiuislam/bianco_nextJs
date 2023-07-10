import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import SlideUp from "../animate/SlideUp";

const ContactDetails = () => {
  //   const contactInfo = [
  //     {
  //       icon: <FaMapMarkerAlt />,
  //       text: "House# 4a, Road# 0a, Shanta Province, Uttara, Dhaka, Bangladesh",
  //       key: "address",
  //     },
  //     {
  //       icon: <FaPhone />,
  //       text: "+880 111 XXX 222 333<br/>+880 111 XXX 222 444<br/>+880 111 XXX 222 111<br/>",
  //       key: "phone",
  //     },

  //     {
  //       icon: <FaEnvelope />,
  //       text: "Coffee@bianco-bd.com",
  //       key: "email",
  //     },
  //   ];
  return (
    <section
      id="popular"
      className="container mx-auto mt-4 mb-4 px-4 pb-8 sm:pb-2 md:px-24 md:p-12"
    >
      <SlideUp offset="-300px 0px -300px 0px">
        <h1 className="lg:mb-6 text-center text-primary font-medium text-4xl sm:text-5xl font-title">
          Contact Detail
        </h1>
      </SlideUp>
      <div className="flex flex-col md:flex-row px-4 justify-evenly	md:items-baseline">
        {/* First Div */}
        <div className="flex flex-col mb-4  justify-center items-center">
          <div className="mb-2 p-4">
            <FaMapMarkerAlt className="text-4xl text-secondary  cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-primary" />
          </div>
          <div className="text-center">
            <p className="font-light text-sm font-custom cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:top-10 before:left-0 before:w-1 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-secondary before:to-secondary hover:before:w-full hover:before:opacity-100 relative">
              House# 4a, Road# 0a, Shanta <br /> Province, Uttara, Dhaka,
              Bangladesh
            </p>
          </div>
        </div>

        {/* Second Div */}
        <div className="flex flex-col mb-4 justify-center items-center">
          <div className="mb-2 p-4">
            <FaPhone className="text-4xl text-secondary  cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-primary" />
          </div>
          <div className="font-light text-sm font-custom ">
            <span className="font-light text-sm font-custom cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:top-4 before:left-0 before:w-1 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-secondary before:to-secondary hover:before:w-full hover:before:opacity-100 relative">
              +880 111 XXX 222 333
            </span>
            <br />
            <span className="font-light text-sm font-custom cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:top-4 before:left-0 before:w-1 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-secondary before:to-secondary hover:before:w-full hover:before:opacity-100 relative">
              +880 111 XXX 222 444
            </span>
            <br />
            <span className="font-light text-sm font-custom cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:top-4 before:left-0 before:w-1 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-secondary before:to-secondary hover:before:w-full hover:before:opacity-100 relative">
              +880 111 XXX 222 111
            </span>
          </div>
        </div>

        {/* Third Div */}
        <div className="flex flex-col mb-4 justify-center items-center">
          <div className="mb-2 p-4">
            <FaEnvelope className="text-4xl text-secondary cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-primary" />
          </div>
          <div>
            <p className="font-light text-sm font-custom cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:top-5 before:left-0 before:w-1 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-secondary before:to-secondary hover:before:w-full hover:before:opacity-100 relative">
              Coffee@bianco-bd.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
