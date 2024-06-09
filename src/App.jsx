
import React, { useState } from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import Product from './Components/Product'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (productId) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex(item => item.id === productId);
    updatedCartItems[itemIndex].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (productId) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex(item => item.id === productId);
    if (updatedCartItems[itemIndex].quantity > 1) {
      updatedCartItems[itemIndex].quantity -= 1;
      setCartItems(updatedCartItems);
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/Signin' element={<Signin />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Cart' element={<Cart cartItems={cartItems}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity} />}></Route>
          <Route path='/product' element={<Product addToCart={addToCart} />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
