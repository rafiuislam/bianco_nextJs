import React from "react";

const sortOptions = [
  { value: "PriceHighToLow", title: "Price High To Low" },
  { value: "PriceLowToHigh", title: "Price Low To High" },
];

const SortComponent = ({ sortBy, setSortBy }) => {
  return (
    <select
      className="bg-bg-h border outline-none"
      value={sortBy || "PriceLowToHigh"}
      onChange={(e) => setSortBy(e.target.value)}
    >
      {sortOptions.map((item, index) => (
        <option key={index} className="bg-bg-h" value={item.value}>
          {item.title}
        </option>
      ))}
    </select>
  );
};

export default SortComponent;
