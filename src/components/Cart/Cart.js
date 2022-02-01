import React from "react";
import CartModal from "../UI/CartModal";
import CartContent from "./CartContent";

const Cart = (props) => {
  return (
    <CartModal onClose={props.onClose}>
      <CartContent />
    </CartModal>
  );
};

export default Cart;
