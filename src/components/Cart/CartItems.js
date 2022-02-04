import { useState, useEffect, useContext, useRef } from "react";
import styles from "./CartItems.module.css";
import FoodContext from "../ctx/food-context";

const CartItems = (props) => {
  const foodCtx = useContext(FoodContext);
  const qtyRef = useRef();
  const [currPrice, setCurrPrice] = useState(props.totalPrice);

  // const addQtyHandler = () => {
  //   setCurrQty((prevCurrQty) => prevCurrQty + 1);
  // };

  // const subtractQtyHandler = () => {
  //   setCurrQty((prevCurrQty) => prevCurrQty - 1);
  // };

  const updateItemQtyHandler = () => {
    foodCtx.updateItemQty(props.id, qtyRef.current.value);
  };

  // useEffect(() => {
  //   setCurrPrice(props.individualPrice * currQty);
  //   console.log("CurrQty:" + currQty);
  //   console.log("CurrPrice: " + currPrice);

  // }, [currQty, currPrice]);

  const testFun = (event) => {
    console.log("test");
    setCurrPrice(event.target.value * props.individualPrice);
    updateItemQtyHandler();
  };

  return (
    <div className={styles.container}>
      <span className={styles.mainSpan}>
        {props.name} <p>${currPrice}</p>
      </span>
      <span>
        <input
          ref={qtyRef}
          type="number"
          min="0"
          max="10"
          step="1"
          onChange={testFun}
          defaultValue={props.totalQty}
        />
        <div>REMOVE</div>
      </span>
    </div>
  );
};

export default CartItems;
