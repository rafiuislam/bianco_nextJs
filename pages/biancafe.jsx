import React from "react";
import Hero from "../components/Hero";
import HeroImg from "../public/img/Take-Your-Time-bg.jpg";
import FadeAndScale from "../components/animate/FadeAndScale";
import SlideFromRight from "../components/animate/SlideFromRight";
import Popular from "../components/homeSections/Popular";
import Image from "next/image";
import Link from "next/link";
import SlideFromLeft from "../components/animate/SlideFromLeft";
import SlideUp from "../components/animate/SlideUp";
import Instagram from "../components/homeSections/Instagram";

const biancafe = () => {
  return (
    <div className="bg-bg-h">
      <Hero HeroImg={HeroImg} Herost={"Home"} HeroPg={"BIANCAFFE"} />
      <section className="container mx-auto mt-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12">
        <p className="text-justify text-secondary font-regular text-md font-raleway bg-cover bg-center animate-fadeIn relative">
          <span className="relative z-10">
            Coffee is not meant to be ‘just’ drunk. It is meant to be
            experienced. With that in mind, Biancaffe - the cafe division of
            Bianco Coffee opened its doors to help spread the art and culture of
            Italian coffee throughout the world. <br /> <br /> Biancaffe Dhaka
            aims to be ‘the’ cafe in Dhaka for coffee connoisseurs of the city
            to come together and experience the true essence of Italian coffee
            culture and excellence. Whether some much needed solo R&R or
            decompressing with colleagues and friends or even to catch up on
            some work over a few tantalizing cups of freshly brewed premium
            Italian coffee - Biancaffe is the coffee shop in Dhaka to be at!{" "}
            <br /> <br /> With a team of highly skilled baristas, Biancaffe
            Dhaka takes pride in serving meticulously crafted Italian coffee
            that satisfies even the most discerning palates. From the classic
            espresso to velvety cappuccinos and lattes, every sip transports
            patrons to the streets of Italy. To complement the extraordinary
            coffee offerings, Biancaffe Dhaka also presents a delectable array
            of pastries and snacks. These mouthwatering delights pair perfectly
            with the aromatic beverages, completing the ultimate Italian coffee
            experience <br /> <br /> Whether you are a coffee connoisseur or
            simply seeking a cozy spot to relax, this is the go-to coffee shop
            in Dhaka. Immerse yourself in the world of Italian coffee art and
            culture, and savor every moment at this captivating café in Dhaka.
          </span>
        </p>
      </section>
      <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12">
        <SlideUp offset="-300px 0px -300px 0px">
          <h1 className="lg:mb-6 text-center text-primary font-medium text-5xl font-title">
            Our Cafes
          </h1>
        </SlideUp>
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

          <div className="lg:w-1/2 pr-0 lg:pr-8 flex flex-col justify-center relative order-2 lg:order-1">
            <SlideFromLeft offset="-300px 0px -300px 0px">
              {/* type01 */}
              <div className="">
                <h1 className="md:text-justify mx-auto text-center pb-2 md:pb-0 text-secondary font-semi-bold text-4xl font-raleway">
                  GULSHAN
                </h1>
                <h2 className="pb-2 sm:pb-4 text-secondary font-semi-bold text-lg font-raleway">
                  House #0a, Road #a0, Coﬀee Shopping Tower, Gulshan 2 Circle,
                  Dhaka, Bangladesh
                </h2>
                <p className="mt-1 mb-6 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                  <span className="relative z-10">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using `{"Content here, content here"}`, making it look like
                    readable English.
                  </span>
                </p>
                <h2 className="mb-6 text-justify text-secondary font-semi-bold text-lg font-raleway">
                  Opening Hours- 11am to 10.30pm
                </h2>

                <div className="mt-6 overflow-y-hidden md:mt-4 mb-4 text-center md:text-start">
                  <FadeAndScale offset="-300px 0px -300px 0px">
                    <Link href={``}>
                      <button className="font-medium text-base font-raleway relative border border-secondary bg-transparent py-2.5 px-5 uppercase text-secondary transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-10">
                        Click here for Menu
                      </button>
                    </Link>
                  </FadeAndScale>
                </div>
              </div>
            </SlideFromLeft>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12">
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

          <div className="lg:w-1/2 pl-0 lg:pl-8 flex flex-col justify-center relative">
            <SlideFromRight offset="-300px 0px -300px 0px">
              {/* type01 */}
              <div className="">
                <h1 className="md:text-justify mx-auto text-center pb-2 md:pb-0 text-secondary font-semi-bold text-4xl font-raleway">
                  UTTARA
                </h1>
                <h2 className="pb-2 sm:pb-4 text-secondary font-semi-bold text-lg font-raleway">
                  House #a0, Road #oa, Sector- 12, Coﬀee Shopping Tower, Dhaka,
                  Bangladesh
                </h2>
                <p className="mt-1 mb-6 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center animate-slideFromLeft relative">
                  <span className="relative z-10">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using `{"Content here, content here"}`, making it look like
                    readable English.
                  </span>
                </p>
                <h2 className="mb-6 text-justify text-secondary font-semi-bold text-lg font-raleway">
                  Opening Hours- 11am to 10.30pm
                </h2>
                <div className="mt-6 overflow-y-hidden md:mt-4 mb-4 text-center md:text-start">
                  <FadeAndScale offset="-300px 0px -300px 0px">
                    <Link href={``}>
                      <button className="font-medium text-base font-raleway relative border border-secondary bg-transparent py-2.5 px-5 uppercase text-secondary transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-10">
                        Click here for Menu
                      </button>
                    </Link>
                  </FadeAndScale>
                </div>
              </div>
            </SlideFromRight>
          </div>
        </div>
      </section>
      <Instagram />
      <Popular />
    </div>
  );
};

export default biancafe;
