"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useTheme } from "next-themes";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsCartDash, BsSearch } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "HOME",
    page: "home",
  },
  {
    label: "BIANCAFFE",
    page: "biancafe",
  },
  {
    label: "SHOP",
    page: "shop",
  },
  {
    label: "FOR BUSINESS",
    page: "business",
  },
  {
    label: "LEARN",
    page: "learn",
  },
  // {
  //   label: "LOYALTY PROGRAM",
  //   page: "program",
  // },
  {
    label: "CONTACT US",
    page: "contact",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  //   const pathname = usePathname()
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-20 top-0 z-50 shadow bg-bg-h dark:border-b dark:border-stone-600">
      <div>
        {/* <div className="left-0 right-0 mx-auto bg-primary">
          <p className="text-white px-8 py-4">Find The Store</p>
        </div> */}
        <div className="flex items-center justify-between">
          <div className="md:mx-auto md:py-5 md:block">
            <Image
              src="/img/Bianco-Logo-Black.png"
              alt="Logo"
              width={200}
              height={50}
              className="md:ml-[50%]"
            />
          </div>
          <div className="flex items-center justify-between">
            <BsSearch className="m-6 sm:mr-4 text-lg cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-primary" />
            <BsCartDash className="mr-2 sm:mr-4 text-lg cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-primary" />
            <span className="hidden sm:flex text-sm">|</span>
            <span className="hidden sm:flex items-center">
              <GrFacebookOption className="mr-4 ml-4 text-base cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-secondary" />
              <FaInstagram className="mr-4 text-base cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-secondary" />
              <FaLinkedinIn className="mr-4 text-base cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-secondary" />
            </span>
          </div>

          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
            </button>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 mb-0 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="md:flex md:space-x-6 items-center justify-center space-y-6 md:pb-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                const linkClassName =
                  item.label == "BIANCAFFE" ? "text-[#007A4C]" : "text-black";
                // console.log(item.label);
                // console.log(linkClassName);
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={`block lg:inline-block ${linkClassName} text-base font-raleway font-sans font-semi-bold cursor-pointer hover:text-secondary  hover:scale-105 transition-all duration-300`} //hover:border-primary, hover:border-b
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {/* {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={15} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={15} />
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
