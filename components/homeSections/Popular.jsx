import React from "react";
import FadeAndScale from "../animate/FadeAndScale";
import SectionTitle from "../SectionTitle";

const Popular = () => {
  const tags = [
    { tag: "Raw Coffee Beans" },
    { tag: "Moka Pot" },
    { tag: "Aeropress Coffee Maker" },
    { tag: "Decaffeinated Coffee" },
    { tag: "Arabica & Robusta" },
    { tag: "Gourmet Coffee" },
    { tag: "Imported Coffee Beans" },
    { tag: "Green Coffee Beans" },
    { tag: "Wholesale Coffee Beans" },
    { tag: "International Coffee Beans" },
    { tag: "Monsoon Malabar Coffee" },
  ];
  return (
    <section
      id="popular"
      className="container mx-auto mt-4 mb-4 px-4 pb-8 sm:pb-2 md:px-24 md:p-12"
    >
      <SectionTitle title="Popular Searches" />
      <FadeAndScale offset="-300px 0px -300px 0px">
        <div className="flex flex-wrap flex-row justify-center py-8 sm:py-2 z-10 md:justify-center animate-fadeIn">
          {tags.map((item, idx) => {
            return (
              <p
                key={idx}
                className="bg-secondary px-4 py-3 mr-2 mt-2 rounded-full text-white font-custom text-base font-semi-bold cursor-pointer animate-fadeAndScale hover:scale-105 transition-transform duration-300 hover:bg-opacity-80 animate-fadeIn"
              >
                {item.tag}
              </p>
            );
          })}
        </div>
      </FadeAndScale>
    </section>
  );
};

export default Popular;
