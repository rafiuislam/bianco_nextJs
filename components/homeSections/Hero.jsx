import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import heroImg1 from "../../public/img_hero/Slider-1.jpg";
import heroImg2 from "../../public/img_hero/Slider-2.jpg";
import heroImg3 from "../../public/img_hero/Slider-3.jpg";
import heroImg4 from "../../public/img_hero/Slider-4.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = () => {
  return (
    <section id="carousel">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
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
        <div>
          <Image
            src={heroImg1}
            className="w-full h-full object-cover "
            alt="Slider Image"
          />
        </div>
        <div>
          <Image
            src={heroImg2}
            className="w-full h-full object-cover"
            alt="Slider Image"
          />
        </div>
        <div>
          <Image
            src={heroImg3}
            className="w-full h-full object-cover"
            objectFit="cover"
            alt="Slider Image"
          />
        </div>
        <div>
          <Image
            src={heroImg4}
            className="w-full h-full object-cover"
            objectFit="cover"
            alt="Slider Image"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
