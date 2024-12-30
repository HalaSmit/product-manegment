import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/actions/productActions";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleCategoryFilter = (e) => {
    setCategoryFilter(e.target.value);
  };

  const filteredProducts = products
    .filter((product) => {
      return (
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (categoryFilter ? product.category === categoryFilter : true)
      );
    })
    .sort((a, b) => {
      if (sortOption === "lowToHigh") {
        return a.price - b.price;
      } else if (sortOption === "highToLow") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className="container mt-4">
      <h2>Product List</h2>

      <input
        type="text"
        placeholder="Search by title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="form-control mb-3"
      />

      <select
        className="form-select mb-3"
        value={categoryFilter}
        onChange={handleCategoryFilter}
      >
        <option value="">All Categories</option>
        {[...new Set(products.map((product) => product.category))].map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div className="mb-3">
        <label>Sort by price: </label>
        <select className="form-select" value={sortOption} onChange={handleSortChange}>
          <option value="">Select</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
