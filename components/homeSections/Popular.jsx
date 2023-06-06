import React from "react";

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
      className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 md:px-24 md:p-12 "
    >
      <h1 className="lg:mb-6 text-center text-primary font-medium text-5xl font-title">
        Popular Searches
      </h1>
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-center">
        {tags.map((item, idx) => {
          return (
            <p
              key={idx}
              className="bg-secondary px-4 py-2 mr-2 mt-2 rounded-full text-white text-sm font-custom font-medium cursor-pointer"
            >
              {item.tag}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default Popular;
