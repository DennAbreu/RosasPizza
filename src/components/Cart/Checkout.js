import React, { useContext, useEffect, useRef, useState } from "react";
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
  const [isFormValid, setIsFormValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isStreetValid, setIsStreetValid] = useState(false);
  const [isCityValid, setIsCityValid] = useState(false);
  const [isStateValid, setIsStateValid] = useState(false);
  const [isZipCodeValid, setIsZipCodeValid] = useState(false);

  const nameValidCheck = () => {
    if (
      nameRef.current.value.trim().length > 0 &&
      isNaN(nameRef.current.value) === true
    ) {
      setIsNameValid(true);
    }
  };

  const emailValidCheck = () => {
    if (emailRef.current.value.includes("@")) {
      setIsEmailValid(true);
    }
  };

  const streetValidCheck = () => {
    if (streetRef.current.value.trim().length > 0) {
      setIsStreetValid(true);
    }
  };

  const cityValidCheck = () => {
    if (
      cityRef.current.value.trim().length > 0 &&
      isNaN(cityRef.current.value) === true
    ) {
      setIsCityValid(true);
    }
  };

  const stateValidCheck = () => {
    if (
      stateRef.current.value.trim().length > 0 &&
      isNaN(stateRef.current.value) === true
    ) {
      setIsStateValid(true);
    }
  };
  const zipCodeValidCheck = () => {
    if (
      zipCodeRef.current.value.trim().length === 5 &&
      isNaN(zipCodeRef.current.value) === false
    ) {
      setIsZipCodeValid(true);
    }
  };
  useEffect(() => {
    if (
      (isNameValid,
      isEmailValid,
      isStreetValid,
      isCityValid,
      isStateValid,
      isZipCodeValid === true)
    ) {
      setIsFormValid(true);
    }
  }, [
    isNameValid,
    isEmailValid,
    isStreetValid,
    isCityValid,
    isStateValid,
    isZipCodeValid,
  ]);

  const submitOrderHandler = async (event) => {
    event.preventDefault();
    if (isFormValid === false) {
      console.log("Form is invalid. No order!!!");
    } else {
      console.log(isFormValid);

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
    }
  };
  const clearAllHandler = () => {
    foodCtx.clearAll();
  };
  //TODO input type to email after testing
  return (
    <form>
      <div className={styles.formContainer}>
        <div className={styles.firstLine}>
          <label>Name</label>
          <input
            type="text"
            id="nameInput"
            ref={nameRef}
            onChange={nameValidCheck}
          ></input>
          <label className={styles.labelStyle}>Email</label>
          <input type="email" ref={emailRef} onChange={emailValidCheck}></input>
        </div>
        <div className={styles.secondLine}>
          <label className={styles.labelStyle}>Street</label>
          <input
            type="text"
            id="streetInput"
            ref={streetRef}
            onChange={streetValidCheck}
          ></input>
          <label className={styles.labelStyle}>City</label>
          <input
            type="text"
            id="cityInput"
            ref={cityRef}
            onChange={cityValidCheck}
          ></input>
          <label className={styles.labelStyle}>State</label>
          <input
            type="text"
            id="stateInput"
            ref={stateRef}
            maxLength="2"
            onChange={stateValidCheck}
          ></input>
          <label className={styles.labelStyle}>Zipcode</label>
          <input
            type="text"
            id="zipCodeInput"
            ref={zipCodeRef}
            minLength="5"
            maxLength="5"
            onChange={zipCodeValidCheck}
          ></input>
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
  );
};

export default Checkout;
