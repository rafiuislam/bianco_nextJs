import React from "react";
// import Popular from "../components/homeSections/Popular";
import Hero from "../components/Hero";
import ContactDetails from "../components/contactSections/ContactDetails";
import ContactUs from "../components/contactSections/ContactUs";
import HeroImg from "../public/img/Take-Your-Time-bg-min.jpg";
import { NextSeo } from "next-seo";
import { getSeoByPageName } from "../services/auth";

const contact = ({ seo }) => {
  const SEO = {
    title: seo.attributes.title,
    description: seo.attributes.desc,

    openGraph: {
      title: seo.attributes.title,
      description: seo.attributes.desc,
      url: seo.attributes.pageurl,
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <div
        className="bg-bg-h"
        onCopy={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Hero
          HeroImg={HeroImg}
          Herost={"Home"}
          HeroPg={"Contact Us"}
          alt={seo.attributes.alt}
        />
        <section className="container mx-auto mt-4 px-4 sm:pb-2 py-4 md:px-24">
          <p className="sm:text-center px-0 lg:px-12 text-justify text-secondary font-regular font-raleway bg-cover bg-center animate-fadeIn relative">
            <span className="relative z-10">
              Coffee is more than just a drink, it is a passion! And we are here
              to share Bianco Coffee - the best of Italian coffee heritage with
              Bangladesh. If you own a cafe/restaurant or a retail/hypermarket
              chain, including Bianco Coffee beans in your inventory will surely
              place you a step above the rest. To better understand your
              requirements and how we can help provide a premium Italian coffee
              experience to your valued customers, please get in touch with us!
            </span>
          </p>
        </section>
        <ContactDetails />
        <ContactUs />
        {/* <Popular /> */}
      </div>
    </>
  );
};

export default contact;

export async function getStaticProps() {
  const seo = await getSeoByPageName("contact");
  return {
    props: { seo },
  };
}
