"use client";
import React from "react";
import Image from "next/image";
import SlideUp from "../animate/SlideUp";
import SlideDown from "../animate/SlideDown";
import imgBian from "../../public/img/Take-Your-Time-bg.jpg";
import imgBian2 from "../../public/img_hero/Slider-4.jpg";
import Link from "next/link";
import SectionTitle from "../SectionTitle";

const Biancaffe = () => {
  return (
    <section
      id="biancaffe"
      className="container overflow-y-hidden mx-auto mt-4 mb-4 px-4 sm:pb-2 py-8 md:px-24 md:p-12"
    >
      <SectionTitle title="Biancaffe" />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          {/* type01 */}

          <div className="flex min-h-full items-center justify-center">
            <div className="group h-80 w-11/12 [perspective:1000px]">
              <div className="h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full rounded-xl object-cover object-right sm:object-center shadow-xl shadow-black/40"
                    src={imgBian}
                    alt="biancaffe-cafe-section"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="font-custom text-xl sm:text-3xl pb-2 font-bold text-white">
                      Cafe
                    </h1>
                    <p className="sm:p-2 mb-3 text-sm sm:text-md font-custom text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      The cafe division of Bianco Coffee, aims to spread the art
                      and culture of Italian espresso throughout the world.
                      Biancaffe Dhaka is here to become THE cafe in Dhaka for
                      coffee connoisseurs of the city to come together and revel
                      in the ‘attimi di cafe’!
                    </p>
                    <div className="flex justify-center items-center">
                      <button className="mt-4 font-semibold text-sm sm:text-base font-raleway rounded active:bg-primary/80 relative -top-1 -left-1 bg-secondary py-2.5 px-5 uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-secondary before:transition-all before:content-[''] active:top-0 active:left-0 before:active:top-0 before:active:left-0">
                        See More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 pl-0 lg:pl-8 lg:pt-0 pt-8 flex flex-col justify-center relative">
          {/* type01 */}

          <div className="flex min-h-full items-center justify-center">
            <div className="group h-80 w-11/12 [perspective:1000px]">
              <div className="h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full rounded-xl object-cover object-left sm:object-center shadow-xl shadow-black/40"
                    src={imgBian2}
                    alt="biancaffe-shop-section"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="font-custom text-xl sm:text-3xl pb-2 font-bold text-white">
                      Shop
                    </h1>
                    <p className="sm:p-2 mb-3 text-sm sm:text-md font-custom text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis dolore adipisci placeat.
                    </p>
                    <div className="flex justify-center items-center">
                      <Link href={`ShopPage`}>
                        <button className="mt-4 font-semibold text-sm sm:text-base font-raleway rounded active:bg-primary/80 relative -top-1 -left-1 bg-secondary py-2.5 px-5 uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-secondary before:transition-all before:content-[''] active:top-0 active:left-0 before:active:top-0 before:active:left-0">
                          See More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biancaffe;
