import React from 'react';

// Компонент для верхней части страницы
const Header = () => {
  return (
    <header>
      <h1>Название вашего магазина</h1>
      <nav>
        <ul>
          <li><a href="/">Главная</a></li>
          <li><a href="/about">О нас</a></li>
          <li><a href="/contact">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
