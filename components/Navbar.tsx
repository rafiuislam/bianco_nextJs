// use client"; // this is a client component
import React, { useState } from "react";
import Link from "next/link";
// import { useTheme } from "next-themes";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsCartDash, BsSearch } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";

const NAV_ITEMS = [
  {
    label: "HOME",
    page: "",
  },
  {
    label: "BIANCAFFE",
    page: "biancafe",
  },
  {
    label: "SHOP",
    page: "ShopPage",
  },
  {
    label: "FOR BUSINESS",
    page: "business",
  },
  {
    label: "LEARN",
    page: "learn",
  },
  {
    label: "CONTACT US",
    page: "contact",
  },
];

const Navbar = () => {
  // const { systemTheme, theme, setTheme } = useTheme();
  // const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <header className="w-full mx-auto px-4 sm:px-20 top-0 z-50 shadow bg-bg-h dark:border-b dark:border-stone-600">
      <div>
        <div className="flex items-center justify-between">
          <div className="md:mx-auto md:py-5 md:block">
            <Link href="/">
              <Image
                src="/img/Bianco-Logo-Black.png"
                alt="Logo"
                width={200}
                height={50}
                className="md:ml-[50%]"
              />
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center pr-2">
              <BsSearch className="m-6 sm:mr-4 text-lg cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-primary" />
              <Link href="/cart">
                {/* <BsCartDash className="mr-2 sm:mr-4 text-lg cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-primary" /> */}

                <div className="relative mr-4 sm:mr-4 text-lg cursor-pointer hover:scale-125 transition-transform duration-300">
                  <MdOutlineShoppingCart
                    className=" hover:fill-primary"
                    size={25}
                  />
                  {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-8 w-8 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg> */}
                  <span className="absolute -top-2 left-4 rounded-full bg-primary/80 p-0.5 px-2 text-xs text-white">
                    2
                  </span>
                </div>
              </Link>
            </span>

            <span className="hidden sm:flex items-center border-l-2 py-2">
              <GrFacebookOption className="mr-4 ml-4 text-base cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-secondary" />
              <FaInstagram className="mr-4 text-base cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-secondary" />
              <FaLinkedinIn className="mr-4 text-base cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-secondary" />
            </span>
          </div>

          <div className="md:hidden">
            <button
              className={`p-2 rounded-md outline-none ${
                navbar ? "animate-showMenu" : ""
              }`}
              onClick={toggleNavbar}
            >
              {navbar ? (
                <IoMdClose
                  size={25}
                  className="hover:text-red transition-colors duration-300"
                />
              ) : (
                <IoMdMenu
                  size={25}
                  className="hover:text-primary transition-colors duration-300"
                />
              )}
            </button>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 mb-0 md:block md:pb-0 md:mt-0 pl-6 sm:pl-0 ${
              navbar
                ? // improve the animate-slideFromRight animation
                  "block animate- md:animate-none"
                : "hidden"
            }`}
          >
            <div className="md:flex md:space-x-6 items-center justify-center space-y-6 md:pb-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                const linkClassName =
                  item.label === "BIANCAFFE" ? "text-[#007A4C]" : "text-black";

                return (
                  <Link
                    key={idx}
                    href={`/${item.page}`}
                    // passHref
                    className={`block lg:inline-block ${linkClassName} text-base font-raleway font-sans font-semi-bold cursor-pointer hover:text-secondary md:hover:scale-125 hover:scale-105 ease-in-out duration-300`}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
