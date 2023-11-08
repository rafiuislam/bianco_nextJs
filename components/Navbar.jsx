import { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillCaretDown } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import BiancaffeLogo from "../public/img/Bianco-Logo-1.png";

// import { useDispatch } from "react-redux";
// import { setInitialCart } from "../redux/cartSlice";

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

// console.log(NAV_ITEMS[3].subMenu[0].page);

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();
  const session = useSession({
    required: true,
    onUnauthenticated() {},
  });

  const handleLogout = async () => {
    try {
      await signOut();
      // If signOut is successful, show the toast notification
    } catch (error) {
      console.error("Logout error:", error);
      // Handle logout error if needed
      // toast.error(`Network error, Please try again`, {
      //   position: "bottom-center",
      // });
    }
  };

  // Extract the part of the email before "@" symbol
  // const emailParts = session?.data?.user?.email.split("@");
  // const username = emailParts ? emailParts[0] : "";
  // console.log(username);

  const [activeSubMenu, setActiveSubMenu] = useState(false);

  useEffect(() => {
    setActiveSubMenu(SUB_MENU_PAGES.includes(router.pathname.replace("/", "")));
  }, [router.pathname]);

  // Selecting cart from global state
  const cart = useSelector((state) => state.cart);
  // const dispatch = useDispatch();

  const [itemCount, setItemCount] = useState(0);

  // Calculate and save the item count in local storage whenever the cart changes
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    const calculateItemCount = () => {
      return cart?.cartItems?.reduce(
        (accumulator, item) => accumulator + item.quantity,
        0
      );
    };
    // console.log({ storedCartItems });
    if (storedCartItems) {
      // Parse the JSON string back into an object
      const parsedCartItems = JSON.parse(storedCartItems);
      // console.log({ parsedCartItems, storedCartItems });
      setItemCount(parsedCartItems.length);
    }

    // Save the item count in local storage
    const parsedCartItems = JSON.parse(storedCartItems)?.cartItems;
    // console.log({ parsedCartItems });
    if (parsedCartItems?.length) {
      let totalQuantity = 0;

      for (const cartitem of parsedCartItems) {
        totalQuantity += cartitem.quantity;
      }
      localStorage.setItem("itemCount", totalQuantity);
      setItemCount(totalQuantity);
    } else {
      localStorage.setItem("itemCount", 0);
      setItemCount(0);
    }
  }, [cart?.cartItems]);

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

  // if (session?.data?.user?.email) {
  //   setUsername(session?.data?.user?.email.split("@")[0]);
  //   setEmail(session?.data?.user?.email);
  // }
  useEffect(() => {
    setUsername(session?.data?.user?.email.split("@")[0].substring(0, 5));
    setEmail(session?.data?.user?.email);
  }, [session?.data?.user?.email]);

  return (
    <header className="w-full mx-auto px-4 sm:px-20 top-0 z-50 bg-bg-h">
      <div
        onCopy={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="flex items-center justify-between">
          <div className="md:mx-auto md:py-5 md:block">
            <Link href="/">
              <Image
                src={BiancaffeLogo}
                alt="Bianco Bangladesh is the sole distributor of Bianco Coffee bringing Italian coffee excellence."
                width={200}
                height={50}
                className="md:ml-[50%] py-2"
                // style={{ width: "auto", height: "auto" }}
              />
            </Link>
          </div>
          <div className="flex-col items-center justify-between">
            <div className="flex items-center justify-end">
              <span className="flex items-center pr-2">
                <Link href={`ShopPage`}>
                  <BsSearch className="m-6 sm:mr-4 text-lg cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-primary" />
                </Link>
                {/* <Link href="/cart">
                  <div className="relative mr-4 sm:mr-4 text-lg cursor-pointer hover:scale-125 transition-transform duration-300">
                    <MdOutlineShoppingCart
                      className=" hover:fill-primary"
                      size={25}
                    />

                    <span className="absolute -top-2 left-4 rounded-full bg-primary/80 p-0.5 px-2 text-xs text-white">
                      {itemCount}
                    </span>
                  </div>
                </Link> */}
              </span>

              {/* links of socials */}
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
              {/* hamburger menu */}
              <div className="md:hidden">
                <button
                  className={`p-2 rounded-md outline-none ${
                    navbar ? "animate-showMenu" : "animate-closeMenu"
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
            {/* {session?.data ? (
              <div className="flex items-center justify-end md:justify-center mb-2 md:mb-0">
                <div
                  className="group cursor-pointer flex items-center"
                  onClick={() => router.push("profile")}
                >
                  <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full border-[1px] border-primary bg-bg-h">
                    <span className="text-secondary font-bold text-lg group-hover:text-primary">
                      {username ? username.charAt(0).toUpperCase() : ""}
                    </span>
                  </div>
                  <div className="text-black text-md sm:text-lg font-semibold ml-1 mr-2 group-hover:text-primary">
                    {username}
                  </div>
                </div>

                <div className="item-center justify-center">
                  <button
                    className="font-semibold text-sm md:text-xs font-raleway relative bg-black py-1 px-2 md:px-4 md:py-2 rounded uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-10"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center mt-2 space-x-2 justify-end md:justify-center">
                <button
                  onClick={() => router.push("signin")}
                  className="font-semibold text-sm md:text-xs mb-2 md:mb-0 font-raleway relative bg-black py-1 px-2 md:px-4 md:py-2 rounded uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-10"
                >
                  Login
                </button>
                <button
                  onClick={() => router.push("signup")}
                  className="font-semibold text-sm md:text-xs mb-2 md:mb-0  font-raleway relative bg-black py-1 px-2 md:px-4 md:py-2 rounded uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-10"
                >
                  Register
                </button>
              </div>
            )} */}
          </div>
          {/* 
          <div className="md:hidden">
            <button
              className={`p-2 rounded-md outline-none ${
                navbar ? "animate-showMenu" : "animate-closeMenu"
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
          </div> */}
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
                        // onClick={() => setMenubar(!menubar)}
                        onClick={toggleNavbar}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        {/* Learn */}
                        <span className={`mr-1 ${linkPageName}`}>
                          {item.label}
                        </span>
                        <AiFillCaretDown
                          className="text-secondary"
                          size={15}
                          style={{
                            transform: isHovered
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                        />
                        {/* {isHovered ? (
                          <AiFillCaretUp className="text-secondary" size={15} />
                        ) : (
                          <AiFillCaretDown
                            className="text-secondary "
                            size={15}
                          />
                        )} */}
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
                            onClick={toggleNavbar}
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
                    onClick={toggleNavbar}
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
