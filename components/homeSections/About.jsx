import React from "react";
import Image from "next/image";
import SlideFromRight from "../animate/SlideFromRight";
import SlideFromLeft from "../animate/SlideFromLeft";
import SlideUp from "../animate/SlideUp";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12"
    >
      <SlideUp offset="-300px 0px -300px 0px">
        <h1 className="lg:mb-6 text-center text-primary font-medium text-5xl font-title">
          About Bianco
        </h1>
      </SlideUp>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-4 px-6 flex flex-col justify-center relative order-2 lg:order-1">
          <SlideFromLeft offset="-300px 0px -300px 0px">
            <p className="mt-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
              <span className="relative z-10 ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English.
              </span>
              <span className="absolute inset-0 flex items-center justify-center z-0 ">
                <Image
                  src="/img/Abt-Bianco-Bean.png"
                  alt="Logo"
                  width={200}
                  height={100}
                />
              </span>
            </p>
          </SlideFromLeft>
          <div className="mt-6 md:mt-4 mb-4 text-center md:text-start">
            <SlideFromLeft offset="-300px 0px -300px 0px">
              <button className="bg-primary text-white font-regular text-base font-raleway py-2 px-4 rounded hover:scale-110 transition-transform duration-300 hover:bg-opacity-80 animate-fadeIn">
                Learn More
              </button>
            </SlideFromLeft>
          </div>
        </div>

        <div className="lg:w-1/2 order-1 lg:order-2">
          <SlideFromRight offset="-300px 0px -300px 0px">
            <Image
              className="w-full h-auto animate-slideFromRight"
              src="/img/about.png"
              alt="Image 1"
              width={200}
              height={50}
            />
          </SlideFromRight>
        </div>
      </div>
    </section>
  );
};

export default About;
