// "use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import SlideUp from "../animate/SlideUp";
import ProductModal from "../ProductModal";
import { API_URL } from "../../utils/urls";

const ProductCard = ({ product: { attributes: p, id }, index }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  console.log(p.imageSrc?.data?.attributes?.formats?.medium?.url);

  return (
    <div>
      <SlideUp
        offset="-300px 0px -300px 0px"
        duration={600}
        delay={index * 200}
      >
        <div className="group flex flex-col justify-center items-center">
          <div className="w-full overflow-hidden rounded-md flex justify-center items-center aspect-w-1 aspect-h-1">
            <Image
              src={`${API_URL}${p.imageSrc?.data?.attributes?.formats?.medium?.url}`}
              alt={p.s_alt}
              className="object-contain object-center"
              width={100}
              height={50}
            />
          </div>

          <div className="mt-4 text-center">
            <h3 className="text-primary font-semi-bold text-lg font-custom">
              <Link href={`/product/${p.href}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {p.name}
              </Link>
            </h3>
            <p className="py-2 text-black font-light text-lg font-custom">
              TK {p.price}
            </p>
            <div className="flex justify-center items-center w-60 h-20">
              <p className="text-black font-regular text-sm font-raleway ">
                {p.desc}
              </p>
            </div>
            <div className="z-10 flex justify-center items-center">
              <button
                onClick={() => setShowModal(true)}
                // onClick={() => dispatch(addToCart(p))}
                className="mt-4 font-semibold text-base font-raleway rounded active:bg-primary/80 relative -top-1 -left-1 bg-primary py-2.5 px-5 uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-primary before:transition-all before:content-[''] active:top-0 active:left-0 before:active:top-0 before:active:left-0"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <ProductModal showModal={showModal} setShowModal={setShowModal} />
      </SlideUp>
    </div>
  );
};

export default ProductCard;
