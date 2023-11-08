import React from "react";
import Image from "next/image";

const Hero = ({ HeroImg, HeroPg, Herost, alt }) => {
  console.log(alt);
  return (
    <section id="hero" className="w-full m-auto">
      <div className="relative h-[400px]">
        <Image
          src={HeroImg}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="relative w-full h-auto"
          priority
        />

        <div className="h-full absolute inset-x-0 left-0 sm:text-left sm:ml-20 sm:pl-4 flex flex-col justify-center items-center md:items-start">
          {/* <SlideUp offset="-300px 0px -300px 0px"> */}
          <div className="text-5xl text-white font-medium animate-slideUpCubiBezier text-center">
            <p>{HeroPg}</p>
          </div>
          {/* </SlideUp> */}

          <div className="">
            <p className="text-white font-regular text-base font-raleway animate-fadeIn text-center">
              {Herost} {" >> "}
              <span> {HeroPg}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
