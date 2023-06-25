"use client";
import React from "react";
import Image from "next/image";
import SlideUp from "../animate/SlideUp";
import imgBian from "../../public/img/Take-Your-Time-bg.jpg";
import imgBian2 from "../../public/img_hero/Slider-4.jpg";
import { motion } from "framer-motion";

// const slides = [
//   {
//     url: imgBian,
//   },
//   {
//     url: imgBian,
//   },
//   {
//     url: imgBian,
//   },
// ];

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
          {/* <SlideFromLeft offset="-300px 0px -300px 0px"> */}
          <div className="group overflow-y-hidden relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-98 w-98">
              <Image
                className="h-full w-full overflow-y-hidden object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <div className="flex justify-center items-center">
                <button className="mt-4 font-semibold text-base font-raleway rounded active:bg-primary/80 relative -top-1 -left-1 bg-secondary py-2.5 px-5 uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-secondary before:transition-all before:content-[''] active:top-0 active:left-0 before:active:top-0 before:active:left-0">
                  See More
                </button>
              </div>
              {/* <button className="rounded-full bg-primary text-white font-raleway font-medium text-sm py-2 px-3.5 shadow shadow-black/60">
                See More
              </button> */}
            </div>
          </div>
          {/* </SlideFromLeft> */}
          {/* <SlideFromRight offset="-300px 0px -300px 0px"> */}
          <div className="group overflow-y-hidden relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-98 w-98">
              <Image
                className="h-full w-full overflow-y-hidden object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <div className="flex justify-center items-center">
                <button className="mt-4 font-semibold text-base font-raleway rounded active:bg-primary/80 relative -top-1 -left-1 bg-secondary py-2.5 px-5 uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-secondary before:transition-all before:content-[''] active:top-0 active:left-0 before:active:top-0 before:active:left-0">
                  See More
                </button>
              </div>
            </div>
          </div>
          {/* </SlideFromRight> */}
        </div>
      </div>
    </section>

    // <section id="biancaffe" className="w-full m-auto">
    //   <div className="relative h-[500px] mt-[15%] md:mt-[8%] lg:mt-[5%]">
    //     <Image
    //       src="/img/Take-Your-Time-bg.jpg"
    //       alt="Logo"
    //       layout="fill"
    //       objectFit="cover"
    //       className="relative w-full h-full "
    //       data-speed="0.5"
    //     />

    //     <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
    //       <div
    //         className="bg-white bg-opacity-50 text-black p-4 flex flex-col justify-center"
    //         style={{ width: "700px", height: "300px" }}
    //       >
    //         <SlideUp offset="-300px 0px -300px 0px">
    //           <div className="text-center text-primary font-regular text-4xl font-dancing slideUpCubiBezier">
    //             <p>Take Your Time</p>
    //           </div>
    //         </SlideUp>
    //         <div className="mt-6 md:mt-4 mb-4 text-center md:text-start flex justify-evenly flex-col sm:flex-row">
    //           <SlideFromLeft offset="-300px 0px -300px 0px">
    //             <div className="mb-4 sm:mb-0 ">
    //               <button className="bg-primary text-white font-medium text-4xl font-title py-0 px-12 rounded hover:scale-125 transition-transform duration-300 hover:bg-opacity-80 animate-slideFromLeft">
    //                 Cafe
    //               </button>
    //             </div>
    //           </SlideFromLeft>
    //           <SlideFromRight offset="-300px 0px -300px 0px">
    //             <div className="">
    //               <button className="bg-primary text-white font-medium text-4xl font-title py-0 px-12 rounded hover:scale-125 transition-transform duration-300 hover:bg-opacity-80 animate-slideFromRight">
    //                 Shop
    //               </button>
    //             </div>
    //           </SlideFromRight>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Biancaffe;
