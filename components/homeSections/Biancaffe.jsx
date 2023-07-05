"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "../animate/SlideUp";
import SlideDown from "../animate/SlideDown";
import imgBian from "../../public/img/Take-Your-Time-bg.jpg";
import imgBian2 from "../../public/img_hero/Slider-4.jpg";

const Biancaffe = () => {
  return (
    <section
      id="biancaffe"
      className="container overflow-y-hidden mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12"
    >
      <SlideUp offset="-300px 0px -300px 0px">
        <h1 className="lg:mb-6 text-center text-primary font-medium text-5xl font-title">
          Biancaffe
        </h1>
      </SlideUp>
      <div className="flex items-center justify-center overflow-y-hidden">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 overflow-y-hidden">
          <SlideDown offset="-300px 0px -300px 0px">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-98 w-98">
                <Image
                  className="h-full w-full overflow-y-hidden object-cover transition-transform duration-500 scale-125 group-hover:scale-100"
                  src={imgBian}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-custom text-3xl font-bold text-white">
                  Cafe
                </h1>
                <p className="sm:p-2 mb-3 text-lg font-custom text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  The cafe division of Bianco Coffee, aims to spread the art and
                  culture of Italian espresso throughout the world. Biancaffe
                  Dhaka is here to become THE cafe in Dhaka for coffee
                  connoisseurs of the city to come together and revel in the
                  ‘attimi di cafe’!
                </p>
                <div className="flex justify-center items-center">
                  <button className="mt-4 font-semibold text-base font-raleway rounded active:bg-primary/80 relative -top-1 -left-1 bg-secondary py-2.5 px-5 uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-secondary before:transition-all before:content-[''] active:top-0 active:left-0 before:active:top-0 before:active:left-0">
                    See More
                  </button>
                </div>
              </div>
            </div>
          </SlideDown>
          <SlideDown offset="-300px 0px -300px 0px">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-98 w-98">
                <Image
                  className="h-full w-full overflow-y-hidden object-cover transition-transform duration-500 scale-125 group-hover:scale-100"
                  src={imgBian2}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-custom text-3xl font-bold text-white">
                  Shop
                </h1>
                <p className="sm:p-2 mb-3 text-lg font-custom text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolore adipisci placeat.
                </p>
                <div className="flex justify-center items-center">
                  <Link href={`ShopPage`}>
                    <button className="mt-4 font-semibold text-base font-raleway rounded active:bg-primary/80 relative -top-1 -left-1 bg-secondary py-2.5 px-5 uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-secondary before:transition-all before:content-[''] active:top-0 active:left-0 before:active:top-0 before:active:left-0">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SlideDown>
        </div>
      </div>
    </section>
  );
};

export default Biancaffe;
