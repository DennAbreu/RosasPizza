import React, { useContext } from "react";
import FoodContext from "../ctx/food-context";

const Checkout = (props) => {
  const foodCtx = useContext(FoodContext);

  //   const submitOrderHandler=(event)=>{
  //       event.preventDefault();

  //       const totalOrder ={
  //           items: foodCtx.items,
  //           totalQty: foodCtx.totalQty,
  //           cartTotal: foodCtx.cartTotal
  //       }
  //   }
  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input type="text"></input>
          <label>Email</label>
          <input type="email"></input>
        </div>
        <div>
          <label>Street</label>
          <input type="text"></input>
        </div>
        <label>City</label>
        <input type="text"></input>
        <label>Zipcode</label>
        <input type="text"></input>
        <div>
          <button>Cancel</button>
          <button>Order</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
