import React, { useRef, useState } from "react";

import styles from "./FItemsForm.module.css";

const FItemsForm = (props) => {
  const enteredOptionRef = useRef();
  const enteredInstructionsRef = useRef();
  const amountOrderedRef = useRef();

  const [currentPrice, setCurrentPrice] = useState();

  let largePrice = props.price + 3;

  const submitTestInfo = (event) => {
    event.preventDefault();

    const itemData = {
      name: props.name,
      option: enteredOptionRef.current.value,
      instructions: enteredInstructionsRef.current.value,
      amountOrdered: amountOrderedRef.current.value,
      totalPrice:
        amountOrderedRef.current.value * enteredOptionRef.current.value,
    };

    props.onClose();
    console.log(itemData);
  };

  const priceHandler = () => {
    setCurrentPrice(
      amountOrderedRef.current.value * enteredOptionRef.current.value
    );
  };

  return (
    <div className={styles.fContainer}>
      <form className={styles.form}>
        <h1>{props.name}</h1>
        <section className={styles.secSpacing}>
          Options(Pick One)
          <section>
            <input
              name="options"
              type="radio"
              id="small"
              value={props.price}
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
              ref={enteredOptionRef}
            />
            <label htmlFor="large">Large</label>
            <span> ${largePrice}</span>
          </section>
        </section>
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
          <button onClick={submitTestInfo}>
            Add to Order
            <span> ${currentPrice}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FItemsForm;
