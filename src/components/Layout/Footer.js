import React from "react";
import Card from "../UI/Card";
import styles from "./Footer.module.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import yelp from "../../assets/yelp.png";

const Footer = (props) => {
  return (
    <Card>
      <div className={styles.footer}>
        <span>
          <img
            className={styles.socialmedia}
            src={instagram}
            alt="instagram icon"
          />
        </span>
        <span>
          <img
            className={styles.socialmedia}
            src={facebook}
            alt="facebook icon"
          />
        </span>
        <span>
          <img className={styles.socialmedia} src={yelp} alt="yelp icon" />
        </span>
      </div>
    </Card>
  );
};

export default Footer;
