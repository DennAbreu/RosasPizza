import React from "react";
import NavButton from "./NavButton";

import styles from "./NavBar.module.css";
/*
Round Pies, Sicilian Pies,Sauce, Heroes, Salads, Pasta dishes, Dinner Specials, Specialities, Beverages : 9 Buttons
*/
const R_CATEGORIES = [
  "Round Pies",
  "Sicilian Pies",
  "Sauce",
  "Heroes",
  "Salads",
  "Pasta ",
  "Dinner",
  "Specialties",
  "Beverages",
];

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <ul>
        {R_CATEGORIES.map((category) => (
          <NavButton key={Math.random()} category={category}></NavButton>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
