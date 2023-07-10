import React from "react";
import Hero from "../components/Hero";
import HeroImg from "../public/img_learn/Cover-bean.jpg";
import Image from "next/image";
import SlideUp from "../components/animate/SlideUp";
import FadeAndScale from "../components/animate/FadeAndScale";
import Popular from "../components/homeSections/Popular";
import SectionTitle from "../components/SectionTitle";

const ourBeans = () => {
  return (
    <div className="bg-bg-h">
      <Hero HeroImg={HeroImg} Herost={"Home >> Learn"} HeroPg={"Our Beans"} />
      <div>
        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 order-1 lg:order-2">
              <FadeAndScale offset="-300px 0px -300px 0px">
                <Image
                  className="w-full h-auto animate-fadeIn pb-4"
                  src="/img_learn/Arabica-Info.jpg"
                  alt="Image 1"
                  width={500}
                  height={200}
                  priority
                />
              </FadeAndScale>
            </div>

            <div className="lg:w-1/2 pr-0 lg:pr-8 flex flex-col justify-start relative order-2 lg:order-1">
              <SlideUp offset="-300px 0px -300px 0px">
                {/* type01 */}
                <div className="">
                  <SectionTitle title="Arabica Coffee Beans" />
                  <p className="mb-6 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is to make
                      proper coffee beans. It is a long established fact that a
                      reader will be distracted by the readable.
                    </span>
                  </p>
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    The Origin
                  </header>
                  <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is to make
                      proper coffee beans. It is a long established fact that a
                      reader will be distracted by the readable. It is a long
                      established fact
                    </span>
                  </p>
                </div>
                {/* type02 */}
                <div className="mt-6">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    The Taste
                  </header>
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is to make
                      proper coffee beans. It is a long established fact that a
                      reader will be distracted by the readable. It is a long
                      established fact.
                    </span>{" "}
                  </p>
                </div>
                {/* type03 */}
                <div className="mt-6">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    The Growing{" "}
                  </header>
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is to make
                      proper coffee beans. It is a long established fact that a
                      reader will be distracted by the readable. It is a long
                      established fact.
                    </span>{" "}
                  </p>
                </div>
                {/* type04 */}
                <div className="mt-6">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    Roast Level
                  </header>
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is to make
                      proper coffee beans. It is a long established fact that a
                      reader will be distracted by the readable. It is a long
                      established fact.
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
                  className="w-full h-auto animate-fadeIn pb-4"
                  src="/img_learn/Robusta-Info.jpg"
                  alt="Image 1"
                  width={500}
                  height={200}
                  loading="lazy"
                />
              </FadeAndScale>
            </div>

            <div className="lg:w-1/2 pl-0 lg:pl-8 flex flex-col justify-start relative">
              <SlideUp offset="-300px 0px -300px 0px">
                {/* type01 */}
                <div className="">
                  <SectionTitle title="Robusta Coffee Beans" />
                  <p className="mb-6 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is to make
                      proper coffee beans. It is a long established fact that a
                      reader will be distracted by the readable
                    </span>
                  </p>
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    The Origin
                  </header>
                  <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is to make
                      proper coffee beans. It is a long established fact that a
                      reader will be distracted by the readable. It is a long
                      established fact
                    </span>
                  </p>
                </div>
                {/* type02 */}
                <div className="mt-6">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    The Taste
                  </header>
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is to make
                      proper coffee beans. It is a long established fact that a
                      reader will be distracted by the readable. It is a long
                      established fact.
                    </span>
                  </p>
                </div>
                {/* type03 */}
                <div className="mt-6">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    The Growing
                  </header>
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is to make
                      proper coffee beans. It is a long established fact that a
                      reader will be distracted by the readable. It is a long
                      established fact.
                    </span>
                  </p>
                </div>
                {/* type04 */}
                <div className="mt-6">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    Roast Level
                  </header>
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is to make
                      proper coffee beans. It is a long established fact that a
                      reader will be distracted by the readable. It is a long
                      established fact.
                    </span>{" "}
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>
        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <FadeAndScale offset="-300px 0px -300px 0px">
                {/* type01 */}
                <div className="pb-4 sm:pb-0">
                  <SectionTitle title="Decaffeinato" />
                  <p className="text-justify text-secondary font-regular text-md font-raleway bg-cover bg-center animate-fadeIn relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is to make
                      proper coffee beans. It is a long established fact that a
                      reader will be distracted by the readable. It is a long
                      established fact that a reader will be distracted by the
                      readable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is to make proper coffee beans.
                      It is a long established fact that a reader will be
                      distracted by the readable. It is a long established fact
                      that a reader will be distracted by the readable content
                      of a page when looking at its layout. The point of using
                      Lorem Ipsum is to make proper coffee beans. It is a long
                      established fact that a reader will be distracted by the
                      readable.
                    </span>
                  </p>
                </div>
              </FadeAndScale>
            </div>

            <div className="lg:w-1/2 pl-0 lg:pl-8 flex flex-col justify-center relative">
              <FadeAndScale offset="-300px 0px -300px 0px">
                {/* type01 */}
                <div className="">
                  <SectionTitle title="Gourmet" />
                  <p className="text-justify text-secondary font-regular text-md font-raleway bg-cover bg-center animate-fadeIn relative">
                    <span className="relative z-10">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is to make
                      proper coffee beans. It is a long established fact that a
                      reader will be distracted by the readable. It is a long
                      established fact that a reader will be distracted by the
                      readable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is to make proper coffee beans.
                      It is a long established fact that a reader will be
                      distracted by the readable. It is a long established fact
                      that a reader will be distracted by the readable content
                      of a page when looking at its layout. The point of using
                      Lorem Ipsum is to make proper coffee beans. It is a long
                      established fact that a reader will be distracted by the
                      readable.
                    </span>
                  </p>
                </div>
              </FadeAndScale>
            </div>
          </div>
        </section>
        <Popular />
      </div>
    </div>
  );
};

export default ourBeans;
