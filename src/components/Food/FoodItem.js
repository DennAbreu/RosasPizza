import React from "react";

import styles from "./FoodItem.module.css";

const FoodItem = (props) => {
  const compiledData = {
    name: props.name,
    price: props.price,
  };
  return (
    <li className={styles.foodItems}>
      <button onClick={props.onClick} className={styles.foodBtn}>
        <ul className={styles.innerItems}>
          <li>{props.name}</li>
          <li>${props.price}</li>
        </ul>
      </button>
    </li>
  );
};

export default FoodItem;
