import React from "react";
import Image from "next/image";
import SlideUp from "../components/animate/SlideUp";

const Hero = ({ HeroImg, HeroPg }) => {
  return (
    <section id="hero" className="w-full m-auto">
      <div className="relative h-[300px] ">
        <Image
          src={HeroImg}
          alt="Logo"
          layout="fill"
          objectFit="cover"
          className="relative w-full h-full parallax"
          data-speed="0.5"
        />

        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-left ml-20 pl-4 flex flex-col justify-center items-start md:items-start">
          <SlideUp offset="-300px 0px -300px 0px">
            <p className="text-5xl text-white font-medium animate-slideUpCubiBezier">
              {HeroPg}
            </p>
          </SlideUp>

          <div className="">
            <p className="text-white font-regular text-base font-raleway animate-fadeIn">
              Home {" >> "}
              <span> {HeroPg}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
