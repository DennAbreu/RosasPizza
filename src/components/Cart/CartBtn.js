import React, { useContext } from "react";
import styles from "./CartBtn.module.css";
import FoodContext from "../ctx/food-context";

const CartBtn = (props) => {
  const fCtx = useContext(FoodContext);

  return (
    <div className={styles.cartContainer}>
      <button className={styles.badge} onClick={props.onShowCart}>
        <p>Cart: {fCtx.totalQty}</p>
      </button>
    </div>
  );
};

export default CartBtn;
