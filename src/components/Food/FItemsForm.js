import React, { useContext, useRef, useState } from "react";
import FoodContext from "../ctx/food-context";

import styles from "./FItemsForm.module.css";

const FItemsForm = (props) => {
  const fCtx = useContext(FoodContext);
  const enteredInstructionsRef = useRef();
  const amountOrderedRef = useRef();
  const [currentPrice, setCurrentPrice] = useState(props.price);
  const [currentAmount, setCurrentAmount] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();

    const itemData = {
      id: props.id,
      name: props.name,
      individualPrice: props.price,
      amountOrdered: currentAmount,
      totalPrice: currentPrice,

      //amountOrdered: amountOrderedRef.current.value,
      //amountOrderedRef.current.value * props.price
    };

    fCtx.addToCart(itemData);

    props.onClose();
    console.log("FItemsForm.js Object Produces:  ");
    console.log(itemData);
  };

  const priceHandler = () => {
    setCurrentPrice(+amountOrderedRef.current.value * props.price);
    setCurrentAmount(+amountOrderedRef.current.value);
  };

  return (
    <div className={styles.fContainer}>
      <form className={styles.form}>
        <h1>{props.name}</h1>

        {/* <section className={styles.secSpacing}>
          Options(Pick One)
          <section>
            <input
              name="options"
              type="radio"
              id="small"
              value={props.price}
              onChange={selectedHandler}
              ref={enteredOptionRef}
            />
            <label htmlFor="small">Small</label>
            <span> ${props.price}</span>
          </section>
          <section>
            <input
              name="options"
              type="radio"
              id="large"
              value={largePrice}
              onChange={selectedHandler}
              ref={enteredOptionRef}
            />
            <label htmlFor="large">Large</label>
            <span> ${largePrice}</span>
          </section>
        </section> */}
        <section className={styles.secSpacing}>
          <label className={styles.skip}>Special Instructions</label>
          <textarea
            id="sInstructionsTxt"
            ref={enteredInstructionsRef}
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
            ref={amountOrderedRef}
            onChange={priceHandler}
          ></input>
          <span> ${currentPrice}</span>
          <button onClick={submitHandler}>Add to Order</button>
        </div>
      </form>
    </div>
  );
};

export default FItemsForm;
