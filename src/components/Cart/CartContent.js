import React, { Fragment, useContext, useEffect, useState } from "react";
import FoodContext from "../ctx/food-context";
import CartItems from "./CartItems";
import Checkout from "./Checkout";

const CartContent = (props) => {
  const foodCtx = useContext(FoodContext);
  const [orderComplete, setOrderComplete] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);

  const fCtxArray = [];

  for (let index in foodCtx.items) {
    fCtxArray.push({
      key: Math.random(),
      id: foodCtx.items[index].id,
      name: foodCtx.items[index].id,
      individualPrice: foodCtx.items[index].individualPrice,
      totalQty: foodCtx.items[index].qtyOrdered,
      totalPrice: foodCtx.items[index].totalPrice,
      instructions: foodCtx.items[index].instructions,
    });
  }
  // console.log(fCtxArray);

  const cartItemsArray = fCtxArray.map((x) => (
    <CartItems
      key={x.key}
      id={x.id}
      name={x.name}
      individualPrice={x.individualPrice}
      totalQty={x.totalQty}
      totalPrice={x.totalPrice}
      instructions={x.instructions}
    />
  ));

  useEffect(() => {
    if (foodCtx.totalQty < 1) {
      setCartEmpty(true);
    } else {
      setCartEmpty(false);
    }
  }, [foodCtx.totalQty]);

  const orderSuccessHandler = (x) => {
    setOrderComplete(x);
  };

  const showSuccessOrderMessage = <p>Order was successful!</p>;
  const emptyCart = <p>Cart is Empty.</p>;

  const showCartContents = (
    <div>
      <div>{cartItemsArray}</div>
      <div>Total: ${foodCtx.cartTotal}</div>
      <div>
        <Checkout orderSubmitted={orderSuccessHandler} />
      </div>
    </div>
  );

  return (
    <Fragment>
      {/* <div>
        <div>{cartItemsArray}</div>
        <div>
          <Checkout orderSubmitted={orderSuccessHandler} />
        </div>
        <div>Total: ${foodCtx.cartTotal}</div>
      </div> */}
      {!orderComplete && !cartEmpty && showCartContents}
      {!orderComplete && cartEmpty && emptyCart}
      {orderComplete && showSuccessOrderMessage}
    </Fragment>
  );
};

export default CartContent;
