import { useState, useEffect } from "react";

const InStockFilter = ({ products, onFilterChange }) => {
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const toggleShowInStockOnly = () => {
    const newValue = !showInStockOnly;
    setShowInStockOnly(newValue);
    onFilterChange(newValue);
  };

  //iterates over the products array and counts the number of products that have inStock set to true
  const inStockCount = products.reduce((count, product) => {
    return product.inStock ? count + 1 : count;
  }, 0);

  const getTotalProductCount = (products) => {
    return products.length;
  };

  // useEffect(() => {
  //   const totalProductCount = getTotalProductCount(products);
  // }, [products]);

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center">
        <label className="mr-2">
          <input
            type="checkbox"
            checked={showInStockOnly}
            onChange={toggleShowInStockOnly}
            className="cursor-pointer"
          />
          <span className="pl-2">In Stock </span>
          {/* ({"0" + inStockCount}) */}
        </label>
      </div>
    </div>
  );
};

export default InStockFilter;
