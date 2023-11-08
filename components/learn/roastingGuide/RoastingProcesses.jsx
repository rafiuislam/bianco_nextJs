import React from "react";
import Image from "next/image";
import FadeAndScale from "../../animate/FadeAndScale";
import SlideUp from "../../animate/SlideUp";
import SectionTitle from "../../SectionTitle";

const RoastingProcesses = ({ alt }) => {
  return (
    <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24">
      <SectionTitle title="Roasting Processes" />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex flex-col justify-center relative">
          <FadeAndScale offset="-300px 0px -300px 0px">
            <Image
              className="w-full h-auto animate-fadeIn"
              src="/img_roasting/Roasting-1.jpg"
              alt={alt}
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
                  Drying Stage
                </header>
              </div>
              <p className="mt-1 mb-4 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center relative">
                <span className="relative z-10">
                  The first step in the coffee roasting process is the drying
                  stage. After the coffee cherries are harvested and the seeds
                  (coffee beans) are extracted, they contain a significant
                  amount of moisture. To prepare them for roasting, the beans
                  must be dried.
                </span>
              </p>
            </div>
            {/* type02 */}
            <div className="mt-6">
              <div style={{ fontVariant: "small-caps" }}>
                <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                  Browning Stage
                </header>
              </div>
              <p className="mt-1 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center animate-slideFromLeft relative">
                <span className="relative z-10">
                  Once the coffee beans have been adequately dried, they are
                  ready for the roasting process. The browning stage is marked
                  by the Maillard reaction, a complex series of reactions
                  between amino acids and sugars within the beans. As the beans
                  heat up, they gradually change colour, transitioning from
                  green to yellow and progressing to various shades of brown.
                  The specific colour and intensity achieved at this stage
                  depend on the desired roast level, ranging from light to dark.
                </span>{" "}
              </p>
            </div>
            {/* type03 */}
            <div className="mt-6">
              <div style={{ fontVariant: "small-caps" }}>
                <header className="text-justify text-secondary font-semi-bold text-xl font-raleway">
                  Development Stage
                </header>
              </div>
              <p className="mt-1 text-justify text-secondary font-regular text-base font-raleway bg-cover bg-center animate-slideFromLeft relative">
                <span className="relative z-10">
                  The development stage is the final phase in the coffee
                  roasting process. During this stage, the roasted beans
                  continue to undergo chemical changes that impact their
                  flavour, aroma, and overall quality. The length of the
                  development stage affects the level of acidity, bitterness,
                  body, and overall complexity of the coffee. It is during this
                  stage that flavours fully develop and the unique attributes of
                  the coffee are unlocked.
                </span>{" "}
              </p>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};

export default RoastingProcesses;
