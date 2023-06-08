import React from "react";
import Image from "next/image";
import SlideFromLeft from "../animate/SlideFromLeft";
import SlideFromRight from "../animate/SlideFromRight";
import SlideUp from "../animate/SlideUp";

const Biancaffe = () => {
  return (
    <section id="biancaffe" className="w-full m-auto ">
      <div className="relative h-[500px] mt-[15%] md:mt-[8%] lg:mt-[5%]">
        <Image
          src="/img/Take-Your-Time-bg.jpg"
          alt="Logo"
          layout="fill"
          objectFit="cover"
          className="relative w-full h-full parallax"
          data-speed="0.5"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black">
          <div
            className="bg-white bg-opacity-50 text-black p-4 flex flex-col justify-center"
            style={{ width: "700px", height: "300px" }}
          >
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="text-center text-primary font-regular text-4xl font-dancing slideUpCubiBezier">
                <p>Take Your Time</p>
              </div>
            </SlideUp>
            <div className="mt-6 md:mt-4 mb-4 text-center md:text-start flex justify-evenly flex-col sm:flex-row">
              <SlideFromLeft offset="-300px 0px -300px 0px">
                <div className="mb-4 sm:mb-0 ">
                  <button className="bg-primary text-white font-medium text-4xl font-title py-0 px-12 rounded hover:scale-125 transition-transform duration-300 hover:bg-opacity-80 animate-slideFromLeft">
                    Cafe
                  </button>
                </div>
              </SlideFromLeft>
              <SlideFromRight offset="-300px 0px -300px 0px">
                <div className="">
                  <button className="bg-primary text-white font-medium text-4xl font-title py-0 px-12 rounded hover:scale-125 transition-transform duration-300 hover:bg-opacity-80 animate-slideFromRight">
                    Shop
                  </button>
                </div>
              </SlideFromRight>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biancaffe;
