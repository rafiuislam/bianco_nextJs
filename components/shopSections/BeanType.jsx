import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const BeanType = ({
  beanTypes,
  selectedBeanType,
  onBeanTypeChange,
  beanPer,
}) => {
  const handleBeanTypeChange = (value) => {
    if (selectedBeanType === value) {
      onBeanTypeChange("");
    } else {
      // Select the clicked bean type
      onBeanTypeChange(value);
    }
  };

  const handleRadioClick = (value) => {
    // Unselect the bean type if the same radio button is clicked again
    if (selectedBeanType === value) {
      onBeanTypeChange("");
    }
  };

  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const toggleOptionsVisibility = () => {
    setIsOptionsVisible((prevState) => !prevState);
  };

  return (
    <div className="text-left text-black font-medium text-sm font-Raleway">
      <div className="flex justify-between">
        <p>Bean Type</p>
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
      <div>
        {isOptionsVisible && (
          <div className="flex flex-wrap flex-col gap-1 mt-2">
            {beanTypes.map((beanType) => (
              <label key={beanType} className="inline-flex items-center pb-2">
                <input
                  type="radio"
                  value={beanType}
                  checked={selectedBeanType === beanType}
                  onChange={() => handleBeanTypeChange(beanType)}
                  onClick={() => handleRadioClick(beanType)}
                  className="cursor-pointer form-radio h-4 w-4 text-primary focus:ring-primary border-primary"
                />
                <span className="ml-2">{beanType}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BeanType;
