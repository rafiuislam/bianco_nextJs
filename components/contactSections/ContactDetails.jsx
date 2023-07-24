import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import SlideUp from "../animate/SlideUp";
import Map from "../contactSections/Map";
import SectionTitle from "../SectionTitle";

const ContactDetails = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const underlineStyle = `
  before:content-['']
  before:absolute
  before:top-10
  before:left-0
  before:w-1
  before:h-0.5
  before:rounded-full
  before:opacity-0
  before:transition-all
  before:duration-500
  before:bg-gradient-to-r
  before:from-secondary
  before:to-secondary
  hover:before:w-full
  hover:before:opacity-100
`;
  return (
    <section id="popular" className="container mx-auto mt-4 mb-4 px-4 sm:pb-2">
      <SectionTitle title="Contact Detail" />

      {/* new */}
      <div className="flex flex-col lg:flex-row">
        <div
          className={`lg:w-1/2 pl-0 lg:pl-24 pb-4 lg:pb-0 flex flex-col justify-center items-center relative ${
            isMounted ? "" : ""
          }`}
        >
          <SlideUp offset="-300px 0px -300px 0px">
            <div className="flex flex-col md:flex-row justify-between md:items-baseline">
              {/* First Div */}
              <div className="flex flex-col mb-4 justify-center items-center">
                <div className="mb-2 p-4">
                  <a
                    href="https://maps.google.com/maps?q=House%234a%2C%20Road%230a%2C%20Shanta%20Province%2C%20Uttara%2C%20Dhaka%2C%20Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaMapMarkerAlt className="text-4xl text-secondary cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-primary" />
                  </a>
                </div>
                <div className="text-center">
                  <p
                    className={`font-light text-sm font-custom cursor-pointer transition-all duration-500 relative ${underlineStyle}`}
                  >
                    <a
                      href="https://maps.google.com/maps?q=House%234a%2C%20Road%230a%2C%20Shanta%20Province%2C%20Uttara%2C%20Dhaka%2C%20Bangladesh"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      House-43, Level-2, Shah Makhdum <br /> Avenue, Sector-12,
                      Uttara, Dhaka-1230
                    </a>
                  </p>
                </div>
              </div>

              {/* Second Div */}
              <div className="flex flex-col mb-4 px-8 justify-center items-center">
                <div className="mb-2 p-4">
                  <a href="tel:+88 017 9444 8555">
                    <FaPhone className="text-4xl text-secondary cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-primary" />
                  </a>
                </div>
                <div className="font-light text-sm font-custom">
                  <span className="font-light text-sm font-custom cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:top-4 before:left-0 before:w-1 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-secondary before:to-secondary hover:before:w-full hover:before:opacity-100 relative">
                    <a href="tel:+88 017 9444 8555">+88 017 9444 8555</a>
                  </span>
                </div>
              </div>

              {/* Third Div */}
              <div className="flex flex-col mb-4 justify-center items-center">
                <div className="mb-2 p-4">
                  <a href="mailto:info@bianco-bd.com">
                    <FaEnvelope className="text-4xl text-secondary cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-primary" />
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:info@bianco-bd.com"
                    className="font-light text-sm font-custom cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:top-4 before:left-0 before:w-1 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-secondary before:to-secondary hover:before:w-full hover:before:opacity-100 relative"
                  >
                    info@bianco-bd.com
                  </a>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
        <div className="lg:w-1/2 lg:pr-24">
          <Map />
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
