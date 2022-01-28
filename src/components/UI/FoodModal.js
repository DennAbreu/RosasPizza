import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./FoodModal.module.css";

const FoodModal = (props) => {
  const portalElement = document.getElementById("foodModal");

  const BackOverlay = (props) => {
    return <div onClick={props.onClose} className={styles.backdrop} />;
  };
  const FoodModalOverlay = (props) => {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
      </div>
    );
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackOverlay onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <FoodModalOverlay>{props.children}</FoodModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default FoodModal;
