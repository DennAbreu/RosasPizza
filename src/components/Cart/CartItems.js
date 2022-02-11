import { useState, useContext, useRef, useEffect } from "react";
import styles from "./CartItems.module.css";
import FoodContext from "../ctx/food-context";

const CartItems = (props) => {
  const foodCtx = useContext(FoodContext);
  const qtyRefHandler = useRef();
  const [currPrice, setCurrPrice] = useState(props.totalPrice);
  const [currQty, setCurrQty] = useState(props.totalQty);

  const removeHandler = () => {
    foodCtx.removeFromCart(props.id);
  };

  const qtyOrderChangeHandler = () => {
    setCurrQty(qtyRefHandler.current.value);
    foodCtx.updateItemQty(props.id, qtyRefHandler.current.value);
    // console.log(qtyRefHandler.current.value);
  };

  const addToQtyBtn = () => {
    let updatedVal = +qtyRefHandler.current.value + 1;
    if (updatedVal > 10) {
      updatedVal = 10;
    }
    setCurrQty(updatedVal);
    foodCtx.updateItemQty(props.id, updatedVal);
  };

  const subFromQtyBtn = () => {
    let updatedVal = +qtyRefHandler.current.value - 1;
    if (updatedVal < 0) {
      updatedVal = 0;
    }
    setCurrQty(updatedVal);
    foodCtx.updateItemQty(props.id, updatedVal);
  };

  useEffect(() => {
    setCurrPrice(currQty * props.individualPrice);
    // console.log(currPrice);
  }, [currPrice, props.individualPrice, currQty]);

  return (
    <div className={styles.container}>
      <span className={styles.mainSpan}>
        <div className={styles.itemName}>{props.name}</div>
        <div>${currPrice.toFixed(2)}</div>
        <div className={styles.instructionsDiv}>{props.instructions}</div>
      </span>
      <div className={styles.rightSide}>
        <div className={styles.numInputContent}>
          <button
            className={`${styles.cartBtn_plusminus}`}
            onClick={subFromQtyBtn}
          >
            -
          </button>
          {/* <span>x{props.totalQty}</span> */}
          <input
            type="text"
            ref={qtyRefHandler}
            onChange={qtyOrderChangeHandler}
            defaultValue={props.totalQty}
          />
          <button
            className={`${styles.cartBtn_plusminus}`}
            onClick={addToQtyBtn}
          >
            +
          </button>
        </div>
        <div className={styles.removeBtnContainer}>
          <button className={styles.cartBtn} onClick={removeHandler}>
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
