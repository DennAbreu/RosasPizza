import React from "react";

const FoodContext = React.createContext({
  items: [],
  totalQty: 0,
  totalPrice: 0,
  cartTotal: 0,
  addToCart: (item) => {},
  updateItemQty: (num) => {},
  // removeFromCart: (id) => {},
  // clearAll: () => {},
});

export default FoodContext;
