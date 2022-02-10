import React from "react";
import Card from "../UI/Card";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <Card>
      <div className={styles.footer}>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Yelp</p>
      </div>
    </Card>
  );
};

export default Footer;
