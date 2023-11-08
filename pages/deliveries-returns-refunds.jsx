import React from "react";
import { NextSeo } from "next-seo";
import { getSeoByPageName } from "../services/auth";

const deliveriesReturnsRefunds = ({ seo }) => {
  const SEO = {
    title: seo.attributes.title,
    description: seo.attributes.desc,

    openGraph: {
      title: seo.attributes.title,
      description: seo.attributes.desc,
      url: seo.attributes.pageurl,
    },
  };

  const refunds = [
    "Customer must notify Bianco Bangladesh of any issues within 48 hours of receiving the product.",
    "The product is in its original packaging (intact) and no seal is broken (unopened).",
    "Customer must be able to present a proof of purchase (receipt/invoice).",
    "The reason for return and/or refund has to be valid and has to meet at least one or more of the following criteria:",
  ];
  const refundsbd = [
    "১। প্রোডাক্ট সম্পর্কে কোন অভিযোগ থাকলে তা প্রাপ্তির ৪৮ ঘণ্টার মধ্যে বিয়াংকো বাংলাদেশকে গ্রাহককে্র জানাতে হবে।",
    "২। প্রোডাক্টটি তার অরিজিনাল প্যাকেজিংয়ে ইন্টেক্ট থাকতে হবে, এবং খোলা বা কোনও সীল ভাঙ্গা থাকতে পারবে না।",
    "৩। গ্রাহককে্র প্রোডাক্ট কেনার প্রমাণ হিসেবে রসিদ/চালান উপস্থাপন করতে হবে। ",
    "৪। ফেরত এবং/অথবা রিফান্ডের কারণটি গ্রহনযগ্য হওয়ার জন্য অবশ্যই বৈধ এবং কমপক্ষে নিম্নলিখিত ক্রাইটেরিয়াগুলির মধ্যে একটি বা একাধিকটি মোতাবেক হতে হবেঃ",
  ];
  const Cancellations = [
    "Delivery of the ordered items is subject to product availability in our stock. Bianco Bangladesh may cancel any order due to unavailability within XX working days if stock is unavailable.",
    "If product is out of stock but customer has completed payment, Bianco Bangladesh shall issue a full refund in favour of customer in the original payment method within 7-10 working days.",
    "In the event that a customer cancels an order after confirming it (prior to delivery) and has already completed payment via online payment gateway, Bianco Bangladesh will charge an Online Gateway Transaction fee prior to disbursing the refund amount.",
  ];
  const Cancellationsbd = [
    "১। অর্ডার করা পণ্য স্টকে আছে কিনা সেইটার ওপরেই অনেক বেশি নির্ভর করে অর্ডারের সরবরাহ প্রদান করার ক্ষেত্রে । যদি প্রোডাক্ট স্টক না থাকে বিয়াকো বাংলাদেশ ৩ থেকে ৫ দিনের মধ্যে যেকোন অর্ডার বাতিল করতে পারে।",
    "২। যদি প্রোডাক্ট স্টকে না থাকে, কিন্তু গ্রাহক আগেই পেমেন্ট সম্পন্ন করে থাকে, তবে বিয়াকো বাংলাদেশ গ্রাহকের মৌলিক পেমেন্ট পদ্ধতিতে ৭ থেকে ১০ দিনের মধ্যে সম্পুর্ন রিফান্ড প্রদান করবে।",
    "৩।	যদি গ্রাহক অর্ডার নিশ্চিত করার পর (সরবরাহের আগে) বাতিল করে এবং ইন্টারনেট পেমেন্ট গেটওয়ে দ্বারা পেমেন্ট সম্পন্ন করে থাকে, তবে বিয়াকো বাংলাদেশ রিফান্ডটি একই পেমেন্ট পদ্ধতিতে জারি করবে এবং পূর্ণ রিফান্ড পরিমাণ প্রদান করার আগে অনলাইন গেটওয়ে লেনদেন ফি আদায় করবে।",
  ];

  return (
    <>
      <NextSeo {...SEO} />
      <section
        className="container mx-auto mt-4 px-4 sm:pb-2 py-4 md:px-24"
        onCopy={(e) => e.preventDefault()}
        // onMouseDown={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      >
        <span style={{ fontVariant: "small-caps" }}>
          <h1 className="lg:mb-6 pb-2 md:pb-0 text-center text-primary font-medium text-4xl sm:text-5xl font-title">
            Deliveries, Returns & Refunds
          </h1>
        </span>

        <div className="lg:py-6 py-8">
          {/* Delivery */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Delivery:
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-semi-bold text-lg font-raleway font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                Delivery within Dhaka - between 3-5 working days of receiving
                order Delivery outside of Dhaka - between 7-10 working days
              </span>
            </p>
          </div>

          {/* Return and Refund Policy */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Return and Refund Policy:
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                Thank you for shopping with Bianco Bangladesh. We take pride in
                providing our customers with high quality coffee beans. If,
                however, you are not entirely satisfied with your purchase, we
                are here to help.
              </span>
            </p>
          </div>

          {/*   Refund Due to Damaged/ Incorrect Product Delivery */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Refund Due to Damaged/ Incorrect Product Delivery:
              </header>
            </span>
            <div className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                Products will be eligible for return and/or refund only under
                the following circumstances:
              </span>
              <br />
              <br />
              <ul className="text-start pl-2 sm:pl-6">
                {refunds.map((refund, index) => (
                  <li
                    key={index}
                    className="mb-2 text-secondary font-regular text-sm font-raleway bg-cover bg-center relative animate-fadeIn"
                    //   style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {" "}
                    {index + 1} {refund}
                  </li>
                ))}
                <ul className="text-start pl-2 sm:pl-6">
                  <li className="mb-2 text-secondary font-regular text-sm font-raleway bg-cover bg-center relative animate-fadeIn">
                    a. Product was delivered in damaged condition
                  </li>
                  <li className="mb-2 text-secondary font-regular text-sm font-raleway bg-cover bg-center relative animate-fadeIn">
                    b. Wrong product was delivered
                  </li>
                </ul>
              </ul>
              <br />
              ‘Change of mind’ returns are not accepted.
            </div>
          </div>

          {/* Refund process */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Refund process:
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                If a customer claim is deemed valid for refund, Bianco
                Bangladesh will issue a refund within 7 - 10 working days. For
                payments completed online via official website, refund shall be
                made to the original payment method. For cash on delivery
                payments, refund shall be issued via xxxxxx.
              </span>
            </p>
          </div>

          {/* Cancellation & Refund Due to Product Unavailability */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Cancellation & Refund Due to Product Unavailability:
              </header>
            </span>
            <br />
            <ul className="text-start pl-2 sm:pl-6">
              {Cancellations.map((Cancellation, index) => (
                <li
                  key={index}
                  className="mb-2 text-secondary font-regular text-sm font-raleway bg-cover bg-center relative animate-fadeIn"
                  //   style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {" "}
                  {index + 1} {Cancellation}
                </li>
              ))}
            </ul>
            <br />
          </div>
        </div>
      </section>

      <section
        className="container mx-auto mt-4 px-4 sm:pb-2 py-4 md:px-24"
        onCopy={(e) => e.preventDefault()}
        // onMouseDown={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      >
        <span style={{ fontVariant: "small-caps" }}>
          <h1 className="lg:mb-6 pb-2 md:pb-0 text-center text-primary font-medium text-4xl sm:text-5xl font-title">
            ডেলিভারি রিটার্ন এবং রিফান্ড
          </h1>
        </span>

        <div className="lg:py-6 py-8">
          {/* Delivery */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                ডেলিভারি:
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-semi-bold text-lg font-raleway font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                ঢাকার ভেতরের এলাকায় ডেলিভারি - অর্ডার পাওয়ার ৩ থেকে ৫ দিনের
                মধ্যে প্রোডাক্ট হস্তান্তর করে অর্ডার সম্পুর্ন করা হয়। ঢাকা বাইরে
                ডেলিভারি – অর্ডার পাওয়ার ৭ থেকে ১০ কর্মদিন এর মধ্যে প্রোডাক্ট
                হস্তান্তর করে অর্ডার সম্পুর্ন করা হয়।
              </span>
            </p>
          </div>

          {/* Return and Refund Policy */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                রিটার্ন এবং রিফান্ড নীতিমালা:
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                বিয়াংকো বাংলাদেশে শপিং করার জন্য আপনাদের ধন্যবাদ। আমরা
                সর্বাত্তক ভাবে গ্রাহকদের উচ্চ মানের কফি বীন সরবরাহ করার
                প্রতিশ্রুতি নিয়ে কাজ করি। তবে, যদি আপনি যদি কখনও কোন অবাঞ্ছিত
                কারনে আমাদের পণ্য পেয়ে সম্পূর্ণ সন্তুষ্ট না থাকেন, তবে আমরা
                অবশ্যয় তা সংশোধন করতে সাহায্য করি।
              </span>
            </p>
          </div>

          {/*   Refund Due to Damaged/ Incorrect Product Delivery */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                ক্ষতিগ্রস্থ / ভুল পণ্য সরবরাহের কারণে রিফান্ডঃ
              </header>
            </span>
            <div className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                শুধুমাত্র নিম্নলিখিত শর্ত সাপেক্ষে বিক্রিত পণ্য রিটার্ন এবং/অথবা
                রিফান্ডের যোগ্য হবে:
              </span>
              <br />
              <br />
              <ul className="text-start pl-2 sm:pl-6">
                {refundsbd.map((refund, index) => (
                  <li
                    key={index}
                    className="mb-2 text-secondary font-regular text-sm font-raleway bg-cover bg-center relative animate-fadeIn"
                    //   style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {" "}
                    {refund}
                  </li>
                ))}
                <ul className="text-start pl-2 sm:pl-6">
                  <li className="mb-2 text-secondary font-regular text-sm font-raleway bg-cover bg-center relative animate-fadeIn">
                    - প্রোডাক্টটি ক্ষতিগ্রস্ত অবস্থায় প্রাপ্ত হয়েছিল
                  </li>
                  <li className="mb-2 text-secondary font-regular text-sm font-raleway bg-cover bg-center relative animate-fadeIn">
                    - ভুল প্রোডাক্ট ডেলিভার করা হয়েছিল
                  </li>
                </ul>
              </ul>
              <br />
              ‘মন পাল্টানোর’ কারন হলে ফেরত গ্রহণ করা হবে না।
            </div>
          </div>

          {/* Refund process */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                রিফান্ডের পদ্ধতি:
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                যদি কোন গ্রাহকের দাবি মৌলিক রিফান্ডের জন্য বৈধ হিসেবে গণ্য হয়,
                বিয়াংকো বাংলাদেশ ৭ থেকে ১০ দিনের মধ্যে একটি রিফান্ড জারি করবে।
                অফিসিয়াল ওয়েবসাইটের মাধ্যমে অনলাইনে পেমেন্টের সম্পন্ন করে কেনা
                প্রোডাক্টট এর জন্য, রিফান্ডটি একই পেমেন্ট পদ্ধতিতে জারি করা হবে।
              </span>
            </p>
          </div>

          {/* Cancellation & Refund Due to Product Unavailability */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                প্রোডাক্ট এভেইলেবেল না থাকার কারণে বাতিল এবং রিফান্ড:
              </header>
            </span>
            <br />
            <ul className="text-start pl-2 sm:pl-6">
              {Cancellationsbd.map((Cancellation, index) => (
                <li
                  key={index}
                  className="mb-2 text-secondary font-regular text-sm font-raleway bg-cover bg-center relative animate-fadeIn"
                  //   style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {" "}
                  {Cancellation}
                </li>
              ))}
            </ul>
            <br />
          </div>
        </div>
      </section>
    </>
  );
};

export default deliveriesReturnsRefunds;

export async function getStaticProps() {
  const seo = await getSeoByPageName("deliveriesReturnsRefunds");
  return {
    props: { seo },
  };
}
