import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const PackageOption = ({
  packageOptions,
  selectedPackage,
  onPackageChange,
}) => {
  const handlePackageChange = (value) => {
    if (selectedPackage === value) {
      // Deselect the package if it is already selected
      onPackageChange("");
    } else {
      // Select the clicked package
      onPackageChange(value);
    }
  };

  const handleRadioClick = (value) => {
    // Unselect the package if the same radio button is clicked again
    if (selectedPackage === value) {
      onPackageChange("");
    }
  };

  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const toggleOptionsVisibility = () => {
    setIsOptionsVisible((prevState) => !prevState);
  };

  return (
    <div className="text-left text-black font-medium text-sm font-Raleway">
      <div className="flex justify-between">
        <p>Package Option</p>
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
            {packageOptions.map((packageOption) => (
              <label
                key={packageOption}
                className="inline-flex items-center pb-2"
              >
                <input
                  type="radio"
                  value={packageOption}
                  checked={selectedPackage === packageOption}
                  onChange={() => handlePackageChange(packageOption)}
                  onClick={() => handleRadioClick(packageOption)}
                  className="cursor-pointer form-radio h-4 w-4 text-primary focus:ring-primary border-primary"
                />
                <span className="ml-2">{packageOption}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageOption;
