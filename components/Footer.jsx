import React, { useState, useRef } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { GrFacebookOption } from "react-icons/gr";
import BiancaffeLogo from "../public/img/Bianco-Logo-1.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
  TO_EMAIL,
} from "../utils/urls";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_email: email, // Send only the email address
          to_email: TO_EMAIL,
        },
        EMAILJS_USER_ID
      )
      .then(
        () => {
          setLoading(false);
          toast(`Thank you. We will get back to you as soon as possible.`, {
            icon: "😊",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
            position: "top-center",
          });

          setEmail(""); // Clear the email address
        },
        (error) => {
          setLoading(false);
          toast.error("Something went wrong! Try again", {
            position: "top-center",
          });
        }
      );
  };

  const links = [
    { id: 1, label: "About Bianco", page: "about-bianco" },
    { id: 2, label: "Our Beans", page: "our-beans" },
    { id: 3, label: "Roasting Guide", page: "roasting-guide" },
    { id: 4, label: "Brewing Guide", page: "brewing-guide" },
    // { id: 5, label: "Blog" },
    // { id: 6, label: "Decafe Coffee" },
    // { id: 7, label: "Speciality Coffee" },
    // { id: 8, label: "Coffee Roasters" },
    // { id: 9, label: "Our Approach" },
    // { id: 10, label: "Roast Profiles" },
    // { id: 11, label: "Brew Guides" },
    // { id: 12, label: "For Business" },
    // { id: 13, label: "Sitemap" },
    // { id: 14, label: "Blogs" },
  ];

  const policies = [
    { id: 1, label: "Privacy Policy", page: "privacy-policy" },
    { id: 2, label: "Terms and Conditions", page: "terms-conditions" },
    {
      id: 2,
      label: "Deliveries, Returns & Refunds",
      page: "deliveries-returns-refunds",
    },
    // { id: 3, label: "My Orders" },
    // { id: 4, label: "My Account" },
    // { id: 5, label: "Wishlist" },
    // { id: 6, label: "Shipment & Returns" },
  ];

  // const contactInfo = [
  //   {
  //     icon: <FaMapMarkerAlt />,
  //     text: "House# 4a, Road# 0a, Shanta Province, Uttara, Dhaka, Bangladesh",
  //     key: "address",
  //   },
  //   {
  //     icon: <FaPhone />,
  //     text: "+88 017 9444 8555",
  //     key: "phone",
  //   },

  //   {
  //     icon: <FaEnvelope />,
  //     text: "Coffee@bianco-bd.com",
  //     key: "email",
  //   },
  // ];

  return (
    <section>
      <div
        className="flex flex-wrap flex-none pt-4 md:justify-center lg:justify-evenly"
        onCopy={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="p-5 flex-col mx-auto md:mx-0 md:pb-5">
          <ul>
            <div className="flex items-center mr-50% pb-2 justify-center">
              <Image
                src={BiancaffeLogo}
                alt="Bianco Bangladesh is the sole distributor of Bianco Coffee bringing Italian coffee excellence."
                width={200}
                height={50}
                // style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="md:pb-5 md:block">
              <div className="w-60 h-65 text-justify mb-6">
                <p className="text-secondary font-light text-xs font-custom">
                  Bianco Coffee - the Salerno, Naples based roastery started its
                  operations in 1932, and over time, it has gone on to become{" "}
                  {`‘il principale ambasciatore’ `}of Italian coffee beans
                  across the globe. The rich, warm taste of Bianco Coffee beans
                  is now enjoyed in 30+ countries worldwide.
                </p>
              </div>
            </div>
          </ul>
        </div>
        <div className="p-5 mx-10 md:mx-0">
          <ul>
            <p className="text-secondary font-semi-bold text-xl font-title sm:pt-0 xs:pt-0 pt-6 pb-6 ">
              Quick Links
            </p>

            {links.map((link) => (
              <li
                key={link.id}
                className="text-secondary font-light text-xs font-custom pb-2 cursor-pointer transition-all
                duration-500
                before:content-['']
                before:absolute
                before:bottom-1
                before:left-0
                before:w-0
                before:h-1
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-secondary
                before:via-slate-400
                before:to-white
                hover:before:w-full
                hover:before:opacity-100
                relative"
              >
                <Link href={link.page} key={link.id}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5 mx-10 md:mx-0">
          <ul>
            <p className="text-secondary font-semi-bold text-xl sm:pt-0 xs:pt-0 pt-6 pb-6 font-title ">
              Policies
            </p>
            {policies.map((policy) => (
              <li
                key={policy.id}
                className="text-secondary font-light text-xs font-custom pb-2 cursor-pointer transition-all
                duration-500
                before:content-['']
                before:absolute
                before:bottom-1
                before:left-0
                before:w-0
                before:h-1
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-secondary
                before:via-slate-400
                before:to-white
                hover:before:w-full
                hover:before:opacity-100
                relative"
              >
                <Link href={policy.page} key={policy.id}>
                  {policy.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5 mx-10 md:mx-0">
          <ul>
            <p className="text-secondary font-semi-bold text-xl sm:pt-0 xs:pt-0 pt-6 pb-6 font-title ">
              Contact Us
            </p>
            <li className="flex items-center text-secondary font-light text-xs font-custom pb-2 cursor-pointer ">
              <div className="flex items-center justify-center mr-2">
                <FaMapMarkerAlt />
              </div>
              <div
                className={`ml-2 cursor-pointer transition-all duration-500 relative   before:content-['']
                before:absolute
                before:top-9
                before:left-0
                before:w-1
                before:h-0.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-secondary
                before:to-secondary
                hover:before:w-full
                hover:before:opacity-100`}
              >
                <a
                  href="https://maps.google.com/maps?q=House%234a%2C%20Road%230a%2C%20Shanta%20Province%2C%20Uttara%2C%20Dhaka%2C%20Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  House-43, Level-2, Shah Makhdum <br /> Avenue, Sector-12,
                  Uttara, Dhaka-1230
                </a>
              </div>
            </li>

            <li className="flex items-center text-secondary font-light text-xs font-custom pb-2 cursor-pointer  ">
              <div className="flex items-center justify-center mr-2">
                <FaPhone />
              </div>
              <span className="ml-2 cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:top-4 before:left-0 before:w-1 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-secondary before:to-secondary hover:before:w-full hover:before:opacity-100 relative">
                <a href="tel:+88 017 9444 8555">+88 017 9444 8555</a>
              </span>
            </li>
            <li className="flex items-center text-secondary font-light text-xs font-custom pb-2 cursor-pointer">
              <div className="flex items-center justify-center mr-2">
                <FaEnvelope />
              </div>
              <div>
                <a
                  href="mailto:info@bianco-bd.com"
                  className="ml-2 cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:top-4 before:left-0 before:w-1 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-secondary before:to-secondary hover:before:w-full hover:before:opacity-100 relative"
                >
                  info@bianco-bd.com
                </a>
              </div>
            </li>
          </ul>

          <div className="p-8 pt-8 sm:pt-4 sm:pl-0 mx-10 md:mx-0">
            <ul>
              <li className="flex items-center text-secondary font-light text-base font-custom pb-2 ">
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
              </li>
            </ul>
          </div>
        </div>
        <div className="p-5 mx-10 md:mx-0">
          <form ref={formRef} onSubmit={handleSubscribe}>
            <ul>
              <p className="text-secondary font-semi-bold text-xl sm:pt-0 xs:pt-0 pt-6 pb-6 font-title ">
                Newsletter
              </p>
              <li className="text-secondary font-light text-xs font-custom pb-2 ">
                SUBSCRIBE TO OUR NEWSLETTER
              </li>
              <li className="flex items-center text-secondary font-light text-xs font-custom pb-5 hover:text-secondary cursor-pointer">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-secondary/20 py-1 pl-4 pr-4 focus:outline-none placeholder-secondary"
                  value={email}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="ml-3 focus:outline-none flex items-center"
                >
                  {loading ? (
                    <FaEnvelope
                      size={25}
                      className="animate-spin mr-1 text-primary"
                    />
                  ) : (
                    <FaEnvelope
                      size={25}
                      className="mr-1 cursor-pointer hover:scale-125 transition-transform duration-300 hover:text-primary"
                    />
                  )}
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-5 ">
        <h1 className="text-secondary font-light text-xs font-custom pb-3">
          COPYRIGHT {currentYear} BIANCO BANGLADESH. ALL RIGHTS RESERVED.
        </h1>
      </div>
    </section>
  );
};

export default Footer;
