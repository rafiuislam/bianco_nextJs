import React from "react";
import Popular from "../components/homeSections/Popular";
import Hero from "../components/Hero";
import ContactDetails from "../components/contactSections/ContactDetails";
import ContactUs from "../components/contactSections/ContactUs";
import Map from "../components/contactSections/Map";
import HeroImg from "../public/img/Take-Your-Time-bg.jpg";

const contact = () => {
  return (
    <div className="bg-bg-h">
      <Hero HeroImg={HeroImg} HeroPg={"Contact Us"} />
      <ContactDetails />
      <Map />
      <ContactUs />
      <Popular />
    </div>
  );
};

export default contact;
