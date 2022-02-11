import React, { useContext } from "react";
import styles from "./CartBtn.module.css";
import FoodContext from "../ctx/food-context";
import cartImage from "../../assets/shopping-cart-white.png";

const CartBtn = (props) => {
  const fCtx = useContext(FoodContext);

  return (
    <div className={styles.cartContainer}>
      <button className={styles.badge} onClick={props.onShowCart}>
        <div className={styles.btnDiv}>
          <img
            className={styles.cartIconImage}
            src={cartImage}
            alt="Shopping cart icon"
          />
          <p>Cart: {fCtx.totalQty}</p>
        </div>
      </button>
    </div>
  );
};

export default CartBtn;
