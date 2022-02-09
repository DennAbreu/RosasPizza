import React, { useReducer } from "react";
import FoodContext from "./food-context";

const defaultFoodCtx = {
  items: [],
  totalQty: 0,
  cartTotal: 0,
};

const cartTotalUpdater = (itemsArray) => {
  let cartTotal = 0;
  for (let index in itemsArray) {
    cartTotal += itemsArray[index].totalPrice;
  }
  return cartTotal;
};

const itemsSplicer = (itemsArray, indexOfItem) => {
  let results = itemsArray.filter((content) => {
    return content !== itemsArray[indexOfItem];
  });

  return results;
};

const qtyUpdater = (itemsArray) => {
  let totalQty = 0;
  for (let index in itemsArray) {
    totalQty += +itemsArray[index].qtyOrdered;
  }

  return totalQty;
};

const itemTotalPriceUpdater = (itemsArray, index) => {
  return itemsArray[index].qtyOrdered * itemsArray[index].individualPrice;
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

  if (action.type === "CLEAR") {
    return defaultFoodCtx;
  }

  if (action.type === "REMOVE") {
    const itemIndex = getIndexID(state.items, action.id);
    console.log("The item index is: " + itemIndex);
    let updatedItems = itemsSplicer(state.items, itemIndex);
    let updatedQty = qtyUpdater(updatedItems);
    let updatedCartTotal = cartTotalUpdater(updatedItems);
    console.log(updatedItems);

    return {
      items: updatedItems,
      totalQty: updatedQty,
      cartTotal: updatedCartTotal,
    };
  }

  if (action.type === "UPDATE_ITEM_QTY") {
    const itemIndex = getIndexID(state.items, action.id);
    let updatedItems = state.items;
    updatedItems[itemIndex].qtyOrdered = action.newQty;
    let updatedItemPrice = itemTotalPriceUpdater(updatedItems, itemIndex);
    updatedItems[itemIndex].totalPrice = updatedItemPrice;
    let updatedItemQty = qtyUpdater(updatedItems);
    let updatedCartTotal = cartTotalUpdater(updatedItems);
    return {
      items: updatedItems,
      totalQty: updatedItemQty,
      cartTotal: updatedCartTotal,
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

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearItemsHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const currFoodCtx = {
    items: cartState.items,
    totalQty: cartState.totalQty,
    cartTotal: cartState.cartTotal,
    addToCart: addItemHandler,
    updateItemQty: updateItemQtyHandler,
    removeFromCart: removeItemHandler,
    clearAll: clearItemsHandler,
  };

  return (
    <FoodContext.Provider value={currFoodCtx}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
