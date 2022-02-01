import React, { useContext } from "react";
import FoodContext from "../ctx/food-context";
import CartItems from "./CartItems";

const CartContent = (props) => {
  const foodCtx = useContext(FoodContext);

  const fCtxArray = [];

  for (let x in foodCtx.items) {
    fCtxArray.push({
      key: Math.random(),
      name: foodCtx.items[x].id,
      totalAmount: foodCtx.items[x].totalAmount,
      totalPrice: foodCtx.items[x].totalPrice,
    });
  }

  console.log(fCtxArray);

  const cartItemsArray = fCtxArray.map((x) => (
    <CartItems key={x.key} name={x.name} />
  ));

  return (
    <div>
      <div>{cartItemsArray}</div>
      <div>CheckOut Forms</div>
      <div>
        <button>Cancel</button>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default CartContent;
