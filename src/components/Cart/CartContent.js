import React, { useContext } from "react";
import FoodContext from "../ctx/food-context";
import CartItems from "./CartItems";

const CartContent = (props) => {
  const foodCtx = useContext(FoodContext);

  const fCtxArray = [];

  for (let index in foodCtx.items) {
    fCtxArray.push({
      key: Math.random(),
      name: foodCtx.items[index].id,
      individualPrice: foodCtx.items[index].individualPrice,
      totalAmount: foodCtx.items[index].amountOrdered,
      totalPrice: foodCtx.items[index].totalPrice,
    });
  }

  console.log(fCtxArray);

  const cartItemsArray = fCtxArray.map((x) => (
    <CartItems
      key={x.key}
      name={x.name}
      individualPrice={x.individualPrice}
      totalAmount={x.totalAmount}
      totalPrice={x.totalPrice}
    />
  ));

  return (
    <div>
      <div>{cartItemsArray}</div>
      <div>CheckOut Forms</div>
      <div>CART TOTAL GOES HERE!</div>
      <div>
        <button>Cancel</button>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default CartContent;
