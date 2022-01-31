import React, { useReducer } from "react";
import FoodContext from "./food-context";

const defaultFoodCtx = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const totalAmountUpdated =
      state.totalAmount + action.item.price * action.item.amount;

    let updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalAmount: totalAmountUpdated,
    };
  }
}; //end cartReducer

const FoodProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultFoodCtx
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  // const clearItemsHandler = () => {
  //   dispatchCartAction({ type: "CLEAR" });
  // };

  const foodCtx = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addToCart: addItemHandler,
    removeFromCart: removeItemHandler,
    // clearAll: clearItemsHandler,
  };

  return (
    <FoodContext.Provider value={foodCtx}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
