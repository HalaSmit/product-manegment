import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/actions/productActions";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.price && formData.image && formData.category) {
      dispatch(addProduct(formData));
      setFormData({ title: "", price: "", image: "", category: "" });
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;