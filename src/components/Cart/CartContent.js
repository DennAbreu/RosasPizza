import React, { useContext, useState } from "react";
import FoodContext from "../ctx/food-context";
import CartItems from "./CartItems";
import Checkout from "./Checkout";

const CartContent = (props) => {
  const foodCtx = useContext(FoodContext);
  const [orderSuccess, setOrderSuccess] = useState(false);

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

  const orderSuccessHandler = (x) => {
    setOrderSuccess(x);
    printOrder();
  };

  const printOrder = () => {
    if (orderSuccess === true) {
      console.log("Successful Order Checker: " + orderSuccess);
    }
  };

  return (
    <div>
      <div>{cartItemsArray}</div>
      <div>
        <Checkout orderSubmitted={orderSuccessHandler} />
      </div>
      <div>Total: ${foodCtx.cartTotal}</div>
    </div>
  );
};

export default CartContent;
