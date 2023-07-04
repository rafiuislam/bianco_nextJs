import React from "react";
import HeroImg from "../../../public/img/Take-Your-Time-bg.jpg";
import Image from "next/image";
import SlideFromLeft from "../../animate/SlideFromLeft";
import SlideUp from "../../animate/SlideUp";
import FadeAndScale from "../../animate/FadeAndScale";

const RoastingTypes = () => {
  return (
    <section className="container  mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12">
      <SlideUp offset="-300px 0px -300px 0px">
        <h1 className="lg:mb-6  text-center text-primary font-medium text-5xl font-title">
          Roasting Types
        </h1>
      </SlideUp>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-4 px-0 lg:px-6 flex flex-col justify-center relative order-2 lg:order-1 ">
          <SlideFromLeft offset="-300px 0px -300px 0px">
            {/* type01   */}
            <div className="">
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Light Roast
              </header>
              <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                <span className="relative z-10">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is to make proper coﬀee beans.
                  It is a long established fact that a reader will be distracted
                  by the readable.
                </span>
              </p>
            </div>
            {/* type02   */}
            <div className="mt-6">
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Medium Roast
              </header>
              <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                <span className="relative z-10">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is to make proper coﬀee beans.
                </span>{" "}
              </p>
            </div>
            {/* type03   */}
            <div className="mt-6">
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Medium Dark Roast
              </header>
              <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                <span className="relative z-10">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is to make proper coﬀee beans.
                  It is a long established fact that a reader will be distracted
                  by the readable. It is a long established fact.
                </span>{" "}
              </p>
            </div>
            {/* type04   */}
            <div className="mt-6">
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Dark Roast
              </header>
              <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                <span className="relative z-10">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is to make proper coﬀee beans.
                </span>{" "}
              </p>
            </div>
          </SlideFromLeft>
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

export default RoastingTypes;
