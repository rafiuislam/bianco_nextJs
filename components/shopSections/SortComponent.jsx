import React from "react";

const sortOptions = [
  { value: "PriceHighToLow", title: "Price desc" },
  { value: "PriceLowToHigh", title: "Price asc" },
];

const SortComponent = ({ sortBy, setSortBy }) => {
  return (
    <select
      className="cursor-pointer bg-bg-h border outline-none p-1"
      value={sortBy || "PriceHighToLow"}
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
