import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../Redux/actions/productActions";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
  };

  const handleUpdate = () => {
    const updatedProduct = {
      ...product,
      title: prompt("Enter new title", product.title) || product.title,
    };
    dispatch(updateProduct(updatedProduct));
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">Price: ${product.price}</p>
            <p className="card-text">Category: {product.category}</p>
            <button className="btn btn-warning me-2" onClick={handleUpdate}>Edit</button>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;