import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./products";
import Contact from "./contact";
import SingleProduct from "./singleProduct";
import Cart from "./cart";
import Navbar from "./Navbar";

const App = () => {
  let [cart,setCart] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cart={cart} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/products/:id" element={<SingleProduct cart={cart} setCart={setCart} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App;
