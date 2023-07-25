import { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io";
// import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

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
  // {
  //   label: "FOR BUSINESS",
  //   page: "business",
  // },
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
      // {
      //   label: "Blog",
      //   page: "blog",
      // },
    ],
  },
  {
    label: "CONTACT US",
    page: "contact",
  },
];

const SUB_MENU_PAGES = NAV_ITEMS.find(
  (item) => item.label === "LEARN"
).subMenu.map((subItem) => subItem.page);

console.log(NAV_ITEMS[3].subMenu[0].page);

const Navbar = () => {
  const router = useRouter();

  const [activeSubMenu, setActiveSubMenu] = useState(false);

  useEffect(() => {
    setActiveSubMenu(SUB_MENU_PAGES.includes(router.pathname.replace("/", "")));
  }, [router.pathname]);

  // Selecting cart from global state
  const cart = useSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  const [navbar, setNavbar] = useState(false);
  const [menubar, setMenubar] = useState(false);
  const [smallscreendetect, setSmallscreendetect] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    <header className="w-full mx-auto px-4 sm:px-20 top-0 z-50 bg-bg-h">
      <div>
        <div className="flex items-center justify-between">
          <div className="md:mx-auto md:py-5 md:block">
            <Link href="/">
              <Image
                src="/img/Bianco-Bangladesh-Logo.png"
                alt="Logo"
                width={200}
                height={50}
                className="md:ml-[50%] pb-2"
                // style={{ width: "auto", height: "auto" }}
              />
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center pr-2">
              <Link href={`ShopPage`}>
                <BsSearch className="m-6 sm:mr-4 text-lg cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-primary" />
              </Link>
            </span>

            <div className="hidden sm:flex items-center border-l-2 py-2">
              <a
                href="https://www.facebook.com/BiancoBangladesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrFacebookOption className="mr-4 ml-4 text-base cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-secondary" />
              </a>
              <a
                href="https://www.instagram.com/biancobangladesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="mr-4 text-base cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-secondary" />
              </a>
              <a
                href="https://www.linkedin.com/company/bianco-bangladesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="mr-4 cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-secondary" />
              </a>
            </div>
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
            <div className="md:flex md:space-x-6 items-center justify-center space-y-6  md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = router.pathname === `/${item.page}`;
                const linkClassName =
                  item.label === "BIANCAFFE" ? "text-primary" : "text-black";
                const linkPageName =
                  isActive || (activeSubMenu && item.label === "LEARN")
                    ? "underline underline-offset-4 decoration-2 decoration-primary"
                    : "text-black";

                // Learn submenu
                if (item.subMenu) {
                  return (
                    <div
                      key={idx}
                      className={`relative md:pb-4 text-base font-raleway font-sans font-semi-bold inline-block group cursor-pointer z-10`}
                    >
                      <span
                        className={`inline-block ${linkClassName} flex items-center text-base font-raleway font-sans font-semibold cursor-pointer hover:text-secondary md:hover:scale-125 hover:scale-105 ease-in-out duration-300`}
                        onClick={() => setMenubar(!menubar)}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        {/* Learn */}
                        <span className={`mr-1 ${linkPageName}`}>
                          {item.label}
                        </span>
                        {isHovered ? (
                          <AiFillCaretUp
                            className="text-secondary "
                            size={15}
                          />
                        ) : (
                          <AiFillCaretDown
                            className="text-secondary "
                            size={15}
                          />
                        )}
                      </span>
                      <div
                        className={`${
                          menubar && navbar && smallscreendetect
                            ? // sm screen
                              ""
                            : "md:absolute md:left-[-20%] md:right-0 right-0 md:mt-4 md:w-40 w-fit hidden md:bg-white lg:shadow-md rounded-md py-2 group-hover:md:block"
                          // lg screen
                        }`}
                      >
                        {item.subMenu.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={`/${subItem.page}`}
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
                    className={`block md:pb-4 lg:inline-block ${linkPageName} ${linkClassName} text-base font-raleway font-sans font-semi-bold cursor-pointer hover:text-secondary md:hover:scale-125 hover:scale-105 ease-in-out duration-300`}
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
