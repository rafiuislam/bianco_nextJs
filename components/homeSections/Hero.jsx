import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-scroll/modules";
import { MdKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
  const slider = [
    {
      id: 1,
      url: "/img_hero/Slider-1.jpg",
    },
    {
      id: 2,
      url: "/img_hero/Slider-2.jpg",
    },
    {
      id: 3,
      url: "/img_hero/Slider-3.jpg",
    },
    {
      id: 4,
      url: "/img_hero/Slider-4.jpg",
    },
  ];

  return (
    <section id="carousel">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={30000}
        centerMode={false}
        className=""
        containerClass="mx-auto"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {slider.map((slide) => (
          <div key={slide.id}>
            <Image
              src={slide.url}
              className="w-full h-fit	object-fit"
              // layout="responsive"
              alt="Slider Image"
              width={1200}
              height={800}
              priority
            />
            {slide.id === 1 && (
              <div className="absolute sm:right-8 right-[-16px] top-1/2 transform -translate-y-1/2 text-right mr-20 flex flex-col justify-center items-end md:items-start">
                <p className="text-base sm:text-5xl text-primary font-medium animate-slideUpCubiBezier">
                  Bianco Bangladesh
                </p>
                <div className="self-center">
                  <p className="text-primary font-medium text-sm sm:text-2xl font-raleway animate-fadeIn">
                    Making moments of coffee
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </Carousel>
      <div className="flex flex-row items-center text-center justify-center pt-2">
        <Link
          to="biancaffe"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <MdKeyboardArrowDown
            size={40}
            className="animate-bounce fill-primary cursor-pointer"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
