import React, { useState } from "react";

const PriceFilterSlider = ({ minPrice, maxPrice, onChange }) => {
  const [value, setValue] = useState(minPrice);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex w-64 m-auto items-center h-32 justify-center">
      <div className="py-1 relative min-w-full">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="absolute h-2 rounded-full bg-teal-600"
            style={{
              width: `${((value - minPrice) / (maxPrice - minPrice)) * 100}%`,
              left: `${((value - minPrice) / (maxPrice - minPrice)) * 100}%`,
            }}
          ></div>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={value}
            onChange={handleChange}
            className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
          />
          <div className="absolute text-gray-800 -ml-1 bottom-0 left-0 -mb-6">
            $ {minPrice}
          </div>
          <div className="absolute text-gray-800 -mr-1 bottom-0 right-0 -mb-6">
            $ {maxPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilterSlider;
