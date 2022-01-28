import React, { useRef } from "react";

import styles from "./FItemsForm.module.css";

const FItemsForm = (props) => {
  const enteredOption = useRef();
  const enteredInstructions = useRef();
  const amountOrdered = useRef();

  /* TODO:
  -Pass props to this component so we know item name + price + options
  -Calculate amountOrdered * item price so we know 'finalp rice' to pass along
   
  */

  const submitTestInfo = (event) => {
    const itemData = {
      option: enteredOption.current.value,
      instructions: enteredInstructions.current.value,
      amountOrdered: amountOrdered.current.value,
    };
    event.preventDefault();
    props.onClose();

    console.log("FItemsForm");
    console.log(itemData);
  };
  return (
    <div className={styles.fContainer}>
      <form className={styles.form}>
        <h1>Name</h1>
        <section className={styles.secSpacing}>
          Options(Pick One)
          <section>
            <input
              name="options"
              type="radio"
              id="small"
              value="small"
              ref={enteredOption}
            />
            <label htmlFor="small">Small</label>
          </section>
          <section>
            <input name="options" type="radio" id="large" value="large" />
            <label htmlFor="large">Large</label>
          </section>
        </section>
        <section className={styles.secSpacing}>
          <label className={styles.skip}>Special Instructions</label>
          <textarea
            id="sInstructionsTxt"
            ref={enteredInstructions}
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
            ref={amountOrdered}
          ></input>
          <button onClick={submitTestInfo}>Add</button>
        </div>
      </form>
    </div>
  );
};

export default FItemsForm;
