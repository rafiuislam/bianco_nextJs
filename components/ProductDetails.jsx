import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { products } from "../data/products";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import SlideUp from "../components/animate/SlideUp";
import SlideFromRight from "../components/animate/SlideFromRight";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    // Find the product in the local products array based on the productId
    const selectedProduct = products.find(
      (item) => item.id === Number(productId)
    );
    setProduct(selectedProduct);
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <section className="text-gray-700 overflow-hidden bg-bg-h">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap justify-around">
          <SlideUp duration={800} delay={400}>
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              className="object-contain object-center"
              width={250}
              height={75}
            />
          </SlideUp>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <SlideFromRight duration={800} delay={400}>
              <h2 className="text-sm title-font text-secondary tracking-widest">
                Bianco
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex py-2">
                  <a
                    href="https://www.facebook.com/BiancoBangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GrFacebookOption className="mr-4 cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-secondary" />
                  </a>
                  <a
                    href="https://www.instagram.com/biancobangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="mr-4 cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-secondary" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/bianco-bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="mr-4 cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-secondary" />
                  </a>
                </span>
              </div>
              <div className="flex justify-center items-center w-100 h-auto">
                <p className="text-black font-regular text-md font-raleway leading-relaxed">
                  {product.details}
                </p>
              </div>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                {/* Colors */}
                {/* <div class="flex">
                <span class="mr-3">Color</span>
                <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div> */}
                {/* Size */}
                {/* <div class="flex ml-6 items-center">
                <span class="mr-3">Size</span>
                <div class="relative">
                  <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div> */}
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-black">
                  Tk {product.price}
                </span>
                <div className="flex ml-auto mt-4 z-10">
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="font-semibold text-base font-raleway rounded active:bg-primary/80 relative -top-1 -left-1 bg-primary py-2.5 px-5 uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-primary before:transition-all before:content-[''] active:top-0 active:left-0 before:active:top-0 before:active:left-0"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </SlideFromRight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
