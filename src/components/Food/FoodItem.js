import React, { useState } from "react";
import styles from "./FoodItem.module.css";
import FoodOptions from "./FoodOptions";

const FoodItem = (props) => {
  const [activeModal, setActiveModal] = useState(false);

  const foodModalHandler = () => {
    setActiveModal((prevActiveModal) => !prevActiveModal);
    console.log("FoodModalHandler Clicked");
  };

  const returnListDisplay = (
    <li className={styles.foodItems}>
      <button onClick={foodModalHandler} className={styles.foodBtn}>
        <ul className={styles.innerItems}>
          <li>{props.name}</li>
          <li>${props.price}</li>
        </ul>
      </button>
    </li>
  );

  // console.log("FoodItem.js: " + props.id + " " + props.price);

  const returnFoodOptionModal = (
    <FoodOptions
      id={props.id}
      name={props.name}
      price={props.price}
      individualPrice={props.individualPrice}
      onClose={foodModalHandler}
    />
  );

  return (
    <div>
      {!activeModal && returnListDisplay}
      {activeModal && returnFoodOptionModal}
    </div>
  );
};

export default FoodItem;
