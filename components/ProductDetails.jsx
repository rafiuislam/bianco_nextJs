import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { useRouter } from "next/router";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import SlideUp from "../components/animate/SlideUp";
import SlideFromRight from "../components/animate/SlideFromRight";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { API_URL } from "../utils/urls";

import { NextSeo } from "next-seo";
import ProductModal from "./ProductModal";

const ProductDetails = ({ prod: { attributes: p, id }, index }) => {
  console.log(p.imageSrc);
  // const router = useRouter();
  // const { productId } = router.query;
  // const [product, setProduct] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const SEO = {
    title: p.s_title,
    description: p.s_desc,

    openGraph: {
      title: p.s_title,
      description: p.s_desc,
      url: p.s_pageurl,
    },
  };

  if (!p) {
    return <p>Loading...</p>;
  }

  return (
    <section
      className="text-gray-700 overflow-hidden bg-bg-h"
      onCopy={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
    >
      <>
        <NextSeo {...SEO} />
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-around">
            <SlideUp duration={800} delay={400}>
              <Image
                src={`${API_URL}${p.imageSrc?.data?.attributes?.formats?.large?.url}`}
                alt={p.s_alt}
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
                  {p.name}
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
                <div className="flex justify-center items-center w-50 h-auto pb-4">
                  <p className="text-black font-regular text-md font-raleway leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="flex justify-center items-center w-100 h-auto">
                  <p className="text-black font-regular text-md font-raleway leading-relaxed">
                    {p.details}
                  </p>
                </div>

                <div className="flex mt-2 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                <div className="flex justify-between">
                  <div className="title-font font-medium sm:text-4xl text-3xl text-black">
                    Tk {p.price}
                  </div>
                  <div className="flex ml-auto mt-4">
                    <button
                      onClick={() => setShowModal(true)}
                      // onClick={() => dispatch(addToCart(p))}
                      // onClick={() => dispatch(addToCart(product))}
                      className="font-semibold text-base font-raleway rounded active:bg-primary/80 relative -top-1 -left-1 bg-primary py-2.5 px-5 uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-primary before:transition-all before:content-[''] active:top-0 active:left-0 before:active:top-0 before:active:left-0"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <ProductModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </SlideFromRight>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default ProductDetails;
