import React from "react";

const RoastProfile = ({
  roastProfiles,
  selectedRoastProfile,
  onRoastProfileChange,
}) => {
  const handleRoastProfileChange = (value) => {
    if (selectedRoastProfile === value) {
      // Deselect the roast profile if it is already selected
      onRoastProfileChange("");
    } else {
      // Select the clicked roast profile
      onRoastProfileChange(value);
    }
  };

  const handleRadioClick = (value) => {
    // Unselect the roast profile if the same radio button is clicked again
    if (selectedRoastProfile === value) {
      onRoastProfileChange("");
    }
  };

  return (
    <div className="mb-2 text-left text-black font-medium text-sm font-Raleway">
      <p>Roast Profile</p>
      <div className="flex flex-wrap flex-col gap-4 mt-2">
        {roastProfiles.map((roastProfile) => (
          <label key={roastProfile} className="inline-flex items-center">
            <input
              type="radio"
              value={roastProfile}
              checked={selectedRoastProfile === roastProfile}
              onChange={() => handleRoastProfileChange(roastProfile)}
              onClick={() => handleRadioClick(roastProfile)}
              className="form-radio h-4 w-4 text-primary focus:ring-primary border-primary"
            />
            <span className="ml-2">{roastProfile}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RoastProfile;
