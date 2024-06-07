import React from 'react';

// Компонент для отображения отдельного продукта
const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Добавить в корзину</button>
    </div>
  );
};

export default ProductItem;


