"use client";
import React from "react";
import Image from "next/image";
import imgBian from "../../public/img/Take-Your-Time-bg-min.jpg";
import imgBian2 from "../../public/img/sliderShop.jpg";
import Link from "next/link";
import SectionTitle from "../SectionTitle";

const Biancaffe = ({ alt: { alt02, alt03 } }) => {
  // console.log(alt02);
  return (
    <section
      id="biancaffe"
      className="container overflow-y-hidden mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24"
    >
      <SectionTitle title="Explore Us" />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          {/* type01 */}
          <div className="group rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-md hover:shadow-black/30">
            <div className="h-98 w-98">
              <Image
                className="h-full w-full overflow-y-hidden object-cover transition-transform duration-500 scale-125 group-hover:scale-100"
                src={imgBian}
                alt={alt02}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex sm:translate-y-[60%] translate-y-[70%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <div style={{ fontVariant: "small-caps" }}>
                <h1 className="font-custom text-xl sm:text-3xl pb-2 font-medium sm:font-bold text-white">
                  Biancaffé
                </h1>
              </div>
              <p className="sm:p-2 mb-0 text-xs sm:text-md font-custom text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                The cafe division of Bianco Coffee, aims to spread the art and
                culture of Italian espresso throughout the world. Biancaffé
                Dhaka is here to become THE cafe in Dhaka for coffee
                connoisseurs of the city to come together and revel in the
                {" ‘attimi di cafe’!"}
              </p>
              <div className="flex justify-center items-center">
                <Link href={`biancafe`}>
                  <button className="mt-4 font-semibold text-sm sm:text-base font-raleway rounded active:bg-primary/80 relative -top-1 -left-1 bg-secondary py-2.5 px-5 uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-secondary before:transition-all before:content-[''] active:top-0 active:left-0 before:active:top-0 before:active:left-0">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 lg:ml-4 pt-4 lg:pt-0 flex flex-col justify-center relative">
          {/* type02 */}

          <div className="group rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-md hover:shadow-black/30">
            <div className="h-98 w-98">
              <Image
                className="h-full w-full overflow-y-hidden object-cover transition-transform duration-500 scale-125 group-hover:scale-100"
                src={imgBian2}
                alt={alt03}
                width={750}
                height={500}
                priority={true}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[55%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <div style={{ fontVariant: "small-caps" }}>
                <h1 className="font-custom text-xl sm:text-3xl pb-2 font-medium sm:font-bold text-white">
                  Shop
                </h1>
              </div>
              <p className="sm:p-2 mb-0 text-xs sm:text-md font-custom text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Explore our collection of exquisite Bianco Coffee blends for an
                unparalleled coffee experience.
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
    </section>
  );
};

export default Biancaffe;
