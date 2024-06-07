import React, { useState } from 'react';

const ProductsList = ({ products, addToCart }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="products">
      <h2>Our Products</h2>
      {products.map((product, index) => (
        <div key={product.id} className="product-item">
          <h3 onClick={() => handleTitleClick(index)}>{product.name}</h3>
          {activeIndex === index && (
            <div>
              <p>{product.description}</p>
              <button onClick={() => addToCart(product)}>Add Item</button>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ProductsList;

