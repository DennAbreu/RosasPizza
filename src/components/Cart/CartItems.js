import { useState, useContext, useRef } from "react";
import styles from "./CartItems.module.css";
import FoodContext from "../ctx/food-context";

const CartItems = (props) => {
  const foodCtx = useContext(FoodContext);
  const qtyRef = useRef();
  const [currPrice, setCurrPrice] = useState(props.totalPrice);
  const [currQty, setCurrQty] = useState(props.totalQty);

  // const addQtyHandler = () => {
  //   setCurrQty((prevCurrQty) => prevCurrQty + 1);
  // };

  // const subtractQtyHandler = () => {
  //   setCurrQty((prevCurrQty) => prevCurrQty - 1);
  // };

  const updateItemQtyHandler = (event) => {
    foodCtx.updateItemQty(props.id, qtyRef.current.value);
  };

  // useEffect(() => {
  //   setCurrPrice(props.individualPrice * currQty);
  //   console.log("CurrQty:" + currQty);
  //   console.log("CurrPrice: " + currPrice);

  // }, [currQty, currPrice]);

  const testFun = (event) => {
    event.preventDefault();
    console.log("test");
    console.log(qtyRef.current.value);
    setCurrPrice(event.target.value * props.individualPrice);
    setCurrQty(qtyRef.current.value);
    updateItemQtyHandler();
  };

  return (
    <div className={styles.container}>
      <span className={styles.mainSpan}>
        {props.name}
        <div>${currPrice}</div>
      </span>
      <div className={styles.numInput}>
        <input
          className={styles.numInputBox}
          ref={qtyRef}
          type="number"
          min="1"
          max="10"
          defaultValue={currQty}
        />
        <div>
          <button>REMOVE</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
