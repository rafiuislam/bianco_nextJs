import React, { useState } from "react";
import Image from "next/image";
// import shopImg1 from "../../public/img_shop/1.png";
// import shopImg2 from "../../public/img_shop/2.png";
// import shopImg3 from "../../public/img_shop/3.png";
// import shopImg4 from "../../public/img_shop/4.png";
// import shopImg5 from "../../public/img_shop/5.png";
// import shopImg6 from "../../public/img_shop/6.png";
import SlideUp from "../animate/SlideUp";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductItem from "./ProductItem";
import { products } from "../../data/products";

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
  //   const [currentSlide, setCurrentSlide] = useState(0);

  //   const slideCount = 4; // Number of products to display at a time

  //   const nextSlide = () => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide >= products.length - slideCount ? 0 : prevSlide + slideCount
  //     );
  //   };

  //   const prevSlide = () => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide <= 0 ? products.length - slideCount : prevSlide - slideCount
  //     );
  //   };

  // const products = [
  //   {
  //     id: 1,
  //     name: "Bianco N.1",
  //     href: "#",
  //     imageSrc: shopImg1,
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "Tk 3500",
  //     desc: "Discover the exceptional taste of our Bianco N.1 coffee. Crafted with care.Experience pure enjoyment without the caffeine.",
  //   },
  //   {
  //     id: 2,
  //     name: "Bianco N.2",
  //     href: "#",
  //     imageSrc: shopImg2,
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "Tk 3700",
  //     desc: "Enjoy the rich and bold flavor of our Bianco N.2 coffee. Indulge in the perfect cup any time of the day.",
  //   },
  //   {
  //     id: 3,
  //     name: "Bianco N.Gourment",
  //     href: "#",
  //     imageSrc: shopImg3,
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "Tk 3300",
  //     desc: "Enjoy the rich and bold flavor of our Bianco N.Gourment 1 coffee.  Indulge in the perfect cup any time of the day.",
  //   },
  //   {
  //     id: 4,
  //     name: "Bianco N.Decaffeinato",
  //     href: "#",
  //     imageSrc: shopImg4,
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "Tk 3100",
  //     desc: "Enjoy the rich and bold flavor of our Bianco N.Decaffeinato 1 coffee.  Indulge in the perfect cup any time of the day.",
  //   },
  //   {
  //     id: 5,
  //     name: "Bianco N.2.Decaffeinato",
  //     href: "#",
  //     imageSrc: shopImg5,
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "Tk 3699",
  //     desc: "Discover the exceptional taste of our Bianco N.2.Decaffeinato coffee. Experience pure enjoyment without the caffeine.",
  //   },
  //   {
  //     id: 6,
  //     name: "Bianco N.2.Gourment",
  //     href: "#",
  //     imageSrc: shopImg6,
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "Tk 3900",
  //     desc: "Discover the exceptional taste of our Bianco N.2.Gourment coffee. Crafted with care, Experience pure enjoyment without the caffeine.",
  //   },
  //   // More products...
  // ];
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
                console.log(nextSlide);
              }
            }}
          >
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </Carousel>
        </div>
      </div>

      <div className="inset-0 z-0 w-full h-[500px] mt-[26%] sm:mt-[26%] md:mt-[20%] lg:mt-[11%] absolute mx-auto">
        <div className="bg-opacity-80 bg-cover bg-no-repeat bg-center md:bg-contain md:bg-center lg:bg-contain lg:bg-center">
          <Image
            src="/img_shop/Shop-Background-1.png"
            alt="Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Shop;
