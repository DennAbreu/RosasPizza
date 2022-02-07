import { useState, useContext, useRef } from "react";
import styles from "./CartItems.module.css";
import FoodContext from "../ctx/food-context";

const CartItems = (props) => {
  // const foodCtx = useContext(FoodContext);
  // const qtyRef = useRef();
  const [currPrice, setCurrPrice] = useState(props.totalPrice);
  // const [currQty, setCurrQty] = useState(props.totalQty);

  // const updateItemQtyHandler = (num) => {
  //   foodCtx.updateItemQty(props.id, num);
  // };

  // const onChangeHandler = (event) => {
  //   let currQty = event.target.value;
  //   setCurrPrice(props.individualPrice * currQty);
  //   console.log(event.target.value);
  //   console.log("CurrPrice: " + currPrice);
  //   console.log("CurrQty: " + event.target.value);
  // };

  return (
    <div className={styles.container}>
      <span className={styles.mainSpan}>
        {props.name}
        <div>${currPrice}</div>
      </span>
      <div className={styles.numInput}>
        <span>x{props.totalQty}</span>
        {/* <input
          className={styles.numInputBox}
          ref={qtyRef}
          type="number"
          min="1"
          max="10"
          step="1"
          onChange={onChangeHandler}
          defaultValue={props.totalQty}
        /> */}
        <div>
          <button>REMOVE</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
