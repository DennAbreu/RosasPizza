import React, { useReducer } from "react";
import FoodContext from "./food-context";

const defaultFoodCtx = {
  items: [],
  totalQty: 0,
  totalPrice: 0,
  cartTotal: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const totalQtyUpdated = state.totalQty + +action.item.qtyOrdered;
    const totalPriceUpdated = state.totalPrice + +action.item.totalPrice;
    const cartTotalUpdated = state.cartTotal + totalPriceUpdated;

    let updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalQty: totalQtyUpdated,
      totalPrice: totalPriceUpdated,
      cartTotal: totalPriceUpdated,
    };
  } //end 'Add'

  return defaultFoodCtx;
}; //end cartReducer

const FoodProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultFoodCtx
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  // const removeItemHandler = (id) => {
  //   dispatchCartAction({ type: "REMOVE", id: id });
  // };

  // const clearItemsHandler = () => {
  //   dispatchCartAction({ type: "CLEAR" });
  // };

  const currFoodCtx = {
    items: cartState.items,
    totalQty: cartState.totalQty,
    totalPrice: cartState.totalPrice,
    cartTotal: cartState.cartTotal,
    addToCart: addItemHandler,

    // removeFromCart: removeItemHandler,
    // clearAll: clearItemsHandler,
  };

  return (
    <FoodContext.Provider value={currFoodCtx}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
