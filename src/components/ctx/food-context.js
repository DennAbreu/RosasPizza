import React from "react";

const FoodContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  addToCart: (item) => {},
  removeFromCart: (id) => {},
  // clearAll: () => {},
});

export default FoodContext;
