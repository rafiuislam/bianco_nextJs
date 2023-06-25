// "use client";
import React from "react";
import Image from "next/image";
// import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { products } from "../data/products";
import SlideUp from "../components/animate/SlideUp";
import { motion } from "framer-motion";

const Cart = () => {
  return (
    <div className="h-full bg-bg-h pt-10 pb-10">
      <SlideUp>
        <h1 className="lg:mb-12 text-center text-primary font-medium text-5xl font-title">
          Cart Items
        </h1>
      </SlideUp>

      <div className="mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-16 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {/* cartItem-1 */}
          <motion.div
            className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md flex"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src={products[0].imageSrc}
              alt="product-image"
              className="rounded-lg"
              width={30}
              height={10}
            />
            <div className="ml-6 flex w-full justify-between">
              <div className="mt-0">
                <h2 className="text-primary font-semi-bold text-lg sm:text-xl font-custom">
                  {products[0].name}
                </h2>
                <p className="mt-2 sm:text-sm text-xs title-font font-medium text-secondary tracking-widest">
                  {" "}
                  {products[0].beanType}, {products[0].roastProfile}
                </p>
                <p className="mt-2 sm:text-sm text-xs title-font font-medium text-secondary tracking-widest">
                  {" "}
                  {products[0].packageOption}
                </p>
              </div>
              <div className="justify-between space-y-6 sm:mt-0 sm:space-x-6">
                <div className="flex items-center justify-evenly space-x-4">
                  <p className="title-font font-medium sm:text-xl text-lg text-black">
                    Tk {products[0].price}
                  </p>
                  <div>
                    <IoMdClose
                      size={25}
                      className="hover:text-red transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="flex items-center border-secondary/20">
                  <span className="cursor-pointer rounded-l bg-bg-h py-1 px-3.5 duration-200 hover:bg-primary hover:text-white">
                    {" "}
                    -{" "}
                  </span>
                  <input
                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    defaultValue="2"
                    min="1"
                  />
                  <span className="cursor-pointer rounded-r bg-bg-h py-1 px-3 duration-200 hover:bg-primary hover:text-white">
                    {" "}
                    +{" "}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* cartItem-2 */}
          <motion.div
            className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md flex"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src={products[1].imageSrc}
              alt="product-image"
              className="rounded-lg"
              width={30}
              height={10}
            />
            <div className="ml-6 flex w-full justify-between">
              <div className="mt-0">
                <h2 className="text-primary font-semi-bold text-lg sm:text-xl font-custom">
                  {products[1].name}
                </h2>
                <p className="mt-2 sm:text-sm text-xs title-font font-medium text-secondary tracking-widest">
                  {" "}
                  {products[0].beanType}, {products[0].roastProfile}
                </p>
                <p className="mt-2 sm:text-sm text-xs title-font font-medium text-secondary tracking-widest">
                  {" "}
                  {products[0].packageOption}
                </p>
              </div>
              <div className="justify-between space-y-6 sm:mt-0 sm:space-x-6">
                <div className="flex items-center justify-evenly space-x-4">
                  <p className="title-font font-medium sm:text-xl text-lg text-black">
                    Tk {products[1].price}
                  </p>
                  <div>
                    <IoMdClose
                      size={25}
                      className="hover:text-red transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="flex items-center border-secondary/20">
                  <span className="cursor-pointer rounded-l bg-bg-h py-1 px-3.5 duration-200 hover:bg-primary hover:text-white">
                    {" "}
                    -{" "}
                  </span>
                  <input
                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    defaultValue="1"
                    min="1"
                  />
                  <span className="cursor-pointer rounded-r bg-bg-h py-1 px-3 duration-200 hover:bg-primary hover:text-white">
                    {" "}
                    +{" "}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Sub total  */}
        <motion.div
          className="box mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="mb-2 flex justify-between">
            <p className="title-font font-medium text-black tracking-widest">
              Subtotal
            </p>
            <p className="title-font font-medium text-black tracking-widest">
              Tk 10700
            </p>
          </div>
          <div className="flex justify-between">
            <p className="title-font font-medium text-black tracking-widest">
              Shipping
            </p>
            <p className="title-font font-medium text-black tracking-widest">
              Tk 79
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold title-font sm:text-xl text-black">
                {" "}
                10779 Tk
              </p>
              <p className="text-sm title-font font-medium text-black tracking-widest">
                including VAT
              </p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-primary/90 py-1.5 font-medium text-white hover:bg-primary transition-colors duration-200">
            Check out
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;
