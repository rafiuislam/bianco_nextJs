import React from "react";
import Image from "next/image";
import SlideUp from "../../animate/SlideUp";
import FadeAndScale from "../../animate/FadeAndScale";
import SectionTitle from "../../SectionTitle";

const RoastingTypes = ({ alt }) => {
  return (
    <section className="container  mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24">
      <SectionTitle title="Roasting Types" />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 pr-0 lg:pr-8 pt-6 lg:pt-0 flex flex-col justify-center relative order-2 lg:order-1 ">
          <SlideUp offset="-300px 0px -300px 0px">
            {/* type01   */}
            <div className="">
              <div style={{ fontVariant: "small-caps" }}>
                <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                  Light Roast
                </header>
              </div>
              <p className="mt-1 mb-4 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center relative">
                <span className="relative z-10">
                  Light roast coffee is renowned for its delicate and bright
                  flavours. During the roasting process, the beans are heated
                  for a shorter duration, preserving their vibrant nuances. The
                  beans typically appear light brown and have a dry surface with
                  no oil present.
                </span>
              </p>
            </div>
            {/* type02   */}
            <div className="mt-6">
              <div style={{ fontVariant: "small-caps" }}>
                <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                  Medium Roast
                </header>
              </div>
              <p className="mt-1 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center animate-slideFromLeft relative">
                <span className="relative z-10">
                  Medium roast strikes a balance between the bright acidity of
                  light roasts and the richer, more caramelised flavours of
                  darker roasts. Beans roasted to a medium level exhibit a
                  medium brown colour and a slightly oily surface.
                </span>{" "}
              </p>
            </div>
            {/* type03   */}
            <div className="mt-6">
              <div style={{ fontVariant: "small-caps" }}>
                <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                  Medium Dark Roast
                </header>
              </div>
              <p className="mt-1 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center animate-slideFromLeft relative">
                <span className="relative z-10">
                  Medium-dark roast, sometimes referred to as full city or
                  Vienna roast, takes the beans a step further into the roasting
                  process. This roast level results in a darker brown colour
                  with a noticeable oily surface. The beans are roasted longer,
                  allowing for the development of deeper caramelization and a
                  fuller body. Medium-dark roast coffees exhibit a more
                  pronounced bitterness and reduced acidity compared to lighter
                  roasts.
                </span>{" "}
              </p>
            </div>
            {/* type04   */}
            <div className="mt-6">
              <div style={{ fontVariant: "small-caps" }}>
                <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                  Dark Roast
                </header>
              </div>
              <p className="mt-1 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center animate-slideFromLeft relative">
                <span className="relative z-10">
                  Dark roast coffee, renowned for its intense and robust
                  flavours, captivates the taste buds of coffee connoisseurs
                  around the world. With its deep, dark colour and oily surface,
                  dark roast coffee represents the pinnacle of roasting, where
                  the beans undergo an extended exposure to heat, resulting in a
                  unique set of characteristics.
                </span>{" "}
              </p>
            </div>
          </SlideUp>
        </div>

        <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col justify-center relative">
          <FadeAndScale offset="-300px 0px -300px 0px">
            <Image
              className="w-full h-auto animate-fadeIn"
              src="/img_roasting/RoastingType.jpg"
              alt={alt}
              width={500}
              height={500}
              loading="lazy"
            />
          </FadeAndScale>
        </div>
      </div>
    </section>
  );
};

export default RoastingTypes;
