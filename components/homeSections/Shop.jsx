import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductItem from "./ProductItem";
// import { products } from "../../data/products";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import SectionTitle from "../SectionTitle";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
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

const LeftArrow = ({ onClick }) => (
  <BsChevronCompactLeft
    size={30}
    className="absolute top-1/3 left-0 max-w-4 cursor-pointer text-secondary hover:text-primary"
    onClick={onClick}
  />
);

const RightArrow = ({ onClick }) => (
  <BsChevronCompactRight
    size={30}
    className="absolute top-1/3 right-0 max-w-4 cursor-pointer text-secondary hover:text-primary"
    onClick={onClick}
  />
);

const Shop = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="homeshop" className="relative">
      <div className="mx-auto max-w-3xl px-4 py-2 sm:px-6 sm:pt-4 lg:max-w-7xl lg:px-8">
        <SectionTitle title="Shop" />

        <div className="mt-6 relative">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2000}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite
            containerClass="carousel-container"
            itemClass="carousel-item"
            customLeftArrow={<LeftArrow />}
            customRightArrow={<RightArrow />}
          >
            {products?.data?.map((product) => (
              <ProductItem key={product?.id} product={product} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Shop;
