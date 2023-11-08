import React, { useState, useEffect } from "react";
// import { products } from "../data/products";
// import products from "../pages/index";
import ProductCard from "../components/shopSections/ProductCard";
import InStockFilter from "../components/shopSections/InStockFilter";
// import PriceFilterSlider from "../components/shopSections/PriceFilterSlider";
import SortComponent from "../components/shopSections/SortComponent";
import SearchFilter from "../components/shopSections/SearchFilter";
import BeanType from "../components/shopSections/BeanType";
import PriceRangeInput from "../components/shopSections/PriceRangeInput";
import PackageOption from "../components/shopSections/PackageOption";
import { MdOutlineClear } from "react-icons/md";
// import RoastProfile from "../components/shopSections/RoastProfile";
import { fetchDataFromApi } from "@/utils/api";
// import { IoIosArrowDropdownCircle } from "react-icons/io";
import { NextSeo } from "next-seo";
import { getSeoByPageName } from "../services/auth";

const ShopPage = ({ getProducts, seo }) => {
  const SEO = {
    title: seo.attributes.title,
    description: seo.attributes.desc,

    openGraph: {
      title: seo.attributes.title,
      description: seo.attributes.desc,
      url: seo.attributes.pageurl,
    },
  };

  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [priceRangeFrom, setPriceRangeFrom] = useState("");
  const [priceRangeTo, setPriceRangeTo] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBeanType, setSelectedBeanType] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedRoastProfile, setSelectedRoastProfile] = useState("");
  const [selectedBeanPer, setSelectedBeanPer] = useState("");

  const { data: products } = getProducts;

  // Derive beanTypes from products
  const Types = ["Arabica", "100% Arabica", "Decaf"];

  const beanTypes = [...new Set(Types.map((type) => type))];

  const beanPer = [
    ...new Set(products.map((product) => product.attributes.percentage)),
  ];
  // console.log(beanPer);
  // const beanTypes = [...new Set(products.map((product) => product.beanType))];

  // Derive packageOptions from products
  const packageOptions = [
    ...new Set(products.map((product) => product.attributes.packageOption)),
  ];
  // Derive roastProfiles from products
  const roastProfiles = [
    ...new Set(products.map((product) => product.attributes.roastProfile)),
  ];

  const handleBeanTypeChange = (value) => {
    setSelectedBeanType(value);
  };

  const handleBeanPerChange = (value) => {
    setSelectedBeanPer(value);
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

  // // Apply debounce to the search filter function
  // const debouncedFilter = debounce((query) => {
  //   setSearchQuery(query);
  // }, 300); // Debounce delay for search in milliseconds

  const filteredProducts = products.filter((product) => {
    const isInStock = !showInStockOnly || product.attributes.inStock;
    // !false || false => true || false / true  true

    // Filter based on price range
    const isInRange = () => {
      if (priceRangeFrom === "" && priceRangeTo === "") {
        // Both price inputs are empty, consider it as in range
        return true;
      } else if (priceRangeFrom === "") {
        // Only priceRangeTo is provided
        return product.attributes.price <= parseFloat(priceRangeTo);
      } else if (priceRangeTo === "") {
        // Only priceRangeFrom is provided
        return product.attributes.price >= parseFloat(priceRangeFrom);
      } else {
        // Both price inputs are provided, check for range
        return (
          product.attributes.price >= parseFloat(priceRangeFrom) &&
          product.attributes.price <= parseFloat(priceRangeTo)
        );
      }
    };

    const matchesSearchQuery = product.attributes.name
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());

    // Filter based on selected bean type
    const matchesBeanType =
      (selectedBeanType === "" && selectedBeanPer === "") || // When no bean type or percentage is selected
      (selectedBeanType === "100% Arabica" &&
        product.attributes.percentage === "100%") || // When 100% Arabica is selected
      product.attributes.beanType === selectedBeanType; // When other bean types are selected
    // selectedBeanType === "" || product.beanType === selectedBeanType;

    // Filter based on selected package option
    const matchesPackageOption =
      selectedPackage === "" ||
      product.attributes.packageOption === selectedPackage;

    // Filter based on selected roast profile
    const matchesRoastProfile =
      selectedRoastProfile === "" ||
      product.attributes.roastProfile === selectedRoastProfile;

    return (
      isInStock &&
      isInRange() &&
      matchesSearchQuery &&
      matchesBeanType &&
      matchesPackageOption &&
      matchesRoastProfile
    );
  });

  // sort on Asc & decs price
  const sortProducts = (products) => {
    if (sortBy === "PriceLowToHigh") {
      return products.sort((a, b) => a.attributes.price - b.attributes.price);
    } else if (sortBy === "PriceHighToLow") {
      return products.sort((a, b) => b.attributes.price - a.attributes.price);
    } else {
      return products;
    }
  };

  // Function to clear all filters
  const handleClearFilters = () => {
    setShowInStockOnly(false);
    setPriceRangeFrom("");
    setPriceRangeTo("");
    setSortBy("");
    setSearchQuery("");
    setSelectedBeanType("");
    setSelectedPackage("");
    setSelectedRoastProfile("");
    setSelectedBeanPer("");
  };

  const sortedAndFilteredProducts = sortProducts(filteredProducts);

  return (
    <>
      <NextSeo {...SEO} />
      <div
        className="grid grid-cols-12 h-full overflow-y-hidden "
        // onCopy={(e) => e.preventDefault()}
        // onContextMenu={(e) => e.preventDefault()}
      >
        <div className="col-span-12 md:col-span-3 md:row-span-full bg-bg-h p-6 md:pb-20 h-full">
          <h1 className="lg:mb-6 text-center text-primary font-medium text-5xl font-title">
            Shop
          </h1>{" "}
          <div className="lg:ml-20 md:ml-10 mt-10">
            <div className="mb-2 text-left text-black font-medium text-xl font-Raleway border-b-2 border-black w-4/4 flex justify-between">
              <h1>Filters</h1>
              <div onClick={handleClearFilters}>
                <MdOutlineClear
                  size={25}
                  className="cursor-pointer hover:scale-125 transition-transform duration-300 hover:fill-red"
                />
              </div>
            </div>

            <div className="mb-1 text-left text-black font-medium text-sm font-Raleway">
              <p>Availability</p>
            </div>
            {/* InStock filter */}
            <div className="text-left pb-2 md:pb-4">
              <InStockFilter
                products={products}
                onFilterChange={handleFilterChange}
              />
            </div>
            <div className="mb-2 text-left text-black font-medium text-xl font-Raleway border-b-2 border-black w-4/4 "></div>
            {/* beanType */}
            <div>
              <div className="text-left pb-2 md:pb-4">
                <BeanType
                  beanTypes={beanTypes}
                  beanPer={beanPer}
                  selectedBeanPer={selectedBeanPer}
                  selectedBeanType={selectedBeanType}
                  onBeanTypeChange={handleBeanTypeChange}
                />
              </div>
            </div>
            <div className="mb-2 text-left text-black font-medium text-xl font-Raleway border-b-2 border-black w-4/4 "></div>
            {/* PackageOption */}
            <div>
              <div className="text-left pb-2 md:pb-4">
                <PackageOption
                  packageOptions={packageOptions}
                  selectedPackage={selectedPackage}
                  onPackageChange={handlePackageChange}
                />
              </div>
            </div>
            <div className="mb-2 text-left text-black font-medium text-xl font-Raleway border-b-2 border-black w-4/4"></div>
            {/* Roast Profile */}
            {/* <div>
            <div className="text-left pb-4 md:pb-6">
              <RoastProfile
                roastProfiles={roastProfiles}
                selectedRoastProfile={selectedRoastProfile}
                onRoastProfileChange={handleRoastProfileChange}
              />
            </div>
          </div> */}
            {/* <div className="mb-2 text-left text-black font-medium text-xl font-Raleway border-b-2 border-black w-3/4 "></div> */}

            {/* Price range filter */}
            <div className="text-left pb-2 md:pb-4">
              <PriceRangeInput
                priceRangeFrom={priceRangeFrom}
                setPriceRangeFrom={setPriceRangeFrom}
                priceRangeTo={priceRangeTo}
                setPriceRangeTo={setPriceRangeTo}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 bg-bg-h p-8 md:pl-2">
          {/* search and Asc ~ Desc filter */}
          <div className="flex flex-col sm:flex-row gap-4 pb-12 justify-between">
            <div className="flex-grow order-2 sm:order-1 sm:w-full">
              {/* Search filter */}
              <SearchFilter
                searchQuery={searchQuery}
                handleSearchQueryChange={handleSearchQueryChange}
              />
              {/* <div className="font-semi-bold text-lg text-center mt-4">
              Please use our chat support temporarily to place your order.
            </div> */}
            </div>

            <div className="flex-shrink-0 order-1 sm:order-2 pb-8 sm:pb-0">
              {/* Asc ~ Desc filter */}
              <SortComponent sortBy={sortBy} setSortBy={setSortBy} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedAndFilteredProducts.map((product) => (
              <div
                key={product?.id}
                className="col-span-1 sm:col-span-2 md:col-span-1 bg-secondary/20 p-8 shadow border border-secondary/20 hover:scale-105 transition-transform ease-in-out duration-500 hover:border-primary hover:bg-white/25 hover:shadow-2xl"
              >
                <ProductCard index={product?.id} product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;

export async function getStaticProps() {
  const getProducts = await fetchDataFromApi("/api/products?populate=*");
  const seo = await getSeoByPageName("ShopPage");

  return {
    props: { getProducts, seo },
  };
}
