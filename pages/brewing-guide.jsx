import React from "react";
import Image from "next/image";
import Hero from "../components/Hero";
import HeroImg from "../public/img_brewing/Cover-brewing-min.jpg";
// import Popular from "../components/homeSections/Popular";
import SectionTitle from "../components/SectionTitle";
import FadeAndScale from "../components/animate/FadeAndScale";
import SlideUp from "../components/animate/SlideUp";
import { NextSeo } from "next-seo";
import { getSeoByPageName } from "../services/auth";

const brewingGuide = ({ seo }) => {
  const SEO = {
    title: seo.attributes.title,
    description: seo.attributes.desc,

    openGraph: {
      title: seo.attributes.title,
      description: seo.attributes.desc,
      url: seo.attributes.pageurl,
    },
  };

  const tips = [
    "Freshness is key to a flavorful cup of coffee. Always use freshly roasted beans and grind them just before brewing to grab the best aroma.",
    "Store your beans in cold airtight containers.",
    "Ensure that the coffee beans are ground to the ideal size for optimal extraction.",
    "Keep track of the recommended times for your chosen brewing method.",
    "Explore different coffee-to-water ratios and brewing methods to find your preferred flavor profile.",
  ];
  
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
          HeroPg={"Brewing Guide"}
          alt={seo.attributes.title}
        />
        <section className="container mx-auto mt-4 px-4 sm:pb-2 py-4 md:px-24">
          <p className="sm:text-center px-0 lg:px-56 text-justify text-secondary font-regular text-md font-raleway bg-cover bg-center animate-fadeIn relative">
            <span className="relative z-10">
              Brewing coffee is both an art and a science, and with a little
              knowledge and practice, you can unlock the hidden aromas and
              flavours trapped within those humble coffee beans. Its a nuanced
              process that can greatly influence the taste, aroma, and overall
              enjoyment of your coffee.
            </span>
          </p>
        </section>
        {/* 1 */}
        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24">
          <SectionTitle title="Know Your Equipment" />
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 pr-0 lg:pr-8 pt-6 lg:pt-0 flex flex-col justify-center relative order-2 lg:order-1 ">
              <SlideUp offset="-300px 0px -300px 0px">
                {/* type01   */}
                <div className="">
                  <div style={{ fontVariant: "small-caps" }}>
                    <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                      Coffee Beans
                    </header>
                  </div>
                  <p className="mt-1 mb-4 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center relative">
                    <span className="relative z-10">
                      Choose freshly roasted beans of your preference. Consider
                      the origin, roast level, and flavour notes.
                    </span>
                  </p>
                </div>
                {/* type02   */}
                <div className="mt-6">
                  <div style={{ fontVariant: "small-caps" }}>
                    <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                      Grinder{" "}
                    </header>
                  </div>
                  <p className="mt-1 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      Used to grind whole coffee beans into the desired particle
                      size for brewing. Options include manual grinders, blade
                      grinders, and burr grinders.
                    </span>{" "}
                  </p>
                </div>
                {/* type03   */}
                <div className="mt-6">
                  <div style={{ fontVariant: "small-caps" }}>
                    <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                      Coffee Maker
                    </header>
                  </div>
                  <div className="mt-1 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    {/* change text style */}
                    <span className="relative z-10">
                      There are various types of coffee makers available,
                      including:{" "}
                    </span>
                    <br />
                    <ul className="pl-8">
                      <li>
                        <span className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                          Drip Coffee Maker:
                        </span>{" "}
                        Automatic machines that heat water and drip it over
                        coffee grounds.
                      </li>
                      <li>
                        <span className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                          Pour-Over Coffee Maker:
                        </span>{" "}
                        Manual devices, such as a Chemex or V60, where hot water
                        is poured over coffee grounds in a controlled manner.
                      </li>
                      <li>
                        <span className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                          French Press:
                        </span>{" "}
                        A plunger-style device that allows coffee grounds to
                        steep in hot water before being pressed down.
                      </li>
                      <li>
                        <span className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                          Espresso Machine:
                        </span>{" "}
                        Used to make concentrated coffee by forcing hot water
                        through finely ground coffee under pressure.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* type04   */}
                <div className="mt-6">
                  <div style={{ fontVariant: "small-caps" }}>
                    <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                      Filter
                    </header>
                  </div>
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      Different filter options are available for coffee brewing,
                      such as paper, metal, cloth, and mesh.
                    </span>{" "}
                  </p>
                </div>
                {/* type05   */}
                <div className="mt-6">
                  <div style={{ fontVariant: "small-caps" }}>
                    <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                      Water
                    </header>
                  </div>
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      {/* change text later */}
                      Generally, the ideal water temperature range for brewing
                      coffee is between 195°F (90°C) and 205°F (96°C).
                    </span>{" "}
                  </p>
                </div>
                {/* type06   */}
                <div className="mt-6">
                  <div style={{ fontVariant: "small-caps" }}>
                    <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                      Measuring Tools
                    </header>
                  </div>
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      A scale or coffee scoop to measure the coffee and water
                      accurately according to required ratio.
                    </span>{" "}
                  </p>
                </div>
                {/* type07   */}
                <div className="mt-6">
                  <div style={{ fontVariant: "small-caps" }}>
                    <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                      Milk Frother
                    </header>
                  </div>
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      For creating foam or steaming milk for lattes or
                      cappuccinos.
                    </span>{" "}
                  </p>
                </div>
              </SlideUp>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col justify-center relative">
              <FadeAndScale offset="-300px 0px -300px 0px">
                <Image
                  className="w-full h-auto animate-fadeIn"
                  src="/img_brewing/Step1.jpg"
                  alt={seo.attributes.alt}
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </FadeAndScale>
            </div>
          </div>
        </section>
        {/* 2 */}
        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24">
          <SectionTitle title="Measurements of Ingredients" />
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 ">
              <FadeAndScale offset="-300px 0px -300px 0px">
                <Image
                  className="w-full h-auto animate-fadeIn"
                  src="/img_brewing/Step2.jpg"
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
                  <p className="mt-1 mb-4 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center relative">
                    <span className="relative z-10">
                      The basic ratio of brewing coffee is 1:16, which means 1
                      part coffee to 16 parts water, or you can measure using
                      weight around 15 grams (0.53 ounces) of coffee for every
                      250 milliliters (8.5 fluid ounces) of water. The amount of
                      milk, sugar, and other taste-enhancing objects varies
                      based on personal preference
                    </span>
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>
        {/* 3 */}
        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24">
          <SectionTitle title="Grinding" />
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 order-1 lg:order-2">
              <FadeAndScale offset="-300px 0px -300px 0px">
                <Image
                  className="w-full h-auto animate-fadeIn"
                  src="/img_brewing/Step3.jpg"
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
                  <p className="mt-1 mb-4 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center relative">
                    <span className="relative z-10">
                      Adjust the grind size based on your brewing method: coarse
                      for French press, medium for drip or pour-over, fine for
                      espresso. Measure the desired amount of coffee beans and
                      grind them accordingly. Use short bursts if using a blade
                      grinder. Aim for uniformity in grind size.
                    </span>
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>
        {/* 4 */}
        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24">
          <SectionTitle title="Different Methods of Brewing" />
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 flex flex-col justify-center relative">
              <FadeAndScale offset="-300px 0px -300px 0px">
                <Image
                  className="w-full h-auto animate-fadeIn"
                  src="/img_brewing/Step4.jpg"
                  alt={seo.attributes.alt04}
                  width={500}
                  height={100}
                  loading="lazy"
                />
              </FadeAndScale>
            </div>

            <div className="lg:w-1/2 pl-0 lg:pl-8 pt-6 lg:pt-0 flex flex-col justify-center relative">
              <SlideUp offset="-300px 0px -300px 0px">
                {/* type01 */}
                {/* <p className="mb-6 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
                <span className="relative z-10">
                  There are various methods of brewing coffee, each with its own
                  unique characteristics. Here are some popular methods:
                </span>
              </p> */}
                <div className="">
                  <div style={{ fontVariant: "small-caps" }}>
                    <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                      Drip Brewing
                    </header>
                  </div>
                  <p className="mt-1 mb-4 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center relative">
                    <span className="relative z-10">
                      Drip coffee brewing uses automatic drip coffee makers that
                      pour hot water over a filter containing coffee grounds.
                      Its convenient and produces a clean, balanced cup of
                      coffee
                    </span>
                  </p>
                </div>
                {/* type02 */}
                <div className="mt-6">
                  <div style={{ fontVariant: "small-caps" }}>
                    <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                      French Press
                    </header>
                  </div>
                  <p className="mt-1 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      French press is a manual brewing method that involves
                      steeping coffee grounds in hot water for several minutes
                      and then pressing a plunger to separate the grounds. It
                      produces a full-bodied, rich cup with more oils and
                      sediment.
                    </span>{" "}
                  </p>
                </div>
                {/* type03 */}
                <div className="mt-6">
                  <div style={{ fontVariant: "small-caps" }}>
                    <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                      Pour-Over
                    </header>
                  </div>
                  <p className="mt-1 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      The pour over brewing method involves manually pouring hot
                      water over a filter containing coffee grounds in a slow,
                      controlled manner. It allows for precise extraction and
                      highlights the nuanced flavours of the coffee.
                    </span>{" "}
                  </p>
                </div>
                {/* type04 */}
                <div className="mt-6">
                  <div style={{ fontVariant: "small-caps" }}>
                    <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                      Espresso
                    </header>
                  </div>
                  <p className="mt-1 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      Espresso is made by forcing hot water through finely
                      ground, compacted coffee under high pressur e. It results
                      in a concentrated, strong shot of coffee with a layer of
                      crema on top. Espresso forms the base for many other
                      coffee beverages.
                    </span>{" "}
                  </p>
                </div>
                {/* type05 */}
                <div className="mt-6">
                  <div style={{ fontVariant: "small-caps" }}>
                    <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                      Aeropress
                    </header>
                  </div>
                  <p className="mt-1 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      This is a versatile, portable brewing method that combines
                      elements of immersion and pressure. Coffee and water are
                      mixed in a chamber and then pressed through a filter.
                    </span>{" "}
                  </p>
                </div>
                {/* type06 */}
                <div className="mt-6">
                  <div style={{ fontVariant: "small-caps" }}>
                    <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                      Cold Brew
                    </header>
                  </div>
                  <p className="mt-1 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      Cold brew involves steeping coffee grounds in cold or room
                      temperature water for an extended period (12-24 hours).
                      The result is a smooth, low-acidity coffee concentrate
                      that is often diluted before consumption.
                    </span>{" "}
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>
        {/* 5 */}
        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24">
          <SectionTitle title="Serve & Enjoy!" />
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col justify-center relative">
              <FadeAndScale offset="-300px 0px -300px 0px">
                <Image
                  className="w-full h-auto animate-fadeIn"
                  src="/img_brewing/Step-0005.jpg"
                  alt={seo.attributes.alt05}
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
                  <p className="mt-1 mb-4 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center relative">
                    <span className="relative z-10">
                      Once the brewing is complete, carefully remove the carafe
                      from the coffee maker. Pour the coffee into your favourite
                      mug. Add any desired milk, cream, or sweetener to taste.
                      Take a moment to appreciate the flavours of freshly brewed
                      coffee.
                    </span>
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>
        {/* 6 */}
        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24 md:pb-12">
          <SectionTitle title="Good Coffee Brewing Habits" />
          <ul className="sm:text-center text-left">
            {tips.map((tip, index) => (
              <li
                key={index}
                className="mb-6 text-secondary font-regular text-base font-raleway bg-cover bg-center relative animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {" "}
                <FadeAndScale offset="-300px 0px -300px 0px">
                  &diams; {tip}
                </FadeAndScale>
              </li>
            ))}
          </ul>
        </section>
        {/* <Popular /> */}
      </div>
    </>
  );
};

export default brewingGuide;

export async function getStaticProps() {
  const seo = await getSeoByPageName("brewingGuide");
  return {
    props: { seo },
  };
}
