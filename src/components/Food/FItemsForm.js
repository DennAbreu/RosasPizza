import React, { useContext, useRef, useState } from "react";
import FoodContext from "../ctx/food-context";
import styles from "./FItemsForm.module.css";

const FItemsForm = (props) => {
  const fCtx = useContext(FoodContext);
  const instructionsRef = useRef();
  const qtyOrderedRef = useRef();
  const [currentPrice, setCurrentPrice] = useState(props.price);
  const [currentQty, setCurrentQty] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();

    const itemData = {
      id: props.id,
      name: props.name,
      individualPrice: props.individualPrice,
      qtyOrdered: currentQty,
      totalPrice: currentPrice,
      instructions: instructionsRef.current.value,
    };

    fCtx.addToCart(itemData);

    props.onClose();
    console.log("FItemsForm.js Object Produces:  ");
    console.log(itemData);
  };

  const priceHandler = () => {
    setCurrentPrice(+qtyOrderedRef.current.value * props.price);
    setCurrentQty(+qtyOrderedRef.current.value);
  };

  return (
    <div className={styles.fContainer}>
      <form className={styles.form}>
        <h1>{props.name}</h1>
        <section className={styles.secSpacing}>
          <label className={styles.skip}>Special Instructions</label>
          <textarea
            id="sInstructionsTxt"
            ref={instructionsRef}
            maxLength="90"
            placeholder="Add a note(extra sauce, no onions, etc...)"
          ></textarea>
        </section>
        <div className={styles.btnArea}>
          <input
            name="orderNum"
            type="number"
            min="1"
            defaultValue="1"
            max="10"
            step="1"
            ref={qtyOrderedRef}
            onChange={priceHandler}
          ></input>
          <button className={styles.orderBtn} onClick={submitHandler}>
            <span>Add to Order</span>
            <span>${currentPrice}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FItemsForm;
