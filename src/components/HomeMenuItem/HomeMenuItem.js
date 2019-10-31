import React from "react";

import { withRouter } from "react-router-dom";

import {
  homeMenuItem,
  content,
  backgroundImage
} from "./HomeMenuItem.module.scss";

const HomeMenuItem = ({
  title,
  subtitle,
  image,
  size,
  history,
  path,
  match
}) => {
  // console.log(match);
  return (
    <div
      className={`${homeMenuItem} ${size}`}
      onClick={() => history.push(`${match.url}${path}`)}
    >
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

export default withRouter(HomeMenuItem);
