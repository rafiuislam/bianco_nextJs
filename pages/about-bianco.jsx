import React from "react";
import Popular from "../components/homeSections/Popular";
import Image from "next/image";
import SlideUp from "../components/animate/SlideUp";
import FadeAndScale from "../components/animate/FadeAndScale";
import HeroImg from "../public/img_about/Cover-about.jpg";

const aboutBianco = () => {
  return (
    <div className="bg-bg-h">
      <section id="hero" className="w-full m-auto">
        <div className="relative h-[400px] ">
          <Image
            src={HeroImg}
            alt="Logo"
            layout="fill"
            objectFit="cover"
            className="relative w-full h-auto"
            data-speed="0.5"
            loading="eager"
            priority
          />

          <div className="h-full absolute inset-x-0 left-0 sm:text-left sm:ml-20 sm:pl-4 flex flex-col justify-center items-center md:items-start">
            {/* <SlideUp offset="-300px 0px -300px 0px"> */}
            <div className="text-5xl text-white font-medium animate-slideUpCubiBezier text-center">
              <p>BIANCAFFE</p>
            </div>
            {/* </SlideUp> */}

            <div className="">
              <p className="text-white font-regular text-base font-raleway animate-fadeIn text-center">
                The Best Artisanal Italian Coffee since 1932
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container  mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 ">
            <FadeAndScale offset="-300px 0px -300px 0px">
              <Image
                className="w-full h-auto animate-fadeIn"
                src="/img_about/1.jpg"
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
                <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
                  <span className="relative z-10">
                    As the steam from a freshly brewed coffee cup swirls, twirls
                    and dissipates, so do the wearies of the world as you take
                    in the comforting warmth, breathe in the invigorating aroma
                    and savour the delicious taste of an impeccable brew
                    extracted from expertly roasted coffee beans. In these
                    moments, the world can wait. In these ‘attimi di cafe’, the
                    coffee is to be relished and cherished.
                  </span>
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      <section>
        <FadeAndScale offset="-300px 0px -300px 0px">
          <h1 className="lg:mb-6 pb-2 md:pb-0 text-center text-secondary font-medium text-2xl sm:text-4xl font-title animate-fadeIn">
            “Take your time; savour the moment and give in to the lush, <br />{" "}
            velvety comfort of coffee!”
          </h1>
        </FadeAndScale>
      </section>

      <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 order-1 lg:order-2">
            <FadeAndScale offset="-300px 0px -300px 0px">
              <Image
                className="w-full h-auto animate-fadeIn"
                src="/img_about/2.jpg"
                alt="Image 2"
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
                <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
                  <span className="relative z-10">
                    With this ethos, Bianco Coffee - the Salerno, Naples based
                    roastery started its operations in 1932, and over time, it
                    has gone on to become ‘il principale ambasciatore’ of
                    Italian coffee beans across the globe. <br /> <br /> The
                    rich, warm taste of Bianco Coffee beans is now enjoyed in
                    30+ countries worldwide. With almost a century of history,
                    experience and expertise, the Bianco Coffee moniker exudes
                    prestige, heritage and legacy like no other in the already
                    enriched Italian coffee lore.
                  </span>
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      <section className="container  mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 ">
            <FadeAndScale offset="-300px 0px -300px 0px">
              <Image
                className="w-full h-auto animate-fadeIn"
                src="/img_about/3.jpg"
                alt="Image 3"
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
                <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
                  <span className="relative z-10">
                    Sourcing coffee beans from the finest cultivators of the
                    famed Central and South American coffee belt as well as
                    Africa and Asia, Bianco Coffee implements state of the art
                    roasting techniques and processes in its modern roastery in
                    Naples. By using innovative methods that combine historical
                    knowledge and expertise with contemporary technology, Bianco
                    Coffee beans not only retain their original unique
                    characteristics but are also enhanced in every way.
                  </span>
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      <section>
        <FadeAndScale offset="-300px 0px -300px 0px">
          <h1 className="lg:mb-6 pb-2 md:pb-0 text-center text-secondary font-medium text-2xl sm:text-4xl font-title animate-fadeIn">
            “From aroma and flavour profile to the premium taste and
            invigorating <br />
            warmth - no one does coffee beans better than Bianco!”
          </h1>
        </FadeAndScale>
      </section>

      <section>
        <FadeAndScale offset="-300px 0px -300px 0px">
          <h1 className="lg:mb-6 pb-2 md:pb-0 pt-6 sm:pt-12 text-center text-secondary font-regular text-sm sm:base font-title animate-fadeIn">
            And Bianco Bangladesh is here to introduce the same rich taste,{" "}
            <br />
            divine warmth and proud lineage of Bianco Coffee beans to the coffee
            connoisseurs of Bangladesh
          </h1>
        </FadeAndScale>
      </section>

      <Popular />
    </div>
  );
};

export default aboutBianco;
