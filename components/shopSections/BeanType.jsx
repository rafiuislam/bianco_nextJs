import React from "react";

const BeanType = ({ beanTypes, selectedBeanType, onBeanTypeChange }) => {
  const handleBeanTypeChange = (value) => {
    if (selectedBeanType === value) {
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

  return (
    <div className="mb-2 text-left text-black font-medium text-sm font-Raleway">
      <p>Bean Type</p>
      <div className="flex flex-wrap flex-col gap-4 mt-2">
        {beanTypes.map((beanType) => (
          <label key={beanType} className="inline-flex items-center">
            <input
              type="radio"
              value={beanType}
              checked={selectedBeanType === beanType}
              onChange={() => handleBeanTypeChange(beanType)}
              onClick={() => handleRadioClick(beanType)}
              className="form-radio h-4 w-4 text-primary focus:ring-primary border-primary"
            />
            <span className="ml-2">{beanType}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BeanType;
