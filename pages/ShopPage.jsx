import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/shopSections/ProductCard";
import InStockFilter from "../components/shopSections/InStockFilter";
// import PriceFilterSlider from "../components/shopSections/PriceFilterSlider";
import SortComponent from "../components/shopSections/SortComponent";
import SearchFilter from "../components/shopSections/SearchFilter";
import BeanType from "../components/shopSections/BeanType";
import PackageOption from "../components/shopSections/PackageOption";
import RoastProfile from "../components/shopSections/RoastProfile";

const ShopPage = () => {
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [priceRangeFrom, setPriceRangeFrom] = useState("");
  const [priceRangeTo, setPriceRangeTo] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBeanType, setSelectedBeanType] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedRoastProfile, setSelectedRoastProfile] = useState("");

  // Derive beanTypes from products
  const beanTypes = [...new Set(products.map((product) => product.beanType))];

  // Derive packageOptions from products
  const packageOptions = [
    ...new Set(products.map((product) => product.packageOption)),
  ];

  // Derive roastProfiles from products
  const roastProfiles = [
    ...new Set(products.map((product) => product.roastProfile)),
  ];

  const handleBeanTypeChange = (value) => {
    setSelectedBeanType(value);
  };

  const handlePackageChange = (value) => {
    setSelectedPackage(value);
  };

  const handleRoastProfileChange = (value) => {
    setSelectedRoastProfile(value);
  };

  const handleFilterChange = (newValue) => {
    setShowInStockOnly(newValue);
  };
  // console.log(searchQuery);

  // Search filter event change
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const isInStock = !showInStockOnly || product.inStock;
    const isInRange =
      (priceRangeFrom === "" && priceRangeTo === "") ||
      (priceRangeFrom !== "" &&
        priceRangeTo !== "" &&
        product.price >= parseFloat(priceRangeFrom) &&
        product.price <= parseFloat(priceRangeTo));
    const matchesSearchQuery = product.name
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());

    // Filter based on selected bean type
    const matchesBeanType =
      selectedBeanType === "" || product.beanType === selectedBeanType;

    // Filter based on selected package option
    const matchesPackageOption =
      selectedPackage === "" || product.packageOption === selectedPackage;

    // Filter based on selected roast profile
    const matchesRoastProfile =
      selectedRoastProfile === "" ||
      product.roastProfile === selectedRoastProfile;

    return (
      isInStock &&
      isInRange &&
      matchesSearchQuery &&
      matchesBeanType &&
      matchesPackageOption &&
      matchesRoastProfile
    );
  });

  // sort on Asc & decs price
  const sortProducts = (products) => {
    if (sortBy === "PriceLowToHigh") {
      return products.sort((a, b) => a.price - b.price);
    } else if (sortBy === "PriceHighToLow") {
      return products.sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  };

  const sortedAndFilteredProducts = sortProducts(filteredProducts);

  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-12 md:col-span-3 md:row-span-full bg-bg-h p-6 md:pb-20 h-full">
        <h1 className="lg:mb-6 text-center text-primary font-medium text-5xl font-title">
          Shop
        </h1>
        <div className="lg:ml-20 md:ml-10 mt-10">
          <div className="mb-2 text-left text-black font-medium text-xl font-Raleway border-b-2 border-black w-3/4 ">
            <h1>Filters</h1>
          </div>
          <div className="mb-1 text-left text-black font-medium text-sm font-Raleway">
            <p>Availability</p>
          </div>
          {/* InStock filter */}
          <div className="text-left pb-4 md:pb-6">
            <InStockFilter
              products={products}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="mb-2 text-left text-black font-medium text-xl font-Raleway border-b-2 border-black w-3/4 "></div>
          {/* beanType */}
          <div>
            <div className="text-left pb-4 md:pb-6">
              <BeanType
                beanTypes={beanTypes}
                selectedBeanType={selectedBeanType}
                onBeanTypeChange={handleBeanTypeChange}
              />
            </div>
          </div>
          <div className="mb-2 text-left text-black font-medium text-xl font-Raleway border-b-2 border-black w-3/4 "></div>
          {/* PackageOption */}
          <div>
            <div className="text-left pb-4 md:pb-6">
              <PackageOption
                packageOptions={packageOptions}
                selectedPackage={selectedPackage}
                onPackageChange={handlePackageChange}
              />
            </div>
          </div>
          <div className="mb-2 text-left text-black font-medium text-xl font-Raleway border-b-2 border-black w-3/4 "></div>
          {/* Roast Profile */}
          <div>
            <div className="text-left pb-4 md:pb-6">
              <RoastProfile
                roastProfiles={roastProfiles}
                selectedRoastProfile={selectedRoastProfile}
                onRoastProfileChange={handleRoastProfileChange}
              />
            </div>
          </div>
          <div className="mb-2 text-left text-black font-medium text-xl font-Raleway border-b-2 border-black w-3/4 "></div>
          {/* Price range filter */}
          <div className="mb-2 text-left text-black font-medium text-sm font-Raleway">
            <p>Price</p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
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
            <div className="flex items-center">
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
      </div>
      <div className="col-span-12 md:col-span-9 bg-bg-h  p-8 md:pl-2">
        {/* search and Asc ~ Desc filter */}
        <div className="flex flex-col sm:flex-row gap-4 pb-12 justify-between">
          <div className="flex-grow order-2 sm:order-1 sm:w-full">
            {/* Search filter */}
            <SearchFilter
              searchQuery={searchQuery}
              handleSearchQueryChange={handleSearchQueryChange}
            />
          </div>
          <div className="flex-shrink-0 order-1 sm:order-2 pb-8 sm:pb-0">
            {/* Asc ~ Desc filter */}
            <SortComponent sortBy={sortBy} setSortBy={setSortBy} />
          </div>
        </div>
        {/* const functional component id="25tc" that gone */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedAndFilteredProducts.map((product) => (
            <div
              key={product.id}
              className="col-span-1 sm:col-span-2 md:col-span-1 bg-secondary/20 p-8 shadow border border-secondary/20 hover:scale-105 transition-transform ease-in-out duration-500 hover:border-primary hover:bg-white/25 hover:shadow-2xl"
            >
              {/* <Link href={`/products/${product.id}`}></Link> */}
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
