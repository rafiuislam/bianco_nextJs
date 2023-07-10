import React from "react";
import Hero from "../components/Hero";
import HeroImg from "../public/img_learn/Cover-roast.jpg";
import Image from "next/image";
import SlideUp from "../components/animate/SlideUp";
import FadeAndScale from "../components/animate/FadeAndScale";
import RoastingTypes from "../components/learn/roastingGuide/RoastingTypes";
import RoastingProcesses from "../components/learn/roastingGuide/RoastingProcesses";
import Popular from "../components/homeSections/Popular";

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

        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 order-1 lg:order-2">
              <FadeAndScale offset="-300px 0px -300px 0px">
                <Image
                  className="w-full h-auto animate-fadeIn"
                  src="/img_learn/Roasting-Processes-2.jpg"
                  alt="Image 1"
                  width={500}
                  height={100}
                  loading="lazy"
                />
              </FadeAndScale>
            </div>

            <div className="lg:w-1/2 pr-0 lg:pr-8 pt-6 lg:pt-0 flex flex-col justify-center relative order-2 lg:order-1">
              <SlideUp offset="-300px 0px -300px 0px">
                {/* type01 */}
                <div className="">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    Roast Time
                  </header>
                  <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
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
              </SlideUp>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 ">
              <FadeAndScale offset="-300px 0px -300px 0px">
                <Image
                  className="w-full h-auto animate-fadeIn"
                  src="/img_learn/Roasting-Processes-3.jpg"
                  alt="Image 1"
                  width={500}
                  height={100}
                  loading="lazy"
                />
              </FadeAndScale>
            </div>

            <div className="lg:w-1/2 pl-0 lg:pl-8 pt-6 lg:pt-0 flex flex-col justify-center relative">
              <SlideUp offset="-300px 0px -300px 0px">
                {/* type01 */}
                <div className="">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    The Cooling Stage
                  </header>
                  <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
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
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution.
                    </span>{" "}
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>
        <Popular />
      </div>
    </div>
  );
};

export default roastingGuide;
