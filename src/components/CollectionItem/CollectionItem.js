import React from "react";

import css from "./CollectionItem.module.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className={css.collectionItem}>
      <div
        className={css.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={css.footer}>
        <h4>{name}</h4>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
