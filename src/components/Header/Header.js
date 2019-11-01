import React from "react";
import { Link } from "react-router-dom";

import css from "./Header.module.scss";

const Header = () => {
  return (
    <header className={css.header}>
      <div className='logo'>
        <Link to='/'>TheShop</Link>
      </div>
      <nav>
        <Link to='/shop'>Shop</Link>
        <Link to='/login'>Login</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
