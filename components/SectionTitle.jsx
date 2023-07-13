import React from "react";
import SlideUp from "../components/animate/SlideUp";

const SectionTitle = ({ title }) => {
  return (
    <SlideUp offset="-300px 0px -300px 0px">
      <h1 className="lg:mb-6 pb-2 md:pb-0 text-center text-primary font-medium text-3xl sm:text-5xl font-title">
        {title}
      </h1>
    </SlideUp>
  );
};

export default SectionTitle;
