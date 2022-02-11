import React, { Fragment, useContext, useEffect, useState } from "react";
import FoodContext from "../ctx/food-context";
import CartItems from "./CartItems";
import Checkout from "./Checkout";
import styles from "./CartContent.module.css";

const CartContent = (props) => {
  const foodCtx = useContext(FoodContext);
  const [orderComplete, setOrderComplete] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);
  const [rdyToCheckout, setRdyToCheckout] = useState(false);

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

  const setReadyHandler = () => {
    setRdyToCheckout(true);
  };

  const showSuccessOrderMessage = <p>Order was successful!</p>;
  const showEmptyCartMessage = <p>Cart is Empty.</p>;

  const notReadyToCheckoutContent = (
    <div>
      <button className={styles.cartBtn} onClick={setReadyHandler}>
        Checkout
      </button>
    </div>
  );
  const readyToCheckoutContent = (
    <div>
      <Checkout orderSubmitted={orderSuccessHandler} />
    </div>
  );

  const showCartContents = (
    <div>
      <div>{cartItemsArray}</div>
      <div className={styles.cartTotal}>
        Total: ${foodCtx.cartTotal.toFixed(2)}
      </div>
      {!rdyToCheckout && notReadyToCheckoutContent}
      {rdyToCheckout && readyToCheckoutContent}
    </div>
  );

  return (
    <Fragment>
      {!orderComplete && !cartEmpty && showCartContents}
      {!orderComplete && cartEmpty && showEmptyCartMessage}
      {orderComplete && showSuccessOrderMessage}
    </Fragment>
  );
};

export default CartContent;
