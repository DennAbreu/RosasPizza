import React, { useReducer } from "react";
import FoodContext from "./food-context";

const defaultFoodCtx = {
  items: [],
  totalQty: 0,
  cartTotal: 0,
};

const cartUpdater = (itemsArray) => {
  let cartTotal = 0;
  for (let index in itemsArray) {
    cartTotal += itemsArray[index].totalPrice;
  }
  return cartTotal;
};

const quantityUpdater = (itemsArray) => {
  let totalQty = 0;
  for (let index in itemsArray) {
    totalQty = totalQty + itemsArray[index].totalQty;
  }

  return totalQty;
};

const getIndexID = (itemsArray, id) => {
  return itemsArray
    .map((e) => {
      return e.id;
    })
    .indexOf(id);
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
    const indexOfCurrItems = getIndexID(state.items, action.id);
    state.items[indexOfCurrItems].totalQty = action.newQty;
    const totalPriceUpdated =
      state.items[indexOfCurrItems].individualPrice * action.newQty;
    state.items[indexOfCurrItems].totalPrice = totalPriceUpdated;
    const tQty = +quantityUpdater(state.items);
    const cTotal = +cartUpdater(state.items);

    // console.log(action.newQty);
    // console.log(state.items[indexOfCurrItems].id + "'s New QTY: ");
    // console.log(state.items[indexOfCurrItems].qtyOrdered);
    //TODO Update TotalQt and CartTotal
    return {
      items: state.items,
      totalQty: +tQty,
      cartTotal: +cTotal,
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
