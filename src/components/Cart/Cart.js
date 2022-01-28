import React from "react";
import styles from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={styles.cartContainer}>
      <button className={styles.badge}>
        <p>3</p>
      </button>
    </div>
  );
};

export default Cart;
