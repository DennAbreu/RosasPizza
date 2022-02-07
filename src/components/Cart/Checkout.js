import React, { useContext, useRef } from "react";
import { nativeTouchData } from "react-dom/cjs/react-dom-test-utils.production.min";
import FoodContext from "../ctx/food-context";

const Checkout = (props) => {
  const foodCtx = useContext(FoodContext);
  const nameRef = useRef();
  const emailRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const zipCodeRef = useRef();

  const submitOrderHandler = (event) => {
    event.preventDefault();
    const orderData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      street: streetRef.current.value,
      city: cityRef.current.value,
      zipCode: zipCodeRef.current.value,
      order: foodCtx.items,
    };

    const submitOrderToDatabase = async (data) => {
      const orderJson = JSON.stringify(data);

      const response = await fetch(
        "https://react-http-51111-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: orderJson,
          headers: {
            "Content-type": "application/json",
          },
        }
      ); //end fetch

      if (!response.ok) {
        throw new Error("Something went wrong with the Fetch request");
      }

      submitOrderToDatabase().catch((error) => {
        return;
      });
    }; //end submitOrderToDatabase

    submitOrderToDatabase(orderData);
    props.orderSubmitted(true);
  };

  const clearAllHandler = (event) => {
    event.preventDefault();
  };
  //TODO input type to email after testing
  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input type="text" ref={nameRef}></input>
          <label>Email</label>
          <input type="text" ref={emailRef}></input>
        </div>
        <div>
          <label>Street</label>
          <input type="text" ref={streetRef}></input>
          <label>City</label>
          <input type="text" ref={cityRef}></input>
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
