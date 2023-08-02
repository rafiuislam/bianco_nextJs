import React, { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Head from 'next/head'
// import { Link } from "react-scroll/modules";
// import { MdKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
  const slider = [
    // {
    //   id: 1,
    //   url: "/img_hero/Slider1.jpg",
    //   urlSmall: "/img_hero/Slider-Mobile-1.jpg",
    // },
    // {
    //   id: 2,
    //   url: "/img_hero/Slider02.jpg",
    //   urlSmall: "/img_hero/Slider-Mobile-2.jpg",
    // },
    {
      id: 3,
      url: "/img_hero/Slider-5.jpg",
      urlSmall: "/img_hero/Slider-Mobile-5.jpg",
    },
    {
      id: 4,
      url: "/img_hero/Slider-04.jpg",
      urlSmall: "/img_hero/Slider-Mobile-4.jpg",
    },
    {
      id: 5,
      url: "/img_hero/Slider03.jpg",
      urlSmall: "/img_hero/Slider-Mobile-3.jpg",
    },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="carousel">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={300000}
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
              src={isSmallScreen ? slide.urlSmall : slide.url}
              className="w-full object-fill"
              // layout="responsive"
              alt="Slider Image"
              width={1920}
              height={562}
              priority
            />
            {isSmallScreen && slide.id === 4 && (
              <div className="absolute sm:right-8 right-[-16px] top-1/2 transform -translate-y-1/2 text-right mr-20 flex flex-col justify-center items-end md:items-start">
                <Image
                  src="/img/Bianco-w-Logo-1.png"
                  alt="Logo"
                  width={80}
                  height={15}
                  className=""
                />
              </div>
            )}
            {isSmallScreen === false && slide.id !== 5 && (
              <div className="absolute sm:right-8 right-[-16px] top-1/2 transform -translate-y-1/2 text-right mr-20 flex flex-col justify-center items-end md:items-start">
                <Image
                  src="/img/Bianco-w-Logo-1.png"
                  alt="Logo"
                  width={190}
                  height={50}
                  className=""
                />
              </div>
            )}
            {isSmallScreen === false && slide.id === 5 && (
              <div className="absolute sm:right-8 right-[-16px] top-1/2 transform -translate-y-1/2 text-right mr-20 flex flex-col justify-center items-end md:items-start">
                <div className="flex">
                  <Image
                    src="/img/Bianco-logo.png"
                    alt="Logo"
                    width={190}
                    height={50}
                    className=""
                  />
                  <p className="pl-2 text-base sm:text-2xl font-tilt-warp text-primary">
                    Bangladesh
                  </p>{" "}
                </div>

                <div className="self-end">
                  <p className="text-primary font-montserrat text-xs sm:text-2xl font-raleway animate-fadeIn">
                    <span style={{ fontVariant: "small-caps" }}>
                      Making moments of coffee
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* {slide.id === 1 && (
              <div className="absolute sm:right-8 right-[-16px] top-1/2 transform -translate-y-1/2 text-right mr-20 flex flex-col justify-center items-end md:items-start">
                <p className="text-base sm:text-5xl font-montserrat text-primary font-black animate-slideUpCubiBezier">
                  Bianco Bangladesh
                </p>
                <div className="self-end">
                  <p className="text-primary font-montserrat font-medium text-xs sm:text-2xl font-raleway animate-fadeIn">
                    Making moments of coffee
                  </p>
                </div>
              </div>
            )} */}
          </div>
        ))}
      </Carousel>
      {/* <div className="flex flex-row items-center text-center justify-center pt-2">
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
      </div> */}
    </section>
  );
};

export default Hero;
