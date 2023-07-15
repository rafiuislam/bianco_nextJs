import React from "react";
import Hero from "../components/Hero";
import HeroImg from "../public/img_bean/Cover-bean-min.jpg";
import Image from "next/image";
import SlideUp from "../components/animate/SlideUp";
import FadeAndScale from "../components/animate/FadeAndScale";
// import Popular from "../components/homeSections/Popular";
import SectionTitle from "../components/SectionTitle";

// const coffeeTypes = [
//   ["Arabica Brazil", "Arabica Ethiopia", " Colombian Supremo"],
//   ["Arabica Salvador", "Arabica Honduras", "Robusta India"],
//   ["Robusta Uganda", "Robusta Vietnam", "Robusta India-Kaapi Royale"],
// ];
const CoffeeType = [
  "Arabica Brazil",
  "Arabica Ethiopia",
  "Colombian Supremo",
  "Arabica Salvador",
  "Arabica Honduras",
  "Robusta India",
  "Robusta Uganda",
  "Robusta Vietnam",
  "Robusta India - Kaapi Royale",
];

// src="/img_learn/Arabica-Info.jpg"
const ourBeans = () => {
  return (
    <div className="bg-bg-h">
      <Hero HeroImg={HeroImg} Herost={"Home >> Learn"} HeroPg={"Our Beans"} />
      <div>
        {/* Bianco Beans Origins */}
        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24">
          <SectionTitle title="Bianco Beans Origins" />
          <div className="flex justify-center">
            <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 text-secondary font-regular text-md font-raleway">
              {CoffeeType.map((type, index) => (
                <li
                  className=""
                  key={index}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <FadeAndScale offset="-300px 0px -300px 0px">
                    <p className="text-left"> &diams; {type}</p>
                  </FadeAndScale>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Arabica Coffee Beans */}
        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24">
          <SectionTitle title="Arabica Coffee Beans" />
          <FadeAndScale offset="-300px 0px -300px 0px">
            <p className="lg:mb-6 pb-2 md:pb-0 text-center text-secondary font-regular text-md font-raleway bg-cover bg-center animate-fadeIn relative">
              <span className="relative z-10">
                Arabica coffee, scientifically known as Coffea arabica, is known
                for the exquisite flavour and captivating aromas. The Arabica
                beans are
                <br /> widely regarded as the gold standard in the world of
                coffee. The coffee has evolved into a symbol of excellence,
                captivating discerning
                <br /> taste buds with the vibrant coffee culture that thrives
                today.
              </span>
            </p>
          </FadeAndScale>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 pr-0 lg:pr-8 pt-6 lg:pt-0 flex flex-col justify-center relative order-2 lg:order-1 ">
              <SlideUp offset="-300px 0px -300px 0px">
                {/* type01   */}
                <div className="">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    The Origin
                  </header>
                  <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
                    <span className="relative z-10">
                      The origins of Arabica coffee can be traced back to the
                      highlands of Ethiopia, specifically to the region known as
                      Kaffa, around 1,000 BC. The Oromo people of Ethiopia were
                      the first to cultivate and consume coffee. <br /> In the
                      15th century, the cultivation and consumption of coffee
                      spread from Ethiopia to the neighbouring Arabian
                      Peninsula, particularly to the regions of Yemen and the
                      Red Sea coast. <br />
                      Today, Arabica coffee is prized for its delicate flavours,
                      lower caffeine content, and nuanced aromas. It remains a
                      staple in specialty coffee markets and is enjoyed by
                      coffee enthusiasts around the world.
                    </span>
                  </p>
                </div>
                {/* type02   */}
                <div className="mt-6">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    The Taste
                  </header>
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      Arabica coffee has a smooth, sweet, and complex flavour
                      with hints of chocolate, nuts, fruit, and berries. The
                      exact flavour profile will vary depending on the region
                      where the beans were grown, the roasting process, and the
                      brewing method.
                    </span>{" "}
                  </p>
                </div>
                {/* type03   */}
                <div className="mt-6">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    The Growing
                  </header>
                  <div className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    {/* change text style */}
                    <span className="relative z-10">
                      The ideal growing conditions for Arabica coffee are:{" "}
                    </span>
                    <br />
                    <ul className="pl-8">
                      <li>
                        <span className="text-justify text-secondary font-semi-bold text-sm font-raleway">
                          Altitude:
                        </span>{" "}
                        Arabica coffee grows best at altitudes of 1,200 to 2,000
                        meters (3,900 to 6,600 feet) above sea level.
                      </li>
                      <li>
                        <span className="text-justify text-secondary font-semi-bold text-sm font-raleway">
                          Temperature:
                        </span>{" "}
                        Arabica coffee prefers a cool, temperate climate with
                        average temperatures between 15 and 24 degrees Celsius
                        (59 and 75 degrees Fahrenheit).
                      </li>
                      <li>
                        <span className="text-justify text-secondary font-semi-bold text-sm font-raleway">
                          Rainfall:
                        </span>{" "}
                        Arabica coffee needs an annual rainfall of 1,500 to
                        2,500 millimeters (60 to 100 inches).
                      </li>
                      <li>
                        <span className="text-justify text-secondary font-semi-bold text-sm font-raleway">
                          Soil:
                        </span>{" "}
                        Arabica coffee grows best in well-drained, acidic soils
                        with a pH of 5.5 to 6.5.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* type04   */}
                <div className="mt-6">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    Roast Level
                  </header>
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      Bianco arabica coffee beans are roasted at a medium
                      temperature of 210°C–219°C. Medium-roasted coffees often
                      strike a balance between the natural flavours of the
                      coffee beans and the development of complex flavours
                      through the roasting process. This roasting process tends
                      to retain the original flavours of coffee. These
                      medium-bodied beans provide a smooth and satisfying
                      mouthfeel without overwhelming the palate.
                    </span>{" "}
                  </p>
                </div>
              </SlideUp>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2">
              <FadeAndScale offset="-300px 0px -300px 0px">
                <Image
                  className="w-full h-auto animate-fadeIn"
                  src="/img_bean/ArabicaBean.jpg"
                  alt="ArabicaBean"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </FadeAndScale>
            </div>
          </div>
        </section>

        {/* Robusta Coffee Beans */}
        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24">
          <SectionTitle title="Robusta Coffee Beans" />
          <FadeAndScale offset="-300px 0px -300px 0px">
            <p className="lg:mb-6 pb-2 md:pb-0 text-center text-secondary font-regular text-md font-raleway bg-cover bg-center animate-fadeIn relative">
              <span className="relative z-10">
                Robusta coffee, scientifically named Coffea canephora, has a
                history that is relatively more recent in comparison to Arabica
                coffee. With
                <br /> a history rooted in Africa and a growing presence in
                various regions worldwide, Robusta coffee beans offer a flavor
                profile and <br /> characteristics that set them apart.
              </span>
            </p>
          </FadeAndScale>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 ">
              <FadeAndScale offset="-300px 0px -300px 0px">
                <Image
                  className="w-full h-auto animate-fadeIn pb-4"
                  src="/img_bean/RobustaBean.jpg"
                  alt="RobustaBean"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </FadeAndScale>
            </div>

            <div className="lg:w-1/2 pl-0 lg:pl-8 flex flex-col justify-start relative">
              <SlideUp offset="-300px 0px -300px 0px">
                {/* type01   */}
                <div className="">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    The Origin
                  </header>
                  <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
                    <span className="relative z-10">
                      Robusta coffee is native to the western and central
                      regions of sub-Saharan Africa. It was first discovered and
                      documented in the Democratic Republic of Congo (formerly
                      known as Zaire) in the late 19th century by a French
                      botanist named Antoine Chevalier. The plant was initially
                      named Coffea robusta due to its robust and resilient
                      nature.
                      <br />
                      In the early 20th century, robusta coffee was introduced
                      to Southeast Asia, primarily Vietnam, which has become one
                      of the largest producers of robusta coffee in the world.
                    </span>
                  </p>
                </div>
                {/* type02   */}
                <div className="mt-6">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    The Taste
                  </header>
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      Robusta coffee has a bold, earthy flavour with hints of
                      chocolate, nuts, and wood. It is often described as being
                      more bitter and less acidic than Arabica coffee. Robusta
                      coffee also has a higher caffeine content than Arabica
                      coffee, at about 2.7% compared to 1.5%.
                    </span>{" "}
                  </p>
                </div>
                {/* type03   */}
                <div className="mt-6">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    The Growing
                  </header>
                  <div className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    {/* change text style */}
                    <span className="relative z-10">
                      The ideal growing conditions for Robusta coffee are:{" "}
                    </span>
                    <br />
                    <ul className="pl-8">
                      <li>
                        <span className="text-justify text-secondary font-semi-bold text-sm font-raleway">
                          Altitude:
                        </span>{" "}
                        Robusta coffee grows best at altitudes of 600 to 1,200
                        meters (2,000 to 3,900 feet) above sea level.
                      </li>
                      <li>
                        <span className="text-justify text-secondary font-semi-bold text-sm font-raleway">
                          Temperature:
                        </span>{" "}
                        Robusta coffee prefers a warm, humid climate with
                        average temperatures between 20 and 28 degrees Celsius
                        (68 and 82 degrees Fahrenheit).
                      </li>
                      <li>
                        <span className="text-justify text-secondary font-semi-bold text-sm font-raleway">
                          Rainfall:
                        </span>{" "}
                        Robusta coffee needs an annual rainfall of 1,500 to
                        2,500 millimeters (60 to 100 inches).
                      </li>
                      <li>
                        <span className="text-justify text-secondary font-semi-bold text-sm font-raleway">
                          Soil:
                        </span>{" "}
                        Robusta coffee grows best in well-drained, loamy soils
                        with a pH of 5.5 to 6.5.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* type04   */}
                <div className="mt-6">
                  <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                    Roast Level
                  </header>
                  <p className="mt-1 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                    <span className="relative z-10">
                      Robusta coffee is often roasted darker than Arabica
                      coffee, as this brings out the {"coffee's"} bold, earthy
                      flavour.
                    </span>{" "}
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Decaffeinato */}
        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 order-1 lg:order-2">
              <FadeAndScale offset="-300px 0px -300px 0px">
                <Image
                  className="w-full h-auto animate-fadeIn"
                  src="/img_bean/Decaffeinato.jpg"
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
                <div className="pb-4 sm:pb-0">
                  <SectionTitle title="Decaffeinato" align="start" />
                  <p className="text-justify text-secondary font-regular text-md font-raleway bg-cover bg-center animate-fadeIn relative">
                    <span className="relative z-10">
                      Decaffeinated coffee beans, often referred to as decaf,
                      offer the pleasure of enjoying the flavours, aroma, and
                      ritual of coffee without the stimulating effects of
                      caffeine. The decaffeination process typically removes
                      about 97–99% of the caffeine present in the beans, meaning
                      there may still be a small amount remaining. On average,
                      an 8-ounce cup of decaf coffee contains around 2–5
                      milligrams of caffeine, significantly less than regular
                      coffee, which typically contains 80–100 milligrams per
                      cup.
                    </span>
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* Gourmet */}
        <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24 md:pb-12">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 ">
              <FadeAndScale offset="-300px 0px -300px 0px">
                <Image
                  className="w-full h-auto animate-fadeIn"
                  src="/img_bean/Gourmet.jpg"
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
                  <SectionTitle title="Gourmet" align="start" />
                  <p className="text-justify text-secondary font-regular text-md font-raleway bg-cover bg-center animate-fadeIn relative">
                    <span className="relative z-10">
                      Bianco specialty gourmet coffee is sourced from the finest
                      plantations across the globe. Through a slow roasting
                      process, the beans preserve their distinctive qualities,
                      reflecting the nuances of the soil, climate, and
                      cultivation methods. True coffee connoisseurs can indulge
                      in its unique properties.
                    </span>
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>

        {/* <Popular /> */}
      </div>
    </div>
  );
};

export default ourBeans;
