import React from "react";
import HeroImg from "../../../public/img/Take-Your-Time-bg.jpg";
import Image from "next/image";
import SlideFromRight from "../../animate/SlideFromRight";
import SlideUp from "../../animate/SlideUp";
import FadeAndScale from "../../animate/FadeAndScale";

const RoastingProcesses = () => {
  return (
    <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12">
      <SlideUp offset="-300px 0px -300px 0px">
        <h1 className="lg:mb-6  text-center text-primary font-medium text-5xl font-title">
          Roasting Processes
        </h1>
      </SlideUp>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 ">
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

        <div className="lg:w-1/2 pl-0 lg:pl-8 pt-6 lg:pt-0 flex flex-col justify-center relative">
          <SlideFromRight offset="-300px 0px -300px 0px">
            {/* type01 */}
            <div className="">
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Drying Stage
              </header>
              <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                <span className="relative z-10">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using `
                  {"Content here, content here"}`, making it look like readable
                  English.
                </span>
              </p>
            </div>
            {/* type02 */}
            <div className="mt-6">
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Browning Stage
              </header>
              <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                <span className="relative z-10">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution.
                </span>{" "}
              </p>
            </div>
            {/* type03 */}
            <div className="mt-6">
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Development Stage
              </header>
              <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                <span className="relative z-10">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution. as opposed to using Content here, content
                  here.
                </span>{" "}
              </p>
            </div>
          </SlideFromRight>
        </div>
      </div>
    </section>
  );
};

export default RoastingProcesses;
