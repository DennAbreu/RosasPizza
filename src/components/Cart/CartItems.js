import { useState, useEffect, useContext } from "react";
import styles from "./CartItems.module.css";
import FoodContext from "../ctx/food-context";

const CartItems = (props) => {
  const foodCtx = useContext(FoodContext);
  const [currQty, setCurrQty] = useState(props.totalQty);
  const [currPrice, setCurrPrice] = useState(props.totalPrice);

  // const addQtyHandler = () => {
  //   setCurrQty((prevCurrQty) => prevCurrQty + 1);
  // };

  // const subtractQtyHandler = () => {
  //   setCurrQty((prevCurrQty) => prevCurrQty - 1);
  // };

  // const updateItemQtyHandler = () => {
  //   foodCtx.updateItemQty(props.id, currQty);
  // };

  // useEffect(() => {
  //   setCurrPrice(props.individualPrice * currQty);
  //   console.log("CurrQty:" + currQty);
  //   console.log("CurrPrice: " + currPrice);

  // }, [currQty, currPrice]);

  const testFun = () => {
    console.log("test");
  };

  return (
    <div className={styles.container}>
      <span className={styles.mainSpan}>
        {props.name} <p>${currPrice}</p>
      </span>
      <span>
        <input
          type="number"
          min="1"
          step="1"
          onChange={testFun}
          defaultValue={currQty}
        />
        <div>REMOVE</div>
      </span>
    </div>
  );
};

export default CartItems;
