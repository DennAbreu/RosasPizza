import React from "react";

const FoodContext = React.createContext({
  items: [],
  totalAmount: 0,
  addToCart: (item) => {},
  // removeFromCart: (id) => {},
  // clearAll: () => {},
});

export default FoodContext;
