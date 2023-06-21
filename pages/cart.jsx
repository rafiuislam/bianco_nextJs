// "use client";
import React from "react";
import Image from "next/image";
// import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { products } from "../data/products";
import SlideUp from "../components/animate/SlideUp";

const Cart = () => {
  return (
    <div className="h-screen bg-bg-h pt-10 pb-10">
      <SlideUp>
        <h1 className="lg:mb-12 text-center text-primary font-medium text-5xl font-title">
          Cart Items
        </h1>
      </SlideUp>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {/* cartItem-1 */}
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md flex">
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
                  {products[0].packageOption}, {products[0].roastProfile}
                </p>
                <p className="mt-2 sm:text-sm text-xs title-font font-medium text-secondary tracking-widest">
                  {" "}
                  {products[0].beanType}
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
          </div>
          {/* cartItem-2 */}
          {/* <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md flex ">
            <Image
              src={products[1].imageSrc}
              alt="product-image"
              className="w-full rounded-lg sm:w-10"
              width={20}
              height={20}
            />
            <div className="sm:ml-6 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-primary font-semi-bold text-xl font-custom">
                  {products[1].name}
                </h2>
                <p className="mt-2 text-sm title-font font-medium text-secondary tracking-widest">
                  {" "}
                  {products[1].packageOption}, {products[1].roastProfile}
                </p>
                <p className="mt-2 text-sm title-font font-medium text-secondary tracking-widest">
                  {" "}
                  {products[1].beanType}
                </p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center justify-evenly space-x-4">
                  <p className="title-font font-medium text-xl text-black">
                    Tk {products[1].price}
                  </p>
                  <div>
                    <IoMdClose
                      size={25}
                      className="hover:text-red transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="flex items-center border-gray-100">
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
          </div> */}
        </div>
        {/* Sub total  */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">Tk 129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">Tk 4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">134.98 TK</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-primary/90 py-1.5 font-medium text-white hover:bg-primary transition-colors duration-200">
            Check out
          </button>
        </div>
      </div>
    </div>
  );

  // <section className="p-12 flex justify-around">
  //   <div className="">
  //     <table className="w-full border-spacing-[20px] ">
  //       <tbody className="">
  //         <tr>
  //           <th>Product</th>
  //           <th>Name</th>
  //           <th>Ingredient</th>
  //           <th>Price</th>
  //           <th>Quantity</th>
  //           <th>Total</th>
  //         </tr>
  //         <tr>
  //           <td>
  //             <div className="w-24 h-24 relative grid content-center">
  //               <Image
  //                 src={products[0].imageSrc}
  //                 className=""
  //                 alt=""
  //                 objectFit="contain"
  //                 layout="fill"
  //               />
  //             </div>
  //           </td>
  //           <td>
  //             <span className="text-primary font-semi-bold text-lg font-custom">
  //               {products[0].name}
  //             </span>
  //           </td>
  //           <td>
  //             <span>
  //               {products[0].beanType}, {products[0].packageOption},{" "}
  //               {products[0].roastProfile}
  //             </span>
  //           </td>
  //           <td>
  //             <span>Tk {products[0].price}</span>
  //           </td>
  //           <td>
  //             <span>2</span>
  //           </td>
  //           <td>
  //             <span className="text-black font-medium text-lg font-custom">
  //               Tk {products[0].price * 1.02}
  //             </span>
  //           </td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   </div>
  //   <div className="flex-2 text-center">
  //     <div className="w-90 max-h-300 bg-black/20 p-8  flex flex-col justify-between text-white">
  //       <h2 className="title">Cart Total</h2>
  //       <div className="totaltext">
  //         <b className="totalTextTitle">Subtotal:</b>Tk {products[0].price}
  //         {/* multiply by Quantity   */}
  //       </div>
  //       <div className="totaltext">
  //         <b className="totalTextTitle">Discount:</b>Tk {0.0}
  //       </div>
  //       <div className="totaltext">
  //         <b className="totalTextTitle">Total: </b>Tk {products[0].price}
  //       </div>
  //       <div className="z-10 flex justify-center items-center">
  //         <button className="mt-4 font-semibold text-base font-raleway rounded active:bg-primary/80 relative -top-1 -left-1 bg-primary py-2.5 px-5 uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-primary before:transition-all before:content-[''] active:top-0 active:left-0 before:active:top-0 before:active:left-0">
  //           Checkout Now
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // </section>
};

export default Cart;
