import React from "react";
import Cart from "../Cart/Cart";
import pepPizza from "../../assets/pepppizza.jpg";
// import rLogo from "../../assets/rosas_logo.png";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.pImg} src={pepPizza} alt="lol" />
      <Cart />
    </div>
  );
};

export default Header;
