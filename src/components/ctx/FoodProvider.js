import React, { useReducer } from "react";
import FoodContext from "./food-context";

const defaultFoodCtx = {
  items: [],
  totalQty: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const totalQtyUpdated = state.totalQty + +action.item.qtyOrdered;
    const totalCartUpdated = state.cartTotal + +action.item.totalPrice;
    let updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalQty: totalQtyUpdated,
      cartTotal: totalCartUpdated,
    };
  } //end 'ADD'

  if (action.type === "UPDATE_ITEM_QTY") {
    const currItems = state.items;
    const indexOfCurrItems = currItems
      .map((e) => {
        return e.id;
      })
      .indexOf(action.id);
    state.items[indexOfCurrItems].qtyOrdered = action.newQty;
    console.log(action.newQty);
    // console.log(state.items[indexOfCurrItems].id + "'s New QTY: ");
    // console.log(state.items[indexOfCurrItems].qtyOrdered);
    return {
      items: state.items,
      totalQty: state.totalQty,
      cartTotal: action.newQty,
    };
  } //end 'UPDATE_ITEM_QTY"

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

  const updateItemQtyHandler = (id, newQty) => {
    dispatchCartAction({ type: "UPDATE_ITEM_QTY", id: id, newQty: newQty });
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
    cartTotal: cartState.cartTotal,
    addToCart: addItemHandler,
    updateItemQty: updateItemQtyHandler,

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
