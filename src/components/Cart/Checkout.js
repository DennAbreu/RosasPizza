import React, { useContext, useRef } from "react";
import FoodContext from "../ctx/food-context";

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
    <div>
      <form>
        <div>
          <label>Name</label>
          <input type="text" ref={nameRef}></input>
          <label>Email</label>
          <input type="email" ref={emailRef}></input>
        </div>
        <div>
          <label>Street</label>
          <input type="text" ref={streetRef}></input>
          <label>City</label>
          <input type="text" ref={cityRef}></input>
          <label>State</label>
          <input type="text" ref={stateRef}></input>
          <label>Zipcode</label>
          <input type="text" ref={zipCodeRef}></input>
        </div>
        <div>
          <button onClick={clearAllHandler}>Clear All</button>
          <button onClick={submitOrderHandler}>Submit Order</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
