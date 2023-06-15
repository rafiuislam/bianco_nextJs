import React from "react";

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

  return (
    <div className="mb-2 text-left text-black font-medium text-sm font-Raleway">
      <p>Package Option</p>
      <div className="flex flex-wrap flex-col gap-4 mt-2">
        {packageOptions.map((packageOption) => (
          <label key={packageOption} className="inline-flex items-center">
            <input
              type="radio"
              value={packageOption}
              checked={selectedPackage === packageOption}
              onChange={() => handlePackageChange(packageOption)}
              onClick={() => handleRadioClick(packageOption)}
              className="form-radio h-4 w-4 text-primary focus:ring-primary border-primary"
            />
            <span className="ml-2">{packageOption}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PackageOption;
