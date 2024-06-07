import React, { useState } from 'react';

// Компонент для отображения информации о продукте
const TextDisplay = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="item">
          <h2 onClick={() => handleTitleClick(index)}>{Object.keys(item)[0]}</h2>
          {activeIndex === index && <p>{item[Object.keys(item)[0]]}</p>}
        </div>
      ))}
    </div>
  );
};

export default TextDisplay;
