import React from "react";

import HomeMenu from "../../components/HomeMenu/HomeMenu";

import css from "./home.module.scss";

const Home = () => {
  return (
    <section className={css.Home}>
      <HomeMenu />
    </section>
  );
};

export default Home;
