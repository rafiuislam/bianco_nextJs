import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "../animate/SlideUp";
import SlideDown from "../animate/SlideDown";
// import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div key={product.id}>
      <div className="group relative flex flex-col justify-center items-center ">
        <div
          className="w-full overflow-hidden rounded-md flex justify-center items-center aspect-w-1 aspect-h-1 group-hover:opacity-75 "
          // initial={{ opacity: 0, y: -100 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* <SlideDown offset=""> */}
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            className="object-contain object-center animate-slideDownCubiBezier"
            width={100}
            height={50}
          />
          {/* </SlideDown> */}
        </div>
        {/* <SlideUp offset=""> */}
        <div className="mt-4 text-center">
          <h3 className="text-primary font-semi-bold text-lg font-custom animate-slideUpCubiBezier">
            <Link href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="py-2 text-black font-light text-lg font-custom">
            Tk {product.price}
          </p>
          <div className="flex justify-center items-center w-60 h-20">
            <p className="text-black font-regular text-sm font-raleway">
              {product.desc}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="mt-4 font-semibold text-base font-raleway rounded active:bg-primary/80 relative -top-1 -left-1 bg-primary py-2.5 px-5 uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-primary before:transition-all before:content-[''] active:top-0 active:left-0 before:active:top-0 before:active:left-0"
            >
              Add to Cart
            </button>
          </div>
        </div>
        {/* </SlideUp> */}
      </div>
    </div>
  );
};

export default ProductItem;
