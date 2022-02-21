import React from "react";
import CartBtn from "../Cart/CartBtn";
import rosasLogo from "../../assets/header2.png";
import rosasLogo2 from "../../assets/rpLogo.png";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.pImg} src={rosasLogo2} alt="lol" />
      <CartBtn onShowCart={props.onShowCart} />
    </div>
  );
};

export default Header;
