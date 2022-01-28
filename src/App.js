import "./App.css";
import { useState } from "react";
import FoodOptions from "./components/Food/FoodOptions";
import Header from "./components/Layout/Header";
import NavBar from "./components/Layout/NavBar";
import DisplayFood from "./components/Food/DisplayFood";

function App() {
  const [fModalShowing, setFModalShowing] = useState(false);

  const showFoodModalHandler = () => {
    console.log("We accessed ShowFoodModalHandler");
    setFModalShowing(true);
  };

  const closeFoodModalHandler = () => {
    console.log("We accessed closeFoodModalHandler");
    setFModalShowing(false);
  };

  return (
    <div>
      <Header />
      <NavBar />
      <DisplayFood onClick={showFoodModalHandler} />
      {fModalShowing && <FoodOptions onClose={closeFoodModalHandler} />}
    </div>
  );
}

export default App;
