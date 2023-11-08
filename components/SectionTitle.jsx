import React from "react";
import SlideUp from "../components/animate/SlideUp";

const SectionTitle = ({ title, align, level }) => {
  const aligned = align === "start" ? "sm:text-start" : "";

  const HeadingTag = `h${level || 1}`; // Use the specified level or default to <h1>

  return (
    <SlideUp offset="-300px 0px -300px 0px">
      <div style={{ fontVariant: "small-caps" }}>
        <HeadingTag
          className={`lg:mb-6 pb-2 md:pb-0 ${aligned} text-center text-primary font-medium text-3xl sm:text-5xl font-title`}
        >
          {title}
        </HeadingTag>
      </div>
    </SlideUp>
  );
};

export default SectionTitle;
