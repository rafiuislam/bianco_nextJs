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
    <div className="flex flex-wrap ">
      <div className="flex-grow">
        <label className="flex items-center ">
          <input
            type="checkbox"
            checked={showInStockOnly}
            onChange={toggleShowInStockOnly}
          />
          <span className="pl-2">In Stock ({"0" + inStockCount})</span>
        </label>
      </div>
      <div className="flex-grow">
        <label className="flex items-center">
          <input
            type="checkbox"
            // checked={showInStockOnly}
            onChange={toggleShowInStockOnly}
            disabled
          />
          <span className="pl-2">
            Out of Stock ({"0"}
            {getTotalProductCount(products) - inStockCount})
          </span>
        </label>
      </div>
    </div>
  );
};

export default InStockFilter;
