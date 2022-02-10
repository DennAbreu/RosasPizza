import React from "react";
import CartBtn from "../Cart/CartBtn";
import rosasLogo from "../../assets/rosasPizza_headerImg.png";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.pImg} src={rosasLogo} alt="lol" />
      <CartBtn onShowCart={props.onShowCart} />
    </div>
  );
};

export default Header;
