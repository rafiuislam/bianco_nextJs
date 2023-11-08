"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
// import Link from "next/link";
import { IoMdClose } from "react-icons/io";
// import { products } from "../data/products";
import SlideUp from "../components/animate/SlideUp";
import SlideFromRight from "../components/animate/SlideFromRight";

import { useSelector, useDispatch } from "react-redux";

import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  setInitialCart,
} from "../redux/cartSlice";

const Cart = () => {
  // Extracting cart state from redux store
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log("Retrieved REDUX cart items:", cart);

  useEffect(() => {
    // Retrieve the cart items from local storage
    const storedCartItems = localStorage.getItem("cartItems");

    if (storedCartItems) {
      // Parse the JSON string back into an object
      const parsedCartItems = JSON.parse(storedCartItems);

      // Dispatch an action to set the initial cart state
      dispatch(setInitialCart(parsedCartItems.cartItems));
    }
  }, [dispatch]);

  const getTotalPrice = (additionalPrice = 0) => {
    const totalPrice = cart.cartItems.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );

    return totalPrice + additionalPrice;
  };

  // console.log(cart[0].href);

  return (
    <div className="h-full bg-bg-h pt-10 pb-10">
      {cart.cartItems.length === 0 ? (
        <SlideUp>
          <h1 className="lg:mb-12 text-center text-primary font-medium text-5xl font-title">
            Your Cart is Empty!
          </h1>
        </SlideUp>
      ) : (
        <>
          <SlideUp>
            <h1 className="lg:mb-12 text-center text-primary font-medium text-5xl font-title">
              Cart Items
            </h1>
          </SlideUp>

          <div className="mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-16 xl:px-0">
            {/* map */}
            <div className="rounded-lg md:w-2/3">
              {cart.cartItems.map((item, key) => (
                <div key={key}>
                  {/* cartItem-1 */}
                  <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md flex">
                    {/* <SlideUp duration={800} delay={400}> */}
                    <Image
                      // src={
                      //   item.imageSrc?.data?.attributes?.formats?.medium?.url
                      // }
                      src={`http://127.0.0.1:1337${item.imageSrc?.data?.attributes?.formats?.small?.url}`}
                      alt="product-image"
                      className="rounded-lg"
                      width={30}
                      height={10}
                    />
                    <div className="ml-6 flex w-full justify-between">
                      <div className="mt-0">
                        <h2 className="text-primary font-semi-bold text-lg sm:text-xl font-custom">
                          {item.name}
                        </h2>
                        <p className="mt-2 sm:text-sm text-xs title-font font-medium text-secondary tracking-widest">
                          {" "}
                          {item.beanType}, {item.roastProfile}
                        </p>
                        <p className="mt-2 sm:text-sm text-xs title-font font-medium text-secondary tracking-widest">
                          {" "}
                          {item.packageOption}
                        </p>
                      </div>
                      <div className="justify-between space-y-6 sm:mt-0 sm:space-x-6">
                        <div className="flex items-center justify-evenly space-x-4">
                          <p className="title-font font-medium sm:text-xl text-lg text-black">
                            Tk {item.quantity * item.price}
                          </p>
                          <div>
                            <IoMdClose
                              size={25}
                              className="hover:text-red transition-colors duration-200"
                              onClick={() =>
                                dispatch(removeFromCart(item.href))
                              }
                            />
                          </div>
                        </div>

                        <div className="flex items-center border-secondary/20">
                          <button
                            className="cursor-pointer rounded-l bg-bg-h py-1 px-3.5 duration-200 hover:bg-primary hover:text-white"
                            onClick={() =>
                              dispatch(decrementQuantity(item.href))
                            }
                          >
                            -
                          </button>

                          <span className="h-8 w-8 border bg-white text-center grid place-content-center text-xs outline-none">
                            {item.quantity}
                          </span>

                          <button
                            className="cursor-pointer rounded-r bg-bg-h py-1 px-3 duration-200 hover:bg-primary hover:text-white"
                            onClick={() =>
                              dispatch(incrementQuantity(item.href))
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* </SlideUp> */}
                  </div>
                </div>
              ))}
            </div>
            {/* Sub total  */}
            <div className="box mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <SlideFromRight duration={800} delay={400}>
                <div className="mb-2 flex justify-between">
                  <p className="title-font font-medium text-black tracking-widest">
                    Subtotal
                  </p>
                  <p className="title-font font-medium text-black tracking-widest">
                    {/* Tk {item.quantity * item.price} */}
                    Tk {getTotalPrice()}
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
                      {getTotalPrice(79)} Taka
                    </p>
                    <p className="text-sm title-font font-medium text-black tracking-widest">
                      including VAT
                    </p>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-md bg-primary/90 py-1.5 font-medium text-white hover:bg-primary transition-colors duration-200">
                  Check out
                </button>
              </SlideFromRight>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
