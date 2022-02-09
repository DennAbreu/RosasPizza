import React, { Fragment, useContext, useRef } from "react";
import FoodContext from "../ctx/food-context";
import styles from "./Checkout.module.css";

const Checkout = (props) => {
  const foodCtx = useContext(FoodContext);
  const nameRef = useRef();
  const emailRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipCodeRef = useRef();

  const submitOrderHandler = async (event) => {
    event.preventDefault();
    const orderData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      street: streetRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      zipCode: zipCodeRef.current.value,
      order: foodCtx.items,
    }; //end orderData

    const response = await fetch(
      "https://react-http-51111-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify(orderData),
      }
    ); //end fetch

    if (!response.ok) {
      throw new Error("Something went wrong with the Fetch request");
    }
    submitOrderHandler().catch((error) => {
      return;
    });

    props.orderSubmitted(true);
    foodCtx.clearAll();
  };

  const clearAllHandler = () => {
    foodCtx.clearAll();
  };
  //TODO input type to email after testing
  return (
    <Fragment>
      <form>
        <div className={styles.formContainer}>
          <div className={styles.firstLine}>
            <label>Name</label>
            <input type="text" id="nameInput" ref={nameRef}></input>
            <label className={styles.labelStyle}>Email</label>
            <input type="email" ref={emailRef}></input>
          </div>
          <div className={styles.secondLine}>
            <label className={styles.labelStyle}>Street</label>
            <input type="text" id="streetInput" ref={streetRef}></input>
            <label className={styles.labelStyle}>City</label>
            <input type="text" ref={cityRef}></input>
            <label className={styles.labelStyle}>State</label>
            <input type="text" ref={stateRef} maxLength="2"></input>
            <label className={styles.labelStyle}>Zipcode</label>
            <input type="text" ref={zipCodeRef} maxLength="5"></input>
          </div>
        </div>
        <div className={styles.btnContainers}>
          <button className={styles.cartBtn} onClick={clearAllHandler}>
            Clear All
          </button>
          <button className={styles.cartBtn} onClick={submitOrderHandler}>
            Submit Order
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Checkout;
