import React from "react";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

import SHOP_DATA from "../../api/shopData";

class Shop extends React.Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <div>
        <h1>Shop Page</h1>
        {collections.map(collection => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}

export default Shop;
