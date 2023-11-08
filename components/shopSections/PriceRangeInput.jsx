import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const PriceRangeInput = ({
  priceRangeFrom,
  setPriceRangeFrom,
  priceRangeTo,
  setPriceRangeTo,
}) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const toggleOptionsVisibility = () => {
    setIsOptionsVisible((prevState) => !prevState);
  };

  return (
    <div className="text-left text-black font-medium text-sm font-Raleway">
      <div className="flex justify-between">
        <p>Price</p>
        <IoIosArrowDropdownCircle
          size={25}
          color="#007A4C"
          onClick={toggleOptionsVisibility}
          style={{
            transform: isOptionsVisible ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
          className="cursor-pointer"
        />
      </div>
      {isOptionsVisible && (
        <div className="flex flex-wrap flex-col gap-4 mt-2">
          <div className="flex flex-col space-y-2 ">
            <div className="flex items-center pb-2">
              <label htmlFor="priceRangeFrom" className="mr-2">
                Tk
              </label>
              <input
                type="number"
                id="priceRangeFrom"
                value={priceRangeFrom}
                onChange={(e) => setPriceRangeFrom(e.target.value)}
                placeholder="From"
                className="w-20 border border-black outline-none pl-1"
              />
            </div>
            <div className="flex items-center pb-2">
              <label htmlFor="priceRangeTo" className="mr-2">
                Tk
              </label>
              <input
                type="number"
                id="priceRangeTo"
                value={priceRangeTo}
                onChange={(e) => setPriceRangeTo(e.target.value)}
                placeholder="To"
                className="w-20 border border-black outline-none pl-1"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceRangeInput;
