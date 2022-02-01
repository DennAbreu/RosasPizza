import React from "react";
import CartBtn from "../Cart/CartBtn";
import pepPizza from "../../assets/pepppizza.jpg";
// import rLogo from "../../assets/rosas_logo.png";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.pImg} src={pepPizza} alt="lol" />
      <CartBtn onShowCart={props.onShowCart} />
    </div>
  );
};

export default Header;
