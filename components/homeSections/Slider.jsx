import React, { useState, useEffect, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import heroImg1 from "../../public/img_hero/Slider-1.jpg";
import heroImg2 from "../../public/img_hero/Slider-2.jpg";
import heroImg3 from "../../public/img_hero/Slider-3.jpg";
import heroImg4 from "../../public/img_hero/Slider-4.jpg";
import SlideUp from "../animate/SlideUp";
import SlideDown from "../animate/SlideDown";

const Slider = () => {
  const slides = [
    {
      url: heroImg1,
    },
    {
      url: heroImg2,
    },
    {
      url: heroImg3,
    },
    {
      url: heroImg4,
    },
  ];

  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index === 0 ? 3 : index - 1);
      const imageDiv = document.getElementById("image-div");
      imageDiv.classList.add("animate-slideFromLeft");
      setTimeout(() => {
        imageDiv.classList.remove("animate-slideFromLeft");
      }, 800);
    }
    if (direction === "r") {
      setIndex(index === 3 ? 0 : index + 1);
      const imageDiv = document.getElementById("image-div");
      imageDiv.classList.add("animate-slideFromRight");
      setTimeout(() => {
        imageDiv.classList.remove("animate-slideFromRight");
      }, 800);
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
      const imageDiv = document.getElementById("image-div");
      imageDiv.classList.add("animate-slideFromRight");
      setTimeout(() => {
        imageDiv.classList.remove("animate-slideFromRight");
      }, 800);
    }, 5000); // Adjust the interval duration (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [index]);

  const goToSlide = (index) => {
    // setIndex(index);
  };

  // console.log(index);

  return (
    <section
      id="slider"
      className="max-w-screen w-full h-[700px] m-auto relative group overflow-y-hidden overflow-x-hidden"
    >
      <div id="image-div" className="w-full h-full relative">
        <Image
          src={slides[index].url}
          layout="fill"
          objectFit="cover"
          alt="Slider Image"
          className=""
        />
      </div>
      {/* Left Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={() => handleArrow("l")}
      >
        <BsChevronCompactLeft size={30} />
      </div>
      {/* Right Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={() => handleArrow("r")}
      >
        <BsChevronCompactRight size={30} />
      </div>
      <div className="flex bottom-4 justify-center absolute z-0 left-0 right-0">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled className="text-white" />
          </div>
        ))}
      </div>
      {index === 0 && (
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-right mr-20 flex flex-col justify-center items-end md:items-start">
          {/* <SlideUp offset="-300px 0px -300px 0px"> */}
          <p className="text-5xl text-primary font-medium animate-slideUpCubiBezier">
            Bianco Bangladesh
          </p>
          {/* </SlideUp> */}

          <div className="self-center">
            {/* <SlideDown offset="-300px 0px -300px 0px"> */}
            <p className="text-primary font-medium text-2xl font-raleway animate-fadeIn">
              Making moments of coffee
            </p>
            {/* </SlideDown> */}
          </div>
        </div>
      )}

      <div className="flex flex-row items-center text-center justify-center py-2">
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
            className="animate-bounce fill-secondary cursor-pointer"
          />
        </Link>
      </div>
    </section>
  );
};

export default Slider;
