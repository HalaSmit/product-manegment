export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:5000/products');
    const data = await response.json();

    console.log(data); 
    if (data && data.products) {
      dispatch({ type: 'FETCH_PRODUCTS', payload: data.products });
    } else {
      console.error('Products not found in response');
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
  
  export const addProduct = (product) => async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      dispatch({ type: "ADD_PRODUCT", payload: data });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  
  export const updateProduct = (id, updatedProduct) => async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });
      const data = await response.json();
      dispatch({ type: "UPDATE_PRODUCT", payload: data });
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  
  // Action to delete a product
  export const deleteProduct = (id) => async (dispatch) => {
    try {
      await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "DELETE_PRODUCT", payload: id });
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  