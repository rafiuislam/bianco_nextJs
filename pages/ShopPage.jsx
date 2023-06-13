import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/shopSections/productCard";
import CategoryFilter from "../components/shopSections/CategoryFilter";
import InStockFilter from "../components/shopSections/InStockFilter";
import PriceFilterSlider from "../components/shopSections/PriceFilterSlider";

const ShopPage = () => {
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [priceRangeFrom, setPriceRangeFrom] = useState("");
  const [priceRangeTo, setPriceRangeTo] = useState("");

  const handleFilterChange = (newValue) => {
    setShowInStockOnly(newValue);
  };

  const handlePriceRangeFilterChange = (from, to) => {
    setPriceRangeFrom(from);
    setPriceRangeTo(to);
  };

  const filteredProducts = products.filter((product) => {
    const isInStock = !showInStockOnly || product.inStock;
    const isInRange =
      (priceRangeFrom === "" && priceRangeTo === "") ||
      (priceRangeFrom !== "" &&
        priceRangeTo !== "" &&
        product.price >= parseFloat(priceRangeFrom) &&
        product.price <= parseFloat(priceRangeTo));
    return isInStock && isInRange;
  });

  return (
    <div className="grid grid-cols-12 h-full ">
      <div className="col-span-12 md:col-span-2 md:row-span-full bg-bg-h pl-6">
        {/* <CategoryFilter /> */}
        <h1 className="lg:mb-6 text-center text-primary font-medium text-5xl font-title">
          Shop
        </h1>
        <div className="lg:ml-14">
          <div className="lg:mb-2 text-left text-black font-medium text-xl font-Raleway border-b-2 border-black w-3/4 ">
            <h1>Filters</h1>
          </div>
          <div className="lg:mb-1 text-left text-black font-medium text-sm font-Raleway">
            <p>Availability</p>
          </div>
          <div className="text-left lg:pb-6">
            <InStockFilter
              products={products}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="lg:mb-2 text-left text-black font-medium text-xl font-Raleway border-b-2 border-black w-3/4 "></div>
          <div className="lg:mb-1 text-left text-black font-medium text-sm font-Raleway">
            <p>Price</p>
          </div>
          <div className="flex flex-col space-y-2">
            <div>
              <label htmlFor="priceRangeFrom">From:</label>
              <input
                type="number"
                id="priceRangeFrom"
                value={priceRangeFrom}
                onChange={(e) => setPriceRangeFrom(e.target.value)}
                placeholder="From"
              />
            </div>
            <div>
              <label htmlFor="priceRangeTo">To:</label>
              <input
                type="number"
                id="priceRangeTo"
                value={priceRangeTo}
                onChange={(e) => setPriceRangeTo(e.target.value)}
                placeholder="To"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-10 bg-bg-h p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="col-span-1 sm:col-span-2 md:col-span-1 bg-secondary/20 p-8"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
