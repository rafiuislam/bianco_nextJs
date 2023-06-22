import { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsCartDash, BsSearch } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { motion } from "framer-motion";

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
    subMenu: [
      {
        label: "About Bianco",
        page: "about-bianco",
      },
      {
        label: "Our Beans",
        page: "our-beans",
      },
      {
        label: "Roasting Guide",
        page: "roasting-guide",
      },
      {
        label: "Brewing Guide",
        page: "brewing-guide",
      },
      {
        label: "Blog",
        page: "blog",
      },
    ],
  },
  {
    label: "CONTACT US",
    page: "contact",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [menubar, setMenubar] = useState(false);
  const [smallscreendetect, setSmallscreendetect] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  // Function to detect small screen
  const detectSmallScreen = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setSmallscreendetect(true);
    } else {
      setSmallscreendetect(false);
    }
  };

  // Run the function on component mount
  useEffect(() => {
    detectSmallScreen();
  }, []);

  // Run the function on window resize
  useEffect(() => {
    window.addEventListener("resize", detectSmallScreen);
    return () => {
      window.removeEventListener("resize", detectSmallScreen);
    };
  }, []);

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
                <div className="relative mr-4 sm:mr-4 text-lg cursor-pointer hover:scale-125 transition-transform duration-300">
                  <MdOutlineShoppingCart
                    className=" hover:fill-primary"
                    size={25}
                  />

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
                  "block animate-showMenu md:animate-none"
                : "hidden"
            }`}
          >
            <div className="md:flex md:space-x-6 items-center justify-center space-y-6 md:pb-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                const linkClassName =
                  item.label === "BIANCAFFE" ? "text-[#007A4C]" : "text-black";

                // Learn submenu
                if (item.subMenu) {
                  return (
                    <div
                      key={idx}
                      className="relative text-base font-raleway font-sans font-semi-bold inline-block group cursor-pointer z-10"
                    >
                      <span
                        className={`block lg:inline-block ${linkClassName} text-base font-raleway font-sans font-semi-bold cursor-pointer hover:text-secondary md:hover:scale-125 hover:scale-105 ease-in-out duration-300`}
                        onClick={() => setMenubar(!menubar)}
                      >
                        {item.label}
                      </span>
                      <div
                        className={`${
                          menubar && navbar && smallscreendetect
                            ? // sm screen
                              ""
                            : "md:absolute md:left-[-20%] md:right-0 right-0 md:mt-1 md:w-40 w-fit hidden md:bg-white lg:shadow-md rounded-md py-2 group-hover:md:block"
                          // lg screen
                        }`}
                      >
                        {item.subMenu.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={`/${subItem.page}`}
                            // className="block lg:px-4 px-6 lg:py-2 py-2 text-sm hover:bg-secondary/20"
                            className={`${
                              menubar && navbar && smallscreendetect
                                ? // sm screen
                                  "block lg:px-4 px-6 lg:py-2 py-2 text-base font-raleway font-sans font-semi-bold cursor-pointer hover:text-secondary md:hover:scale-125 hover:scale-105 ease-in-out duration-300"
                                : "block lg:px-4 px-6 lg:py-2 py-2 text-sm font-raleway font-sansfont-raleway font-sans hover:bg-secondary/20"
                              // lg screen
                            }`}
                            onClick={() => setNavbar(!navbar)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={idx}
                    href={`/${item.page}`}
                    // passHref
                    className={`block lg:inline-block ${linkClassName} text-base font-raleway font-sans font-semi-bold cursor-pointer hover:text-secondary md:hover:scale-125 hover:scale-105 ease-in-out duration-300`}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {" "}
                    <div>{item.label}</div>
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
