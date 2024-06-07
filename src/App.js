import React, { useState } from 'react';
import Header from './header';
import ProductsList from './productList';
import Footer from './footer';
import Cart from './cart';
import './App.css';

// Основной компонент приложения
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const productsData = [
    { id: 1, name: 'Яблоко', description: 'Красное и сочное' },
    { id: 2, name: 'Апельсин', description: 'Сладкий и ароматный' },
    { id: 3, name: 'Банан', description: 'Питательный и полезный' },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Header />
      <main>
        <h1>Добро пожаловать в наш магазин фруктов!</h1>
        <ProductsList products={productsData} addToCart={addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
