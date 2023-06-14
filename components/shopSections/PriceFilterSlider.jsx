import React, { useState } from "react";

const PriceFilterSlider = ({ products, onFilter }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = () => {
    // Validate input values
    if (minPrice === "" || maxPrice === "") {
      return;
    }

    // Convert input values to numbers
    const minValue = parseInt(minPrice);
    const maxValue = parseInt(maxPrice);

    // Check if input values are valid
    if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
      return;
    }

    // Filter products based on price range
    const filteredProducts = products.filter((product) => {
      const price = parseInt(product.price);
      return price >= minValue && price <= maxValue;
    });

    // Invoke the onFilter callback with the filtered products
    onFilter(filteredProducts);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default PriceFilterSlider;

// export default PriceFilterSlider;
