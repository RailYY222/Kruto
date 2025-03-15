import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyLogo</Link>
      </div>
      <nav className="nav">
        <Link to="/">Главнаd</Link>
        {isAuth ? (
          <button onClick={handleLogout}>Выйти</button>
        ) : (
          <>
            <Link to="/login">Войти</Link>
            <Link to="/register">Регистрация</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;