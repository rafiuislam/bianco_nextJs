// SearchFilter.js
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchFilter = ({ searchQuery, handleSearchQueryChange }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <BsSearch className="w-4 h-4 text-secondary" />
      </div>
      <input
        type="search"
        id="default-search"
        className="bg-transparent outline-none block sm:w-1/3 p-1 pl-10 text-md text-black border border-secondary rounded-lg focus:border-primary"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchQueryChange}
        required
      />
    </div>
  );
};

export default SearchFilter;
