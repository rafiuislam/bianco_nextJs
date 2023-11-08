import React, { useState, useRef } from "react";
import SlideFromLeft from "../animate/SlideFromLeft";
import FadeAndScale from "../animate/FadeAndScale";
import SectionTitle from "../SectionTitle";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
  TO_EMAIL,
} from "../../utils/urls";

const ContactUs = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Bianco",
          from_email: form.email,
          to_email: TO_EMAIL,
          number: form.number,
          message: form.message,
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

          setForm({
            name: "",
            email: "",
            number: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          // alert("Something went wrong!");
          toast.error("Something went wrong! Try again", {
            position: "top-center",
          });
        }
      );
  };

  return (
    <section
      id="popular"
      className="container mx-auto mt-4 mb-4 px-4 pb-8 sm:pb-2 md:px-24 md:p-12"
    >
      <SectionTitle title="Get in Touch With Us" />
      <div className="bg-bg-h w-full flex items-center justify-around">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-3/4 top-40 rounded"
        >
          <div className="md:flex items-center justify-between mt-12 flex-wrap">
            <div className="md:w-72 flex flex-col flex-grow">
              <SlideFromLeft offset="-300px 0px -300px 0px">
                <label className="text-base font-semibold leading-none animate-slideFromLeft">
                  Name
                </label>
              </SlideFromLeft>

              <input
                tabIndex={0}
                aria-label="Please input name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="text-secondary font-light text-base font-custom leading-none p-3 focus:outline-none mt-4 bg-gray-100 border rounded"
                placeholder="Please enter name"
              />
            </div>
            <div className="md:w-72 flex flex-col lg:ml-6 lg:mt-0 mt-4 flex-grow">
              <SlideFromLeft offset="-300px 0px -300px 0px">
                <label className="text-base font-semibold leading-none animate-slideFromLeft">
                  Email
                </label>
              </SlideFromLeft>

              <input
                tabIndex={0}
                aria-label="Please input email address"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="text-secondary font-light text-base font-custom leading-none p-3 focus:outline-none mt-4 bg-gray-100 border rounded"
                placeholder="Please enter email address"
              />
            </div>
            <div className="md:w-72 flex flex-col 2xl:ml-6 2xl:mt-0 mt-4 flex-grow">
              <SlideFromLeft offset="-300px 0px -300px 0px">
                <label className="text-base font-semibold leading-none animate-slideFromLeft">
                  Phone Number
                </label>
              </SlideFromLeft>
              <input
                tabIndex={0}
                aria-label="Please input Phone Number"
                type="number"
                name="number"
                value={form.number}
                onChange={handleChange}
                className="text-secondary font-light text-base font-custom leading-none p-3 focus:outline-none mt-4 bg-gray-100 border rounded"
                placeholder="Phone number"
              />
            </div>
          </div>

          <div>
            <div className="w-full flex flex-col mt-8">
              <SlideFromLeft offset="-300px 0px -300px 0px">
                <label className="text-base font-semibold leading-none text-gray-800 slideFromLeft">
                  Message
                </label>
              </SlideFromLeft>
              <textarea
                tabIndex={0}
                rows="7"
                aria-label="leave a message"
                role="textbox"
                type="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="h-36 text-secondary font-light text-base font-custom leading-none p-3 focus:outline-none mt-4 bg-gray-100 border rounded placeholder-gray-100 resize-none"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
          </div>
          <p className="text-secondary font-light text-sm font-custom leading-3 text-gray-600 mt-4">
            By clicking submit you agree to our terms of service, privacy policy
            and how we use data as stated
          </p>
          <div className="flex items-center justify-center w-full">
            <FadeAndScale offset="-300px 0px -300px 0px">
              {/* <button className="bg-black text-white text-base font-semibold mt-9 leading-none py-4 px-10 rounded hover:bg-primary hover:scale-110 transition-transform duration-300 hover:bg-opacity-80 focus:outline-none animate-fadeIn">
                SUBMIT
              </button> */}
              <button
                type="submit"
                className="font-semibold text-base font-raleway mt-9 relative bg-black py-3 px-10 rounded uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-10"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </FadeAndScale>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
