import React from "react";
import styles from "./NavButton.module.css";

const NavButton = (props) => {
  let hrefPointer = "#" + props.category.toString();
  return (
    <li>
      <a href={hrefPointer}>
        <button className={styles.navBtn}>{props.category}</button>
      </a>
    </li>
  );
};

export default NavButton;
