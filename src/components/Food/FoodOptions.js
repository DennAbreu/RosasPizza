import { Fragment } from "react";
import FoodModal from "./../UI/FoodModal";
import FItemsForm from "./FItemsForm";

const FoodOptions = (props) => {
  //   const [isActive, setIsActive] = useState(false);

  const foodModalContent = (
    <Fragment>
      <FItemsForm onClose={props.onClose} />
    </Fragment>
  );

  return <FoodModal onClose={props.onClose}>{foodModalContent}</FoodModal>;
};

export default FoodOptions;
