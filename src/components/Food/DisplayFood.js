import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import FoodItem from "./FoodItem";

import styles from "./DisplayFood.module.css";

const DisplayFood = (props) => {
  const roundPiesList = [],
    sicilianPiesList = [],
    sauceList = [],
    herosList = [],
    saladsList = [],
    pastaList = [],
    dinnerList = [],
    specialtiesList = [],
    beveragesList = [];

  const [pizzaItems, setPizzaItems] = useState([]);
  useEffect(() => {
    const fetchPizza = async () => {
      const response = await fetch(
        "https://react-http-51111-default-rtdb.firebaseio.com/pizzaItems.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong with the Fetch request...");
      }

      const responseData = await response.json();
      const loadedPizza = [];

      for (const key in responseData) {
        loadedPizza.push({
          name: responseData[key].name,
          price: responseData[key].price,
          category: responseData[key].category,
        });
      }
      setPizzaItems(loadedPizza);
    }; //end fetch pizza

    fetchPizza().catch((error) => {
      return;
    });
  }, []);

  // const pizzaList = pizzaItems.map((pItem) => (
  //   <FoodItem
  //     key={Math.random()}
  //     id={pItem.name}
  //     name={pItem.name}
  //     category={pItem.category}
  //     price={pItem.price}
  //     onClick={props.onClick}
  //     onClose={props.onClose}
  //   />
  // ));
  // console.log("DisplayFood.js:");
  // console.log(pizzaItems);

  const splitPizzaItems = () => {
    for (let index in pizzaItems) {
      switch (pizzaItems[index].category) {
        case "Round Pies":
          roundPiesList.push(pizzaItems[index]);
          break;
        case "Sicilian Pies":
          sicilianPiesList.push(pizzaItems[index]);
          break;
        case "Sauce":
          sauceList.push(pizzaItems[index]);
          break;
        case "Heros":
          herosList.push(pizzaItems[index]);
          break;
        case "Salads":
          saladsList.push(pizzaItems[index]);
          break;
        case "Pasta":
          pastaList.push(pizzaItems[index]);
          break;
        case "Dinner":
          dinnerList.push(pizzaItems[index]);
          break;
        case "Specialties":
          specialtiesList.push(pizzaItems[index]);
          break;
        case "Beverages":
          beveragesList.push(pizzaItems[index]);
          break;
        default:
      } //end switch
    } //end for
  };
  splitPizzaItems();
  const retRoundPiesList = roundPiesList.map((x) => (
    <FoodItem
      key={Math.random()}
      id={x.name}
      name={x.name}
      category={x.category}
      price={x.price}
      onClick={props.onClick}
      onClose={props.onClose}
    />
  ));
  const retSicilianList = sicilianPiesList.map((x) => (
    <FoodItem
      key={Math.random()}
      id={x.name}
      name={x.name}
      category={x.category}
      price={x.price}
      onClick={props.onClick}
      onClose={props.onClose}
    />
  ));

  const retSauceList = sauceList.map((x) => (
    <FoodItem
      key={Math.random()}
      id={x.name}
      name={x.name}
      category={x.category}
      price={x.price}
      onClick={props.onClick}
      onClose={props.onClose}
    />
  ));

  const retHerosList = herosList.map((x) => (
    <FoodItem
      key={Math.random()}
      id={x.name}
      name={x.name}
      category={x.category}
      price={x.price}
      onClick={props.onClick}
      onClose={props.onClose}
    />
  ));

  const retSaladsList = saladsList.map((x) => (
    <FoodItem
      key={Math.random()}
      id={x.name}
      name={x.name}
      category={x.category}
      price={x.price}
      onClick={props.onClick}
      onClose={props.onClose}
    />
  ));

  const retPastaList = pastaList.map((x) => (
    <FoodItem
      key={Math.random()}
      id={x.name}
      name={x.name}
      category={x.category}
      price={x.price}
      onClick={props.onClick}
      onClose={props.onClose}
    />
  ));

  const retDinnerList = dinnerList.map((x) => (
    <FoodItem
      key={Math.random()}
      id={x.name}
      name={x.name}
      category={x.category}
      price={x.price}
      onClick={props.onClick}
      onClose={props.onClose}
    />
  ));

  const retSpecialtiesList = specialtiesList.map((x) => (
    <FoodItem
      key={Math.random()}
      id={x.name}
      name={x.name}
      category={x.category}
      price={x.price}
      onClick={props.onClick}
      onClose={props.onClose}
    />
  ));

  const retBeveragesList = beveragesList.map((x) => (
    <FoodItem
      key={Math.random()}
      id={x.name}
      name={x.name}
      category={x.category}
      price={x.price}
      onClick={props.onClick}
      onClose={props.onClose}
    />
  ));

  return (
    <Card>
      <div>
        <h2 id="Round Pies">Round Pies</h2>
        <ul className={styles.ulContainer}>{retRoundPiesList}</ul>
        <h2 id="Sicilian Pies">Sicilian Pies</h2>
        <ul className={styles.ulContainer}>{retSicilianList}</ul>
        <h2 id="Sauce">Sauce</h2>
        <ul className={styles.ulContainer}>{retSauceList}</ul>
        <h2 id="Heros">Heros</h2>
        <ul className={styles.ulContainer}>{retHerosList}</ul>
        <h2 id="Salads">Salads</h2>
        <ul className={styles.ulContainer}>{retSaladsList}</ul>
        <h2 id="Pasta">Pasta</h2>
        <ul className={styles.ulContainer}>{retPastaList}</ul>
        <h2 id="Dinner">Dinner</h2>
        <ul className={styles.ulContainer}>{retDinnerList}</ul>
        <h2 id="Specialties">Specialties</h2>
        <ul className={styles.ulContainer}>{retSpecialtiesList}</ul>
        <h2 id="Beverages">Beverages</h2>
        <ul className={styles.ulContainer}>{retBeveragesList}</ul>
      </div>
    </Card>
  );
};

export default DisplayFood;
