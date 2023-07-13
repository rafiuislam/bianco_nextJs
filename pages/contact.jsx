import React from "react";
// import Popular from "../components/homeSections/Popular";
import Hero from "../components/Hero";
import ContactDetails from "../components/contactSections/ContactDetails";
import ContactUs from "../components/contactSections/ContactUs";
import HeroImg from "../public/img/Take-Your-Time-bg.jpg";

const contact = () => {
  return (
    <div className="bg-bg-h">
      <Hero HeroImg={HeroImg} Herost={"Home"} HeroPg={"Contact Us"} />
      <ContactDetails />
      <ContactUs />
      {/* <Popular /> */}
    </div>
  );
};

export default contact;
