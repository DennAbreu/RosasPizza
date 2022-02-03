import { useState, useEffect, useContext } from "react";
import styles from "./CartItems.module.css";
import FoodContext from "../ctx/food-context";

const CartItems = (props) => {
  const foodCtx = useContext(FoodContext);
  const [currQty, setCurrQty] = useState(props.totalQty);
  const [currPrice, setCurrPrice] = useState(props.totalPrice);
  // const [totalCart, setTotalCart] = useState();

  const addAmtHandler = () => {
    setCurrQty((prevCurrQty) => prevCurrQty + 1);
  };

  const subtractAmtHandler = () => {
    setCurrQty((prevCurrQty) => prevCurrQty - 1);
  };
  useEffect(() => {
    setCurrPrice(props.individualPrice * currQty);
  }, [props.individualPrice, currQty]);

  return (
    <div className={styles.container}>
      <span className={styles.mainSpan}>
        {props.name} <p>${currPrice}</p>
      </span>
      <span>
        <button onClick={subtractAmtHandler}>-</button>
        <input type="numbers" value={currQty} />
        <button onClick={addAmtHandler}>+</button>
        <div>REMOVE</div>
      </span>
    </div>
  );
};

export default CartItems;
