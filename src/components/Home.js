import React from "react";

import css from "./Home.module.scss";

const Home = () => {
  return (
    <section className={css.Home}>
      <div className='HomeMenu'>
        <div className='HomeMenuItem'>
          <div className='content'>
            <h1>Hats</h1>
            <span>Shop Now</span>
          </div>
        </div>
        <div className='HomeMenuItem'>
          <div className='content'>
            <h1>Jackets</h1>
            <span>Shop Now</span>
          </div>
        </div>
        <div className='HomeMenuItem'>
          <div className='content'>
            <h1>Assessories</h1>
            <span>Shop Now</span>
          </div>
        </div>
        <div className='HomeMenuItem'>
          <div className='content'>
            <h1>Womens</h1>
            <span>Shop Now</span>
          </div>
        </div>
        <div className='HomeMenuItem'>
          <div className='content'>
            <h1>Mens</h1>
            <span>Shop Now</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
