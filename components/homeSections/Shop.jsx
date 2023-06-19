import React, { useState } from "react";
import Link from "next/link";
import SlideUp from "../animate/SlideUp";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductItem from "./ProductItem";
import { products } from "../../data/products";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // Number of slides to scroll at a time
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Shop = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="homeshop" className="relative">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:pt-24 lg:max-w-7xl lg:px-8">
        <SlideUp offset="-300px 0px -300px 0px">
          <h1 className="lg:mb-6  text-center text-primary font-medium text-5xl font-title">
            Shop
          </h1>
        </SlideUp>

        <div className="mt-6 relative ">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            containerClass="carousel-container"
            itemClass="carousel-item"
            beforeChange={(previousSlide, nextSlide) => {
              if (nextSlide === products.length - 1) {
                // If the next slide is the last product, update the active index
                setActiveIndex(nextSlide);
                // console.log(nextSlide);
              }
            }}
            customLeftArrow={
              <BsChevronCompactLeft
                size={30}
                className="absolute top-1/3 left-0 max-w-4 cursor-pointer text-secondary"
              />
            }
            customRightArrow={
              <BsChevronCompactRight
                size={30}
                className="absolute top-1/3 right-0 max-w-4 cursor-pointer text-secondary"
              />
            }
          >
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </Carousel>
        </div>
      </div>

      {/* <div className="inset-0 z-0 w-full h-[500px] mt-[26%] sm:mt-[26%] md:mt-[20%] lg:mt-[11%] absolute mx-auto">
        <div className="bg-opacity-80 bg-cover bg-no-repeat bg-center md:bg-contain md:bg-center lg:bg-contain lg:bg-center">
          <Image
            src="/img_shop/Shop-Background-1.png"
            alt="Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Shop;
