import React from "react";

import SHOP_DATA from "../../api/shopData";

class Shop extends React.Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    return <h1>Shop Page</h1>;
  }
}

export default Shop;
