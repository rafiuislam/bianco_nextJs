import React from "react";
import Image from "next/image";
import Link from "next/link";
// import SlideFromRight from "../animate/SlideFromRight";
import SlideFromLeft from "../animate/SlideFromLeft";
import SlideUp from "../animate/SlideUp";
import FadeAndScale from "../animate/FadeAndScale";

const About = () => {
  return (
    <section
      id="about"
      className="container  mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12"
    >
      <SlideUp offset="-300px 0px -300px 0px">
        <h1 className="lg:mb-6  text-center text-primary font-medium text-5xl font-title">
          About Bianco
        </h1>
      </SlideUp>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-4 px-0 lg:px-6 flex flex-col justify-center relative order-2 lg:order-1 ">
          <SlideFromLeft offset="-300px 0px -300px 0px">
            <p className="mt-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
              <span className="relative z-10">
                Bianco Bangladesh is here to introduce the same rich taste,
                divine warmth and proud lineage of Bianco Coffee beans to the
                coffee connoisseurs of Bangladesh.
              </span>
              <span className="absolute inset-0 flex items-center justify-center z-0">
                <Image
                  src="/img/Abt-Bianco-Bean.png"
                  alt="Logo"
                  width={200}
                  height={100}
                />
              </span>
            </p>
          </SlideFromLeft>
          <div className="mt-6 overflow-y-hidden md:mt-4 mb-4 text-center md:text-start">
            <SlideFromLeft offset="-300px 0px -300px 0px">
              {/* <button className="bg-primary text-white font-regular text-base font-raleway py-2 px-4 rounded hover:scale-110 transition-transform duration-300 hover:bg-opacity-80">
                Learn More
              </button>
              <button className="relative border-2 border-secondary bg-transparent py-2.5 px-5 font-medium uppercase text-secondary transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                Learn More
              </button> */}
              <Link href={`about-bianco`}>
                <button className=" font-medium text-base font-raleway relative border border-secondary bg-transparent py-2.5 px-5 uppercase text-secondary transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-10">
                  Learn More
                </button>
              </Link>
            </SlideFromLeft>
          </div>
        </div>

        <div className="lg:w-1/2 order-1 lg:order-2">
          <FadeAndScale offset="-300px 0px -300px 0px">
            <Image
              className="w-full h-auto animate-fadeIn"
              src="/img/about.png"
              alt="Image 1"
              width={200}
              height={50}
            />
          </FadeAndScale>
        </div>
      </div>
    </section>
  );
};

export default About;
