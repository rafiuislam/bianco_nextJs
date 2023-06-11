import React from "react";
import SlideUp from "../animate/SlideUp";
import SlideFromLeft from "../animate/SlideFromLeft";
import SlideFromRight from "../animate/SlideFromRight";
import FadeAndScale from "../animate/FadeAndScale";

const ContactUs = () => {
  return (
    <section
      id="popular"
      className="container mx-auto mt-4 mb-4 px-4 pb-8 sm:pb-2 md:px-24 md:p-12"
    >
      <SlideUp offset="-300px 0px -300px 0px">
        <h1 className="lg:mb-6 text-center text-primary font-medium text-5xl font-title">
          Get in Touch With Us
        </h1>
      </SlideUp>
      <div className="bg-bg-h w-full flex items-center justify-around">
        <div className="w-3/4 top-40 rounded">
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
                type="name"
                className="text-secondary font-light text-base font-custom leading-none p-3 focus:outline-none mt-4 bg-gray-100 border rounded"
                placeholder="Name"
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
                className="text-secondary font-light text-base font-custom leading-none p-3 focus:outline-none mt-4 bg-gray-100 border rounded"
                placeholder="Email address"
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
                aria-label="leave a message"
                role="textbox"
                type="message"
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
              <button className="bg-black text-white text-base font-semibold mt-9 leading-none py-4 px-10 rounded hover:bg-primary hover:scale-110 transition-transform duration-300 hover:bg-opacity-80 focus:outline-none animate-fadeIn">
                SUBMIT
              </button>
            </FadeAndScale>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
