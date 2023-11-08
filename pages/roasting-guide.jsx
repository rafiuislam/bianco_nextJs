import React from "react";
import Hero from "../components/Hero";
import HeroImg from "../public/img_roasting/Cover-roast-min.jpg";
import Image from "next/image";
import SlideUp from "../components/animate/SlideUp";
import FadeAndScale from "../components/animate/FadeAndScale";
import RoastingTypes from "../components/learn/roastingGuide/RoastingTypes";
import RoastingProcesses from "../components/learn/roastingGuide/RoastingProcesses";
import { NextSeo } from "next-seo";
import { getSeoByPageName } from "../services/auth";

const roastingGuide = ({ seo }) => {
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
          HeroPg={"Roasting Guide"}
          alt={seo.attributes.alt}
        />
        <div>
          <RoastingTypes alt={seo.attributes.alt02} />
          <RoastingProcesses alt={seo.attributes.alt03} />

          <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col justify-center relative">
                <FadeAndScale offset="-300px 0px -300px 0px">
                  <Image
                    className="w-full h-auto animate-fadeIn"
                    src="/img_roasting/Roasting-2.jpg"
                    alt={seo.attributes.alt04}
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
                        Roast Time
                      </header>
                    </div>
                    <p className="mt-1 mb-4 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center relative">
                      <span className="relative z-10">
                        Coffee roast time varies depending on the desired roast
                        level, the specific coffee beans being roasted, and the
                        preferences of the roaster. Light roast coffee is
                        generally roasted for a shorter duration compared to
                        darker roasts. The roast time typically ranges between 8
                        to 10 minutes. The roast time of medium roast usually
                        falls between 10 to 12 minutes. Dark roast coffee
                        requires the longest roast time among the various roast
                        levels. The beans are typically roasted for around 14 to
                        16 minutes, or sometimes even longer.
                      </span>
                    </p>
                  </div>
                  {/* type02 */}
                  <div className="mt-6">
                    <div style={{ fontVariant: "small-caps" }}>
                      <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                        Roast Degree
                      </header>
                    </div>
                    <p className="mt-1 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center animate-slideFromLeft relative">
                      <span className="relative z-10">
                        Coffee roast degree refers to the specific level of
                        darkness to which coffee beans are roasted. Bianco
                        coffee beans are roasted medium at 210° C - 219 ° C
                        temperature.
                      </span>{" "}
                    </p>
                  </div>
                </SlideUp>
              </div>
            </div>
          </section>

          <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24 md:pb-12">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 flex flex-col justify-center relative">
                <FadeAndScale offset="-300px 0px -300px 0px">
                  <Image
                    className="w-full h-auto animate-fadeIn"
                    src="/img_roasting/Roasting-03.jpg"
                    alt={seo.attributes.alt05}
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
                        The Cooling Stage
                      </header>
                    </div>
                    <p className="mt-1 mb-4 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center relative">
                      <span className="relative z-10">
                        This stage is crucial in preventing the beans from
                        continuing to roast and allows them to cool down rapidly
                        to stabilize their flavours and aromas. By rapidly
                        reducing the temperature, the coffee beans are preserved
                        at their intended roast level, ensuring the desired
                        flavour and aroma development. Cooling the beans
                        effectively stops the internal chemical reactions that
                        occur during roasting.
                      </span>
                    </p>
                  </div>
                  {/* type02 */}
                  <div className="mt-6">
                    <div style={{ fontVariant: "small-caps" }}>
                      <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                        The Tasting Stage
                      </header>
                    </div>
                    <p className="mt-1 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center relative">
                      <span className="relative z-10">
                        The primary purpose of the tasting stage is to
                        understand and appreciate the unique characteristics of
                        a coffee. This is where the true flavours and quality of
                        the freshly roasted coffee are assessed. Skilled cuppers
                        or coffee enthusiasts take part in a special tasting
                        technique known as cupping. They carefully examine the{" "}
                        {"coffee's"} aroma, fragrance, acidity, body, flavour
                        notes, and aftertaste. To fully savour the experience,
                        they slurp the coffee from spoons, allowing it to coat
                        their taste buds and reveal its intricate flavours.
                        Through this process, they can detect any imperfections,
                        evaluate the overall flavour profile, and determine
                        whether the coffee is suitable for specific brewing
                        methods or blends.
                      </span>{" "}
                    </p>
                  </div>
                </SlideUp>
              </div>
            </div>
          </section>
          {/* <Popular /> */}
        </div>
      </div>
    </>
  );
};

export default roastingGuide;

export async function getStaticProps() {
  const seo = await getSeoByPageName("roastingGuide");
  return {
    props: { seo },
  };
}
