import React from "react";
import styles from "./NavButton.module.css";

const NavButton = (props) => {
  return (
    <li>
      <button className={styles.navBtn}>{props.category}</button>
    </li>
  );
};

export default NavButton;
