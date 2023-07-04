import React from "react";
import Hero from "../components/Hero";
import HeroImg from "../public/img/Take-Your-Time-bg.jpg";
import Image from "next/image";
import Link from "next/link";
// import SlideFromRight from "../animate/SlideFromRight";
import SlideFromLeft from "../components/animate/SlideFromLeft";
import SlideFromRight from "../components/animate/SlideFromRight";
import SlideUp from "../components/animate/SlideUp";
import FadeAndScale from "../components/animate/FadeAndScale";
import RoastingTypes from "../components/learn/roastingGuide/roastingTypes";
import RoastingProcesses from "../components/learn/roastingGuide/RoastingProcesses";

const roastingGuide = () => {
  return (
    <div className="bg-bg-h">
      <Hero
        HeroImg={HeroImg}
        Herost={"Home >> Learn"}
        HeroPg={"Roasting Guide"}
      />
      <div>
        <RoastingTypes />
        <RoastingProcesses />

        <section className="container  mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12">
          <div className="flex flex-col lg:flex-row">
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

            <div className="lg:w-1/2 p-4 px-0 lg:px-6 flex flex-col justify-center relative order-2 lg:order-1">
              <SlideFromLeft offset="-300px 0px -300px 0px">
                {/* type01 */}
                <div className="">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    Roast Time
                  </header>
                  <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using `{"Content here, content here"}`, making
                      it look like readable English.
                    </span>
                  </p>
                </div>
                {/* type02 */}
                <div className="mt-6">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    Roast Degree
                  </header>
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution.
                    </span>{" "}
                  </p>
                </div>
              </SlideFromLeft>
            </div>
          </div>
        </section>
        <section className="container  mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12">
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

            <div className="lg:w-1/2 p-4 px-0 lg:px-6 flex flex-col justify-center relative">
              <SlideFromRight offset="-300px 0px -300px 0px">
                {/* type01 */}
                <div className="">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    The Cooling Stage
                  </header>
                  <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using `{"Content here, content here"}`, making
                      it look like readable English.
                    </span>
                  </p>
                </div>
                {/* type02 */}
                <div className="mt-6">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    The Tasting Stage
                  </header>
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution.
                    </span>{" "}
                  </p>
                </div>
              </SlideFromRight>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default roastingGuide;
