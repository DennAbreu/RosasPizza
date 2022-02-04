import React from "react";

const FoodContext = React.createContext({
  items: [],
  totalQty: 0,
  cartTotal: 0,
  addToCart: (item) => {},
  updateItemQty: (id, newQty) => {},

  // removeFromCart: (id) => {},
  // clearAll: () => {},
});

export default FoodContext;
