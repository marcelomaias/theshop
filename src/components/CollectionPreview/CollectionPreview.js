import React from "react";

import CollectionItem from "../CollectionItem/CollectionItem";

import css from "./CollectionPreview.module.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <section className={css.collectionPreview}>
      <h2 className={css.title}>{title}</h2>
      <div className={css.preview}>
        {items
          .filter((item, i) => i < 4) // FILTER ONLY $ ITEMS
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </section>
  );
};

export default CollectionPreview;
