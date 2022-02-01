import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./FoodModal.module.css";

const CartModal = (props) => {
  const portalElement = document.getElementById("cartModal");

  const CartBackOverlay = (props) => {
    return <div onClick={props.onClose} className={styles.backdrop} />;
  };
  const CartModalOverlay = (props) => {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
      </div>
    );
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <CartBackOverlay onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <CartModalOverlay>{props.children}</CartModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default CartModal;
