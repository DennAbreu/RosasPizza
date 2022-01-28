import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import FoodItem from "./FoodItem";

import styles from "./DisplayFood.module.css";

const DisplayFood = (props) => {
  const [pizzaItems, setPizzaItems] = useState([]);
  useEffect(() => {
    const fetchPizza = async () => {
      const response = await fetch(
        "https://react-http-51111-default-rtdb.firebaseio.com/pizzaItems.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong in Fetch request...");
      }

      const responseData = await response.json();
      const loadedPizza = [];

      for (const key in responseData) {
        loadedPizza.push({
          key: key,
          name: responseData[key].name,
          price: responseData[key].price,
        });
      }
      setPizzaItems(loadedPizza);
    }; //end fetch pizza

    fetchPizza().catch((error) => {
      return;
    });
  }, []);

  const pizzaList = pizzaItems.map((pItem) => (
    <FoodItem
      key={pItem.key}
      name={pItem.name}
      price={pItem.price}
      onClick={props.onClick}
      onClose={props.onClose}
    />
  ));

  return (
    <Card>
      <div>
        <ul className={styles.ulContainer}>{pizzaList}</ul>
      </div>
    </Card>
  );
};

export default DisplayFood;