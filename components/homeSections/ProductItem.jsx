import React from "react";
import Image from "next/image";
import SlideUp from "../animate/SlideUp";
import SlideDown from "../animate/SlideDown";

const ProductItem = ({ product }) => {
  return (
    <div key={product.id}>
      <div className="group relative flex flex-col justify-center items-center">
        <div className="w-full overflow-hidden rounded-md bg- flex justify-center items-center aspect-w-1 aspect-h-1 group-hover:opacity-75 bg-opacity-50">
          <SlideDown offset="300px 0px 300px 0px">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              className="object-contain object-center animate-slideDownCubiBezier "
              width={100}
              height={50}
            />
          </SlideDown>
        </div>
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="mt-4 text-center">
            <h3 className="text-primary font-semi-bold text-lg font-custom animate-slideUpCubiBezier">
              <a href={product.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </a>
            </h3>
            <p className="py-2 text-black font-light text-lg font-custom">
              {product.price}
            </p>
            <div className="flex justify-center items-center w-60 h-20">
              <p className="text-secondary font-regular text-sm font-raleway ">
                {product.desc}
              </p>
            </div>
            <div className="flex justify-center items-center ">
              <button className="mt-4 bg-primary text-white font-semibold text-base font-raleway py-2 px-4 rounded group-hover:scale-105 transition-transform duration-300 ">
                Add to Cart
              </button>
            </div>
          </div>
        </SlideUp>
      </div>
    </div>
  );
};

export default ProductItem;