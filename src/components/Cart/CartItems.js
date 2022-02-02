import styles from "./CartItems.module.css";
const CartItems = (props) => {
  let retPrice = props.totalPrice;
  let retAmount = props.totalAmount;

  return (
    <div className={styles.container}>
      <span className={styles.mainSpan}>
        {props.name} <p>${retPrice}</p>
      </span>
      <span>
        <button>-</button>
        <input type="numbers" defaultValue={retAmount} />
        <button>+</button>
      </span>
    </div>
  );
};

export default CartItems;
