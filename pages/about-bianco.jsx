import React from "react";
// import Popular from "../components/homeSections/Popular";
import Image from "next/image";
import SlideUp from "../components/animate/SlideUp";
import FadeAndScale from "../components/animate/FadeAndScale";
import HeroImg from "../public/img_about/Cover-about-min.jpg";
import Hero from "../components/Hero";
import { NextSeo } from "next-seo";
import { getSeoByPageName } from "../services/auth";

const aboutBianco = ({ seo, manage }) => {
  const SEO = {
    title: seo.attributes.title,
    description: seo.attributes.desc,

    openGraph: {
      title: seo.attributes.title,
      description: seo.attributes.desc,
      url: seo.attributes.pageurl,
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <div
        className="bg-bg-h"
        onCopy={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Hero
          HeroImg={HeroImg}
          Herost={"Home >> Learn"}
          HeroPg={"Bianco"}
          alt={seo.attributes.alt}
        />

        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 ">
              <FadeAndScale offset="-300px 0px -300px 0px">
                <Image
                  className="w-full h-auto animate-fadeIn"
                  src="/img_about/1.jpg"
                  alt={seo.attributes.alt02}
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
                  <div style={{ fontVariant: "small-caps" }}>
                    <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                      Attimi Di Caffe
                    </header>
                  </div>
                  <div className="mt-1 mb-4 text-secondary font-regular text-base font-raleway bg-cover bg-center relative">
                    <span className="relative z-10 text-justify">
                      As the steam from a freshly brewed coffee cup swirls,
                      twirls and dissipates, so do the wearies of the world as
                      you take in the comforting warmth, breathe in the
                      invigorating aroma and savor the delicious taste of an
                      impeccable brew extracted from expertly roasted coffee
                      beans. In these moments, the world can wait. In these{" "}
                      {"‘attimi di caffe’"}, the coffee is to be relished and
                      cherished.
                    </span>{" "}
                    <br /> <br />
                    <header className="lg:mb-6 pb-2 md:pb-0 text-center text-secondary font-medium text-xl sm:text-2xl font-title animate-fadeIn">
                      “Take your time; savour the moment and give in to the
                      lush, velvety comfort of coffee!”
                    </header>
                    <span className="relative z-10 ">
                      With this ethos, Bianco Coffee - the Salerno, Naples based
                      roastery started its operations in 1932, and over time, it
                      has gone on to become {"‘il principale ambasciatore’"} of
                      Italian coffee beans across the globe.
                    </span>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 order-1 lg:order-2">
              <FadeAndScale offset="-300px 0px -300px 0px">
                <Image
                  className="w-full h-auto animate-fadeIn"
                  src="/img_about/2.jpg"
                  alt={seo.attributes.alt03}
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
                  <div style={{ fontVariant: "small-caps" }}>
                    <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                      The Legacy
                    </header>
                  </div>
                  <p className="mt-1 mb-4 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center relative">
                    <span className="relative z-10">
                      Over the years, Bianco Coffee continued to flourish,
                      gaining recognition not only within Italy but also
                      internationally. The {"brand's"} unwavering commitment to
                      sourcing the highest quality beans and adhering to
                      time-honored roasting techniques attracted coffee
                      enthusiasts and connoisseurs from around the globe.
                      <br /> <br /> The rich, warm taste of Bianco Coffee beans
                      is now enjoyed in 30+ countries worldwide. With almost a
                      century of history, experience and expertise, the Bianco
                      Coffee moniker exudes prestige, heritage and legacy like
                      no other in the already enriched Italian coffee lore.
                    </span>
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24 md:pb-12">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 ">
              <FadeAndScale offset="-300px 0px -300px 0px">
                <Image
                  className="w-full h-auto animate-fadeIn"
                  src="/img_about/About-Bianco-Sepia.jpg"
                  alt={seo.attributes.alt04}
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </FadeAndScale>
            </div>

            <div className="lg:w-1/2 pl-0 lg:pl-8 pt-6 lg:pt-0 flex flex-col justify-center relative">
              <SlideUp offset="-300px 0px -300px 0px">
                {/* type01 */}
                <div className="pb-2">
                  <div style={{ fontVariant: "small-caps" }}>
                    <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                      Artisanal Craftsmanship
                    </header>
                  </div>
                  <p className="mt-1 mb-6 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center relative">
                    <span className="relative z-10">
                      Sourcing coffee beans from the finest cultivators of the
                      famed Central and South American coffee belt as well as
                      Africa and Asia, Bianco Coffee implements state of the art
                      roasting techniques and processes in its modern roastery
                      in Naples. By using innovative methods that combine
                      historical knowledge and expertise with contemporary
                      technology, Bianco Coffee beans not only retain their
                      original unique characteristics but are also enhanced in
                      every way.From aroma and flavour profile to the premium
                      taste and invigorating warmth - no one does coffee beans
                      better than Bianco!
                    </span>
                  </p>
                </div>
                <div className="">
                  <p className="mt-1 mb-4 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center relative">
                    <span className="relative">
                      And{" "}
                      <span className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                        Bianco Bangladesh{" "}
                      </span>
                      is here, to introduce the same rich taste, divine warmth
                      and proud lineage of Bianco Coffee beans to the coffee
                      connoisseurs of Bangladesh.
                    </span>
                    <br /> <br />
                    <span className="relative ">
                      Mirsaige, the sole distributor of Bianco Coffee in
                      Bangladesh, aims to cultivate an authentic Italian coffee
                      culture throughout the country by offering the finest
                      Italian coffee beans.
                    </span>
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>
        <section className={manage.attributes.title}>
          <div className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24 md:pb-12">
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center relative">
              {manage.attributes.desc}
            </p>
          </div>
        </section>

        {/* <Popular /> */}
      </div>
    </>
  );
};

export default aboutBianco;

export async function getStaticProps() {
  const seo = await getSeoByPageName("aboutBianco");
  const manage = await getSeoByPageName("managementInfo");
  return {
    props: { seo, manage },
  };
}
