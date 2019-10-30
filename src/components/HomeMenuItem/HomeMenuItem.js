import React from "react";

import {
  homeMenuItem,
  content,
  backgroundImage
} from "./HomeMenuItem.module.scss";

const HomeMenuItem = ({ title, subtitle, image, size }) => {
  return (
    <div className={`${homeMenuItem} ${size}`}>
      <div
        className={backgroundImage}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={content}>
        <h1>{title}</h1>
        <span>{subtitle}</span>
      </div>
    </div>
  );
};

export default HomeMenuItem;
