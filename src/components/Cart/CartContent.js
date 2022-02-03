import React, { useContext } from "react";
import FoodContext from "../ctx/food-context";
import CartItems from "./CartItems";

const CartContent = (props) => {
  const foodCtx = useContext(FoodContext);

  const fCtxArray = [];

  for (let index in foodCtx.items) {
    fCtxArray.push({
      key: Math.random(),
      id: foodCtx.items[index].id,
      name: foodCtx.items[index].id,
      individualPrice: foodCtx.items[index].individualPrice,
      totalQty: foodCtx.items[index].qtyOrdered,
      totalPrice: foodCtx.items[index].totalPrice,
    });
  }

  console.log(fCtxArray);

  const cartItemsArray = fCtxArray.map((x) => (
    <CartItems
      key={x.key}
      id={x.id}
      name={x.name}
      individualPrice={x.individualPrice}
      totalQty={x.totalQty}
      totalPrice={x.totalPrice}
    />
  ));

  return (
    <div>
      <div>{cartItemsArray}</div>
      <div>CheckOut Forms</div>
      <div>Total: ${foodCtx.cartTotal}</div>
      <div>
        <button>Cancel</button>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default CartContent;
