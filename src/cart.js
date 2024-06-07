import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Корзина</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => removeFromCart(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
