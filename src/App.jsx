import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />        
        <Route path="/add" element={<ProductForm />}/>
        <Route path="/edit/:id" element={<ProductForm />} />

      </Routes>
    </div>
  );
};

export default App;
