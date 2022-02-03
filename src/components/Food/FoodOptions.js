import { Fragment } from "react";
import FoodModal from "./../UI/FoodModal";
import FItemsForm from "./FItemsForm";

const FoodOptions = (props) => {
  const foodModalContent = (
    <Fragment>
      <FItemsForm
        id={props.id}
        name={props.name}
        individualPrice={props.price}
        price={props.price}
        onClose={props.onClose}
      />
    </Fragment>
  );

  return <FoodModal onClose={props.onClose}>{foodModalContent}</FoodModal>;
};

export default FoodOptions;
