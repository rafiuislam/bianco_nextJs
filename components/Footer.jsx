import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { GrFacebookOption } from "react-icons/gr";

const Footer = () => {
  const links = [
    { id: 1, label: "Coffee Beans Online Bangladesh" },
    { id: 2, label: "Espresso Coffee Beans" },
    { id: 3, label: "Coffee Beans Suppliers" },
    { id: 4, label: "South Indian Filter Coffee Online" },
    { id: 5, label: "Green Coffee" },
    { id: 6, label: "Decafe Coffee" },
    { id: 7, label: "Speciality Coffee" },
    { id: 8, label: "Coffee Roasters" },
    { id: 9, label: "Our Approach" },
    { id: 10, label: "Roast Profiles" },
    { id: 11, label: "Brew Guides" },
    { id: 12, label: "For Business" },
    { id: 13, label: "Sitemap" },
    { id: 14, label: "Blogs" },
  ];

  const policies = [
    { id: 1, label: "Privacy Policy" },
    { id: 2, label: "Terms and Use" },
    { id: 3, label: "My Orders" },
    { id: 4, label: "My Account" },
    { id: 5, label: "Wishlist" },
    { id: 6, label: "Shipment & Returns" },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      text: "House# 4a, Road# 0a, Shanta Province, Uttara, Dhaka, Bangladesh",
      key: "address",
    },
    {
      icon: <FaPhone />,
      text: "+880 111 XXX 222 333<br/>+880 111 XXX 222 444<br/>+880 111 XXX 222 111<br/>",
      key: "phone",
    },

    {
      icon: <FaEnvelope />,
      text: "Coffee@bianco-bd.com",
      key: "email",
    },
  ];

  return (
    <section>
      <div className="flex flex-wrap flex-none md:justify-center lg:justify-evenly">
        <div className="p-5 flex-col mx-auto md:mx-0  md:pb-5">
          <ul>
            <div className="flex items-center mr-50% justify-center">
              <Image
                src="/img/Bianco-Logo-Black.png"
                alt="Logo"
                width={200}
                height={50}
              />
            </div>
            <div className="md:pb-5 md:block">
              <div className="w-60 h-65 text-justify mb-6">
                <p className="text-secondary font-light text-sm font-custom ">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here, making it look like readable English. Many
                  desktop publishing packages and web page editors now use Lorem
                  Ipsum as their default model text, and a search for lorem
                  ipsum will uncover many web sites still in their infancy.
                </p>
              </div>
            </div>
          </ul>
        </div>
        <div className="p-5 mx-10 md:mx-0">
          <ul>
            <p className="text-secondary font-regular text-xl font-title sm:pt-0 xs:pt-0 pt-6 pb-6 ">
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
                {link.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5 mx-10 md:mx-0">
          <ul>
            <p className="text-secondary font-regular text-xl sm:pt-0 xs:pt-0 pt-6 pb-6 font-title ">
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
                {policy.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5 mx-10 md:mx-0">
          <ul>
            <p className="text-secondary font-regular text-xl sm:pt-0 xs:pt-0 pt-6 pb-6 font-title ">
              Connect With Us
            </p>
            <li className="flex items-center text-secondary font-light text-xs font-custom pb-2 cursor-pointer ">
              <div className="flex items-center justify-center mr-2">
                <FaMapMarkerAlt />
              </div>
              <span className="ml-2 ">
                House# 4a, Road# 0a, Shanta
                <br /> Province, Uttara, Dhaka,
                <br /> Bangladesh
              </span>
            </li>
            <li className="flex items-center text-secondary font-light text-xs font-custom pb-2 cursor-pointer  ">
              <div className="flex items-center justify-center mr-2">
                <FaPhone />
              </div>
              <span className="ml-2">
                <span>+880 111 XXX 222 333 </span> <br />
                <span>+880 111 XXX 222 444</span>
                <br /> <span> +880 111 XXX 222 111</span>
              </span>
            </li>
            <li className="flex items-center text-secondary font-light text-xs font-custom pb-2 cursor-pointer">
              <div className="flex items-center justify-center mr-2">
                <FaEnvelope />
              </div>
              <span className="ml-2">Coffee@bianco-bd.com</span>
            </li>
          </ul>
        </div>
        <div className="p-5 mx-10 md:mx-0">
          <ul>
            <p className="text-secondary font-regular text-xl sm:pt-0 xs:pt-0 pt-6 pb-6 font-title ">
              Newsletter
            </p>
            <li className="text-secondary font-light text-xs font-custom pb-2 ">
              SUBSCRIBE TO OUR NEWSLETTER
            </li>
            <li className="flex items-center text-secondary font-light text-xs font-custom pb-5 hover:text-blue-600 cursor-pointer">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="py-1 pl-4 pr-8 focus:outline-none"
                style={{
                  backgroundColor: "#E5DDD8",
                  "::placeholder": { color: "#63554b" },
                }}
              />
            </li>
            <li className="flex items-center text-secondary font-light text-xs font-custom pb-2 ">
              <GrFacebookOption className="mr-4 cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-secondary" />
              <FaInstagram className="mr-4 cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-secondary" />
              <FaLinkedinIn className="mr-4 cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-secondary" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-5 ">
        <h1 className="text-secondary font-light text-xs font-custom pb-3">
          COPYRIGHT 2023 BIANCO BANGLADESH
        </h1>
      </div>
    </section>
  );
};

export default Footer;
