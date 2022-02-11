import React from "react";
import NavButton from "./NavButton";

import styles from "./NavBar.module.css";

const R_CATEGORIES = [
  "Round Pies",
  "Sicilian Pies",
  "Sauce",
  "Heros",
  "Salads",
  "Pasta",
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
