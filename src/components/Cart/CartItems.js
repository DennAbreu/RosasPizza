import { useState, useEffect } from "react";
import styles from "./CartItems.module.css";
// import FoodContext from "../ctx/food-context";

const CartItems = (props) => {
  const [currAmt, setCurrAmt] = useState(props.totalAmount);
  const [currPrice, setCurrPrice] = useState(props.totalPrice);

  const addValueHandler = () => {
    setCurrAmt((prevCurrAmt) => prevCurrAmt + 1);
  };

  const subtractValueHandler = () => {
    setCurrAmt((prevCurrAmt) => prevCurrAmt - 1);
  };
  useEffect(() => {
    setCurrPrice(props.individualPrice * currAmt);
  }, [props.individualPrice, currAmt]);

  return (
    <div className={styles.container}>
      <span className={styles.mainSpan}>
        {props.name} <p>${currPrice}</p>
      </span>
      <span>
        <button onClick={subtractValueHandler}>-</button>
        <input type="numbers" value={currAmt} />
        <button onClick={addValueHandler}>+</button>
        <div>REMOVE</div>
      </span>
    </div>
  );
};

export default CartItems;
